import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="text-white flex justify-between max-w-[1240px] mx-auto items-center h-24 px-4">
      <h1 className="w-full text-3xl text-[#61DBFB] font-bold">REACT.</h1>
      <ul className="md:flex hidden">
        <li className="p-4 cursor-pointer hover:text-[#61DBFB]">Home</li>
        <li className="p-4 cursor-pointer hover:text-[#61DBFB]">Company</li>
        <li className="p-4 cursor-pointer hover:text-[#61DBFB]">Recources</li>
        <li className="p-4 cursor-pointer hover:text-[#61DBFB]">About</li>
        <li className="p-4 cursor-pointer hover:text-[#61DBFB]">Contact</li>
      </ul>

      <div
        className="md:hidden"
        onClick={() => {
          setIsMenu(!isMenu);
        }}
      >
        {!isMenu ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      <div
        className={
          isMenu
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-700"
            : "fixed left-[-100%] "
        }
      >
        <h1 className="w-full text-3xl text-[#61DBFB] font-bold m-4">REACT.</h1>

        <ul className=" pt-24 uppercase p-4">
          <li className="p-4 cursor-pointer border-b border-gray-600">Home</li>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            Company
          </li>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            Recources
          </li>
          <li className="p-4 cursor-pointer border-b border-gray-600">About</li>
          <li className="p-4 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
