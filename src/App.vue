<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary" >
    <navigation />
    <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
    </RouterView>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<style>
.page-enter-active {
  transition: 450ms ease all;
}
.page-enter-from {
  opacity: 0;
}
</style>