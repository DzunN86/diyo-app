import React from "react";
import { idrFormatter } from "../utils";

function CheckoutItem({ quantity, name, catatan, price, onDelete }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="bg-primary w-10 text-sm text-center py-1 rounded-md font-semibold text-white">
          {quantity}x
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-bold">{name}</h1>
          <p className="text-sm">{catatan || "-"}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-base font-semibold">{idrFormatter(price)}</p>
        <button className="text-primary text-xl" onClick={onDelete}>
          <i className="ri-close-circle-line"></i>
        </button>
      </div>
    </div>
  );
}

export default CheckoutItem;
