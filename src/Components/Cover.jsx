import scroll1 from "../assets/images/scroll1.jpg";
import scroll2 from "../assets/images/scroll2.png";
import scroll3 from "../assets/images/scroll3.jpg";

import { Link } from "react-router-dom";

function Cover() {
  return (

      <div className="scroll_div h-[20vh] sm:h-[50vh]  relative">

        <Link to="/products">
        <button className="bg-transparent text-white font-bold absolute top-[40%] left-[10%] px-3 py-2 rounded-xl border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
          Shop now
        </button>
        </Link>
 
      </div>
    
  );
}

export default Cover;
