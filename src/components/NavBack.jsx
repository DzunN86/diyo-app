import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBack({ backTo }) {
  const [bgNav, setBgNav] = useState(false);
  const router = useNavigate();

  const changeNavBg = () => {
    if (window.scrollY >= 80) {
      setBgNav(true);
    } else {
      setBgNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 z-30 w-full max-w-screen-xs transition-all duration-300 ${
        bgNav ? "bg-primary shadow-s2" : "bg-transparent"
      }`}
    >
      <div className="flex items-center text-white gap-4 py-3 px-4 text-xl font-bold">
        <button
          onClick={() => router(backTo ? backTo : -1)}
          className="flex bg-primary px-1 rounded-full"
        >
          <i className="ri-arrow-left-line"></i>
        </button>
      </div>
    </div>
  );
}

export default NavBack;
