import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
//pages....................................................................
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";

import DataContextProvider from "./Components/DataContext";

function App() {
  return (
    <div className="bg-[#f5ecec] flex flex-col ">
      <DataContextProvider>
       
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </DataContextProvider>
    </div>
  );
}

export default App;
