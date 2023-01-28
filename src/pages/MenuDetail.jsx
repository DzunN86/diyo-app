import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BottomAction, Counter, NavBack, TextArea } from "../components";
import { dataRestaurants } from "../constans";
import { AppContext } from "../context";
import { idrFormatter } from "../utils";

function MenuDetailPage() {
  const [catatan, setCatatan] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);

  // get context
  const { basket, setBasket } = useContext(AppContext);

  const { slug, no_meja, catalog_id, menu_id } = useParams();
  const navigate = useNavigate();

  // find menu detail
  const MenuDetail = dataRestaurants
    .find((item) => item.slug === slug)
    .catalog[catalog_id].menu.find((item) => item.id == menu_id);

  // add to basket
  const onAddToBasket = () => {
    const data = {
      ...MenuDetail,
      quantity,
      catatan,
    };
    try {
      // add to basket
      setBasket([...basket, data]);
      // navigate to menu page
      navigate(`/${slug}/${no_meja}`);
    } catch (error) {
      alert("Maaf, terjadi kesalahan");
    }
  };

  return (
    <>
      <NavBack />
      <div className="h-56 bg-black relative">
        <img
          src={MenuDetail.image}
          alt="Photo"
          className="object-cover w-full h-full"
        />
        <div className="w-full h-full absolute bg-gradient-to-b from-black/40 via-black/0 to-black/40 inset-0"></div>
      </div>
      <div className="px-4 mt-4">
        <div className="flex justify-between items-center border-b-2 border-primary/50 mb-4 pb-3">
          <h1 className="text-2xl font-bold">{MenuDetail.name}</h1>
          <p className="text-xl text-primary font-semibold">
            {idrFormatter(MenuDetail.price)}
          </p>
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
        onClick={onAddToBasket}
        link="Add to Basket"
        totalPrice={idrFormatter(MenuDetail.price * quantity)}
      />
    </>
  );
}

export default MenuDetailPage;
