import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../page/home'
import About from '../page/about'
import Contact from '../page/contact'
import Service from '../page/service'
import Header from '../components/header'
// import Userinfo from '../page/about/user-info'
import MainLoyaut from '../components/header/main-loyaut'
const Router = () => {
   return (
      <>

         <Routes>
            <Route path='/' element={<MainLoyaut />}>
               <Route index path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               {/* <Route path='/about/:id' element={<Userinfo />} /> */}
               <Route path='/contact' element={<Contact />} />
               <Route path='/service' element={<Service />} />
            </Route>
            <Route path='*' element={<h1 className='text-center'><b>404 Not Eror</b></h1>} />
         </Routes>
      </>
   )
}

export default Router