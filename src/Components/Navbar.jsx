import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faBagShopping,
  faBars,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { DataContext } from "../Components/DataContext";
import { Link, useNavigate } from "react-router-dom";

// sidenav function..............................................................

function Navbar() {
  const [navDisplay, setNavDisplay] = useState(false);
  const { searchInput, setSearchInput, setAllProducts, productsData, UName } =
    useContext(DataContext);
  const navigate = useNavigate();

  const openVerticalNav = () => {
    setNavDisplay(!navDisplay);
    console.log(navDisplay);
  };

  //search function...............................................................
  const handleSearch = (e) => {
    setSearchInput(e.target.value);

    const searchFilteredProducts = productsData.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    setAllProducts(searchFilteredProducts);
  };

  const searchClick = () => {
    navigate("/products");
  };

  return (
    <div className=" w-[100%] py-2  px-5 sm:px-16 bg-[#ffffff]  flex sm:flex-wrap justify-between items-center sticky top-0 z-[20]">
      {/* Section one............................................................................ ....................................... */}
      <div className="w-[20%] hover:border-black hover:border-b-[3px] transition ease-in-out flex items-center justify-start ">
        <FontAwesomeIcon icon={faSearch} className="cursor-pointer font-bold" />
        <input
          value={searchInput}
          onChange={handleSearch}
          onClick={searchClick}
          placeholder="Search"
          type="search"
          className="p-2 w-[4em] sm:w-[100%] outline-none bg-transparent placeholder:text-black "
        ></input>
      </div>
      {/* Section two................................................................................................................... */}
      <Link to="/">
        <div className="flex items-center cursor-pointer transform -translate-x-[20%]">
          <img className="w-[2em] sm:w-[4em] m-0" src={logo} alt="Logo"></img>
          <p className="m-0 text-xl sm:text-3xl font-bold italic">Shoebay</p>
        </div>
      </Link>
      {/* Section three................................................................................................................... */}

      <div className="hidden gap-10 sm:flex">
        <Link to="/cart" className="navbar_tooltip">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-xl"
          ></FontAwesomeIcon>
          <p>Cart</p>
        </Link>
        <Link to="/orders" className="navbar_tooltip">
          <FontAwesomeIcon
            icon={faBagShopping}
            className="text-xl"
          ></FontAwesomeIcon>

          <p>Orders</p>
        </Link>

        <Link to={"/profile"} className="navbar_tooltip pr-10">
          <FontAwesomeIcon icon={faUser} className="text-xl"></FontAwesomeIcon>

          <p>{UName}</p>
        </Link>
      </div>
      {/* vertical NAV.................................................................................................. */}
      <div className=" sm:hidden font-bold  ">
        <div className>
          {" "}
          <FontAwesomeIcon
            icon={faBars}
            className={`cursor-pointer text-2xl relative  `}
            onClick={openVerticalNav}
          ></FontAwesomeIcon>
          <div className={`fixed bg-white flex flex-col top-0 right-0 w-[50vw]  h-[100vh]  pl-2 pt-3 transition-all ease-in-out duration-1000  ${navDisplay? "opacity-100 " : "opacity-0  pointer-events-none transform translate-x-full "}`}>
            <div>
              <FontAwesomeIcon
                icon={faX}
                className="text-2xl" 
                onClick={openVerticalNav}
              />
            </div>
            <Link to="/cart" className="mt-5">
              <p>Cart</p>
            </Link>
            <Link to="/orders"  className="mt-5">
              <p>Orders</p>
            </Link>

            <Link to={"/profile"} className="mt-5">
              <p>Profile</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
