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

         if (response.ok) {
             window.dataLayer = window.dataLayer || [];
             window.dataLayer.push({
                 'event': 'form_submission_success',
                 'form_type': 'consultation',
                 'form_location': 'footer_popup'
             });
         }

         return response.ok;
    },
});
