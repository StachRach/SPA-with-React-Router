import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../components/Login";

const permission = false;

const AdminPage = () => {
   return (
      <Routes>
         <Route path={"*"} element={<Login permission={permission}/>}/>
      </Routes>
   )
}

export default AdminPage;