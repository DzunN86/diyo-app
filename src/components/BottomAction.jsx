import React, { memo } from "react";

function BottomAction({ quantity = 0, link, onClick, totalPrice = "Rp 0" }) {
  return (
    <div className="px-4 fixed bottom-5 w-full max-w-screen-xs">
      <div className="flex items-center justify-between px-4 py-2 bg-primary w-full rounded-lg">
        <div className="w-24">
          <div className="bg-black/30 text-white w-8 h-8 flex items-center justify-center rounded-md">
            {quantity}
          </div>
        </div>
        <button className="text-white font-semibold text-lg" onClick={onClick}>
          {link}
        </button>
        <p className="text-white font-semibold w-24 text-right">{totalPrice}</p>
      </div>
    </div>
  );
}

export default memo(BottomAction);
