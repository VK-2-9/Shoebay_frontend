import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";


function CartCard(){
    return(
        <div className="p-2 flex items-center gap-5 bg-[#f5ecec] rounded-md  ">
            <div className="w-[200px]  md:w-[15rem  ]">
            <img className= " rounded-md" src="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/t/a/5/-original-imah9mgebzhjgfyu.jpeg?q=70&crop=false"></img>

            </div>

            <div className="flex flex-col gap-2">
             <p className="font-bold">Ouma Sneakers</p>
             <p>₹399</p> 
             <p>Qty: 2</p>
             <button className=" px-2 py-1 border-2 border-black rounded-md flex items-center gap-1 hover:bg-black hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faTrash} className="text-red-600 hover:text-white cursor-pointer"/> Remove from cart
             </button>
            </div>
        </div>
    )
}

export default CartCard;