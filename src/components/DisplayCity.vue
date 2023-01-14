<template>
  <div v-for="city in savedCities" :key="city.id">
    <DisplayCard :city="city" @click="goToCityView(city)" />
  </div>
  <p v-if="savedCities.length === 0">
  You have no saved Locations. To start tracking search in the field above.
  </p>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import DisplayCard from "../components/DisplayCard.vue";

const savedCities = ref([]);

// First we check if there is an data stored in the "saved cities" first
const getCities = async () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(localStorage.getItem("savedCities"));
    // We now have to request to get the current weather data at the particular time.
    const requests = [];
    savedCities.value.forEach((city) => {
      requests.push(
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.coords.lat}&lon=${city.coords.lng}&appid=f35a894b6d0acac0f852025c7709e74e&units=metric`
        )
      );
    });

    const weatherData = await Promise.all(requests);

    //flicker Delay
    await new Promise((res) => setTimeout(res, 650));

    weatherData.forEach((value, index) => {
      savedCities.value[index].weather = value.data;
    });
  }
};

await getCities();

const router = useRouter();
const goToCityView = (city) => {
  router.push({
    name: "cityView",
    params: { state: city.state, city: city.city },
    query: { id: city.id, lat: city.coords.lat, lng: city.coords.lng },
  });
};
</script>
