import logo from "../assets/images/logo_inverted.png";

function Footer() {
  return (
    <div className="bg-[black] text-white p-5 sm:justify-center py-10 mt-10 flex  gap-14 sm:gap-32 items-start">

      <div className="flex flex-col justify-center items-start w-[70%]  sm:w-[30%]">
        <div className="flex items-center cursor-pointer">
          <img className="w-[2em] sm:w-[4em] m-0" src={logo} alt="Logo"></img>
          <p className="m-0 text-xl sm:text-4xl font-bold  italic">Shoebay</p>
        </div>

        <p className="text-xs sm:text-base mt-1 sm:mt-6 ">
          Discover the perfect pair of shoes for every step you take. Whether
          you're looking for sporty sneakers, elegant loafers, rugged boots, or
          comfy casuals, we bring you a curated collection from top brands like
          Nike, Adidas, Puma, Reebok, and more.
        </p>
      </div>

      <div className="hidden sm:block" >
        <h1 className="font-bold sm:text-xl  ">Shop</h1>
        <ul className="flex flex-col gap-2 mt-6">
          <li>All</li>
          <li>Casual</li>
          <li>Sports</li>
          <li>Sneakers</li>
        </ul>
      </div>

      <div className="hidden sm:block" >
        <h1 className="font-bold sm:text-xl ">Brands</h1>
        <ul className="flex flex-col gap-2 mt-6">
          <li>Nike</li>
          <li>Puma</li>
          <li>Adidas</li>
          <li>Newbalance</li>
          <li>Reebok</li>
          <li>Skechers</li>
          <li>Wildcraft</li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold text-sm sm:text-xl ">Contact Us</h1>
        <ul className="flex flex-col gap-2 mt-3 sm:mt-6 text-xs sm:text-base">
          <li>shoebay@gmail.com</li>
          <li>999-9999-999</li>
          <li>Triplicane High Rd</li>
          <li>Tamil Nadu 600005</li>
          <li>India</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
