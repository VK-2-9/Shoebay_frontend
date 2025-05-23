import product from "../assets/images/test.png"

function ProductCard(props){
    return(
        <div className="bg-[#e3dfdf] p-3 min-h-max ml-[6%] mb-4 sm:ml-0 sm:mb-0 text-sm w-[8rem] sm:w-[13rem] rounded-md flex flex-col items-start  ">
            <img src={props.img} alt="product image" className=" cursor-pointer border rounded-xl"></img>
            <div>
                <p className=" font-medium mt-2">{props.name}</p>
            </div>
            
            <p className="font-bold">₹{props.price}</p>
            <div>
                <select className="bg-transparent outline-none w-12 mr-4  rounded-md ">
                    <option selected disabled>Qty</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <button className="bg-[#c6c3c3] px-2 py-1 rounded-md ">Add to Cart</button>
            </div>
            
            <tags className="hidden">sneaker,black</tags>
        </div>
    )
    

}

export default ProductCard