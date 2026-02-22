import { create } from 'zustand'

interface AppState {
  isAdmin: boolean
  toggleAdmin: () => void
}

// Zustand alapú, ultrakönnyű globális állapotkezelő
export const useAppStore = create<AppState>((set) => ({
  isAdmin: false, // Alapértelmezetten a "Hallgatói" nézetet látjuk
  toggleAdmin: () => set((state) => ({ isAdmin: !state.isAdmin })),
}))
