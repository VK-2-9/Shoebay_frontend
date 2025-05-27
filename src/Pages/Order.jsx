
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../config/firebase";

function Order(){
    const navigate=useNavigate()

    useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);


    return(
        <div>
                bh, kj
        </div>
    )
}

export default Order