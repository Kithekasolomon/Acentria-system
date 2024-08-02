import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/AddCourse/Add'
import List from './pages/CourseList/List'
import Mark from './pages/ExamMarking/Mark'
import Grade from './pages/GradeBook/Grade'
import Home from './pages/Home/Home'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  
  const url = 'http://localhost:4000'
  const[showLogin,setShowLogin]=useState(false)
  return (
    <div>
      {showLogin ? <LoginPopup setShowLogin={ setShowLogin} />:<></>}
      <ToastContainer  /> 
      <Navbar setShowLogin={setShowLogin} />
      <hr />
      <div className="app-content">
        <Sidebar  />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/mark" element={<Mark url={url} />} />
          <Route path="/grade" element={<Grade url={url} />} />
          <Route path="/" element={<Home url={url} />} />
          
        </Routes>
      </div>
      
    </div>
  )
}

export default App
