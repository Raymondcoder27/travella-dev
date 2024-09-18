import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
    // State
    const user = ref(null);
    const isAuthenticated = ref(false);

    // Actions
    function login(userData: any) {
        user.value = userData;
        isAuthenticated.value = true;
    }

    function logout() {
        user.value = null;
        isAuthenticated.value = false;
    }

    function updateProfile(updatedData: any) {
        if (user.value && typeof user.value === 'object' && updatedData && typeof updatedData === 'object') {
            user.value = { ...user.value, ...updatedData };
        }
    }

    // Getters
    const getUser = computed(() => user.value);
    const getIsAuthenticated = computed(() => isAuthenticated.value);

    return {
        user,
        isAuthenticated,
        login,
        logout,
        updateProfile,
        getUser,
        getIsAuthenticated,
    };
});