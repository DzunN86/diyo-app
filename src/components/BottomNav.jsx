import React from "react";
import { NavLink } from "react-router-dom";

function BottomNav() {
  const activeMenu = {
    color: "#FF5B37",
  };
  return (
    <div className="fixed bottom-0 w-full max-w-screen-xs bg-white shadow-lg border-t">
      <div className="flex w-full justify-between py-3 px-4 text-xs text-gray-400">
        <NavLink
          className="flex flex-col items-center w-1/2"
          to="/"
          style={({ isActive }) => (isActive ? activeMenu : undefined)}
        >
          <i className="ri-store-2-fill text-lg"></i>
          <p>Restoran</p>
        </NavLink>
        <div className="flex flex-col items-center w-1/2">
          <i className="ri-time-fill text-lg"></i>
          <p>Pesanan</p>
        </div>
        <NavLink className="flex flex-col items-center w-1/2" to="/scan">
          <div className="bg-gradient-to-tl from-primary to-secondary rounded-full w-16 h-16 flex items-center justify-center text-white -translate-y-10 -mb-9 shadow-s2">
            <i className="ri-qr-scan-2-line text-3xl"></i>
          </div>
          <p>Scan</p>
        </NavLink>
        <div className="flex flex-col items-center w-1/2">
          <i className="ri-heart-fill text-lg"></i>
          <p>Favorit</p>
        </div>
        <div className="flex flex-col items-center w-1/2">
          <i className="ri-user-fill text-lg"></i>
          <p>Akun</p>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
