import { CDN_LOGO } from "../utils/constants";

const Header = () => {
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
             </ul>
          </div>
      </div>
    )
}

export default Header;