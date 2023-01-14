<template>
    <div>

        <suspense>
            <!-- component with nested async dependencies -->
            <async-city-view />
            <!-- Loading state with the fallback slot -->
            <template #fallback>
                <async-city-view-skeleton />
            </template>
        </suspense>
    </div>
</template>
<script setup>
import AsyncCityView from "../components/AsyncCityView.vue";
import AsyncCityViewSkeleton from "../components/AsyncCityViewSkeleton.vue";
</script>