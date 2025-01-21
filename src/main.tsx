import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./utils/routes";
// Tanstack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
