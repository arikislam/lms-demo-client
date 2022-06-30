<template>
  <admin-layout>
    <div class="section__header">
      <h2>Course Details and Coupon Test</h2>
      <div class="list__more__options">
        <router-link :to="{name: 'admin.courses.list'}" class="button button--md button__themeColor">
          <i class="sv-icon sv-arrow-left"></i>
          Back
        </router-link>
      </div>
    </div>
    <div class="sv-table" v-if="!loading">
      <table class="table table-sm">
        <thead>
        <tr>
          <th scope="row" style="width:40%;">Data</th>
          <th scope="col">Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">Course Name</th>
          <td colspan="2">{{course.title}}</td>
        </tr>
        <tr>
          <th scope="row">Description</th>
          <td colspan="2"><p>{{course.description}}</p></td>
        </tr>
        <tr>
          <th scope="row">Category</th>
          <td colspan="2">{{course?.category?.name}}</td>
        </tr>
        <tr>
          <th scope="row">Course Price</th>
          <td colspan="2">{{course.price}}</td>
        </tr>

        <tr>
          <th scope="row">Apply Coupon</th>
          <td colspan="2"><input type="text" placeholder="Type coupon" v-model="couponCode"> <a href="#" @click.prevent="applyCoupon"> Apply</a></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="sv-table" v-if="result">
      <h2 style="color: red">Result </h2>
      <hr>
      <table class="table table-sm">
        <thead>
        <tr>
          <th scope="col">Data</th>
          <th scope="col">Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">Discount Type</th>
          <td colspan="2">{{result.discount_type}}</td>
        </tr>
        <tr>
          <th scope="row">Applied On</th>
          <td colspan="2">{{result.applied_on}}</td>
        </tr>
        <tr>
          <th scope="row">Discount Amount</th>
          <td colspan="2">{{result.discount_amount}}</td>
        </tr>
        <tr>
          <th scope="row">Discounted Price</th>
          <td colspan="2">{{result.discounted_price}}</td>
        </tr>
        </tbody>
      </table>
    </div>

  </admin-layout>

</template>

<script>
export default {
  name: "CourseDetails"
}
</script>


<script setup>

import {onMounted, ref} from "vue"
import httpClient from "@/app/api/client"
import {useRoute} from "vue-router";
import {failedNotification} from "@/app/extra/helper";

const route = useRoute()
let course  = ref([]);
let loading = ref(false);
let couponCode = ref('')
let result = ref(null)

const applyCoupon = async () => {
  result = null;
  let formData = {
    coupon_code: couponCode.value
  }

  try {
    let {data : {data}} = await httpClient.post(`courses/${route.params.id}/apply-coupon`, formData)
    result.value = data

  } catch({response: {data: {message}, status}}) {
    failedNotification(message)
  }
}

const getCourseDetails = async () => {
  try {
    loading.value = true;
    let {data : {data}} = await httpClient.get(`courses/${route.params.id}/details`)
    course.value = data
  } catch (e) {

    console.log(e);
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await getCourseDetails()
})

</script>

<style scoped>

</style>