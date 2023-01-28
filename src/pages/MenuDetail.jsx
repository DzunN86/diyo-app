import React from "react";
import { BottomAction, Counter, TextArea } from "../components";

function MenuDetailPage() {
  const [catatan, setCatatan] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  return (
    <>
      <div className="fixed top-0 z-30 w-full max-w-screen-xs bg-transparent">
        <div className="flex items-center text-white gap-4 py-3 px-4 text-xl font-bold">
          <button className="flex bg-primary px-1 rounded-full">
            <i className="ri-arrow-left-line"></i>
          </button>
        </div>
      </div>
      <div className="h-56 bg-black relative">
        <img
          src="https://media-order.bkdelivery.co.id/thumb/product_photo/2022/12/19/dzc24j9bhxxzxjhmbvjkvj_product_list.jpg"
          alt="Photo"
          className="object-cover w-full h-full"
        />
        <div className="w-full h-full absolute bg-gradient-to-b from-black/40 via-black/0 to-black/40 inset-0"></div>
      </div>
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center border-b-2 border-primary/50 mb-4 pb-3">
          <h1 className="text-2xl font-bold">Dominico Coffe</h1>
          <p className="text-xl text-primary font-semibold">Rp 5000</p>
        </div>
        <h1 className="text-lg font-semibold mb-2">Special Request</h1>
        <TextArea
          placeholder="Catatan untuk Restoran"
          maxLength={100}
          value={catatan}
          onChange={(e) => setCatatan(e.target.value)}
        />
        <div className="flex justify-center items-center mt-4">
          <Counter
            quantity={quantity}
            addQuantity={() => setQuantity(quantity + 1)}
            dicreaseQuantity={() => setQuantity(quantity - 1)}
          />
        </div>
      </div>
      <BottomAction
        quantity={quantity}
        link="Add to Basket"
        totalPrice="Rp 5000"
      />
    </>
  );
}

export default MenuDetailPage;
