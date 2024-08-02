import React from 'react'
import './CourseItem.css'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { Link } from "react-router-dom";

const CourseItem = ({ id, title, description, image,instructor }) => {
    const {url}=useContext(StoreContext)
  return (
      <div className='course-item'>
          <div className="course-item-container">
              <img className='course-item-image' src={url+"/images/"+image} alt="" />
          </div>
          <div className="course-item-info">
              <div className="course-item-name-rating">
                  <p>{title}</p>
                  <div className="img-rate">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                      <IoIosStarHalf />
                      
                  </div>
                  
                  
              </div>
              <p className="course-item-desc">{description}</p>
              <p className='item-name'>{ instructor}</p>
          </div>
          <Link to=
          '/learn-card'><button className='course-item-button'>
              Enroll Now!
    
          </button></Link>
    </div>
  )
}

export default CourseItem