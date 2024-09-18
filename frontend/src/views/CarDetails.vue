<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCarStore } from '@/stores/carStore';
import { storeToRefs } from 'pinia';

const route = useRoute();
const carStore = useCarStore();
const { carDetails, fetchCarDetails } = storeToRefs(carStore);

const carId = ref(route.params.id);

onMounted(() => {
    if (carId.value) {
        fetchCarDetails(carId.value);
    }
});
</script>

<template>
    <div class="container mx-auto p-4">
        <div v-if="carDetails" class="bg-white shadow-md rounded-lg p-6">
            <h1 class="text-2xl font-bold mb-4">{{ carDetails.name }}</h1>
            <img :src="carDetails.image" alt="Car Image" class="w-full h-64 object-cover mb-4 rounded-lg">
            <p class="text-gray-700 mb-4">{{ carDetails.description }}</p>
            <div class="mb-4">
                <span class="text-lg font-semibold">Price: </span>
                <span class="text-lg text-green-600">{{ carDetails.price }} per day</span>
            </div>
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Book Now</button>
        </div>
        <div v-else class="text-center text-gray-500">
            Loading car details...
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 800px;
}
</style>