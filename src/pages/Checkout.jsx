import React from "react";
import { BottomAction, Input, Toggle } from "../components";

function CheckoutItem() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="bg-primary w-12 text-center py-1 rounded-md font-semibold text-white">
          1x
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">Premium Enak</h1>
          <p className="text-sm">Normal Spcy</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-lg font-semibold">28.000</p>
        <button className="text-primary text-xl">
          <i className="ri-close-circle-line"></i>
        </button>
      </div>
    </div>
  );
}

function CheckoutPage() {
  const [isPromo, setIsPromo] = React.useState(false);
  return (
    <>
      <div className="sticky top-0 bg-gradient-to-r z-30 from-primary to-secondary">
        <div className="flex items-center text-white gap-4 py-3 px-4 text-lg font-bold">
          <i className="ri-arrow-left-line"></i>
          <h1 className="">Pesanan (Meja-diyo-1)</h1>
        </div>
      </div>
      <div className="px-4 flex flex-col gap-5">
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-xl font-semibold">Pesananku</h1>
          <button className="flex gap-2 items-center border-[1.5px] px-2 py-1 rounded-lg border-gray-200">
            <div className="bg-primary text-white flex h-5 w-5 justify-center items-center rounded-lg">
              <i className="ri-file-list-3-line text-xs"></i>
            </div>
            <span className="text-xs text-primary">Add Menu</span>
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
          <CheckoutItem />
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <p>Subtotal</p>
          <p>Rp 97.000</p>
        </div>
        <hr />
        <div>
          <div className="flex items-center gap-2 mb-3">
            <p className="text-xl font-semibold">Kode Promo</p>
            <Toggle onChange={() => setIsPromo(!isPromo)} />
          </div>
          <Input placeholder="Masukkan Kode Promo" disabled={!isPromo} />
        </div>
      </div>
      <BottomAction quantity={0} link="Checkout" totalPrice="Rp 5000" />
    </>
  );
}

export default CheckoutPage;
