<template>
  <div class="header__user">
    <a class="header__user__top" href="#" @click="showLogoutSection" ref="target">
                        <span class="user__thumb">
                            <img src="/assets/img/user.png" alt="">
                        </span>
      <span class="user__name">{{ userName }}</span>
    </a>
    <div class="user__options" :class="{block : showLogout}">
      <ul>
        <li><a href="#" @click.prevent="signOutUser"><span class="nav__thumb"><i class="sv-icon sv-logout"></i></span>
          Sign Out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHeader"
}
</script>

<script setup>
import {ref} from 'vue'
import {onClickOutside} from '@vueuse/core'
import {useStore} from 'vuex'
import {USER_LOGGED_OUT} from "@/app/constants/action-type"
import {useRouter} from "vue-router"
import {postLogout} from "@/app/api/auth.api"
import {successNotification} from "@/app/extra/helper"

const target = ref(null)
let showLogout = ref(false)
const store = useStore()
const router = useRouter()
const showLogoutSection = () => {
  showLogout.value = !showLogout.value
}

let userName = ref(store.state.user.name)


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


onClickOutside(target, (event) => {
  showLogout.value = false
})

</script>

<style scoped>
.block {
  display: block !important;
}
</style>