import { useContext } from "react";
import { DataContext } from "./DataContext";


function AddressCard(){

        const{orderName,setOrderName,orderAddress,setOrderAddress,orderMobileNumber,setMobileNumber}=useContext(DataContext)

    return(
        <div className="bg-[#F1F3F6]  sm:mx-2 p-2 rounded-md max-h-[16rem] shadow-md ">
            <p className="py-2">Kindly fill the below details</p>
            <input type="text" placeholder="Name" value={orderName} onChange={(e)=>setOrderName(e.target.value)} className=" outline-none rounded-md p-1 w-full my-3"/>
            <textarea placeholder="Address" className="outline-none rounded-md p-1 w-full my-1 h-[5rem]" value={orderAddress} onChange={(e)=>setOrderAddress(e.target.value)}></textarea>
            
            <input type="text" placeholder="Phone Number" className=" outline-none rounded-md p-1 w-full mb-2" value={orderMobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>

            </div>
    )
}

export default AddressCard;