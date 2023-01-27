import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts";
import { CheckoutPage, MenuPage, ProductsPage, ScanPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ProductsPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu-detail/:id" element={<MenuPage />} />
        <Route path="scan" element={<ScanPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
