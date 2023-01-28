import React, { memo } from "react";

function Counter({ quantity, addQuantity, dicreaseQuantity }) {
  return (
    <div className="flex gap-4 items-center">
      <button
        className={`w-9 h-9 rounded-md flex justify-center items-center ${
          (quantity === 0 && "cursor-not-allowed bg-primary/50") || "bg-primary"
        }`}
        disabled={quantity === 0}
        onClick={dicreaseQuantity}
      >
        <i className="ri-subtract-line text-white"></i>
      </button>
      <p className="text-xl font-semibold">{quantity}</p>
      <button
        className="w-9 h-9 bg-primary rounded-md flex justify-center items-center"
        onClick={addQuantity}
      >
        <i className="ri-add-line text-white"></i>
      </button>
    </div>
  );
}

export default memo(Counter);
