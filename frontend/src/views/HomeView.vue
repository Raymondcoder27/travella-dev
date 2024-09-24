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
    <!-- Hero Banner -->
    <section class="hero-banner bg-cover bg-center h-96 flex items-center justify-center text-white" style="background-image: url('@/assets/hero-bg.jpg');">
      <div class="text-center">
        <h1 class="text-4xl font-bold">Zuri-Link</h1>
        <p class="mt-4 text-lg">Simplify your travel with our car booking service</p>
        <Button class="mt-6">Get Started</Button>
      </div>
    </section>

    <!-- Featured Cars -->
    <section class="featured-cars py-16 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">Featured Cars</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CarCard v-for="car in featuredCars" :key="car.id" :car="car" />
        </div>
      </div>
    </section>

    <!-- Travel Plans -->
    <section class="travel-plans py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">Plan Your Travel</h2>
        <p class="text-center text-lg">Manage your travel itinerary and car bookings in one place.</p>
        <div class="flex justify-center mt-6">
          <Button>View Travel Plans</Button>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials py-16 bg-gray-100">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Add testimonial cards here -->
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="benefits py-16">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Add benefit cards here -->
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-banner {
  background-color: #1a202c; /* Fallback color */
}
</style>