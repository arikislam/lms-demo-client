<template>
  <admin-layout>
    <div class="section__header">
      <h2>Course Details and Coupon Test</h2>
      <div class="list__more__options">
        <router-link :to="{name: 'admin.coupons.list'}" class="button button--md button__themeColor">
          <i class="sv-icon sv-arrow-left"></i>
          Back
        </router-link>
      </div>
    </div>
  </admin-layout>

</template>

<script>
export default {
  name: "CourseDetails"
}
</script>

<style scoped>

</style>