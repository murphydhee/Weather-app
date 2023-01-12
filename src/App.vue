<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary" >
    <Navigation />
    <RouterView />
  </div>
</template>

<script>
// import { RouterView } from vue-router;
import Navigation from "./components/Navigation.vue";
</script>

<style>

</style>