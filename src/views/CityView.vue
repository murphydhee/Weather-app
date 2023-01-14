<template>
    <div>

        <suspense>
            <!-- component with nested async dependencies -->
            <async-city-view />
            <!-- Loading state with the fallback slot -->
            <template #fallback>
                <p> Loading...</p>
            </template>
        </suspense>
    </div>
</template>
<script setup>
import AsyncCityView from "../components/AsyncCityView.vue";
</script>