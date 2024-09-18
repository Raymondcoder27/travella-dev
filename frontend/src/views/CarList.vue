<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useCarStore } from '@/stores/carStore';
import CarCard from '@/components/car/CarCard.vue';

const carStore = useCarStore();
const searchQuery = ref('');

onMounted(() => {
    carStore.fetchCars();
});

const filteredCars = computed(() => {
    if (!searchQuery.value) return carStore.cars;
    return carStore.cars.filter(car =>
        car.make.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Available Cars</h1>
        <input
            v-model="searchQuery"
            type="text"
            placeholder="Search cars..."
            class="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CarCard v-for="car in filteredCars" :key="car.id" :car="car" />
        </div>
    </div>
</template>
