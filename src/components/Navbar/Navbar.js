import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <div className="compDet">
        <div className="logo">
          <a href="/">
          <img
            src="https://portal.creditap.in/static/media/logo.60f9d361.svg"
            alt="Creditap"
          />
          </a>
        </div>
        <div className="user">
          <svg
            className="MuiSvgIcon-root DropDown_user__1Ljbc"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
          </svg>
        </div>
      </div>
      <nav>
          <ul>
          <li><Link to={"/dashboard"} className="linkClass">Dashboard</Link></li>
          <li><Link to={"/profile"} className="linkClass">Profile</Link></li>
              <li>Applications</li>
              <li>Blog</li>
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;
