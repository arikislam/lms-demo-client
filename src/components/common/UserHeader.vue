<template>
  <div class="header__user">
    <a class="header__user__top" href="#">
                        <span class="user__thumb">
                            <img src="/assets/img/user.png" alt="">
                        </span>
      <span class="user__name">David McDon</span>
    </a>
    <div class="user__options" style="display: block">
      <ul>
        <li><a href="#"><span class="nav__thumb"><i class="sv-icon sv-logout"></i></span> Sign Out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserHeader"
}
</script>

<style scoped>

</style>