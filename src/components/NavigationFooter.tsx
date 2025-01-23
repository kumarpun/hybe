import Link from "next/link";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { BsThreeDotsVertical } from "react-icons/bs";

const NavigationBar: React.FC = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <div className="w-full max-w-[420px] h-[68px] relative z-50">
      {/* Main Navbar */}
      <div className="w-full max-w-[420px] h-[68px] rounded-[100px] bg-white text-black flex items-center justify-between shadow-md fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        <ul className="w-full flex items-center justify-between p-[10px]">
          {/* <li className="hidden sm:block">
            <Link
              href="/menu"
              className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center p-[16px] ml-[14px] hover:bg-gray-100"
            >
              Menu
            </Link>
          </li> */}
       
          <li>
            <Link
              href="/"
              className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center p-[16px] ml-[14px] hover:bg-gray-100"
            >
              Home
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href="/contact"
              className="h-[48px] font-medium text-[14px] cursor-pointer rounded-[100px] flex items-center justify-center p-[16px] ml-[14px] text-white bg-[#5270a2] uppercase"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <button
              onClick={() => setIsMenu((prev) => !prev)}
              className="h-[48px] w-[48px] rounded-full flex items-center justify-center bg-slate-300 duration-150 active:scale-95 sm:hidden"
            >
              <BsThreeDotsVertical />
            </button>
          </li>
        </ul>
      </div>

      {/* Dropdown Menu */}
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsMenu(false); // Close dropdown if clicked outside
        }}
      >
        <div
          className={`
          ${isMenu ? "max-h-[400px]" : "max-h-0"}
          fixed top-[68px] left-1/2 transform -translate-x-1/2 w-[90%] bg-white text-black shadow-md duration-300 rounded-[10px] overflow-hidden sm:hidden`}
        >
          <ul className="p-[10px]">
          <li className="mb-[16px]">
              <Link href="/restaurant">
                <div className="text-[24px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Home
                </div>
              </Link>
            </li>
            {/* <li className="mb-[16px]">
              <Link href="/menu">
                <div className="text-[24px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Menu
                </div>
              </Link>
            </li> */}
      
            {/* <li className="mb-[16px]">
              <Link href="/classes">
                <div className="text-[24px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Classes
                </div>
              </Link>
            </li> */}
            {/* <li className="mb-[16px]">
              <Link href="/shop">
                <div className="text-[24px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Shop
                </div>
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="/workshop">
                <div className="text-[24px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Workshop
                </div>
              </Link>
            </li>
            <li className="mb-[16px]">
              <Link href="/blog">
                <div className="text-[24px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Blog
                </div>
              </Link>
            </li> */}
            <li className="mb-[16px]">
              <Link href="/contact">
                <div className="text-[24px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default NavigationBar;
