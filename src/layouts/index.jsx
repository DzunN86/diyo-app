import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="bg-gray-800 font-nunitoSans">
        <main className="min-h-screen py-0 mx-auto max-w-screen-xs bg-gray-100 relative">
          <Outlet />
        </main>
      </div>
    </>
  );
}
