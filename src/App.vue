<template>
  <router-view></router-view>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  name: 'App',
  setup() {
    // Get toast interface
    const toast = useToast();

    // Use it!
    toast("I'm a toast!");

    // or with options
    toast.success("My toast content", {
      timeout: 2000
    });
    // These options will override the options defined in the "app.use" plugin registration for this specific toast

    // Make it available inside methods
    return { toast }
  },
}
</script>

<style>
</style>
