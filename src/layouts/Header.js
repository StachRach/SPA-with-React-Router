import React from "react";
import { Route, Routes } from "react-router-dom";
import Image from './Image'
import "../styles/Header.css"

const Header = () => {
   
   return (
      <>
         <Routes>
            <Route path={"/"} element={<Image index={0}/>}/>
            <Route path="/products" element={<Image index={1}/>}/>
            <Route path="/contact" element={<Image index={2}/>}/>
            <Route path="/admin" element={<Image index={3}/>}/>
            <Route path="/login" element={<Image index={3}/>}/>
            <Route path="*" element={<Image index={0}/>}/>
         </Routes>
      </>
   )
}

export default Header;