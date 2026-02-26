import { useQuery } from '@tanstack/react-query'

export const useNews = () => useQuery({
    queryKey: ['news'],
    queryFn: async () => {
         const response = await fetch('/api/news');

         return response.json();
    },
    placeholderData: { data: []},
});

export const useSingleNews = (id) => useQuery({
    queryKey: ['news', id],
    queryFn: async () => {
        const response = await fetch('/api/news/' + id);

        return response.json();
    },
    placeholderData: { data: null},
});
