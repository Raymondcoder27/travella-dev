<script setup>
import { RouterView } from 'vue-router';
import '../assets/styles/tailwind.css';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-green-600 text-white p-4">
      <h1 class="text-2xl font-bold">Travel X Car Booking</h1>
    </header>
    
    <main class="flex-grow">
      <RouterView />
    </main>
    
    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2023 Travel X Car Booking. All rights reserved.</p>
    </footer>
  </div>
</template>