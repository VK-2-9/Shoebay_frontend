import { useState, createContext } from "react";
import productsData from "../assets/productsData";

const DataContext = createContext();

function DataContextProvider(data) {
  ;
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [allProducts, setAllProducts] = useState(productsData);

  return (
    <DataContext.Provider
      value={{
        searchInput,
        setSearchInput,
        allProducts,
        setAllProducts,
        productsData,
        filterInput,
        setFilterInput,
        
      }}
    >
      {data.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
export { DataContext };
