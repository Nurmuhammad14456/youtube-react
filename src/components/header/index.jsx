import React, { useState } from "react";
import { FaBars, FaVideo, FaBell, FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import IconImg from "../../assets/rasm.png";
const Header = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);

   const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
   };

   return (
      <header className="bg-[#212121] shadow-md sticky top-0 z-50">
         <div className="max-w-[1600px] mx-auto flex items-center justify-between p-2 px-4">

            <div className="flex items-center gap-4">
               <button onClick={toggleSidebar} className="text-2xl text-white">
                  <FaBars />
               </button>
               <Link to="/" className="text-2xl font-bold text-red-600">
                  <img src={IconImg} alt="rasm" />
               </Link>
            </div>

            <div className="flex flex-1 max-w-[600px] mx-4">
               <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 border bg-black text-white  border-gray-300 rounded-l-full px-4 py-2 focus:outline-none"
               />
               <button className="text-white px-4 rounded-r-full border border-gray-300">
                  <AiOutlineSearch size={20} />
               </button>
            </div>

            <div className="flex items-center gap-4 text-gray-700 text-xl">
               <FaVideo className="cursor-pointer hover:text-black transition" />
               <FaBell className="cursor-pointer hover:text-black transition" />
               <FaUserCircle className="cursor-pointer hover:text-black transition" />
            </div>
         </div>
      </header>
   );
};

export default Header;
