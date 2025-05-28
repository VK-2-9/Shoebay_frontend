import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "./DataContext";
import { useNavigate } from "react-router-dom";
import auth from "../config/firebase";

function ProductCard(props) {
  const [selectedSize, setSelectedSize] = useState();
  const [buttonDisplay, setButtonDisplay] = useState(true);
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();
  const {uId,setUId}=useContext(DataContext)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUId(user.uid)
      if (user) { 
        setLogged(true);
      }
    });
  }, []);

  const handleSize = (e) => {
    setSelectedSize(e.target.value);
  };

  const addToCart = async (name, size,uId) => {
    // checking duplicate cart

    if (!selectedSize) {
      alert("Select a size");
    } else if (!logged) {
      alert("login First");
    } else {
      setButtonDisplay(false);
      console.log(uId)
      await axios
        .post("http://localhost:5000/api/cartproducts", {
          name: props.name,
          img: props.img,
          size: selectedSize,
          price: props.price,
          id: props.id, // normal ID..............................................................
          qty: "1",
          uId:uId
        })
        .then((data) => console.log(data.data))
        .catch((err) => {
          console.log(err.response.data);
          alert("Product already added to the cart");
        });
    }
  };

  const goToCart = (name, size) => {
    navigate("/cart");
  };
  return (
    <div className=" ml-[6%] mb-4 sm:ml-0 sm:mb-0 text-sm min-w-[8rem] sm:w-[13rem] justify-between sm:h-[22rem] rounded-md flex flex-col items-start  ">
      <img
        src={props.img}
        alt="product "
        className=" cursor-pointer border rounded-xl "
      ></img>

      <div>
        <p className=" font-medium mt-2">{props.name}</p>
      </div>
      <div className="flex items-center gap-10 w-full">
        <p className="font-bold">₹{props.price}</p>
        <div className="flex items-center">
          <p>Size:</p>
          <select
            onChange={handleSize}
            value={selectedSize}
            className="outline-none"
          >
            <option defaultValue>-</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
          </select>
        </div>
      </div>

      {buttonDisplay ? (
        <button
          onClick={() => addToCart(props.name, selectedSize,uId)}
          className="bg-white  w-[100%] py-1 border-2 border-black rounded-md hover:bg-black hover:text-white transition duration-300"
        >
          Add to Cart 
        </button> 
        
      ) : (
        <button
          onClick={() => goToCart()}
          className="bg-white  w-[100%] py-1 border-2 border-black rounded-md hover:bg-black hover:text-white transition duration-300"
        >
          Go to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
