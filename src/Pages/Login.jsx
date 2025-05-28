import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../Components/DataContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";
import axios from "axios";

function Login() {
  const {  email, setEmail,setUId,uId,setUserArr } = useContext(DataContext);
  const [pass, setPass] = useState("");
  const [credentialerr, setCredentialErr] = useState(false);
  const navigate=useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                navigate("/")
            }
        })
    },[navigate])

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
       const response= await signInWithEmailAndPassword(auth,email,pass)

       await axios.get("https://shoebay-backend.onrender.com/api/logindetails").then((data)=>setUserArr(data.data)).catch(err=>console.log(err))
        setCredentialErr(false)
        navigate("/")
    }catch(err){
        setCredentialErr(true)
        console.log(err)
    }
   
   

};

  return (
    <div className="my-20 bg-white w-[75%] md:w-[50%] ml-[50%] transform -translate-x-1/2 rounded-md">
      <form className="flex flex-col gap-5 p-5"
      onSubmit={handleSubmit}>
        <h2 className="font-bold text-2xl">Login</h2>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-[100%] rounded-md px-2 py-1  bg-[#cecfd0] placeholder:text-black "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-[100%] rounded-md px-2 py-1  bg-[#cecfd0] placeholder:text-black"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          ></input>
          <p
            style={{ display: credentialerr ? "block" : "none" }}
            className="text-sm text-red-700"
          >
           Incorrect username or password
          </p>
        </div>

        <div>
          <button
            className="bg-black text-white px-5 py-1 border-2 border-black rounded-md hover:bg-white hover:text-black transition duration-300 cursor-pointer ml-[50%] transform -translate-x-1/2"
            type="submit"
          >
            Login
          </button>
        </div>
        <div>
          New user?{" "}
          <Link className="text-blue-700" to={"/signup"}>
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
}
export default Login;
