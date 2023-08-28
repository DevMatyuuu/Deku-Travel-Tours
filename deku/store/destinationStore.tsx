import { create } from 'zustand';

interface destinationState {
    destinations: Destination[],
    setDestination: (destinations: Destination[]) => void;
}

export const useDestinationStore = create<destinationState>()((set) => ({
    destinations: [],
    setDestination: (destinations) => set(() => ({ destinations })),
}))