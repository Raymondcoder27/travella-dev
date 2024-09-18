<template>
    <div class="car-card p-4 border rounded-lg shadow-md">
        <img :src="image" alt="Car Image" class="w-full h-48 object-cover rounded-md mb-4" />
        <div class="car-details">
            <h2 class="text-xl font-bold">{{ make }} {{ model }}</h2>
            <p class="text-gray-600">Price: ${{ price }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface CarProps {
    make: string
    model: string
    price: number
    image: string
}

const props = defineProps<CarProps>()
</script>

<style scoped>
.car-card {
    max-width: 300px;
}
</style>