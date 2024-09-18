import { defineStore } from 'pinia';

interface Car {
    id: number;
    make: string;
    model: string;
    price: number;
    availability: boolean;
}

interface CarState {
    cars: Car[];
    loading: boolean;
    error: string | null;
}

export const useCarStore = defineStore('carStore', {
    state: (): CarState => ({
        cars: [],
        loading: false,
        error: null,
    }),

    getters: {
        availableCars: (state) => state.cars.filter(car => car.availability),
        carById: (state) => (id: number) => state.cars.find(car => car.id === id),
    },

    actions: {
        async fetchCars() {
            this.loading = true;
            this.error = null;
            try {
                // Replace with your API endpoint
                const response = await fetch('/api/cars');
                const data = await response.json();
                this.cars = data;
            } catch (error) {
                this.error = 'Failed to fetch car listings';
            } finally {
                this.loading = false;
            }
        },

        async addCar(newCar: Car) {
            try {
                // Replace with your API endpoint
                const response = await fetch('/api/cars', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newCar),
                });
                const data = await response.json();
                this.cars.push(data);
            } catch (error) {
                this.error = 'Failed to add new car';
            }
        },

        async updateCar(updatedCar: Car) {
            try {
                // Replace with your API endpoint
                const response = await fetch(`/api/cars/${updatedCar.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedCar),
                });
                const data = await response.json();
                const index = this.cars.findIndex(car => car.id === updatedCar.id);
                if (index !== -1) {
                    this.cars[index] = data;
                }
            } catch (error) {
                this.error = 'Failed to update car';
            }
        },

        async deleteCar(carId: number) {
            try {
                // Replace with your API endpoint
                await fetch(`/api/cars/${carId}`, {
                    method: 'DELETE',
                });
                this.cars = this.cars.filter(car => car.id !== carId);
            } catch (error) {
                this.error = 'Failed to delete car';
            }
        },
    },
});