<template>
  <div class="section__header">
    <h2>{{title}}</h2>
    <div class="form__group sv-select select__with__icon">
    </div>
  </div>
</template>

<script>

export default {
  name: "SectionHeader",
  props: {
    title: String
  },
}
</script>

<style scoped>

</style>