import React from "react";

import {
  FaGithub,
  FaYoutube,
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import { BsPersonFill, BsPaypal, BsHouseDoorFill } from "react-icons/bs";
import { ImPhone } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div
        className=" max-w-screen-xl mx-auto justify-items-center text-center grid  grid-cols-1 gap-6 
            sm:grid-cols-2 xl:grid-cols-4"
      >
       
        <div className="">
          
          <p className=" text-white text-sm tracking-wide mb-4">
            ©ecommerce.com
          </p>
          
          <div className="flex gap-5 text-lg text-gray-400">
            <FaGithub className=" hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className=" hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className=" hover:text-white duration-300 cursor-pointer" />
            <FaInstagramSquare className=" hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className=" hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className=" text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className=" text-base flex flex-col gap-4">
            <p>Aminabad, Lucknow, Uttar Pradesh </p>
            <p>+1 202-918-2132</p>
            <p>P. NO: (812) 465-5550</p>
            <p>ecommerce@support.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className=" flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsHouseDoorFill />
              </span>
              Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <ImPhone />
              </span>
              Help & Support
            </p>
          </div>
        </div>
     
       
      </div>
    </div>
  );
};

export default Footer;
