import ProductCard from "../Components/ProductCard";
import {  useContext, useState } from "react";

import { DataContext } from "../Components/DataContext";
import BrandFilter from "../Components/BrandFilter.jsx";
import CollectionFilter from "../Components/CollectionFilter.jsx";
import ColorFilter from "../Components/ColorFilter.jsx";
import PriceFilter from "../Components/PriceFilter.jsx";

function Products() {
  const { allProducts} = useContext(DataContext);
  const[mobileFilter, setMobileFilter] = useState(false);
  
  const filterOn = () => {
    setMobileFilter(true);
  }
  const filterOff = () => {
    setMobileFilter(false);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between " >
      {/* left section............................................................................................... */}
      <div className="m-2 mt-1 py-10 px-5 bg-white hidden sm:flex sm:flex-col justify-start gap-7 items-start w-[14rem] h-[100%]">
        <BrandFilter />
        <CollectionFilter />
        <PriceFilter />
        <ColorFilter />
      </div>
    {/* mobile filter..................................................................................... */}
      <div>
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-300 my-2 mx-7 sm:hidden w-[30%] py-1 rounded-md relative" 
        onClick={filterOn}>Filter</button>
      </div>
      <div  className={`absolute h-full w-full bg-white top-14 p-5 left-0 z-10 sm:hidden transition-all duration-700 ease-in-out ${mobileFilter?`opacity-100 `:`opacity-0 -translate-x-1/2 pointer-events-none`}`} >
      <BrandFilter />
        <CollectionFilter />
        <PriceFilter />
        <ColorFilter />
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-300 my-2 w-[30%] py-1 rounded-md relative" onClick={filterOff}>Apply</button>
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
