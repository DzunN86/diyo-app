import React from "react";
import { Link } from "react-router-dom";

function CardProduct({
  name,
  image,
  address,
  distance,
  duration,
  category,
  to,
}) {
  return (
    <Link
      to={to}
      className="flex gap-3 items-center hover:shadow-s2 transition-all duration-500 bg-white p-4 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <div className="absolute rounded-bl-2xl flex items-center gap-1 px-3 py-1.5 text-xs top-0 right-0 bg-gray-300/50">
        <i className="ri-time-line"></i>
        <p>{duration}</p>
      </div>
      <img
        src={image}
        alt="Restoran Image"
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex w-full flex-col gap-1">
        <h1 className="text-lg font-bold">{name}</h1>
        <div className="flex text-sm w-full md:w-2/3 justify-between">
          <p className="text-gray-500 truncate">{address}</p>
          <p className="text-secondary before:content-['\2022'] before:text-gray-300 before:mx-2">
            {distance}
          </p>
        </div>
        <p className="text-sm">{category}</p>
      </div>
    </Link>
  );
}

export default CardProduct;
