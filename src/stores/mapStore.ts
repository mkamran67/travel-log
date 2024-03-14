import { create } from 'zustand';

type Pin = {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
};

type MapStore = {
  pins: Pin[];
  addPin: (pin: Pin) => void;
  removePin: (id: string) => void;
};

const useMapStore = create<MapStore>((set) => ({
  pins: [],
  addPin: (pin) => set((state) => ({ pins: [...state.pins, pin] })),
  removePin: (id) => set((state) => ({ pins: state.pins.filter((pin) => pin.id !== id) })),
}));

export default useMapStore;