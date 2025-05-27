import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import axios from "axios";

function CartCard(props) {
  const {  setCartProducts } = useContext(DataContext);
//here id is db id(_id)
  const incQty = async (id) => {
    try {
      const response = await axios.patch(
        `https://shoebay-backend.onrender.com/api/cartproducts/incqty/${id}`
      );

      if (response.status === 200) {
        await axios
          .get("https://shoebay-backend.onrender.com/api/cartproducts")
          .then((data) => setCartProducts(data.data))
          .catch(() => console.log("Error fetching cartproducts"));
      }
    } catch (err) {
      console.log("Unable to updateCart>>", err.response.data);
    }
  };

  const decQty = async (id) => {
    try {
      const response = await axios.patch(
        `https://shoebay-backend.onrender.com/api/cartproducts/decqty/${id}`
      );
      if (response.status === 200) {
        await axios
          .get("https://shoebay-backend.onrender.com/api/cartproducts")
          .then((data) => setCartProducts(data.data))
          .catch((err) => console.log("unable to get data", err));
      }
    } catch (err) {
      console.log("err");
    }
  };


  const deleteProduct=async(id)=>{
    try{
       const response= await axios.patch(`https://shoebay-backend.onrender.com/api/cartproducts/deleteproduct/${id}`)
        
      if(response.status===200){
        await axios
          .get("https://shoebay-backend.onrender.com/api/cartproducts")
          .then((data) => setCartProducts(data.data))
          .catch((err) => console.log("unable to get data", err));
      }
    }catch(err){
      console.log(err)
    }
    
  }

  return (
    <div className="p-2 flex items-center gap-5 bg-[#F1F3F6] rounded-md  ">
      <div className="w-[200px]  md:w-[15rem  ]">
        <img className=" rounded-md" src={props.img} alt="image err"></img>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-bold text-xl">{props.name}</p>
        <p>₹{props.price}</p>
        <p>Size:{props.size}</p>
        <div className="flex items-center justify-between border-2 py-1 px-2 border-black ">
          {props.qty < 2 ? (
            <FontAwesomeIcon
              icon={faTrash}
              className="text-red-600 cursor-pointer"
              onClick={()=>deleteProduct(props.id)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faMinusCircle}
              className="cursor-pointer"
              onClick={() => decQty(props.id)}
            />
          )}

          <p className="text-black">{props.qty}</p>
          <FontAwesomeIcon
            icon={faPlusCircle}
            className="cursor-pointer"
            onClick={() => incQty(props.id)}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
