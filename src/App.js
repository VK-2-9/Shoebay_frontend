import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
//pages....................................................................
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Order from "./Pages/Order"

import DataContextProvider from "./Components/DataContext";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="bg-[#F1F3F6] flex flex-col ">
      <DataContextProvider>
       
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/orders" element={<Order/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </DataContextProvider>
    </div>
  );
}

export default App;
