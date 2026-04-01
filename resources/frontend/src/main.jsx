import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./context/AppProvider";
const queryClient = new QueryClient();

const root = document.getElementById('root');

// window.addEventListener('load', () => {
//     if (!root) {
//         return;
//     }
//
//     requestAnimationFrame(() => {
//         while(root.nextSibling instanceof Text) {
//             root.nextSibling.remove()
//         }
//     })
// });

createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AppProvider>
                    <App />
                </AppProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </StrictMode>,
);
