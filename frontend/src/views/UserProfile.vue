<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useBookingStore } from '@/stores/bookingStore';

const userStore = useUserStore();
const bookingStore = useBookingStore();

const user = ref(userStore.user);
const bookings = ref(bookingStore.bookings);

const updateUserInfo = () => {
    // Logic to update user information
};
</script>

<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">User Profile</h1>
        
        <section class="mb-8">
            <h2 class="text-xl font-semibold mb-2">Profile Details</h2>
            <div class="bg-white p-4 rounded shadow">
                <p><strong>Name:</strong> {{ user.name }}</p>
                <p><strong>Email:</strong> {{ user.email }}</p>
                <p><strong>Phone:</strong> {{ user.phone }}</p>
                <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded" @click="updateUserInfo">Update Information</button>
            </div>
        </section>
        
        <section>
            <h2 class="text-xl font-semibold mb-2">Booking History</h2>
            <div class="bg-white p-4 rounded shadow">
                <ul>
                    <li v-for="booking in bookings" :key="booking.id" class="mb-4">
                        <div class="border-b pb-2">
                            <p><strong>Car:</strong> {{ booking.car }}</p>
                            <p><strong>Date:</strong> {{ booking.date }}</p>
                            <p><strong>Status:</strong> {{ booking.status }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<style scoped>
.container {
    max-width: 800px;
}
</style>