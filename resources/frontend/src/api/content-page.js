import { useQuery } from '@tanstack/react-query'

export const useSinglePage = (slug) => useQuery({
    queryKey: ['content-page', slug],
    queryFn: async () => {
        const response = await fetch('/api/content-pages/' + slug);

        return response.json();
    },
    placeholderData: { data: null},
});
