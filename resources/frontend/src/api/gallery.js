import { useQuery } from '@tanstack/react-query'

export const useGallery = () => useQuery({
    queryKey: ['gallery'],
    queryFn: async () => {
         const response = await fetch('/api/gallery-items');

         return response.json();
    },
    placeholderData: { data: []},
});
