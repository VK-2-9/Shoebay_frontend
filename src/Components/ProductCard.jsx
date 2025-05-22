import product from "../assets/images/test.png"

function ProductCard(){
    return(
        <div className="bg-[#e3dfdf] p-3 w-[9rem] sm:w-[13rem] rounded-md flex flex-col justify-evenly  items-start   ">
            <img src={product} alt="product image" className=" cursor-pointer border rounded-xl"></img>
            <div>
                <p className="font-bold mt-2">Puma sneakers</p>
            </div>
            
            <p>₹599</p>
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