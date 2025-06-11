import { useContext, useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../Components/DataContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";
import axios from "axios";

function SignUp() {
  const { uName, setUName, email, setEmail,setUId,uId } = useContext(DataContext);
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [passerr, setPassErr] = useState(false);
  const[passLength,setPassLength]=useState(false)
  const navigate=useNavigate() 
  
  
  useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                navigate("/")
            }
        })
    },[navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
       if(pass!== rePass){
        setPassLength(false)
           setPassErr(true)
       } else{
          setPassErr(false)
          setPassLength(false)
          try{
             const response= await createUserWithEmailAndPassword(auth,email,pass)

             await axios.post("https://shoebay-backend.onrender.com/api/logindetails/signup",{email:response.user.email,uId:response.user.uid,name:uName}).then((data)=>console.log(data)).catch((err)=>console.log(err))

             navigate("/login")
            console.log(uId)
          }catch(err){
               console.log(err)
               if(pass.length<6){
                  setPassLength(true)
               }else{
                  alert("Account already exists")
                   navigate("/login")
               }
            
          }
       }    
  };

  return (
    <div className="my-20 bg-white w-[75%] md:w-[50%] ml-[50%] transform -translate-x-1/2 rounded-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5">
        <h2 className="font-bold text-2xl">SignUp</h2>
        <div>
          <input
          required
            type="text"
            placeholder="Username"
            className="w-[100%]  rounded-md px-2 py-1 bg-[#cecfd0] placeholder:text-black "
            value={uName}
            onChange={(e)=>{
              setPassErr(false)
              setUName(e.target.value)}}
          ></input>
        </div>

        <div>
          <input
          required
            type="email"
            placeholder="Email"
            className="w-[100%]  rounded-md px-2 py-1  bg-[#cecfd0] placeholder:text-black "
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <input
          required
            type="password"
            placeholder="Password"
            className="w-[100%]  rounded-md px-2 py-1  bg-[#cecfd0] placeholder:text-black"
            value={pass}
            onChange={(e)=>{
              setPassErr(false)
              setPass(e.target.value)}}
          ></input>
        </div>
        <div>
          <input
          required
            type="password"
            placeholder="Re-enter password"
            className="w-[100%]   rounded-md px-2 py-1  bg-[#cecfd0] placeholder:text-black"
            value={rePass}
            onChange={(e)=>{
              setPassErr(false)
              setRePass(e.target.value)}}
          ></input>
          <p style={{display:passerr?"block":"none"}} className="text-sm text-red-700">Paswords do not match</p>
           <p style={{display:passLength?"block":"none"}} className="text-sm text-red-700">Password should be at least 6 characters</p>
        </div>

        <div>
          <button
            className="bg-black text-white px-5 py-1 border-2 border-black rounded-md hover:bg-white hover:text-black transition duration-300 cursor-pointer ml-[50%] transform -translate-x-1/2"
            type="submit" 
            
          >SignUp</button>
        </div>
        <div>
          Existing user?{" "}
          <Link className="text-blue-700" to={"/login"}>
            Login{" "}
          </Link>
        </div>

        
      </form>
    </div>
  );
}

export default SignUp;
