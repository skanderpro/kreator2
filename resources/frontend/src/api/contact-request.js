import {useMutation} from '@tanstack/react-query'

export const useCreateContactRequest = () => useMutation({
    mutationKey: ['create-contact-request'],
    mutationFn: async (values) => {
         const response = await fetch('/api/contact-request', {
             method: 'POST',
             body: JSON.stringify(values),
             headers: {
                 'Content-Type': 'application/json',
             },
         });

         return response.ok;
    },
});
