import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
