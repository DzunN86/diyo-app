import React from "react";
import { useNavigate } from "react-router-dom";
import { IlusConfirm } from "../assets";

function Confirm() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col px-4 items-center justify-center bg-[#F8F5F2]">
      <img src={IlusConfirm} alt="ilustrasi" className="mb-4" />
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-semibold">Order Confirmed!</h1>
        <p className="text-gray-500 text-sm w-72 text-center">
          Silahkan tunggu pesanan anda, pesanan akan segera diantar
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-white px-4 py-2 rounded-lg mt-4"
        >
          Kemabli ke Restoran
        </button>
      </div>
    </div>
  );
}

export default Confirm;
