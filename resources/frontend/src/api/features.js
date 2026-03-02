import { useQuery } from '@tanstack/react-query'

export const useFeatures = () => useQuery({
    queryKey: ['features'],
    queryFn: async () => {
         const response = await fetch('/api/features');

         return response.json();
    },
    placeholderData: { data: []},
});
