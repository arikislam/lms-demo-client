<template>
<customer-layout>
  <h1>My Courses</h1>

</customer-layout>

</template>

<script>
import {defineAsyncComponent} from "vue";

const CustomerLayout = defineAsyncComponent(() => import('@/views/layouts/CustomerLayout'))

export default {
  name: "MyCourses",
  components: {CustomerLayout}
}
</script>

<style scoped>

</style>