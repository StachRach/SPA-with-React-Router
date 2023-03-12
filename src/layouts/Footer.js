import React from "react";
import {Route, Routes} from "react-router-dom";
import Information from "../components/Information";
import "../styles/Footer.css"

const Footer = () => {
   return (
      <div>
         <h2>Footer</h2>
         <Routes>
            <Route path={"/"} element={<Information main={true}/>}/>
            <Route path={"/:id"} element={<Information main={false}/>}/>
            <Route path={"/:sth/:prod"} element={<Information main={false} prod={true}/>}/>
         </Routes>
      </div>
   )
}

export default Footer;