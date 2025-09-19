import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
   FaHome,
   FaCompass,
   FaRegPlayCircle,
   FaHistory,
   FaVideo,
   FaClock,
   FaThumbsUp,
   FaListUl
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Home = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios
         .get("https://dummyjson.com/products?limit=20")
         .then((res) => setData(res.data.products))
         .catch((err) => console.log(err));
   }, []);

   const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
         section.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <div className="max-w-[1600px] m-auto pl-4 pr-4 mt-8">
         <div className="w-full gap-4 flex">
            <div className="w-[20%] bg-[#212121] min-h-screen p-4 text-white sticky top-0 h-screen">
               <h1 className="text-xl font-bold">Youtube</h1>
               <ul className="mt-4 space-y-2 text-white">
                  <Link to="service">
                     <li onClick={() => scrollToSection("home")} className="hover:underline cursor-pointer flex items-center gap-3">
                        <FaHome /> <span>Servis</span>
                     </li>
                  </Link>

                  <Link to="/contact">
                     <li
                        onClick={() => scrollToSection("explore")}
                        className="hover:underline cursor-pointer flex items-center gap-3"
                     >
                        <FaCompass /> <span>Contact</span>
                     </li>
                  </Link>


                  <li
                     onClick={() => scrollToSection("subs")}
                     className="hover:underline cursor-pointer flex items-center gap-3"
                  >
                     <FaRegPlayCircle /> <span>Contact</span>
                  </li>

                  <hr />

                  <li
                     onClick={() => scrollToSection("library")}
                     className="hover:underline cursor-pointer flex items-center gap-3"
                  >
                     <FaListUl /> <span>Library</span>
                  </li>
                  <li
                     onClick={() => scrollToSection("history")}
                     className="hover:underline cursor-pointer flex items-center gap-3"
                  >
                     <FaHistory /> <span>History</span>
                  </li>
                  <li
                     onClick={() => scrollToSection("videos")}
                     className="hover:underline cursor-pointer flex items-center gap-3"
                  >
                     <FaVideo /> <span>Your Videos</span>
                  </li>
                  <li
                     onClick={() => scrollToSection("later")}
                     className="hover:underline cursor-pointer flex items-center gap-3"
                  >
                     <FaClock /> <span>Watch Later</span>
                  </li>
                  <li
                     onClick={() => scrollToSection("liked")}
                     className="hover:underline cursor-pointer flex items-center gap-3"
                  >
                     <FaThumbsUp /> <span>Liked Videos</span>
                  </li>
                  <li className="hover:underline cursor-pointer flex items-center gap-3">
                     <FiChevronDown /> <span>Show More</span>
                  </li>
               </ul>
               <hr />

               <ul className="mt-4 mb-3 space-y-2 ">
                  <li className="hover:underline cursor-pointer flex items-center gap-3">
                     <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="user"
                        className="w-[35px] h-[35px] rounded-full"
                     />
                     <span>Library</span>
                  </li>

                  <li className="hover:underline cursor-pointer flex items-center gap-3">
                     <img
                        src="https://randomuser.me/api/portraits/women/45.jpg"
                        alt="user"
                        className="w-[35px] h-[35px] rounded-full"
                     />
                     <span>History</span>
                  </li>

                  <li className="hover:underline cursor-pointer flex items-center gap-3">
                     <img
                        src="https://randomuser.me/api/portraits/men/67.jpg"
                        alt="user"
                        className="w-[35px] h-[35px] rounded-full"
                     />
                     <span>Your Videos</span>
                  </li>

                  <li className="hover:underline cursor-pointer flex items-center gap-3">
                     <img
                        src="https://randomuser.me/api/portraits/women/12.jpg"
                        alt="user"
                        className="w-[35px] h-[35px] rounded-full"
                     />
                     <span>Watch Later</span>
                  </li>

                  <li className="hover:underline cursor-pointer flex items-center gap-3">
                     <img
                        src="https://randomuser.me/api/portraits/men/21.jpg"
                        alt="user"
                        className="w-[35px] h-[35px] rounded-full"
                     />
                     <span>Liked Videos</span>
                  </li>

                  <li className="hover:underline cursor-pointer flex items-center gap-3">
                     <img
                        src="https://randomuser.me/api/portraits/women/88.jpg"
                        alt="user"
                        className="w-[35px] h-[35px] rounded-full"
                     />
                     <span>Show More</span>
                  </li>
               </ul>

               <hr />

            </div>

            <div className="w-[80%] space-y-20 bg-black p-5">
               <section id="home" className="min-h-[400px]">
                  <h2 className="text-2xl font-bold text-white mb-4">Home</h2>
                  <div className="grid grid-cols-4 gap-4">
                     {data.map((value) => (
                        <div
                           key={value.id}
                           className="w-[276px] h-[300px] border-2 border-blue-50 rounded-[10px] shadow hover:shadow-lg transition p-3 bg-neutral-800 block"
                        >
                           <img
                              src={value.thumbnail}
                              alt={value.title}
                              className="w-full h-[180px] object-cover rounded-md mb-3"
                           />
                           <div className="flex items-center gap-2">
                              <img
                                 src={value.thumbnail}
                                 alt={value.title}
                                 className="w-[40px] h-[40px] object-cover rounded-full"
                              />
                              <div className="text-white">
                                 <h2 className="text-md font-bold leading-tight line-clamp-1">
                                    {value.title}
                                 </h2>
                                 <p className="text-sm text-gray-500 line-clamp-1">{value.brand}</p>
                                 <p className="font-semibold">{value.rating} 1 week ago</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </section>


            </div>
         </div >
      </div >
   );
};

export default Home;
