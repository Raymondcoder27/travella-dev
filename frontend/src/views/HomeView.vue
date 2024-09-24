<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/common/Button.vue';
import CarCard from '@/components/car/CarCard.vue';
import { useCarStore } from '@/stores/carStore';

const carStore = useCarStore();
const featuredCars = ref(carStore.getFeaturedCars());
</script>
<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero bg-cover bg-center h-96 flex items-center justify-center text-white" style="background-image: url('@/assets/hero-bg.jpg');">
      <div class="text-center">
        <h1 class="text-5xl font-bold">Find Your Perfect Car</h1>
        <div class="mt-6 flex justify-center space-x-2">
          <input type="text" placeholder="From" class="p-2 rounded-md text-black" />
          <input type="text" placeholder="To" class="p-2 rounded-md text-black" />
          <input type="number" placeholder="Passengers" class="p-2 rounded-md text-black" />
          <input type="date" placeholder="Start Date" class="p-2 rounded-md text-black" />
          <button class="p-2 bg-yellow-500 hover:bg-yellow-600 rounded-md text-white">Find a Car</button>
        </div>
      </div>
    </section>

    <!-- Featured Listings Section -->
    <section class="featured-listings py-16 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-8 text-yellow-600">Featured Listings</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CarCard v-for="car in featuredCars" :key="car.id" :car="car" />
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us py-16 bg-white">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-8 text-yellow-600">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="benefit-card p-6 bg-yellow-100 shadow-md rounded-md text-center">
            <h3 class="text-2xl font-bold">Convenient Booking</h3>
            <p class="mt-4">Easily book your car online with our user-friendly platform.</p>
          </div>
          <div class="benefit-card p-6 bg-yellow-100 shadow-md rounded-md text-center">
            <h3 class="text-2xl font-bold">Wide Range of Cars</h3>
            <p class="mt-4">Choose from a variety of cars to suit your travel needs.</p>
          </div>
          <div class="benefit-card p-6 bg-yellow-100 shadow-md rounded-md text-center">
            <h3 class="text-2xl font-bold">Affordable Prices</h3>
            <p class="mt-4">Get the best deals on car rentals with competitive pricing.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials py-16 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-8 text-yellow-600">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Add testimonial cards here -->
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer bg-white py-8">
      <div class="container mx-auto text-center">
        <ul class="flex justify-center space-x-4 mb-4">
          <li><a href="#" class="text-gray-700">Contact Us</a></li>
          <li><a href="#" class="text-gray-700">Privacy Policy</a></li>
          <li><a href="#" class="text-gray-700">Terms of Service</a></li>
        </ul>
        <div class="social-media">
          <!-- Add social media links here -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/common/Button.vue';
import CarCard from '@/components/car/CarCard.vue';
import { useCarStore } from '@/stores/carStore';

const carStore = useCarStore();
const featuredCars = ref(carStore.getFeaturedCars.value);
</script>

<style scoped>
.hero {
  background-color: #1a202c; /* Fallback color */
}
</style>