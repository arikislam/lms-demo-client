<template>
  <auth-layout>
    <div class="access__form__block">
      <h2 class="access__form__title">Register</h2>
      <form action="#" class="access__form">
        <div class="form__group">
          <input type="text" class="form__control" placeholder="Full Name">
        </div>
        <div class="form__group">
          <input type="email" class="form__control" placeholder="Email Address">
        </div>
        <div class="form__group">
          <input type="password" class="form__control" placeholder="Password*">
        </div>
        <div class="form__group">
          <input type="password" class="form__control" placeholder="Confirm Password*">
        </div>
        <button class="button button__themeColor button__block">Register</button>
      </form>
      <div class="alternate__access__wrap">
        <p class="alternate__access">Don’t have an account?  <router-link :to="{name:'login'}">Log In</router-link></p>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const AuthLayout = defineAsyncComponent(() => import('@/views/layouts/AuthLayout'))

export default {
  name: "PublicRegister",
  components: {AuthLayout}
}
</script>

<style scoped>

</style>