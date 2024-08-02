import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import axios from 'axios'


const LoginPopup = ({ setShowLogin }) => {
    const [token, setToken]=useState("token")
    const url="http://localhost:4000"
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
        // call API to handle login or signup
        // setShowLogin(false)
    }
    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/lec/login";
        } else {
            newUrl += "/api/lec/register";
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
    };
  return (
      <div className='login-popup'>
          <form onSubmit={onLogin} className='login-popup-container'>
              <div className="login-popup-title">
                  <h2>{currState}</h2>
                  <p onClick={()=>setShowLogin(false)}>X</p>
              </div>
              <div className="login-popup-inputs">
                  {currState==="Login"?<></>:<input onChange={onChangeHandler} value={data.name} name='name' type="text" placeholder='Enter Your Name' required />}
                  
                  <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Enter Your Email' required />
                  <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Enter Your Password' required />

              </div>
              <button type='submit'>{ currState==="Login"?"Login":"Create Account"}</button>
              <div className="login-popup-condition">
                  <div className="agree-box">
                  <p>By signing up, you agree to our Terms & Conditions</p>
                  <input type="checkbox" required />
                  <p>I agree</p>
                  </div>
                  {currState ==="Login"?<p>Create a new account?<span onClick={()=>setCurrState("SignUp")}>Click Here</span></p>:<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login</span></p>}
                 
                  <p>Forgot Password?</p>
                  <p>Login with:</p>
                  <div className="social-media-icon">
                      <img src="https://img.shields.io/badge/Facebook-blue?style=for-the-badge&logo=facebook" alt="Facebook"/>
                      <img src="https://img.shields.io/badge/Google-red?style=for-the-badge&logo=google" alt="Google"/>
                  </div>
                  

                 
              </div>
          </form>
    </div>
  )
}

export default LoginPopup