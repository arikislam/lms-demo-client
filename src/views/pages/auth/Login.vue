<template>
  <auth-layout>
    <div class="access__form__block">
      <h2 class="access__form__title">Login</h2>
      <form @submit.prevent="" class="access__form">
        <div class="form__group">
          <input type="text" class="form__control" v-model="form.email" placeholder="Email">
          <error-message :message="errorMessages.email"></error-message>

        </div>
        <div class="form__group">
          <input type="password" class="form__control" placeholder="Password*" v-model="form.password">
          <error-message :message="errorMessages.password"></error-message>

        </div>
       <submit-button
           :loading="loading"
           loading-text="requesting"
           :block="true"
           :click="login"
       >Log In</submit-button>
      </form>
      <div class="alternate__access__wrap">
        <p class="alternate__access">Don’t have an account? <router-link :to="{name:'register'}"> Register </router-link></p>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import {emptyErrorMessages, serializeValidationMessage, successNotification} from "@/app/extra/helper";

const AuthLayout = defineAsyncComponent(() => import('@/views/layouts/AuthLayout'))
import {postUserLogin} from "@/app/api/auth.api";
import {USER_LOGGED_IN} from "@/app/constants/action-type";
import {mapActions} from "vuex";

export default {
  name: "PublicLogin",
  components: {AuthLayout},
  setup() {
    // Get toast interface

  },
  data() {
    return {
      loading:false,
      errorMessages: {
        email: '',
        password: ''
      },
      form: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    ...mapActions([USER_LOGGED_IN]),
    login() {
      this.loading = true;
      this.errorMessages = emptyErrorMessages(this.errorMessages);
      postUserLogin(this.form)
          .then(({data: {data, message}}) => {
            this[USER_LOGGED_IN](data);
            successNotification(message);
            if(data.isAdmin) {
              this.$router.push({name: 'admin.index'})
            } else {
              this.$router.push({name: 'customer.courses'})
            }

          })
          .catch((error) => {
            let {response: {status, data: {message}}} = error
            if (status && status === 422) {
              this.errorMessages = serializeValidationMessage(message);
            } else {
              console.log(error);
              console.log('other errors');
            }

          }).finally(() => {
        this.loading = false;
      });
    },
  },
  mounted() {
    console.log(process.env.VUE_APP_BACKEND_URL);
  }
}
</script>

<style scoped>

</style>