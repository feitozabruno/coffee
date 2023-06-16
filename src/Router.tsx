import React from "react";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/index";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/index";
import { Sucess } from "./pages/Sucess";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sucess" element={<Sucess />} />
      </Route>
    </Routes>
  );
}
