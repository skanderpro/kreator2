import {useQuery} from '@tanstack/react-query'

export const useApartments = (filters) => useQuery({
    queryKey: ['apartments', filters],
    queryFn: async () => {
        const queryString = new URLSearchParams(filters).toString();

        const response = await fetch(`/api/apartments?${queryString}`);

        return response.json();
    },
    placeholderData: {data: [], meta: {total: 0}},
});

export const useSingleApartment = (id) => useQuery({
    queryKey: ['apartment', id],
    queryFn: async () => {
        const response = await fetch(`/api/apartments/${id}`);

        return response.json();
    },
    placeholderData: {data: null},
});

export const useApartmentsMinMaxPrice = () => useQuery({
    queryKey: ['apartments-min-max-price'],
    queryFn: async () => {
        const response = await fetch('/api/apartments/min-max-price');

        return response.json();
    },
    placeholderData: {min: 0, max: 0},
});

export const useApartmentsMinMaxArea = () => useQuery({
    queryKey: ['apartments-min-max-area'],
    queryFn: async () => {
        const response = await fetch('/api/apartments/min-max-area');

        return response.json();
    },
    placeholderData: {min: 0, max: 0},
});
