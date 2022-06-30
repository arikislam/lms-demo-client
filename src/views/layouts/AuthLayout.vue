<template>
  <div class="template__wrapper template__wrapper--flex">
    <div class="access__form__area">
      <div class="access__header">
        <div class="site__logo">
          <router-link :to="{name: 'admin.home'}"><img src="/assets/img/logo-black.svg" alt="LMS"></router-link>
        </div>
      </div>
      <slot></slot>
    </div>
    <div class="access__thumb__area background__themeColor">
      <img src="/assets/img/thumb.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout"
}
</script>

<style scoped>

</style>