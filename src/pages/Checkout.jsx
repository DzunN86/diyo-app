import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BottomAction, CheckoutItem, Input, Toggle } from "../components";
import { AppContext } from "../context";
import { idrFormatter } from "../utils";

function CheckoutPage() {
  const promoPrice = 5000;
  const promoCode = "DIYO";
  const [isPromo, setIsPromo] = useState(false);
  const [textPromo, setTextPromo] = useState("");
  const [validPromo, setValidPromo] = useState("empty"); // empty |valid | invalid

  const { slug, no_meja } = useParams();
  const navigate = useNavigate();

  // get context
  const { basket, setBasket } = useContext(AppContext);

  // merge basket item quantity with same name
  const basketMerged = basket.reduce((acc, item) => {
    const index = acc.findIndex((i) => i.name === item.name);
    // if not found, push new item
    if (index === -1) {
      acc.push({ ...item });
    } else {
      // if found, add quantity
      acc[index].quantity += item.quantity;
    }
    return acc;
  }, []);

  // delete item from basket
  const onDeleteItem = (id) => {
    const newBasket = basket.filter((item) => item.id !== id);
    setBasket(newBasket);
  };

  // check promo code
  const onCheckPromo = (e) => {
    setTextPromo(e.target.value);
    if (e.target.value === promoCode) {
      setValidPromo("valid");
    } else {
      setValidPromo("invalid");
    }
  };

  // calculate total price
  const totalPrice = basketMerged.reduce((acc, item) => {
    if (validPromo === "valid") {
      return acc + item.quantity * item.price - promoPrice;
    } else {
      return acc + item.quantity * item.price;
    }
  }, 0);

  const onCheckout = () => {
    // clear basket
    setBasket([]);
    // navigate to confirmation page
    navigate(`/confirm`);
  };

  return (
    <>
      <div className="sticky top-0 bg-gradient-to-r z-30 from-primary to-secondary">
        <div className="flex items-center text-white gap-4 py-3 px-4 text-lg font-bold">
          <button onClick={() => navigate(-1)}>
            <i className="ri-arrow-left-line"></i>
          </button>
          <h1 className="">Pesanan (Meja-diyo-{no_meja})</h1>
        </div>
      </div>
      <div className="px-4 flex flex-col gap-5 mt-4 pb-28">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Pesananku</h1>
          <button
            onClick={() => navigate(`/${slug}/${no_meja}`)}
            className="flex gap-2 items-center border-[1.5px] px-2 py-1 rounded-lg border-gray-200"
          >
            <div className="bg-primary text-white flex h-5 w-5 justify-center items-center rounded-lg">
              <i className="ri-file-list-3-line text-xs"></i>
            </div>
            <span className="text-xs text-primary">Add Menu</span>
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {basketMerged.map((item, index) => (
            <CheckoutItem
              key={index}
              quantity={item.quantity}
              name={item.name}
              catatan={item.catatan}
              price={item.price * item.quantity}
              onDelete={() => onDeleteItem(item.id)}
            />
          ))}
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <p>Item total</p>
          <p>
            {idrFormatter(
              basketMerged.reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0)
            )}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p>Promo</p>
          <p className="text-red-500">
            {isPromo && textPromo === promoCode
              ? "-" + idrFormatter(promoPrice)
              : "-"}
          </p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <p>To Pay</p>
          <p>{idrFormatter(totalPrice)}</p>
        </div>
        <hr />
        <div>
          <div className="flex items-center gap-2 mb-3">
            <p className="text-xl font-semibold">Kode Promo</p>
            <Toggle
              onChange={() => {
                setIsPromo(!isPromo);
                setValidPromo("empty");
                setTextPromo("");
              }}
            />
          </div>
          <Input
            placeholder="Masukkan Kode Promo (ex: DIYO)"
            onChange={onCheckPromo}
            disabled={!isPromo}
            value={textPromo}
          />
          {validPromo === "invalid" && (
            <p className="text-red-500 text-xs mt-1">Kode promo tidak valid</p>
          )}
        </div>
      </div>
      <BottomAction
        quantity={basket.reduce((total, item) => total + item.quantity, 0) || 0}
        link="Checkout"
        onClick={onCheckout}
        totalPrice={idrFormatter(totalPrice)}
      />
    </>
  );
}

export default CheckoutPage;
