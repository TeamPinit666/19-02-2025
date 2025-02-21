import { create } from "zustand";

const useChartStore = create((set) => ({
  selectedChartData: null,
  setSelectedChartData: (data) => set({ selectedChartData: data }),
}));

export default useChartStore;
