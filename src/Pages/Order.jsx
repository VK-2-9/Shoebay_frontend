import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../config/firebase";
import axios from "axios";
import { DataContext } from "../Components/DataContext";
import OrderProducts from "../Components/OrderProducts";

function Order() {
  const navigate = useNavigate();
  const [orderArr, setOrderArr] = useState([]);
  const{setUId,uId}=useContext(DataContext)
  

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }else{
        setUId(user.uid)
         axios
      .get("https://shoebay-backend.onrender.com/api/orderproducts")
      .then((data) => {
        
       const foundUser=(data.data).filter((item)=>item.uId===user.uid)
        setOrderArr(foundUser)
        console.log(orderArr)
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
      }
    });

   
  }, [navigate])

  return (
    
    <div className="m-2 ">
      <div className="bg-white p-2">
          
      <p className="text-xl font-bold">Here you can view your past orders.</p>
      </div>
    
      <div >
        {
         orderArr.length===0?<p>No orders found</p>:
          orderArr.map((item)=>{
             return <OrderProducts name={item.name} address={item.address} price={item.price} products={item.products} key={item._id}/>
          })
        }
      </div>
    </div>
  );
}

export default Order;
