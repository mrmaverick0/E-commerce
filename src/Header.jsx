import React from "react";
import cartIcon from "./assets/cartIcon.png";
import Cart from "./Cart";
const Header = ({ onShowCart,onClose }) => {
  return (
    <div className="w-full h-20 bg-black border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div>
          <div className="hidden lg:flex lg:justify-between lg:gap-8">
            <ul className="flex items-center gap-10">
             
                <li
                  className="text-base text-white font-bold hover:text-orange-900 
                            hover:underline underline-offset-2 decoration-[1px] cursor-pointer"
                >
                  Home
                </li>
             
              <li
                className="text-base text-white font-bold hover:text-orange-900 
                      hover:underline underline-offset-2 decoration-[1px] cursor-pointer"
              >
                Pages
              </li>
              <li
                className="text-base text-white font-bold hover:text-orange-900 
                      hover:underline underline-offset-2 decoration-[1px] cursor-pointer"
              >
                Shop
              </li>
             
              <li
                className="text-base text-white font-bold hover:text-orange-900 
                      hover:underline underline-offset-2 decoration-[1px] cursor-pointer"
              >
                About Us
              </li>
            </ul>
            <div className="flex bg-white cursor-pointer  justify-between gap-14">
              <div className="relative">
                <img onClick={onShowCart} className="w-8 " src={cartIcon} alt="cartImage" />
                
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;