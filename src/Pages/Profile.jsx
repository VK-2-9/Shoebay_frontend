import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import axios from "axios";
import { DataContext } from "../Components/DataContext";

function Profile() {
  const navigate = useNavigate();
  const { uId, setUId } = useContext(DataContext);
  const[loggedUser,setLoggedUser]=useState({})
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      } else {
         setUId(user.uid);
        axios
          .get("https://shoebay-backend.onrender.com/api/logindetails")
          .then((data) => {
          
           const foundUser=  (data.data).find((user) => 
             user.uId === uId)
                setLoggedUser(foundUser ||{})
                console.log(foundUser);
              }
            ).catch((err) => console.log(err));
        // You can fetch user details here if needed
       
      }
    });

    
  }, [navigate,uId]);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="my-20 p-5 bg-white w-[75%] md:w-[50%] ml-[50%] transform -translate-x-1/2 rounded-md">
      <table>
        <tbody>
          <tr>
            <td className="w-20">Name</td>
            <td>{loggedUser.name}</td>
          </tr>
          <tr>
            <td>Mail</td>
            <td>{loggedUser.email}</td>
          </tr>
        </tbody>
      </table>
      <div>
        Kindly click here to check your <Link to={"/orders"}>orders</Link> and{" "}
        <Link to={"/cart"}>cart</Link>.
      </div>
      <button
        className="bg-black text-white px-5 mt-5 py-1 border-2 border-black rounded-md hover:bg-white hover:text-black transition duration-300 cursor-pointer ml-[50%] transform -translate-x-1/2"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
