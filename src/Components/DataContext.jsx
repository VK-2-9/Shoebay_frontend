import { useState,createContext } from "react";
import productsData from "../assets/productsData";

const DataContext = createContext();


function DataContextProvider(data){
    
const[productArr, setProductArr] = useState();
const[searchInput, setSearchInput] = useState("");
const[allProducts, setAllProducts] = useState(productsData);


    return(
        <DataContext.Provider value={{productArr,setProductArr,searchInput,setSearchInput,allProducts,setAllProducts}}>
            {data.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
export {DataContext};
