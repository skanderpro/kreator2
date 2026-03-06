import { useQuery } from '@tanstack/react-query'

export const useTechnologies = () => useQuery({
    queryKey: ['technologies'],
    queryFn: async () => {
         const response = await fetch('/api/technology');

         return response.json();
    },
    placeholderData: {data: []},
});
