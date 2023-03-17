import { useState } from "react";
import MobileNav from "./MobileNav";
import NavBar from "./NavBar";
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import Searchbox from "../Searchbox";

const Header = () => {
  const [click, setClick] = useState(false);
  const [active, setActive] = useState("Home");
  const [showSearchBox, setShowSearchBox] = useState(false);
  return (
    <div className="text-white relative  z-50">
      {/* desktop nav */}

      <div className="hidden md:flex">
        <NavBar />
      </div>

      {/* mobile nav dropdown */}
      <MobileNav
        setClick={setClick}
        active={active}
        setActive={setActive}
        click={click}
      />

      <div className="">{<Searchbox showSearchBox={showSearchBox} />}</div>

      {/* mobile navbar */}
      <div className="w-full fixed  px-6 md:hidden flex justify-between items-center h-20 bg-black text-2xl z-50">
        <div className="logo">
          <Link href={"/"}>
            <div className="sm:w-40 w-36 cursor-pointer hover:scale-105 duration-300">
              <img src="./faithhouse-logo.png" alt="faithhouse-logo" />
            </div>
          </Link>
        </div>

        {/* control */}
        <div className="flex gap-4 z-30">
          {/* search bar control */}
          <div onClick={() => setClick(false)}>
            <div
              className="cursor-pointer hover:scale-105 duration-300"
              onClick={() => setShowSearchBox(!showSearchBox)}
            >
              {showSearchBox ? <AiOutlineClose /> : <AiOutlineSearch />}
            </div>
          </div>

          {/* mobile nav control */}
          <div onClick={() => setShowSearchBox(false)}>
            <div
              className="cursor-pointer hover:scale-105 duration-300"
              onClick={() => setClick(!click)}
            >
              {!click ? <AiOutlineMenu /> : <AiOutlineClose />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
