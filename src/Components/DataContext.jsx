import { useState, createContext, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

function DataContextProvider(data) {

  useEffect(() => {
    axios
      .get("https://shoebay-backend.onrender.com/api/productsData")
      .then((data) => {
        setAllProducts(data.data);
        setProductsData(data.data)
      }).catch((err) =>{
        console.log("allproduct db err")
        setAllProducts([
          {
            id: 1,
            name: "Puma Shuffle Ultra Sneakers",
            price: "2,050",
            tags: ["puma", "casual", "sneakers", "black"],
            img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/t/a/5/-original-imah9mgebzhjgfyu.jpeg?q=70&crop=false",
            brand: "puma",
          },
        ])}
      );
  }, []);

  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [productsData,setProductsData]=useState([]);
  const[cartProducts,setCartProducts]=useState([]);
  const[orderOroducts,setOrderProducts]=useState([])
  const [qty, setQty] = useState(1);


  const[uName,setUName]=useState("")
  const[email,setEmail]=useState("")

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
        qty,
        setQty,
        cartProducts,setCartProducts,orderOroducts,setOrderProducts,uName,setUName,email,setEmail
      }}
    >
      {data.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
export { DataContext };
