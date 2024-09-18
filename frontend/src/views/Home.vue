<script setup>
import { ref } from 'vue';
import Button from '@/components/common/Button.vue';
import CarCard from '@/components/car/CarCard.vue';

const featuredCars = ref([
    // Example data, replace with actual data
    { id: 1, make: 'Toyota', model: 'Camry', price: '$50/day', image: 'car1.jpg' },
    { id: 2, make: 'Honda', model: 'Civic', price: '$45/day', image: 'car2.jpg' },
    { id: 3, make: 'Ford', model: 'Mustang', price: '$70/day', image: 'car3.jpg' },
]);

const testimonials = ref([
    // Example data, replace with actual data
    { id: 1, name: 'John Doe', feedback: 'Great service and clean cars!' },
    { id: 2, name: 'Jane Smith', feedback: 'Easy booking process and friendly staff.' },
]);

const benefits = ref([
    // Example data, replace with actual data
    { id: 1, title: 'Wide Selection', description: 'Choose from a variety of cars.' },
    { id: 2, title: 'Affordable Prices', description: 'Competitive pricing for all rentals.' },
    { id: 3, title: '24/7 Support', description: 'We are here to help you anytime.' },
]);
</script>

<template>
    <div class="home-page">
        <!-- Hero Banner -->
        <section class="hero bg-cover bg-center h-96 flex items-center justify-center text-white" style="background-image: url('@/assets/hero-bg.jpg');">
            <div class="text-center">
                <h1 class="text-4xl font-bold">Welcome to Travel X Car Booking</h1>
                <p class="mt-4 text-lg">Your journey starts here</p>
                <Button class="mt-6">Get Started</Button>
            </div>
        </section>

        <!-- Featured Cars -->
        <section class="featured-cars py-12">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8">Featured Cars</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CarCard v-for="car in featuredCars" :key="car.id" :car="car" />
                </div>
            </div>
        </section>

        <!-- Travel Plans -->
        <section class="travel-plans py-12 bg-gray-100">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8">Plan Your Travel</h2>
                <p class="text-center">Manage your travel itinerary and car bookings in one place.</p>
                <div class="flex justify-center mt-6">
                    <Button>View Travel Plans</Button>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="testimonials py-12">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial p-6 bg-white shadow-md rounded-lg">
                        <p class="text-lg italic">"{{ testimonial.feedback }}"</p>
                        <p class="mt-4 text-right font-bold">- {{ testimonial.name }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Benefits -->
        <section class="benefits py-12 bg-gray-100">
            <div class="container mx-auto">
                <h2 class="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="benefit in benefits" :key="benefit.id" class="benefit p-6 bg-white shadow-md rounded-lg">
                        <h3 class="text-xl font-bold">{{ benefit.title }}</h3>
                        <p class="mt-2">{{ benefit.description }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.hero {
    background-image: url('@/assets/hero-bg.jpg');
}
</style>