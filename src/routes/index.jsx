import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts";
import {
  CheckoutPage,
  Confirm,
  MenuDetailPage,
  MenuPage,
  RestaurantsPage,
  ScanPage,
} from "../pages";

function RouteApp() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<RestaurantsPage />} />
        <Route path="/:slug/:no_meja?" element={<MenuPage />} />
        <Route
          path="/:slug/:no_meja/menu/:catalog_id/:menu_id"
          element={<MenuDetailPage />}
        />
        <Route path="/scan" element={<ScanPage />} />
        <Route path="/:slug/:no_meja/checkout" element={<CheckoutPage />} />
        <Route path="confirm" element={<Confirm />} />
      </Route>
    </Routes>
  );
}

export default RouteApp;
