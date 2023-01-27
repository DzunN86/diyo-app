import React from "react";
import { Logo } from "../assets";

function Header() {
  return (
    <div className="sticky top-0 bg-gradient-to-r z-30 from-primary to-secondary">
      <div className="flex justify-center py-3 px-4">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Header;
