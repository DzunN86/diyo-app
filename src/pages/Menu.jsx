import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BottomAction, CardProduct, NavBack } from "../components";
import { dataRestaurants } from "../constans";
import { AppContext } from "../context";
import { idrFormatter } from "../utils";

function MenuPage() {
  const [catalog, setCatalog] = useState(0);
  const [like, setLike] = useState(false);

  // get context
  const { basket, setBasket } = useContext(AppContext);

  const { slug, no_meja } = useParams();
  const navigate = useNavigate();

  const restaurant = dataRestaurants.find((item) => item.slug === slug);

  return (
    <>
      <NavBack backTo="/" />
      <div className="h-56 bg-black relative">
        <img
          src={restaurant.image}
          alt="Photo"
          className="object-cover w-full h-full"
        />
        <div className="w-full h-full absolute bg-gradient-to-b from-black/40 via-black/0 to-black/40 inset-0"></div>
        <div className="flex bg-primary gap-2 absolute bottom-4 text-white px-2 py-[2px] text-sm rounded-md mx-4">
          <i className="ri-file-list-3-line"></i>
          <p>No. Meja {no_meja}</p>
        </div>
      </div>
      <div className="bg-white px-4 pb-5">
        <button
          className="bg-white flex justify-center items-center shadow-s2 w-12 h-12 rounded-full float-right -translate-y-1/2 -mb-5"
          onClick={() => setLike(!like)}
        >
          <i
            className={`text-3xl text-primary ${
              !like ? "ri-heart-line" : "ri-heart-fill"
            }`}
          ></i>
        </button>
        <div className=" flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">{restaurant.name}</h1>
            <p className="text-sm">{restaurant.category}</p>
            <p>{restaurant.address}</p>
          </div>
          <hr />
          <div className="flex justify-between items-center text-sm">
            <p className="flex gap-2">
              <span className="flex text-primary gap-1">
                <i className="ri-time-line leading-[1.3]"></i> BUKA
              </span>
              until 19:00 today
            </p>
            <p className="flex bg-primary px-2 py-1 rounded-md text-white text-xs gap-1">
              <i className="ri-map-pin-time-fill"></i> {restaurant.distance}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 mt-3 pt-6 pb-20">
        <div className="flex gap-2 overflow-auto">
          {restaurant.catalog.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCatalog(index)}
              className={`py-1 px-5 rounded-md ${
                catalog === index ? "bg-primary text-white" : " text-gray-500"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex flex-col mt-2 divide-y w-full">
          {restaurant.catalog[catalog].menu.map((menu) => (
            <button
              key={menu.id}
              onClick={() =>
                navigate(`/${slug}/${no_meja}/menu/${catalog}/${menu.id}`)
              }
              className="flex py-6 gap-2 items-start w-full"
            >
              <div className="w-1/3 h-20">
                <img
                  src={menu.image}
                  alt="Restoran Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between w-full">
                <h1 className="text-base font-bold">{menu.name}</h1>
                <p className="text-base font-semibold">
                  {idrFormatter(menu.price)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      {basket.length > 0 && (
        <BottomAction
          quantity={
            basket.reduce((total, item) => total + item.quantity, 0) || 0
          }
          link="View Basket"
          onClick={() => navigate(`/${slug}/${no_meja}/checkout`)}
          totalPrice={
            idrFormatter(
              basket.reduce(
                (total, item) => total + item.quantity * item.price,
                0
              )
            ) || 0
          }
        />
      )}
    </>
  );
}

export default MenuPage;
