import React from 'react'
import CourseHome from './CourseHome'
import CoursesCard from './CoursesCard'
import CourseItem from '../CourseItem/CourseItem'

const FullCoursePage = () => {
  return (
      <>
      <div id='courses' className='full-courses'>
        <div className="full-course-sec">
        <CourseItem/>
        <CoursesCard/>
       </div>
          </div>
          
      
    </>
  )
}

export default FullCoursePage
