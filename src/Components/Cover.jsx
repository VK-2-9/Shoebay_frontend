

import { Link } from "react-router-dom";

function Cover() {
  return (

      <div className="cover relative h-[125px] sm:h-[60vh]">

        <Link to="/products">
        <button className="bg-[#c1eafc]  text-sm sm:text-3xl font-bold absolute top-[70%] left-[8%] sm:top-[75%] sm:left-[10%] px-1 sm:px-3 sm:py-2 rounded-md border-2 border-[#08041C] hover:bg-white hover:text-black transition-all duration-300">
          Shop now
        </button>
        </Link>
 
      </div>
    
  );
}

export default Cover;
