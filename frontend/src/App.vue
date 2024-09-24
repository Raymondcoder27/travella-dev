<script setup>
import { RouterView } from 'vue-router';
import Airplane from 'vue-material-design-icons/Airplane.vue';
import MapMarker from 'vue-material-design-icons/MapMarker.vue';
import Book from 'vue-material-design-icons/Book.vue';
import Account from 'vue-material-design-icons/Account.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="header bg-white shadow-md">
      <div class="container mx-auto flex justify-between items-center py-4">
        <div class="logo text-2xl font-bold">Zuri-Link</div>
        <nav class="nav">
          <ul class="flex space-x-4">
  <li>
    <a href="#" class="flex items-center space-x-1 text-gray-700 rounded-full hover:bg-gray-100 p-2">
      <Airplane class="text-gray-700" />
      <span>Airport Transfers</span>
    </a>
  </li>
  <li>
    <a href="#" class="flex items-center space-x-1 text-gray-700 rounded-full hover:bg-gray-100 p-2">
      <MapMarker class="text-gray-700" />
      <span>Browse by Destination</span>
    </a>
  </li>
  <li>
    <a href="#" class="flex items-center space-x-1 text-gray-700 rounded-full hover:bg-gray-100 p-2">
      <Book class="text-gray-700" />
      <span>My Bookings</span>
    </a>
  </li>
  <li>
    <a href="#" class="flex items-center space-x-1 text-gray-700 rounded-full hover:bg-gray-100 p-2">
      <Account class="text-gray-700" />
      <span>Login/Signup</span>
    </a>
  </li>
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

<style scoped>
a {
  transition: color 0.3s, background-color 0.3s;
}

</style>