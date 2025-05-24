import product from "../assets/images/test.png";

function ProductCard(props) {
  return (
    <div className=" ml-[6%] mb-4 sm:ml-0 sm:mb-0 text-sm min-w-[8rem] sm:w-[13rem] rounded-md flex flex-col items-start  ">
      <img
        src={props.img}
        alt="product image"
        className=" cursor-pointer border rounded-xl"
      ></img>

        <div>
          <p className=" font-medium mt-2">{props.name}</p>
        </div>

          <p className="font-bold">₹{props.price}</p>

          
          <button className=" bg-white  w-[100%] py-1 border-2 border-black rounded-md hover:bg-black hover:text-white transition duration-300">
            Add to Cart
          </button>
      <tags className="hidden">sneaker,black</tags>
    </div>
  );
}

export default ProductCard;
