import React, { useEffect, useState } from "react";
import {
   FiThumbsUp,
   FiThumbsDown,
   FiShare2,
   FiDownload,
} from "react-icons/fi";
import Imgess from "../../assets/Channel-Cover.png";
import axios from "axios";

const Service = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      axios
         .get("https://dummyjson.com/products?limit=20")
         .then((res) => setProducts(res.data.products))
         .catch((error) => console.log(error));
   }, []);

   return (
      <div className="p-5">
         <div className="max-w-[1400px] m-auto pl-4 pr-4 flex gap-10">


            <div className="w-[70%] p-4 max-h-[90vh] overflow-y-auto no-scrollbar">
               <div>
                  <iframe
                     width="100%"
                     height="500px"
                     src="https://www.youtube.com/embed/J1d4nCXNlDs?si=6HS-LdXhuYd-c8vG&amp;start=1327"
                     title="YouTube video player"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     referrerPolicy="strict-origin-when-cross-origin"
                     allowFullScreen
                  ></iframe>
               </div>

               <div className="mt-5 mb-5">
                  <h1 className="text-xl font-semibold">
                     Blind Woodturner: Turning passion into fine art
                  </h1>
                  <div className="flex justify-between">
                     <div className="text-white text-[18px] mt-2">
                        <p>
                           <b>576,969 views • Oct 8, 2021</b>
                        </p>
                     </div>

                     <div className="flex gap-6 mt-4 text-white">
                        <button className="flex items-center gap-2 hover:text-blue-600">
                           <FiThumbsUp size={20} /> 1.7K
                        </button>
                        <button className="flex items-center gap-2 hover:text-red-600">
                           <FiThumbsDown size={20} /> 632
                        </button>
                        <button className="flex items-center gap-2 hover:text-green-600">
                           <FiShare2 size={20} /> Share
                        </button>
                        <button className="flex items-center gap-2 hover:text-purple-600">
                           <FiDownload size={20} /> Save
                        </button>
                     </div>
                  </div>
               </div>
               <hr />

               <div className="mt-5">
                  <div className="flex justify-between items-center mb-5">
                     <div className="flex items-center gap-5">
                        <img
                           className="w-[80px] h-[80px] rounded-full"
                           src={Imgess}
                           alt="Channel"
                        />
                        <div>
                           <h1 className="font-bold">Marcus Levin</h1>
                           <p>1.2M subscribers</p>
                        </div>
                     </div>
                     <button className="w-[120px] h-[38px] rounded-[2px] bg-red-700 text-white">
                        Subscribe
                     </button>
                  </div>

                  <div>
                     <p className="pl-20">
                        Chris Fisher, also known as the Blind Woodturner,
                        learned his craft by listening to hundreds of hours of
                        YouTube videos and experimenting in his workshop. Now
                        he’s a YouTube creator himself, sells his products
                        worldwide, and does demonstrations all around the
                        country.
                        <br />{" "}
                        <span className="text-[22px] font-bold">show more</span>
                     </p>
                  </div>
                  <hr />

                  <div className="flex gap-5 mt-5">
                     <p>286 Comments</p>
                     <p>Sort by</p>
                  </div>

                  <div className="flex gap-5 items-center mt-[24px]">
                     <img
                        className="w-[40px] h-[40px] rounded-full"
                        src={Imgess}
                        alt="rasm"
                     />
                     <p className="border-b-2 w-full border-b-gray-400 pt-3 text-gray-400">
                        Add a public comment...
                     </p>
                  </div>

                  <div className="flex items-center gap-5 mt-[40px]">
                     <img
                        className="w-[40px] h-[40px] rounded-full"
                        src={Imgess}
                        alt="Channel"
                     />
                     <div>
                        <h1 className="font-bold">
                           James Gouse <span> 8 hours ago</span>
                        </h1>
                        <p>Wow, world is full of different skills </p>
                     </div>
                  </div>
                  <div className="flex gap-6 mt-4 text-white pl-[60px]">
                     <button className="flex items-center gap-2 hover:text-blue-600">
                        <FiThumbsUp size={20} /> 1.7K
                     </button>
                     <button className="flex items-center gap-2 hover:text-red-600">
                        <FiThumbsDown size={20} /> 632
                     </button>
                     <button className="text-[19px] text-gray-400">Reply</button>
                  </div>

                  <div className="flex items-center gap-5 mt-[40px]">
                     <img
                        className="w-[40px] h-[40px] rounded-full"
                        src={Imgess}
                        alt="Channel"
                     />
                     <div>
                        <h1 className="font-bold">
                           James Gouse <span> 8 hours ago</span>
                        </h1>
                        <p>Wow, world is full of different skills </p>
                        <p className="mt-[20px]">Can you provide?</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="w-[30%] p-4 max-h-[90vh] overflow-y-auto no-scrollbar">
               <div className="flex gap-5 mb-4">
                  <button className="bg-white text-black w-[80px] h-[32px] rounded-2xl hover:bg-[#303030] hover:text-white">
                     All
                  </button>

                  <button className="w-[150px] h-[32px] text-white bg-[#303030] rounded-2xl hover:bg-white hover:text-black">
                     From Marcus Levin
                  </button>
               </div>

               {products.map((item) => (
                  <div
                     key={item.id}
                     className="bg-[#202020] rounded-lg overflow-hidden shadow-md flex items-start mb-3"
                  >
                     <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-[150px] h-[100px] object-cover"
                     />

                     <div className="p-3 text-white flex-1">
                        <h2 className="font-semibold text-sm line-clamp-2">{item.title}</h2>
                        <p className="text-gray-400 text-xs mt-1">${item.price}</p>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </div >
   );
};

export default Service;
