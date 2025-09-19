import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
   const [data, setData] = useState([])

   useEffect(() => {
      axios
         .get("https://dummyjson.com/products?limit=20")
         .then((res) => setData(res.data.products))
         .catch((err) => console.log(err))
   }, [])

   return (
      <div>
         <table className='m-5 border-collapse border border-gray-300'>
            <thead>
               <tr className='bg-gray-200'>
                  <th className='border px-3'>ID</th>
                  <th className='border px-3'>Title</th>
                  <th className='border px-3'>Brand</th>
                  <th className='border px-3'>Thumbnail</th>
                  <th className='border px-3'>Price</th>
                  <th className='border px-3'>Category</th>
               </tr>
            </thead>
            <tbody>
               {data.map((value) => (
                  <tr key={value.id} className='hover:bg-gray-100'>
                     <td className='border px-3'>{value.id}</td>
                     <td className='border px-3'>
                        <Link
                           to={`/about/${value.id}`}
                           className='text-blue-500 underline cursor-pointer'
                        >
                           {value.title}
                        </Link>
                     </td>
                     <td className='border px-3'>{value.brand}</td>
                     <td className='border px-3'>
                        <img src={value.thumbnail} alt={value.title} width="80" />
                     </td>
                     <td className='border px-3'>${value.price}</td>
                     <td className='border px-3'>{value.category}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default About
