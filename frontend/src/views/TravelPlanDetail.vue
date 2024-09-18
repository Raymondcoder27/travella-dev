<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTravelPlanStore } from '@/stores/travelPlanStore';

const route = useRoute();
const travelPlanStore = useTravelPlanStore();
const travelPlanId = route.params.id as string;
const travelPlan = ref(null);

onMounted(async () => {
    await travelPlanStore.fetchTravelPlanById(travelPlanId);
    travelPlan.value = travelPlanStore.getTravelPlanById(travelPlanId);
});
</script>

<template>
    <div class="container mx-auto p-4">
        <div v-if="travelPlan" class="bg-white shadow-md rounded-lg p-6">
            <h1 class="text-2xl font-bold mb-4">{{ travelPlan.name }}</h1>
            <p class="text-gray-700 mb-4">{{ travelPlan.description }}</p>
            
            <h2 class="text-xl font-semibold mb-2">Itinerary</h2>
            <ul class="list-disc list-inside mb-4">
                <li v-for="item in travelPlan.itinerary" :key="item.id" class="text-gray-700">
                    {{ item.date }} - {{ item.activity }}
                </li>
            </ul>
            
            <h2 class="text-xl font-semibold mb-2">Booking Options</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="option in travelPlan.bookingOptions" :key="option.id" class="bg-gray-100 p-4 rounded-lg">
                    <h3 class="text-lg font-bold">{{ option.name }}</h3>
                    <p class="text-gray-700">{{ option.description }}</p>
                    <p class="text-gray-900 font-semibold">{{ option.price | currency }}</p>
                    <Button class="mt-2">Book Now</Button>
                </div>
            </div>
        </div>
        <div v-else class="text-center py-10">
            <p class="text-gray-500">Loading travel plan details...</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 800px;
}
</style>