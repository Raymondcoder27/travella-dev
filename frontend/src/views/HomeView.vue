<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/common/Button.vue';
import CarCard from '@/components/car/CarCard.vue';
import { useCarStore } from '@/stores/carStore';
import MapMarker from 'vue-material-design-icons/MapMarker.vue';
import MapMarkerOutline from 'vue-material-design-icons/MapMarkerOutline.vue';
import AccountCircle from 'vue-material-design-icons/AccountCircle.vue';
import Calendar from 'vue-material-design-icons/Calendar.vue';

const carStore = useCarStore();
const featuredCars = ref(carStore.getFeaturedCars.value);
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero bg-cover bg-center h-96 flex items-center justify-center text-white" style="background-image: url('@/assets/hero-bg.jpg');">
      <div class="text-center">
        <h1 class="text-5xl font-bold mb-6">Seamless Airport Transfers</h1>
        <div class="search-bar bg-white text-black p-4 rounded-lg shadow-lg flex items-center space-x-2">
          <div class="relative flex-grow">
            <MapMarker class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="From" class="p-3 pl-10 rounded-md border border-gray-300 w-full focus:border-orange-500 focus:ring-orange-500" />
          </div>
          <div class="relative flex-grow">
            <MapMarkerOutline class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="To" class="p-3 pl-10 rounded-md border border-gray-300 w-full focus:border-orange-500 focus:ring-orange-500" />
          </div>
          <div class="relative w-32">
            <AccountCircle class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="number" placeholder="Passengers" class="p-3 pl-10 rounded-md border border-gray-300 w-full focus:border-orange-500 focus:ring-orange-500" />
          </div>
          <div class="relative w-40">
            <Calendar class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="date" class="p-3 pl-10 rounded-md border border-gray-300 w-full focus:border-orange-500 focus:ring-orange-500" id="start-date" />
          </div>
          <button class="p-3 bg-orange-500 hover:bg-orange-600 rounded-md text-white">Book Now</button>
        </div>
      </div>
    </section>

    <!-- Featured Listings Section -->
    <section class="featured-listings py-16 bg-white">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-8 text-orange-500">Top Airport Transfer Options</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CarCard v-for="car in featuredCars" :key="car.id" :car="car" />
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us py-16 bg-white">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-8 text-orange-500">Why Choose Our Transfers?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="benefit-card p-6 bg-orange-100 shadow-md rounded-md text-center">
            <h3 class="text-2xl font-bold">Hassle-Free Booking</h3>
            <p class="mt-4">Book your airport transfer effortlessly with our intuitive platform.</p>
          </div>
          <div class="benefit-card p-6 bg-orange-100 shadow-md rounded-md text-center">
            <h3 class="text-2xl font-bold">Reliable Service</h3>
            <p class="mt-4">Count on us for timely and dependable airport transfers.</p>
          </div>
          <div class="benefit-card p-6 bg-orange-100 shadow-md rounded-md text-center">
            <h3 class="text-2xl font-bold">Affordable Rates</h3>
            <p class="mt-4">Enjoy competitive pricing on all our airport transfer services.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer Section -->
    <section class="what-we-offer py-16 bg-white">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-8 text-orange-500">Our Airport Transfer Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="offer-card p-6 bg-white shadow-md rounded-md text-center">
            <h3 class="text-2xl font-bold">Flexible Booking</h3>
            <p class="mt-4">Use our "free cancellation" filter for hassle-free bookings.</p>
          </div>
          <div class="offer-card p-6 bg-white shadow-md rounded-md text-center">
            <h3 class="text-2xl font-bold">Price Alerts</h3>
            <p class="mt-4">Set alerts to get notified when prices drop.</p>
          </div>
          <div class="offer-card p-6 bg-white shadow-md rounded-md text-center">
            <h3 class="text-2xl font-bold">Customizable Filters</h3>
            <p class="mt-4">Filter results by vehicle type, amenities, and more to suit your needs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials py-16 bg-white">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-8 text-orange-500">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Add testimonial cards here -->
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq py-16 bg-white">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-8 text-orange-500">Frequently Asked Questions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="faq-card p-6 bg-white shadow-md rounded-md">
            <h3 class="text-2xl font-bold">How do I book an airport transfer?</h3>
            <p class="mt-4">You can book an airport transfer by using our search bar to enter your pickup and drop-off locations, select the number of passengers, and choose your travel date. Click "Book Now" to proceed with the booking.</p>
          </div>
          <div class="faq-card p-6 bg-white shadow-md rounded-md">
            <h3 class="text-2xl font-bold">Can I cancel my booking?</h3>
            <p class="mt-4">Yes, you can cancel your booking. We offer a "free cancellation" option for most of our services. Please check the cancellation policy for your specific booking.</p>
          </div>
          <div class="faq-card p-6 bg-white shadow-md rounded-md">
            <h3 class="text-2xl font-bold">Are your services available 24/7?</h3>
            <p class="mt-4">Yes, our airport transfer services are available 24/7 to accommodate your travel needs at any time of the day or night.</p>
          </div>
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

<style scoped>
.hero {
  background-color: #1a202c; /* Fallback color */
}
.search-bar {
  max-width: 1000px;
  margin: 0 auto;
}
input:focus {
  outline: none;
  border-color: #f97316; /* Orange color */
  box-shadow: 0 0 0 1px #f97316;
}
</style>