import { useQuery } from '@tanstack/react-query'

export const useDocuments = () => useQuery({
    queryKey: ['documents'],
    queryFn: async () => {
         const response = await fetch('/api/documents');

         return response.json();
    },
    placeholderData: { data: []},
});
