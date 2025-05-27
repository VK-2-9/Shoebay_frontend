import { useContext, useEffect } from "react";
import { DataContext } from "../Components/DataContext";

import auth from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

function Profile() {
  const navigate = useNavigate();
  const { uName } = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);
  
  const logout=()=>{
    signOut(auth)
  }

  return (
    <div className="my-20 p-5 bg-white w-[75%] md:w-[50%] ml-[50%] transform -translate-x-1/2 rounded-md">
      <table >
        <tbody>
          <tr>
            <td className="w-20">Name</td><td>VK</td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td>xyz</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>xyz</td>
          </tr>
        </tbody>
      </table>
      <button  className="bg-black text-white px-5 py-1 border-2 border-black rounded-md hover:bg-white hover:text-black transition duration-300 cursor-pointer ml-[50%] transform -translate-x-1/2"
      onClick={logout}
      >Logout</button>
    </div>
  );
}

export default Profile;
