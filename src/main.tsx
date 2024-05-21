import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* Adding the ColorModeScript for local storage syncing to work correctly */}
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
      ></ColorModeScript>

      <QueryClientProvider client={queryClient}>
        {/* router view */}
        <RouterProvider router={router} />

        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
