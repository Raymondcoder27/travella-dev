<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCarStore } from '@/stores/carStore';
import { useUserStore } from '@/stores/userStore';

const router = useRouter();
const carStore = useCarStore();
const userStore = useUserStore();

const bookingData = ref({
    carId: '',
    startDate: '',
    endDate: '',
    userId: userStore.user.id,
});

const confirmBooking = async () => {
    try {
        await carStore.bookCar(bookingData.value);
        router.push('/confirmation');
    } catch (error) {
        console.error('Booking failed:', error);
    }
};
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Book Your Car</h1>
        <form @submit.prevent="confirmBooking" class="space-y-4">
            <div>
                <label for="carId" class="block text-sm font-medium text-gray-700">Select Car</label>
                <select v-model="bookingData.carId" id="carId" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option v-for="car in carStore.cars" :key="car.id" :value="car.id">{{ car.make }} {{ car.model }}</option>
                </select>
            </div>
            <div>
                <label for="startDate" class="block text-sm font-medium text-gray-700">Start Date</label>
                <input type="date" v-model="bookingData.startDate" id="startDate" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
                <label for="endDate" class="block text-sm font-medium text-gray-700">End Date</label>
                <input type="date" v-model="bookingData.endDate" id="endDate" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Confirm Booking</button>
        </form>
    </div>
</template>