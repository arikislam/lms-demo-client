<template>
    <label v-show="hasMessage" class="text-danger mt-1 mb-1"> {{ message }}</label>
</template>

<script>
export default {
    name: "ErrorMessage",
    props: ['message'],
    computed: {
        hasMessage() {
            return this.message && this.message.length !== 0;
        }
    }
}
</script>

<style scoped>

</style>