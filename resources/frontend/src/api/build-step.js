import { useQuery } from '@tanstack/react-query'

export const useBuildSteps = () => useQuery({
    queryKey: ['build-steps'],
    queryFn: async () => {
         const response = await fetch('/api/build-steps');

         return response.json();
    },
    placeholderData: { data: []},
});
