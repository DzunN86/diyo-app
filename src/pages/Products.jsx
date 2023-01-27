import React from "react";
import { BottomNav, CardProduct } from "../components";
import Header from "../components/Header";
import { dataRestaurants } from "../constans";

function ProductsPage() {
  return (
    <>
      <Header />
      <div className="mt-4">
        <div className="container px-4 pb-24">
          <h1 className="mb-4 font-bold">Semua Restoran</h1>
          <div className="flex flex-col gap-4">
            {dataRestaurants.map((restaurant) => (
              <CardProduct
                key={restaurant.id}
                name={restaurant.name}
                image={restaurant.image}
                address={restaurant.address}
                distance={restaurant.distance}
                duration={restaurant.duration}
                category={restaurant.category}
              />
            ))}
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

export default ProductsPage;
