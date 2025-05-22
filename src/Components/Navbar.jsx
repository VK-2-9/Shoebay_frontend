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
import {DataContext}  from "../Components/DataContext";
import { Link, useNavigate } from "react-router-dom";

// sidenav function..............................................................

function Navbar() {
  const [navDisplay, setNavDisplay] = useState(false);
  const{searchInput, setSearchInput} = useContext(DataContext);
  const openVerticalNav = () => {
    setNavDisplay(!navDisplay);
    console.log(navDisplay);
  };


  //search function...............................................................
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  }

  
  
  return (
    <div className=" w-[100%]  px-5 sm:px-16 bg-[#ffffff] mb-2 flex sm:flex-wrap justify-between items-center sticky top-0 z-[20]">
      {/* Section one................................................................................................................... */}
      <div className="w-[20%] hover:border-black hover:border-b-[3px] transition ease-in-out flex items-center justify-start ">
        <FontAwesomeIcon icon={faSearch} className="cursor-pointer font-bold" />
        <input value={searchInput} onChange={handleSearch}
          placeholder="Search"
          type="search"
          className="p-2 outline-none bg-transparent placeholder:text-black "
        ></input>
      </div>
      {/* Section two................................................................................................................... */}
      <Link to="/">

      <div  className="flex items-center cursor-pointer transform -translate-x-[20%]">
        <img className="w-[2em] sm:w-[4em] m-0" src={logo} alt="Logo"></img>
        <p className="m-0 text-xl sm:text-3xl font-bold italic">Shoebay</p>
      </div>
      </Link>
      {/* Section three................................................................................................................... */}

      <div className="hidden gap-10 sm:flex">
        <div>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-xl"
          ></FontAwesomeIcon>
          <p className="">Cart</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faBagShopping}
            className="text-xl"
          ></FontAwesomeIcon>

          <p>Orders</p>
        </div>

        <div>
          <FontAwesomeIcon icon={faUser} className="text-xl"></FontAwesomeIcon>

          <p>Profile</p>
        </div>
      </div>
      {/* vertical NAV.................................................................................................. */}
      <div className=" sm:hidden menu text-xl font-bold  ">
        {navDisplay ? (
          <FontAwesomeIcon
            onClick={openVerticalNav}
            icon={faX}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            onClick={openVerticalNav}
            icon={faBars}
            className="text-xl "
          ></FontAwesomeIcon>
        )}

        {/* mobilenav................................................................................................................................. */}
        <div
          className=" h-[100vh] vertical_nav  p-5 bg-white "
          style={{
            transform: navDisplay ? "translateX(-70%)" : "translateX(100%)",
            display: navDisplay ? "" : "none",
          }}
        >
          <div className="mt-2">
            <p>Profile</p>
          </div>
          <div className="mt-2">
            <p>Cart</p>
          </div>
          <div className="mt-2">
            <p>Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
