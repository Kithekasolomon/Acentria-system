import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoIosPerson } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const navigate=useNavigate()
  const [token, setToken] = useState("token");
  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    setShowLogin(false);
    navigate("/")
  }
  useEffect(() => {
    // Get the token from local storage if it exists
    if (localStorage.getItem("token") === token) { setToken(localStorage.getItem("token")); }
   
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <h1>ACENTRIA TRAINING CENTER</h1>
        <h3>INSTRUCTOR'S HUB</h3>
      </div>

      <div className="auth-btn">
        {!token ? 
          <button onClick={()=> setShowLogin(true)}>
            <IoIosLogIn/>Login</button>
        : 
          <div className="nav-profile">
            <IoIosPerson className="profile-img" />
            <ul className="nav-profile-dropdown">
              <li></li>
              <hr />
              <li>
                  <IoIosLogOut className="logout-icon" />
                  <p onClick={logout} className="logout-text">Logout</p>
              </li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
