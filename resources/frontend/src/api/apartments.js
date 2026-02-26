import { useQuery } from '@tanstack/react-query'

export const useApartments = () => useQuery({
    queryKey: ['apartments'],
    queryFn: async () => {
         const response = await fetch('/api/apartments');

         return response.json();
    },
    placeholderData: { data: []},
});

export const useApartmentsMinMaxPrice = () => useQuery({
    queryKey: ['apartments-min-max-price'],
    queryFn: async () => {
        const response = await fetch('/api/apartments/min-max-price');

        return response.json();
    },
    placeholderData: { min: 0, max: 0},
});

export const useApartmentsMinMaxArea = () => useQuery({
    queryKey: ['apartments-min-max-area'],
    queryFn: async () => {
        const response = await fetch('/api/apartments/min-max-area');

        return response.json();
    },
    placeholderData: { min: 0, max: 0},
});
