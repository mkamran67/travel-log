import create from 'zustand';

type Coordinate = {
  lat: number;
  lng: number;
};

type CoordinateStore = {
  coordinates: Coordinate[];
  currentCoordinate: Coordinate | null;
  addCoordinate: (coordinate: Coordinate) => void;
  setCurrentCoordinate: (coordinate: Coordinate) => void;
};

const useCoordinateStore = create<CoordinateStore>((set) => ({
  coordinates: [],
  currentCoordinate: null,
  addCoordinate: (coordinate) => set((state) => ({ coordinates: [...state.coordinates, coordinate] })),
  setCurrentCoordinate: (coordinate) => set({ currentCoordinate: coordinate }),
}));

export default useCoordinateStore;