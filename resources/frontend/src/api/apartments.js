import {useQuery} from '@tanstack/react-query'

export const useApartments = (filters) => useQuery({
    queryKey: ['apartments', filters],
    queryFn: async () => {
        const query = [...Object.entries(filters)].reduce((acc, [key, value]) => {
            if (Array.isArray(value)) {
                key = `${key}[]`;
            }

            if (Array.isArray(value)) {
                value.forEach(item => acc.append(key, item));
            } else if (value) {
                acc.append(key, value);
            }
            return acc;
        }, new URLSearchParams());

        const response = await fetch(`/api/apartments?${query.toString()}`);

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

export const useApartmentsMeta = () => useQuery({
    queryKey: ['apartments-meta'],
    queryFn: async () => {
        const response = await fetch('/api/apartments/meta');

        return response.json();
    },
    placeholderData: {
        'price': {
            'min': 0,
            'max': 0,
        },
        'area': {
            'min': 0,
            'max': 0,
        },
        'rooms': [],
        'buildings': [],
        'sections': [],
        'parking_count': [],
    },
});

export const useApartmentsUnsoldCount = () => useQuery({
    queryKey: ['apartments-unsold-count'],
    queryFn: async () => {
        const response = await fetch('/api/apartments/unsold-count');

        return response.json();
    },
    placeholderData: {
        apartment: 0,
        parking: 0,
    },
});

