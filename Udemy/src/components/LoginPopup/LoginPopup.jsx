import React, {  useContext, useState } from 'react'
import './LoginPopup.css'
import { IoIosPerson } from "react-icons/io";
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
    const {url,setToken}=useContext(StoreContext)
    const [currState, setCurrState] = useState("Login")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
  
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]: value }));
    }
    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/student/login";
        }
        else {
            newUrl += "/api/student/register";
        }
        const response = await axios.post(newUrl, data);
        if (response.data.success) { 
            setToken(response.data.token)
            localStorage.setItem('token', response.data.token)
            setShowLogin(false)
            alert("Login Successful")
        }
        else {
            alert(response.data.message)
        }
            

        
    
    }
    



  return (
      <div className='login-popup'>
          <form onSubmit={onLogin} className='login-popup-container'>
              <div className="login-popup-title">
                  <h2>{currState}</h2>
                  <p onClick={()=>setShowLogin(false)}>X</p>
                  
              </div>
              <div className="login-popup-inputs">
                  {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder=' Enter your name' required />}
                  
                  <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Enter your email' required />
                  <input type="text" name='password' onChange={onChangeHandler} value={data.password} placeholder='Enter your password' />
              </div>
              <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
              <div className="login-popup-condition">
                  <input type="checkbox" required />
                  <p>By continuing , I agree to the terms of use & privacy policy</p>
              </div>
              { currState ==="Login"?<p className='new-acc'>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>: <p>Already have an account <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
              
             
          </form>
    </div>
  )
}

export default LoginPopup