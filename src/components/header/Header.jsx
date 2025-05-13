import React from "react";
import { IoIosMenu } from "react-icons/io";
import { FaUser, FaShoppingCart, FaSearch, FaAngleDown } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { LINKS } from "../../static";

const Header = () => {
  return (
    <div className="h-[80px] flex text-white items-center justify-between max-w-[1200px] mx-auto px-[15px] mb-[-80px]">
      <div className="flex items-center gap-x-1 text-[16px]">
        <img src="./image/logo.png" alt="logo" />
        <h2>Mohid</h2>
      </div>
      <ul className="flex gap-x-4 max-sm:hidden">
        {LINKS?.map((link) => (
          <li
            key={link.id}
            className="relative  flex items-center text-[16px] text-[#8B8E99] cursor-pointer hover:text-amber-600 duration-300 before:absolute before:left-0 before:bottom-[-5px] before:w-[0%] before:h-[2px] before:bg-amber-600 hover:before:w-[100%] before:duration-300"
          >
            <a href={link.path}>{link.title}</a>
            {link.hasDropdown && <FaAngleDown size={12} />}
          </li>
        ))}
      </ul>
      <div className="flex gap-x-4">
        <FaSearch className="text-[18px] hover:text-amber-600 cursor-pointer duration-300" />
        <FaUser className="text-[18px] hover:text-amber-600 cursor-pointer duration-300" />
        <div className="relative">
          <FaShoppingCart className="text-[18px] hover:text-amber-600 cursor-pointer duration-300" />
          <p className="absolute top-[-7px] right-[-5px] w-[13px] h-[13px] rounded-[50%] bg-[#3858D6] text-[10px] text-center content-center">
            1
          </p>
        </div>
      </div>
      <IoIosMenu className="hidden max-sm:block text-[30px] hover:text-amber-600 cursor-pointer duration-300" />
    </div>
  );
};

export default Header;
