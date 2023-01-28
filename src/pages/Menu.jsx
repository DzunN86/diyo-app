import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BottomAction, CardProduct } from "../components";
import { dataRestaurants } from "../constans";
import { idrFormatter } from "../utils";

function MenuPage() {
  const [catalog, setCatalog] = useState(0);
  const { slug } = useParams();
  const restaurant = dataRestaurants.find((item) => item.slug === slug);
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
          src={restaurant.image}
          alt="Photo"
          className="object-cover w-full h-full"
        />
        <div className="w-full h-full absolute bg-gradient-to-b from-black/40 via-black/0 to-black/40 inset-0"></div>
        <div className="flex bg-primary gap-2 absolute bottom-4 text-white px-2 py-[2px] text-sm rounded-md mx-4">
          <i className="ri-file-list-3-line"></i>
          <p>No. Meja 1</p>
        </div>
      </div>
      <div className="bg-white px-4 pb-5">
        <div className="bg-white flex justify-center items-center shadow-s2 w-12 h-12 rounded-full float-right -translate-y-1/2 -mb-5">
          <i className="ri-heart-line text-3xl text-primary"></i>
        </div>
        <div className=" flex w-full flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">Dominico Coffe</h1>
            <p className="text-sm">Fast Food</p>
            <p>JL. Kebon Jeruk No. 1</p>
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
              <i className="ri-map-pin-time-fill"></i> 1.5 km
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 mt-3 pt-6">
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
        <div className="flex flex-col mt-2 divide-y-2 w-full">
          {restaurant.catalog[catalog].menu.map((menu) => (
            <div key={menu.id} className="flex py-6 gap-2 items-start w-full">
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
            </div>
          ))}
        </div>
      </div>
      <BottomAction quantity={0} link="View Basket" totalPrice="Rp 5000" />
    </>
  );
}

export default MenuPage;
