import React from "react";

function BottomAction({ quantity = 0, link, to, totalPrice = "Rp 0" }) {
  return (
    <div className="px-4 fixed bottom-5 w-full max-w-screen-xs">
      <div className="flex items-center justify-between p-4 bg-primary w-full rounded-lg">
        <div className="w-24">
          <div className="bg-black/40 text-white w-8 h-8 flex items-center justify-center rounded-md">
            {quantity}
          </div>
        </div>
        <h1 className="text-white font-semibold text-lg">{link}</h1>
        <p className="text-white font-semibold w-24 text-right">{totalPrice}</p>
      </div>
    </div>
  );
}

export default BottomAction;
