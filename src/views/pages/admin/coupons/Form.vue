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
              <input type="text" class="form__control">
<!--              <error-message :message="errorMessages.password"></error-message>-->
            </div>
          </div>
          <div class="col-6">
            <div class="form__group">
              <label for="">Code</label>
              <input type="text" class="form__control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form__group">
              <label for="">Discount Type</label>
              <div class="sv-select">

                <select class="form__control">
                  <option value="">Products</option>
                  <option value="">Product Categories</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form__group">
              <label for="">Discount amount</label>
              <input type="text" class="form__control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form__group">
              <label for="">Expire Date</label>
              <input type="date" class="form__control">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form__group">
              <label for="">Coupon Applied On</label>
              <div class="sv-select">

                <select class="form__control">
                  <option value="">Products</option>
                  <option value="">Product Categories</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form__group">
              <label for="">Product Category</label>
              <Multiselect class="form__control"
                           v-model="categoryValue"
                           placeholder="Search and choose course category"
                           :searchable="true"
                           :options="categoryOptions"
                           @select="checkValue"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form__group">
              <label for="">Products</label>

              <Multiselect
                  class="form__control"
                  v-model="productValues"
                  mode="multiple"
                  placeholder="Search your courses"
                  :close-on-select="false"
                  :filter-results="false"
                  :min-chars="1"
                  :resolve-on-load="false"
                  :delay="0"
                  :searchable="true"
                  :object="true"
                  @select="checkValue"
                  :options="async function (query){return await returnProducts(query)}"
              >
              </Multiselect>
            </div>
          </div>
          <div class="col-12">
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
                <th scope="row"> {{ index+1 }}</th>
                <td>{{ p.label }}</td>
                <td>
                  <a href='' @click.prevent="removeProduct(p)"> <i class="sv-icon sv-trash"></i></a>
                </td>
              </tr>
              </tbody>
            </table>
<!--            <ul>-->
<!--              <li v-for="(p, index) in productValues" :key="index"> {{ p.label }}</li>-->
<!--            </ul>-->
          </div>

          <div class="button__group">
            <button class="button button__themeColor" @click="checkValue">Save Changes</button>
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
import {ref} from "vue";
import Multiselect from '@vueform/multiselect'

let pageTitle = ref('Create New Coupon');
let DataOptions = [{
  value: 1,
  label: 'One'
}, {
  value: 2,
  label: 'My Name is very very Large'
},
  {
    value: 3,
    label: 'My Name is very very Large My Name is very very Large My Name is very very Large'
  }, {
    value: 4,
    label: 'My Name is very very Large My Name is very very Large My Name is very very Large My Name is very very Large'
  },
  {
    value: 5,
    label: 'My Name is very very Large My Name is very very Large My Name is very very Large My Name is very very Large'
  }, {
    value: 6,
    label: 'Two'
  }
]

let categoryValue = ref([])
let categoryOptions = ref(DataOptions);

let productValues = ref([{
  value: 6,
  label: 'Two'
}])

let productOptions = ref(DataOptions);
const checkValue = (asd) => {
  console.log(asd, productValues.value);
}

const returnProducts = async (query) => {
  let data = await productOptions.value;
  return data;
}

const removeProduct = (product) => {
  productValues.value = productValues.value.filter( p => p.value !==  product.value);
}
</script>

<style scoped>

</style>
<style src="@vueform/multiselect/themes/default.css"></style>