import React from 'react'
import './CourseDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import CourseItem from '../CourseItem/CourseItem'

const CourseDisplay = ({ category}) => {
    const {course_list}=useContext(StoreContext)
  return (
      <div className='course-display'>
          <h1>Course List</h1>
          <div className="course-display-list">
              {course_list.map((course, index) => {
                  return <CourseItem key={index} id={course._id} instructor={course.instructor} title={course.title} description={ course.description} image={course.image} duration={course.duration} />
              })}
          </div>
      </div>
          
    
  )
}

export default CourseDisplay