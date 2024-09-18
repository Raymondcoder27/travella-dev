import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface Car {
    id: number;
    make: string;
    model: string;
    price: number;
    availability: boolean;
}

export const useCarStore = defineStore('carStore', () => {
    const cars = ref<Car[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const availableCars = computed(() => cars.value.filter(car => car.availability));
    const carById = (id: number) => computed(() => cars.value.find(car => car.id === id));

    const fetchCars = async () => {
        loading.value = true;
        error.value = null;
        try {
            const response = await fetch('/api/cars');
            const data = await response.json();
            cars.value = data;
        } catch (err) {
            error.value = 'Failed to fetch car listings';
        } finally {
            loading.value = false;
        }
    };

    const addCar = async (newCar: Car) => {
        try {
            const response = await fetch('/api/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCar),
            });
            const data = await response.json();
            cars.value.push(data);
        } catch (err) {
            error.value = 'Failed to add new car';
        }
    };

    const updateCar = async (updatedCar: Car) => {
        try {
            const response = await fetch(`/api/cars/${updatedCar.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedCar),
            });
            const data = await response.json();
            const index = cars.value.findIndex(car => car.id === updatedCar.id);
            if (index !== -1) {
                cars.value[index] = data;
            }
        } catch (err) {
            error.value = 'Failed to update car';
        }
    };

    const deleteCar = async (carId: number) => {
        try {
            await fetch(`/api/cars/${carId}`, {
                method: 'DELETE',
            });
            cars.value = cars.value.filter(car => car.id !== carId);
        } catch (err) {
            error.value = 'Failed to delete car';
        }
    };

    return {
        cars,
        loading,
        error,
        availableCars,
        carById,
        fetchCars,
        addCar,
        updateCar,
        deleteCar,
    };
});
