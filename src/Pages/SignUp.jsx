import { useContext, useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../Components/DataContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";

function SignUp() {
  const { uname, setUName, email, setEmail } = useContext(DataContext);
  const [pass, setPass] = useState("");
  const [rePass, setRePass] = useState("");
  const [passerr, setPassErr] = useState(false);
  const navigate=useNavigate() 
  
  
  useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                navigate("/")
            }
        })
    },[])

  const handleSubmit = (e) => {
    e.preventDefault()
        pass!== rePass?
            setPassErr(true)
        :
        setPassErr(false)
        createUserWithEmailAndPassword(auth,email,pass).then((data)=>{
            console.log(data)
            navigate("/login")
        }).catch((err)=>{
            console.log("err")
            alert("Account already exists")
            navigate("/login")
        })
        
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
            value={uname}
            onChange={(e)=>setUName(e.target.value)}
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
            onChange={(e)=>setPass(e.target.value)}
          ></input>
        </div>
        <div>
          <input
          required
            type="password"
            placeholder="Re-enter password"
            className="w-[100%]   rounded-md px-2 py-1  bg-[#cecfd0] placeholder:text-black"
            value={rePass}
            onChange={(e)=>setRePass(e.target.value)}
          ></input>
          <p style={{display:passerr?"block":"none"}} className="text-sm text-red-700">Paswords do not match</p>
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
