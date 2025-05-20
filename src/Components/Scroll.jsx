import scroll1 from "../assets/images/scroll1.jpg";
import scroll2 from "../assets/images/scroll2.png";
import scroll3 from "../assets/images/scroll3.jpg";

function Scroll() {
  return (
    <div className="mt-5">
      <div className="scroll_div">

          <img
            className="w-[30%] sm:h-[70vh] sm:w-[100vw]"
            src={scroll1}
            alt="scroll-image"
          ></img>
       
         
        
      </div>
    </div>
  );
}

export default Scroll;
