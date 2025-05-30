import OrderCard from "./OrderCard";
import ProductCard from "./ProductCard";

function OrderProducts(props) {
  return (
    <div className="p-2 bg-white mt-2 flex md:gap-20 rounded-md flex-wrap">
      <div className="sm:w-[20rem] ">
        <p>Name:{props.name}</p>
        <p>Price: ₹{props.price}</p>
        <p>Delivery address:{props.address}</p>
      </div>

      <div>
        {props.products.map((item) => {
          return (
            <OrderCard
              img={item.img}
              name={item.name}
              qty={item.qty}
              key={item._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OrderProducts;
