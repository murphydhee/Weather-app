
<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input v-model="searchQuery" type="text" placeholder="Search for a city or state" class="py-2 px-1 w-full bg-transparent border-b focus: border-weather-secondary focus: outline-none focus: shadow-[0px_1px_0_0_#004E71]" />
    </div>

  </main>
</template>

  <script setup>
  import { ref } from "vue";
  import axios from "axios";

  const searchQuery = ref("");
  const queryTimeout = ref (null);

  const getSearchResults = () => {
    queryTimeout.value = setTimeout(() => {
      // this is to make sure there is a value inside the searchQuery variable
      if (searchQuery.value !== "" ){
        const result = axios.get (`https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json`)

      }
    }, 300);
  }
  </script>