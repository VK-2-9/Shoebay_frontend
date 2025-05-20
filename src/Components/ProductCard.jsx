import product from "../assets/images/test.png"

function ProductCard(){
    return(
        <div className="bg-[#ffebeb] sm:m-3 p-2 sm:w-[13rem] border rounded-md flex flex-col justify-evenly  items-start">
            <img src={product} alt="product image" className="cursor-pointer border rounded-xl"></img>
            <div>
                <p className="">Puma sneakers</p>
            </div>
            
            <p>₹599</p>
            <div>
                <select className="bg-transparent outline-none w-10 mr-4">
                    <option selected disabled>Qty</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <button className="">Add to Cart</button>
            </div>
            
            <tags className="hidden">sneaker,black</tags>
        </div>
    )


}

export default ProductCard