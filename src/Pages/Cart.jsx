import AddressCard from "../Components/AddressCard";
import BuyCard from "../Components/BuyCard";
import CartCard from "../Components/CartCard";

function Cart(){

    return(
        <div className=" ">
            <div className=" bg-white sm:p-5 sm:grid sm:grid-cols-[2fr_2fr_1fr]  flex flex-col gap-4 ">
                <CartCard/>
                <AddressCard/>
                <BuyCard/>
            </div>
        </div>
    )
}

export default Cart;