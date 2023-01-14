<template>
  <div class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md">
    <div class="flex flex-col flex-1 gap-2">
        <animated-placeholder class="max-w-[50%]"/>
        <animated-placeholder class="max-w-[40%]"/>
    </div>
    
  </div>
</template>

<script setup>
import AnimatedPlaceholder from "../components/AnimatedPlaceholder.vue";

</script>