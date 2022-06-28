<template>
  <template>
    <div class="template__wrapper template__wrapper--flex">
      <sidebar-nav></sidebar-nav>
      <div class="content__area background__grey4">
        <div class="content__area__header">
          <form class="header__search">
            <span class="icon"><i class="sv-icon sv-search"></i></span>
            <div class="header__search__wrap">
              <input type="text" class="form__control" placeholder="Search...">
            </div>
          </form>
          <user-header></user-header>
        </div>
        <slot></slot>
      </div>
    </div>
  </template>

</template>

<script>

import {defineAsyncComponent} from "vue";

const UserHeader = defineAsyncComponent(() => import('@/components/common/UserHeader'))
const SidebarNav = defineAsyncComponent(() => import('@/components/common/SidebarNav'))

export default {
  name: "CustomerLayout",
  components: {UserHeader, SidebarNav}
}
</script>

<style scoped>

</style>