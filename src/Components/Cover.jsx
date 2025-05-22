import scroll1 from "../assets/images/scroll1.jpg";
import scroll2 from "../assets/images/scroll2.png";
import scroll3 from "../assets/images/scroll3.jpg";

import { Link } from "react-router-dom";

function Cover() {
  return (

      <div className="scroll_div w-[30%] sm:h-[50vh] sm:w-[100vw]">

        <Link to="/products">
        <button className="bg-[#C4A484]">
          Shop now
        </button>
        </Link>
 
      </div>
    
  );
}

export default Cover;
