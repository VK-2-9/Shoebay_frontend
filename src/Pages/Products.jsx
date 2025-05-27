import ProductCard from "../Components/ProductCard";
import { useState, useContext } from "react";

import { DataContext } from "../Components/DataContext";
import BrandFilter from "../Components/BrandFilter.jsx";
import CollectionFilter from "../Components/CollectionFilter.jsx";
import ColorFilter from "../Components/ColorFilter.jsx";
import PriceFilter from "../Components/PriceFilter.jsx";

function Products() {
  const { allProducts} = useContext(DataContext);

  return (
    <div className="flex justify-between">
      {/* left section............................................................................................... */}
      <div className="m-2 mt-1 py-10 px-5 bg-white hidden sm:flex flex-col justify-start gap-7 items-start w-[14rem] h-[100%]">
        <BrandFilter />
        <CollectionFilter />
        <PriceFilter />
        <ColorFilter />
      </div>

      {/* Right section............................................................................................... */}

      <div className="m-2 mt-1 py-10 px-[1rem] sm:px-14 bg-white w-[100%] flex flex-wrap sm:gap-7  ">
        {allProducts.map((item) => {
          
          return (
            
            <ProductCard key={item._id} id={item.id} name={item.name} img={item.img} price={item.price} />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
