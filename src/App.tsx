import React from "react";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";
import { CartProvider } from "./context/CartContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <Router />
        </CartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
