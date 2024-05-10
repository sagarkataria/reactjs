import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";

const Header = () => {

   const [btnNameReact , setBtnNameReact] = useState("login")

    return (
      <div className="header" style={{ backgroundColor:"#f0f0f0" }}>
          <div>
             <img className="logo" src={CDN_LOGO} alt=""/>
          </div>
          <div className="nav-items">
             <ul>
                <li>Name</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <li>
                  <button
                   className="login"
                   onClick={()=>{
                     btnNameReact==="login" 
                     ? setBtnNameReact("logout") 
                     : setBtnNameReact("login")
                   }}
                  >
                    {btnNameReact}
                  </button>
                </li>
             </ul>
          </div>
      </div>
    )
}

export default Header;