import React from "react";
import "../styles/LoginPage.css"

const LoginPage = () => {
   return (
      <div className={"login"}>
         <label htmlFor={""}>Login:
            <br/>
            <input type={"text"}/></label>
         <br/>
         <label htmlFor={""}>Password:
            <br/>
            <input type={"password"}/></label>
         <br/>
         <button>Sign in</button>
      </div>
   );
}

export default LoginPage;