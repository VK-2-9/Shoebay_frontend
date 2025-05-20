import ProductCard from "../Components/ProductCard"
import Scroll from "../Components/Scroll"
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
            <Scroll/>

           {/* popular brands.............................................................................................................  */}
            <div className="my-2 mx-1 sm:m-5">
                <h1 className="text-sm sm:text-2xl sm:font-bold">Popular brands</h1>
                <div className="w-[100%] flex flex-wrap justify-between items-center">
                    {
                        imgArr.map((item)=>{
                           
                                                            return <img src={item} alt="imagesbramd" className=" w-10 sm:w-[10rem]"></img>

                            
                        })
                    }
                </div>
            </div>

            {/* popular models............................................................................................................. */}
            <div className="my-2 mx-1 sm:m-5">
                <h1 className="text-sm sm:text-2xl sm:font-bold">Popular models</h1>
                <div>
                    <div>

                    </div>
                </div>
                </div> 


             <ProductCard/>          

        </div>
    )
}

export default Home