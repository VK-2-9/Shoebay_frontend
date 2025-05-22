import ProductCard from "../Components/ProductCard"
import Cover from "../Components/Cover"
import adidas from "../assets/images/brands/adidas.png"
import newbalance from "../assets/images/brands/newbalance.png"
import nike from "../assets/images/brands/nike.png"
import puma from "../assets/images/brands/puma.png"
import reebok from "../assets/images/brands/reebok.png"
import skechers from "../assets/images/brands/skechers.png"
import wildcraft from "../assets/images/brands/wildcraft.png"




function Home(){

const imgArr=[puma,adidas,newbalance,nike,reebok,skechers,wildcraft]

    return(
        <div>
            <Cover/>

           {/* popular brands.............................................................................................................  */}
            <div className="mt-3 mx-2  bg-white px-5 py-3 rounded-md">
                <h1 className="text-base sm:text-2xl font-bold">Popular brands</h1>
                <div className="w-[100%] flex flex-wrap justify-between items-center">
                    {
                        imgArr.map((item)=>{
                           
                                                            return <img src={item} alt="imagesbramd" className=" w-10 sm:w-[10rem]"></img>

                            
                        })
                    }
                </div>
            </div>

            {/* popular models............................................................................................................. */}
            <div className="mt-3 mx-2  bg-white px-5 py-3 rounded-md">
                <h1 className="text-base sm:text-2xl font-bold">Popular models</h1>
                
               <div className="m-2 mt-1 py-6  sm:px-4 bg-white w-[100%] flex flex-wrap gap-7">
               <ProductCard/>     
             <ProductCard/>  
             <ProductCard/>  
             <ProductCard/> 
             <ProductCard/> 
             <ProductCard/> 
             <ProductCard/> 
               </div>
             
             </div>      

        </div>
    )
}

export default Home