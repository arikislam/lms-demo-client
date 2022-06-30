<template>
  <div class="sidebar__wrap" :class="{show: isSidebarOpen}">
    <div class="sidebar__header">
      <div class="site__logo">

        <router-link :to="{name: 'admin.home'}" class="logo"><img src="/assets/img/sidebar-log.svg" alt=""></router-link>
      </div>
      <a href="#" class="sidebar__toggler" @click="toggleSidebar"><i class="sv-icon sv-d-arrow"></i></a>
    </div>
    <nav class="sidebar">
      <ul class="nav" id="nav_accordion">
        <li class="nav-item" v-for="(item, index) in menu" :key="index">
          <router-link :to='{ name: item.route }' class="nav-link" :class="{active: item.isActive}" href="#">
            <span class="icon"><i :class="item.icon"></i></span>
            <span class="text">{{ item.title }}</span>
          </router-link>
        </li>


        <li class="nav-item">
          <a class="nav-link" href="#" @click="signOutUser">
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
import {ref, onMounted} from "vue"
import {useRoute, useRouter} from 'vue-router'
import {postLogout} from "@/app/api/auth.api"
import {USER_LOGGED_OUT} from "@/app/constants/action-type"
import {successNotification} from "@/app/extra/helper"
import {useStore} from "vuex"
import {SET_SIDEBAR_OPEN} from "@/app/constants/mutations-types";

let menu = ref(sidebar())
const route = useRoute()
const store = useStore()
const router = useRouter()

const signOutUser = () => {

  postLogout()
      .then(() => {
        store.dispatch(USER_LOGGED_OUT)
      }).catch((e) => {
    console.log(e)
  }).finally(() => {
    successNotification('Logged out.')
    router.push({name: 'login'})

  })
}


let isSidebarOpen = ref(store.state.isSidebarOpen)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  store.commit(SET_SIDEBAR_OPEN, isSidebarOpen.value)
}

onMounted(() => {
  menu = menu.value.map((item) => {
    item.isActive = item.activeRoutes.includes(route.name)
    return item
  });
})

</script>

<style scoped>

</style>