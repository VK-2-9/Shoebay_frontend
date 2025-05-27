

function AddressCard(){

    return(
        <div className="bg-[#F1F3F6] sm:mx-2 p-2 rounded-md">
            <p className="py-2">Enter your address here:</p>
            <input type="text" placeholder="Name" className=" outline-none rounded-md p-1 w-full sm:my-3"/>
            <input type="text" placeholder="Address" className=" outline-none rounded-md p-1 w-full sm:mb-3"/>
            <input type="text" placeholder="City" className=" outline-none rounded-md p-1 w-full sm:mb-3"/>
            <input type="text" placeholder="State" className=" outline-none rounded-md p-1 w-full sm:mb-3"/>
            <input type="text" placeholder="Pincode" className=" outline-none rounded-md p-1 w-full sm:mb-3"/>
            <input type="text" placeholder="Phone Number" className=" outline-none rounded-md p-1 w-full sm:mb-3"/>

            </div>
    )
}

export default AddressCard;