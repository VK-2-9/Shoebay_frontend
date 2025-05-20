import { useState,createContext } from "react";


const DataContext = createContext();


function DataContextProvider(data){
    
const[productArr, setProductArr] = useState();
const[searchInput, setSearchInput] = useState("");

    return(
        <DataContext.Provider value={{productArr,setProductArr,searchInput,setSearchInput}}>
            {data.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
export {DataContext};
