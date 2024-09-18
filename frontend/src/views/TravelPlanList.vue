<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useTravelPlanStore } from '@/stores/travelPlanStore';

const travelPlanStore = useTravelPlanStore();
const searchQuery = ref('');

onMounted(() => {
    travelPlanStore.fetchTravelPlans();
});

const filteredTravelPlans = computed(() => {
    if (!searchQuery.value) {
        return travelPlanStore.travelPlans;
    }
    return travelPlanStore.travelPlans.filter(plan =>
        plan.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const handleSearch = (event: Event) => {
    searchQuery.value = (event.target as HTMLInputElement).value;
};
</script>

<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Travel Plans</h1>
        <input
            type="text"
            v-model="searchQuery"
            @input="handleSearch"
            placeholder="Search travel plans..."
            class="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <ul>
            <li
                v-for="plan in filteredTravelPlans"
                :key="plan.id"
                class="p-4 mb-2 border border-gray-300 rounded"
            >
                <h2 class="text-xl font-semibold">{{ plan.name }}</h2>
                <p>{{ plan.description }}</p>
            </li>
        </ul>
    </div>
</template>