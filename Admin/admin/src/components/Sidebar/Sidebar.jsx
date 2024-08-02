import React from 'react'
import './Sidebar.css'
import { IoIosCreate, IoIosHome, IoIosMedal, IoMdCheckboxOutline,IoMdListBox } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    
  return (
      <div className='sidebar'>
          <div className="sidebar-options">
              <NavLink to='/' className="sidebar-option">
                  <IoIosHome className="sidebar-icon" />
                  <span className="sidebar-text">Home</span>
                  
              </NavLink>
              <NavLink to='/add' className="sidebar-option">
                  <IoIosCreate className="sidebar-icon" />
                  <span className="sidebar-text">Create Course</span>
                  
              </NavLink>
              <NavLink to='/list' className="sidebar-option">
                  <IoMdListBox className="sidebar-icon" />
                  <span className="sidebar-text">Course List</span>
                  
              </NavLink>
              <NavLink to='/mark' className="sidebar-option">
                  <IoMdCheckboxOutline className="sidebar-icon" />
                  <span className="sidebar-text">Exam Marking</span>
                  
              </NavLink>
              <NavLink to='/grade' className="sidebar-option">
                  <IoIosMedal className="sidebar-icon" />
                  <span className="sidebar-text">GradeBook</span>
                  
              </NavLink>
              
          </div>
          
      
    </div>
  )
}

export default Sidebar
