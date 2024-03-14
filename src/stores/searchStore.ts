import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type SearchState = {
  query: string;
  setQuery: (query: string) => void;
};

const useSearchStore = create(devtools<SearchState>((set) => ({
  query: "",
  setQuery: (userInput: string) => set((state) => ({ query: userInput })),
})));

export default useSearchStore;