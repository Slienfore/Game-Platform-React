import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* Adding the ColorModeScript for local storage syncing to work correctly */}
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
      ></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
