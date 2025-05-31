import AddressCard from "../Components/AddressCard";
import BuyCard from "../Components/BuyCard";
import CartCard from "../Components/CartCard";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "../Components/DataContext";
import { useNavigate } from "react-router-dom";
import auth from "../config/firebase";

function Cart() {
  const { cartProducts, setCartProducts, setUId, uId } =
    useContext(DataContext);
  const navigate = useNavigate();
  const [userCart, setUsercart] = useState([]);


  useEffect(()=>{
        axios
      .get("https://shoebay-backend.onrender.com/api/cartproducts")
      .then((data) => setCartProducts(data.data))
      .catch((err) => console.log("API fetching failed for cart", err));

  },[setCartProducts])


  useEffect(()=>{
        auth.onAuthStateChanged((user) => {
      if (user) {
        setUId(user.uid);}
        else{
            navigate("/login");
        console.log("User not logged in, redirecting to login page");
        }
  })},[navigate,setUId])

  useEffect(() => {
   
          const filtered = cartProducts.filter((item) => {
          if (item.uId === uId) {
            return item;
          }
        });
        setUsercart(filtered);
      
  }, [cartProducts]);

  let totalPrice = 0;
  userCart.map((item) => {
    totalPrice = totalPrice + Number(item.price.replace(/,/g, "")) * item.qty;
    return totalPrice;
  });

  return (
    <div>
      {userCart.length === 0 ? (
        <div className="p-5 m-5 bg-white rounded-md shadow-lg text-center">
          <p>
            Your cart is empty. Please add some products to your cart to proceed
            with the purchase.
          </p>
        </div>
      ) : (
        <div className=" bg-white sm:p-5 sm:grid sm:grid-cols-[2fr_2fr_1fr]  flex flex-col gap-4 ">
          <div>
            {userCart.map((item) => (
              <CartCard
                key={item._id}
                id={item._id}
                name={item.name}
                img={item.img}
                price={item.price}
                size={item.size}
                qty={item.qty}
                uId={uId}
              />
            ))}
          </div>

          <AddressCard />
          <BuyCard userCart={userCart} totalPrice={totalPrice} />
        </div>
      )}
    </div>
  );
}

export default Cart;
