<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        v-model="searchQuery"
        @input="getSearchResults"
        type="text"
        placeholder="Search for a city or state"
        class="py-2 px-1 w-full bg-transparent border-b focus: border-weather-secondary focus: outline-none focus: shadow-[0px_1px_0_0_#004E71]"
      />
      <ul
        class="absolute bg-weather-secondary py-2 px-1 text-white w-full shadow-md top-[66px]"
        v-if="mapboxSearchResults"
      >
        <p v-if="searchError">Sorry, e be like say you dey stay trenches</p>
        <p v-if="!searchError && mapboxSearchResults.length === 0">
          Sorry, e be like say you dey stay trenches
        </p>
        <template v-else>
          <li
            v-for="searchResult in mapboxSearchResults"
            :key="searchResult.id"
            class="py-2 cursor-pointer"
            @click="previewCity(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
    <div class="flex flex-col gap-4">
      <!-- We will have to use the suspense Component again because we used `await getCities` -->
      <suspense>
        <DisplayCity />
        <template #fallback>
          <DisplayCardAnimatedSkeleton />
        </template>
      </suspense>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import DisplayCity from "../components/DisplayCity.vue";
import DisplayCardAnimatedSkeleton from "../components/DisplayCardAnimatedSkeleton.vue";

const router = useRouter();
const previewCity = (searchResult) => {
  console.log(searchResult);
  const [city, state] = searchResult.place_name.split(",");
  router.push({
    name: "cityView",
    params: { state: state.replaceAll(" ", ""), city: city },
    query: {
      lat: searchResult.geometry.coordinates[1],
      lng: searchResult.geometry.coordinates[0],
      preview: true,
    },
  });
};

const searchQuery = ref("");

const queryTimeout = ref(null);

const mapboxAPIKey =
  "pk.eyJ1IjoibXVycGh5ZGhlZSIsImEiOiJjbGN0NmY3eHQwaHBzM29wNHlkaTdlaWxvIn0.P4dgMZYS2LUo39V2HIj1nw";
const mapboxSearchResults = ref(null);

const searchResults = ref("");

const searchError = ref(null);

const getSearchResults = () => {
  queryTimeout.value = setTimeout(async () => {
    // Making use of the `clearTimeout` function because were making use of a lazy search
    clearTimeout(queryTimeout.value);
    // this is to make sure there is a value inside the searchQuery variable
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
        );
        mapboxSearchResults.value = result.data.features;
        console.log(mapboxSearchResults.value);
      } catch {
        searchError.value = true;
      }

      return;
    }
    mapboxSearchResults.value = null;
  }, 300);
};
</script>
