

function BuyCard(){

    return(
        <div className="bg-[#f5ecec]  p-2 rounded-md">
            <p>Total price:</p>
            <table>
                <tbody>
                <tr>
                    <td className="p-2">Price:</td>
                    <td className="p-2">₹399</td>
                </tr>
                <tr>
                    <td className="p-2">Shipping:</td>
                    <td className="p-2">₹{
                        Math.floor(Math.random() * 100) + 1
                        }</td>
                </tr>
                <tr>
                    <td className="p-2">Total:</td>
                    <td className="p-2">₹449</td>
                </tr>
                </tbody>
            </table>
            <button className="  px-2 py-1 border-2 border-black rounded-md flex items-center gap-1 hover:bg-black hover:text-white transition duration-300">Place order</button>

        </div>
    )

}

export default BuyCard;