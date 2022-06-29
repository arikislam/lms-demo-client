<template>
  <admin-layout>
    <div class="section__header">
      <h2>Coupons</h2>
      <div class="list__more__options">
        <div class="form__group input__group">
          <input type="text" class="form__control form__control--sm form__control--dark" v-model="searchKeyword" placeholder="Search..." @keyup="search">
          <span class="icon"><i class="sv-icon sv-search"></i></span>
        </div>
        <router-link :to="{name: 'admin.coupons.create'}" class="button button--md button__themeColor">
          <i class="sv-icon sv-plus"></i>
          Add New Coupon
        </router-link>
      </div>
    </div>
    <div class="sv-table">
      <div class="table__row row__head">
        <div class="table__col col__head">
          #
        </div>
        <div class="table__col col__head col__customer">
          <p>Label</p>
        </div>
        <div class="table__col col__head col__email">
          <p>Code</p>
        </div>
        <div class="table__col col__head col__phone">
          <p>Discount Type</p>
        </div>
        <div class="table__col col__head col__address">
          <p>Amount</p>
        </div>
        <div class="table__col col__head col__due">
          <p>Applied On</p>
        </div>
        <div class="table__col col__head col__action">
          <p>Action</p>
        </div>
      </div>
      <div class="table__row" v-for="(coupon,index) in coupons" :key="index">
        <div class="table__col ">
          {{ index + 1 }}
        </div>
        <div class="table__col col__customer">
          <div class="table__customer">
            <p class="customer__name">{{coupon.label}}</p>
          </div>
        </div>
        <div class="table__col col__email">
          <p>{{coupon.code}}</p>
        </div>
        <div class="table__col col__phone">
          <p>{{coupon.discount_type_label}}</p>
        </div>
        <div class="table__col col__address">
          <p>{{coupon.discount_amount}}</p>
        </div>
        <div class="table__col col__due">
          <p>{{coupon.coupon_applied_on_label}}</p>
          <p v-if="coupon.product_category_name">
            ({{coupon.product_category_name}})
          </p>
        </div>
        <div class="table__col col__action">
          <router-link :to="{name:'admin.coupons.edit', params: {id: coupon.id}}"  class="action__edit"> <i class="sv-icon sv-pencil-alt"></i></router-link>
        </div>
      </div>
    </div>

<!--    <div class="pagination pt30">-->
<!--      <ul class="pagination__list">-->
<!--        <li class="pagination__item"><a href="#" class="pagination__link"><i class="sv-icon sv-caret-left"></i></a></li>-->
<!--        <li class="pagination__item"><a href="#" class="pagination__link">1</a></li>-->
<!--        <li class="pagination__item"><span class="pagination__link active">2</span></li>-->
<!--        <li class="pagination__item"><a href="#" class="pagination__link">3</a></li>-->
<!--        <li class="pagination__item"><a href="#" class="pagination__link">4</a></li>-->
<!--        <li class="pagination__item"><a href="#" class="pagination__link"><i class="sv-icon sv-caret-right"></i></a>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->

  </admin-layout>
</template>

<script>
export default {
  name: "CouponList"
}
</script>

<script setup>
import {onMounted, ref} from "vue";
import httpClient from "@/app/api/client";

let searchKeyword = ref('')
let coupons = ref([])
const search = async () => {
  await getCoupons(searchKeyword.value);
}
const getCoupons = async (query = '') => {
  try {
    let {data: {data: {data}}} = await httpClient.get('coupons?keyword=' + query)
    coupons.value = data
  } catch (e) {
    console.log(e)
    return []
  }
}

onMounted(async () => {
  await getCoupons();

})
</script>

<style scoped>

</style>