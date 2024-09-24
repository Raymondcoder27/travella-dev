<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="header bg-white shadow-md">
      <div class="container mx-auto flex justify-between items-center py-4">
        <div class="logo text-2xl font-bold">Zuri-Link</div>
        <nav class="nav">
          <ul class="flex space-x-4">
            <li><a href="#" class="text-gray-700">Airport Transfers</a></li>
            <li><a href="#" class="text-gray-700">Browse by Destination</a></li>
            <li><a href="#" class="text-gray-700">My Bookings</a></li>
            <li><a href="#" class="text-gray-700">Login/Signup</a></li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main class="flex-grow">
      <RouterView />
    </main>
    
    <footer class="bg-gray-950 text-white p-4 text-center">
      <p>&copy; 2024 Zuri-Link. All rights reserved.</p>
    </footer>
  </div>
</template>