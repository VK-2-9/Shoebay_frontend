import { useContext, useState } from "react";
import { DataContext } from "../Components/DataContext";
import auth from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const { email, setEmail } = useContext(DataContext);
  const[passReset,setPassReset]=useState(false)
  const[mailFound,setMailFound]=useState(true)
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await axios.get("https://shoebay-backend.onrender.com/api/logindetails").then((data)=>{
            const users=data.data
           const foundEmail= users.find((user)=>{
               return user.email===email
            })
            if(foundEmail){
             sendPasswordResetEmail(auth, email)
             setPassReset(true)
             setMailFound(true)
        }else{
            console.log("user not fp")
            setMailFound(false)
            setPassReset(false)
        }

        })
        
        
    }catch(err){
        console.log(err)
    }
    
      
  };
  return (
    <div className="my-20 bg-white w-[75%] md:w-[50%] ml-[50%] transform -translate-x-1/2 rounded-md">
      <form className="flex flex-col gap-5 p-5" onSubmit={handleSubmit}>
        <h2 className="font-bold text-2xl"> Password Reset</h2>
        <div>
          <input
            required
            type="email"
            placeholder="Email"
            className="w-[100%] rounded-md px-2 py-1  bg-[#cecfd0] placeholder:text-black "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>{
                   mailFound?<p></p>: <p>Mail not found</p>
          }
          
        </div>

        <div>
            
        <button
            className="bg-black text-white px-5 py-1 border-2 border-black rounded-md hover:bg-white hover:text-black transition duration-300 cursor-pointer ml-[50%] transform -translate-x-1/2 text-xs sm:text-base"
            type="submit"
          >
            Reset my password
          </button>
        </div>
        <div>
            {
                passReset?<p>Reset link sent, kindly check your mail</p>:<p></p>
            }
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
