<template>
  <admin-layout>
    <div class="section__header">
      <h2>Courses</h2>
      <div class="list__more__options">
        <div class="form__group input__group">
          <input type="text" class="form__control form__control--sm form__control--dark" v-model="searchKeyword"
                 placeholder="Search..." @keyup="search">
          <span class="icon"><i class="sv-icon sv-search"></i></span>
        </div>
      </div>
    </div>

    <div class="sv-table">
      <div class="table__row row__head">
        <div class="table__col col__head">
          #
        </div>
        <div class="table__col col__head col__customer"  style="width: 40%">
          <p>Title</p>
        </div>
        <div class="table__col col__head col__customer">
          <p>Category</p>
        </div>
        <div class="table__col col__head col__email">
          <p>Short Description</p>
        </div>
        <div class="table__col col__head col__phone">
          <p>Price</p>
        </div>
        <div class="table__col col__head col__address">
          <p>Action</p>
        </div>
      </div>
      <div class="table__row" v-for="(course,index) in courses" :key="index">
        <div class="table__col ">
          {{ index + 1 }}
        </div>
        <div class="table__col col__customer" style="width: 40%">
          <div class="table__customer">
            <p class="customer__name">{{ course.title }}</p>
          </div>
        </div>
        <div class="table__col col__email">
          <p>{{ course.category.name }}</p>
        </div>
        <div class="table__col col__phone">
          <p>{{ course.short_description }}</p>
        </div>
        <div class="table__col col__address">
          <p>{{ course.price }}</p>
        </div>

        <div class="table__col col__action">
            <router-link :to="{name:'admin.courses.details', params: {id: course.id}}" class="action__edit"><i
                      class="sv-icon sv-pencil-alt"></i> Test coupons</router-link>
        </div>
      </div>

    </div>


  </admin-layout>
</template>

<script>
export default {
  name: "CourseList"
}
</script>

<script setup>
import {onMounted, ref} from "vue";
import httpClient from "@/app/api/client";

let searchKeyword = ref('')
let courses = ref([])
const search = async () => {
  await getCourses(searchKeyword.value);
}
const getCourses = async (query = '') => {
  try {
    let {data: {data: {data}}} = await httpClient.get('courses?keyword=' + query)
    courses.value = data
    console.log(courses.value)
  } catch (e) {
    console.log(e)
    return []
  }
}

onMounted(async () => {
  await getCourses();

})
</script>

<style scoped>

</style>