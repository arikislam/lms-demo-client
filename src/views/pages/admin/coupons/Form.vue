<template>
  <admin-layout>
    <div class="section__header">
      <h2>{{ pageTitle }}</h2>
      <div class="list__more__options">
        <router-link :to="{name: 'admin.coupons.list'}" class="button button--md button__themeColor">
          <i class="sv-icon sv-arrow-left"></i>
          Back
        </router-link>
      </div>
    </div>
    <div class="dash__block radius-15 dash__form">
      <div class="dash__form__body">
        <div class="row">
          <div class="col-6">
            <div class="form__group">
              <label for="">Label</label>
              <input type="text" class="form__control" name="label" v-model="form.label">
              <error-message :message="errorMessages.label"></error-message>
            </div>
          </div>
          <div class="col-6">
            <div class="form__group">
              <label for="">Code</label>
              <input type="text" class="form__control" name="code" v-model="form.code">
              <error-message :message="errorMessages.code"></error-message>

            </div>
          </div>
          <div class="col-md-6">
            <div class="form__group">
              <label for="">Discount Type</label>
              <div class="sv-select">

                <select class="form__control" name="discount_type" v-model="form.discount_type">
                  <option v-for="(discount, index) in couponDiscountTypes" :value="discount.value" :key="index">
                    {{ discount.label }}
                  </option>
                </select>
              </div>
              <error-message :message="errorMessages.discount_type"></error-message>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form__group">
              <label for="">Discount amount</label>
              <input type="text" class="form__control" name="discount_amount" v-model="form.discount_amount">
              <error-message :message="errorMessages.discount_amount"></error-message>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form__group">
              <label for="">Expire Date</label>
              <input type="date" class="form__control" v-model="form.expire_date">
              <error-message :message="errorMessages.expire_date"></error-message>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form__group">
              <label for="">Coupon Applied On</label>
              <div class="sv-select">
                <select class="form__control" v-model="form.coupon_applied_on">
                  <option v-for="(coupon, index) in couponAppliedOn" :value="coupon.value" :key="index">
                    {{ coupon.label }}
                  </option>
                </select>
              </div>
              <error-message :message="errorMessages.coupon_applied_on"></error-message>

            </div>
          </div>
          <div class="col-md-6" v-if="form.coupon_applied_on == 2">
            <div class="form__group">
              <label for="">Product Category</label>
              <Multiselect class="form__control"
                           v-model="categoryValue"
                           placeholder="Search and choose course category"
                           :searchable="true"
                           :min-chars="0"
                           :resolve-on-load="false"
                           :delay="2"
                           :options="async function (query){return await returnCategories(query)}"
                           @select="setCategory(value)"
              />
            </div>
            <error-message :message="errorMessages.product_category_id"></error-message>
          </div>
          <div class="col-md-6" v-if="form.coupon_applied_on == 1">
            <div class="form__group">
              <label for="">Products</label>

              <Multiselect
                  class="form__control"
                  v-model="productValues"
                  mode="multiple"
                  placeholder="Search your courses"
                  :close-on-select="false"
                  :filter-results="false"
                  :min-chars="0"
                  :resolve-on-load="false"
                  :delay="2"
                  :searchable="true"
                  :object="true"
                  :options="async function (query){ return await returnProducts(query)}"
              >
              </Multiselect>
              <error-message :message="errorMessages.products"></error-message>

            </div>
          </div>
          <div class="col-12" v-if="form.coupon_applied_on == 1">
            <table class="table">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" style="width: 70%">Course Name</th>
                <th scope="col">Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(p, index) in productValues" :key="index">
                <th scope="row"> {{ index + 1 }}</th>
                <td>{{ p.label }}</td>
                <td>
                  <a href='' @click.prevent="removeProduct(p)"> <i class="sv-icon sv-trash"></i></a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>

          <div class="button__group">
            <button class="button button__themeColor" @click="submitData">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  </admin-layout>
</template>

<script>
export default {
  name: "CouponForm"
}
</script>

<script setup>
import {onMounted, ref} from "vue";
import Multiselect from '@vueform/multiselect'
import httpClient from "@/app/api/client";
import {failedNotification, serializeValidationMessage, successNotification} from "@/app/extra/helper";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const route = useRoute()

let pageTitle = ref(route.name === 'admin.coupons.edit' ? 'Update Coupon' : 'Create New Coupon');
let categoryValue = ref([])
let productValues = ref([])

let formData = {
  label: "",
  code: "",
  coupon_applied_on: 1,
  discount_type: 1,
  expire_date: null,
  status: true,
  discount_amount: 0,
  product_category_id: null,
  products: []
}

let form = ref(formData)
let errorMessages = ref({
  label: "",
  code: "",
  coupon_applied_on: "",
  discount_type: "",
  expire_date: "",
  status: "",
  discount_amount: "",
  product_category_id: "",
  products: ""
})

const submitData = async () => {

  form.value.products = productValues.value.map(product => product.value)
  form.value.product_category_id = categoryValue.value


  let url = (route.name === 'admin.coupons.edit') ? `coupons/${route.params.id}/update` : 'coupons/create'

  try {
    await httpClient.post(url, form.value)
    successNotification((route.name === 'admin.coupons.edit') ? 'Coupon updated': 'Coupon created')
    await router.push({name: 'admin.coupons.list'})

  } catch ({response: {data: {message}, status}}) {
    if (status && status === 422) {
      errorMessages.value = await serializeValidationMessage(message);
    } else {
      failedNotification(message);
    }

  }

}

const returnProducts = async (query = '') => {
  try {
    let {data: {data}} = await httpClient.get('courses/search?keyword=' + query)
    return data
  } catch (e) {
    console.log(e)
    return []
  }
}

const removeProduct = (product) => {
  productValues.value = productValues.value.filter(p => p.value !== product.value);
}

let couponAppliedOn = ref([])
let couponDiscountTypes = ref([])

const returnCategories = async (query = '') => {
  try {
    let {data: {data}} = await httpClient.get('courses/search-categories?keyword=' + query)
    return data
  } catch (e) {
    console.log(e)
    return []
  }
}
const getSearchParams = async () => {
  try {
    let {data: {data: {coupon_applied_on, coupon_discount_types}}} = await httpClient.get('coupons/search-parameters')
    couponAppliedOn.value = coupon_applied_on;
    couponDiscountTypes.value = coupon_discount_types;
  } catch (e) {
    console.log(e)
  }
}

const setCategory = (value) => {
  form.value.product_category_id = value;
}

const getCouponDetails = async () => {
  try {
    let {data: {data}} = await httpClient.get('coupons/' + route.params.id + '/details')
    console.log(data);
    form.value.code = data.code
    form.value.label = data.label
    form.value.coupon_applied_on = data.coupon_applied_on
    form.value.discount_amount = data.discount_amount
    form.value.discount_type = data.discount_type
    form.value.expire_date = new Date(data.expire_date).toISOString().split('T')[0]
    productValues.value = data.product_details.map(product => {
      return {
        value: product.id,
        label: product.name
      }
    })
  } catch (e) {
    console.log(e);
  }

}

onMounted(async () => {
  await getSearchParams()
  if (route.name === 'admin.coupons.edit') {
    await getCouponDetails()
  }
})

</script>

<style scoped>

</style>
<style src="@vueform/multiselect/themes/default.css"></style>