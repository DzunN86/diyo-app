import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts";
import {
  CheckoutPage,
  MenuDetailPage,
  MenuPage,
  RestaurantsPage,
  ScanPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<RestaurantsPage />} />
        <Route path="/:slug" element={<MenuPage />} />
        <Route path="/:slug/menu/:menu_id" element={<MenuDetailPage />} />
        <Route path="scan" element={<ScanPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
