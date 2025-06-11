import { useContext, useEffect, useState } from "react";
import auth from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { DataContext } from "./DataContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BuyCard(props) {
  const [deliveryCharge, setDeliveryCharge] = useState();
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const { setUId, uId, orderName, orderAddress, orderMobileNumber } =
    useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    setDeliveryCharge(Math.floor(Math.random() * 100) + 1);
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUId(user.uid);
        setOrderConfirmed(false)
      }
    });
  }, []);
  const finalPrice = props.totalPrice + deliveryCharge;

  const placeOrder = async () => {
   

    if (!orderName || !orderAddress || !orderMobileNumber) {
      console.log(orderAddress,orderMobileNumber,orderName)
      alert("Please fill all the details to place order");
    }else if(orderMobileNumber.length!==10){
        alert("Invalid mobile number")
    } else {
      await axios
        .post("https://shoebay-backend.onrender.com/api/orderproducts", {
          uId: uId,
          price: finalPrice,
          name: orderName,
          products: props.userCart,
          address: orderAddress,
          mobileNumber: orderMobileNumber,
        })
        .then((data) => {
          console.log(data.data);
           setOrderConfirmed(true);
        })
        .catch((err) => {
          console.log(err);
          alert("Unable to place order, please try later");
        });
    }
  };

  return (
    <div className="bg-[#F1F3F6]  p-2 rounded-md max-h-[16rem] shadow-md ">
      <p>Total price:</p>
      <table>
        <tbody>
          <tr>
            <td className="p-2">Price:</td>
            <td className="p-2">₹{props.totalPrice}</td>
          </tr>
          <tr>
            <td className="p-2">Shipping:</td>
            <td className="p-2">₹{deliveryCharge}</td>
          </tr>
          <tr>
            <td className="p-2">Total:</td>
            <td className="p-2">₹{finalPrice}</td>
          </tr>
        </tbody>
      </table>
      <button
        className="  px-2 py-1 border-2 border-black rounded-md flex items-center gap-1 hover:bg-black hover:text-white transition duration-300"
        onClick={placeOrder}
      >
        Place order
      </button>

      <div
        className={`bg-green-600 px-3 py-3 rounded-md text-white shadow-lg w-fit cursor-none  z-[25] ${orderConfirmed?"popup":"hidden"}`}
      >
        Your order has been placed
      </div>
    </div>
  );
}

export default BuyCard;
