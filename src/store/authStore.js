import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    combine({
      user: null,
      isAuthenticated: false,
    }, 
    (set) => ({
      setIsAuthenticated: (status) => set({ isAuthenticated: status }),
      setUser: (user) => set({ user }),  
    })),
    {
      name: 'auth-storage', // localStorage key
      // partialize: localStorage에 저장할 값만 골라내는 필터
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
<<<<<<< HEAD
        user: state.user
=======
>>>>>>> 17daae0710bc1cb9efcfcd5d94e80a749f342c24
      }),
    }
  )
);

export default useAuthStore;
