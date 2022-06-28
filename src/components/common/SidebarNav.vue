<template>
  <div class="sidebar__wrap show">
    <div class="sidebar__header">
      <a href="#" class="logo"><img src="/assets/img/site-logo.svg" alt=""></a>
      <a href="#" class="sidebar__toggler"><i class="sv-icon sv-d-arrow"></i></a>
    </div>
    <nav class="sidebar">
      <ul class="nav" id="nav_accordion">
        <li class="nav-item" v-for="(item, index) in menu" :key="index">
          <router-link :to='{ name: item.route }' class="nav-link" :class="{active: item.isActive}" href="#">
            <span class="icon"><i :class="item.icon"></i></span>
            <span class="text">{{item.title}}</span>
          </router-link>
        </li>


        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="icon"><i class="sv-icon sv-logout"></i></span>
            <span class="text">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SidebarNav",
}
</script>

<script setup>
import {sidebar} from "@/app/extra/menu"
import {ref, onMounted, onUpdated} from "vue"
import { useRoute } from 'vue-router'

const menu = ref(sidebar())
const route = useRoute();

onMounted(() => {
  console.log(route.name);
})

onUpdated(() => {
  console.log(route.name);
})

</script>

<style scoped>

</style>