import { useQuery } from '@tanstack/react-query'

export const useBuildQueues = () => useQuery({
    queryKey: ['build-queues'],
    queryFn: async () => {
         const response = await fetch('/api/build-queue');

         return response.json();
    },
    placeholderData: { data: []},
});
