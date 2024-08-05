import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Head from "./Head"
import "./Header.css"
import { IoIosLogOut, IoIosPerson } from "react-icons/io";
import { StoreContext } from "../../context/StoreContext"
import { IoIosMoon } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { LuSun } from "react-icons/lu";

const Header = ({ setShowLogin }) => {
  const navigate=useNavigate()
  const {token,setToken}=useContext(StoreContext)
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const logOut = () => {
    setToken("");
    localStorage.removeItem("token");
    setShowLogin(false);
    navigate("/")
  }
  


  return (
    <>
      <Head />
      <header className="header">
        <nav className={`nav-bar ${sticky?'dark-nav':''}`}>
          <ul className="nav-ul">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          {!token ? <button onClick={() => setShowLogin(true)} className="sign-in-button">Sign In</button> :
            <div className="navbar-profile">
            <IoIosPerson className="profile-img" />
              <ul className="nav-profile-dropdown">
                
              <hr />
              <li onClick={logOut}>
                  <IoIosLogOut className="logout-icon" />
                  <p onClick={() => setToken(null)}>Logout</p>
                </li>
                <hr />
            </ul>
          </div>}
          
          
          
            
          
        </nav>
        
      </header>
    </>
  )
}

export default Header
