import Radio from "../Components/Radio";
import ProductCard from "../Components/ProductCard";


function Products() {
  return (
    <div className="flex justify-between">
      {/* left section............................................................................................... */}
        <div className="m-2 mt-1 py-10 px-5 bg-white hidden sm:flex flex-col justify-between items-start w-[12rem] h-[100vh]">
          {/* Brand section................................................................................................... */}
          <div>
          <h1 className="">Brand</h1>
            <div>
              <Radio/>
              <Radio/>
            </div>
          </div>
          {/* Collection section................................................................................................... */}
          <div>
          <h1 className="">Collection</h1>
            <div>
              <Radio/>
              <Radio/>
            </div>
          </div>
          {/* Brand section................................................................................................... */}
          <div>
          <h1 className="">Price</h1>
            <div>
              <Radio/>
              <Radio/>
            </div>
          </div>
          {/* Color section................................................................................................... */}
          <div>
          <h1 className="">Colour</h1>
            <div>
              <Radio/>
              <Radio/>
            </div>
          </div>

          {/* Color section................................................................................................... */}
          <div>
          <h1 className="">Occasion</h1>
            <div>
              <Radio/>
              <Radio/>
            </div>
          </div>
            
            

        </div>


        {/* Right section............................................................................................... */}
        
        <div className="m-2 mt-1 py-10 px-[1rem] sm:px-14 bg-white w-[100%] flex flex-wrap gap-7  ">

          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          

        </div>
    </div>
  );
}

export default Products;