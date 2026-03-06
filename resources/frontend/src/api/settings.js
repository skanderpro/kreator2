import { useQuery } from '@tanstack/react-query'

export const useSettings = () => useQuery({
    queryKey: ['settings'],
    queryFn: async () => {
         const response = await fetch('/api/settings');

         return response.json();
    },
    placeholderData: {},
});
