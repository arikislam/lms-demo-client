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
        >Log In
        </submit-button>
      </form>
      <div class="alternate__access__wrap">
        <!--        <p class="alternate__access">Don’t have an account? <router-link :to="{name:'register'}"> Register </router-link></p>-->
      </div>
    </div>
  </auth-layout>
</template>

<script>
export default {
  name: "PublicLogin",
}
</script>

<script setup>

import {defineAsyncComponent, ref} from 'vue'
import {emptyErrorMessages, serializeValidationMessage, successNotification} from "@/app/extra/helper";

const AuthLayout = defineAsyncComponent(() => import('@/views/layouts/AuthLayout'))
import {postUserLogin} from "@/app/api/auth.api";
import {USER_LOGGED_IN} from "@/app/constants/action-type";
import {useRouter} from "vue-router";
import {useStore} from "vuex";


let loading = false
let errorMessages = ref({email: '', password: ''})
let form = ref({email: '', password: ''})
const router = useRouter()
const store = useStore()


const login = () => {
  loading = true;
  errorMessages.value = emptyErrorMessages(errorMessages.value);
  postUserLogin(form.value)
      .then(({data: {data, message}}) => {
        store.dispatch(USER_LOGGED_IN, data);
        successNotification(message);
        if (data.isAdmin) {
          router.push({name: 'admin.home'})
        } else {
          router.push({name: 'customer.courses'})
        }
      })
      .catch((error) => {
        let {response: {status, data: {message}}} = error
        if (status && status === 422) {
          errorMessages.value = serializeValidationMessage(message);
        } else {
          console.log(error);
          console.log('other errors');
        }

      }).finally(() => {
    loading = false;

  });
}
console.log('Outside ', errorMessages.value);
</script>

<style scoped>

</style>