import AddressCard from "../Components/AddressCard";
import BuyCard from "../Components/BuyCard";
import CartCard from "../Components/CartCard";

import { useContext, useEffect } from "react";
import axios from "axios";
import { DataContext } from "../Components/DataContext";
import { useNavigate } from "react-router-dom";
import auth from "../config/firebase";

function Cart() {
    const{cartProducts,setCartProducts,setUserArr,setUId,uId}=useContext(DataContext)
    const navigate=useNavigate()

  useEffect(() => {
               
            axios
               .get("https://shoebay-backend.onrender.com/api/cartproducts")
               .then((data) => setCartProducts(data.data))
               .catch((err) => console.log("API fetching failed for cart", err));
             axios.get("https://shoebay-backend.onrender.com/api/logindetails").then((data)=>setUserArr(data.data)).catch((err)=>console.log(err))  
    auth.onAuthStateChanged((user) => {
     
      if (user){
        setUId(user.uid)
      } else{
        navigate("/login");
        console.log("User not logged in, redirecting to login page");
      }
    });
 
           }, [navigate]);

     const userCart=cartProducts.filter((item)=>{
          if(item.uId===uId){
            return item
          }
     })      
     console.log(userCart)

  return (
    <div className=" ">
      <div className=" bg-white sm:p-5 sm:grid sm:grid-cols-[2fr_2fr_1fr]  flex flex-col gap-4 ">
        {
            userCart.map((item)=><CartCard key={item._id} id={item._id} name={item.name} img={item.img} price={item.price} size={item.size} qty={item.qty} uId={uId}/>)
        }
        
        <AddressCard />
        <BuyCard />
      </div>
    </div>
  );
}

export default Cart;
