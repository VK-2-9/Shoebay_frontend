import AddressCard from "../Components/AddressCard";
import BuyCard from "../Components/BuyCard";
import CartCard from "../Components/CartCard";

import { useContext, useEffect } from "react";
import axios from "axios";
import { DataContext } from "../Components/DataContext";
import { useNavigate } from "react-router-dom";
import auth from "../config/firebase";

function Cart() {
    const{cartProducts,setCartProducts,allProducts}=useContext(DataContext)
    const navigate=useNavigate()

  useEffect(() => {
               
            const data= axios
               .get("http://localhost:5000/api/cartproducts")
               .then((data) => setCartProducts(data.data))
               .catch((err) => console.log("API fetching failed for cart", err));

               console.log(cartProducts) 

              
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
 
           }, []);




  return (
    <div className=" ">
      <div className=" bg-white sm:p-5 sm:grid sm:grid-cols-[2fr_2fr_1fr]  flex flex-col gap-4 ">
        {
            cartProducts.map((item)=><CartCard key={item.id} id={item._id} name={item.name} img={item.img} price={item.price} size={item.size} qty={item.qty}/>)
        }
        
        <AddressCard />
        <BuyCard />
      </div>
    </div>
  );
}

export default Cart;
