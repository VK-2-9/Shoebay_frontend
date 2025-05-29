import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../config/firebase";
import axios from "axios";

function Order() {
  const navigate = useNavigate();
  const [orderArr,setOrderArr] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });

    axios.get("https://shoebay-backend.onrender.com/api/orderproducts")
      .then((data) => {
        console.log(data.data);
        setOrderArr(data.data);
        if (data.data.length === 0) {
          alert("No orders found")        }

      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, [navigate]);

  return (
    <div className="p-5 m-5 bg-white">
      <h1>Order</h1>
      <p>Here you can view your past orders.</p>
      <div></div>
    </div>
  );
}

export default Order;
