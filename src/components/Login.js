import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

const Login = props => {
   return(
      props.permission ? <h3>Good day to you dear admin ^^</h3> :
         (<Routes>
            <Route path={"*"} element={<Navigate replace to={"/login"}/>}/>
         </Routes>)
   )
}

export default Login;