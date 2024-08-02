import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import './List.css'

const List = ({url}) => {
  
  const [list, setList] = useState([])
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/course/list`)
    if (response.data.success) { 
      setList(response.data.data)
    }
    else {
      toast.error("error fetching")
    }
    
  }
  const removeCourse = async (courseId) => { 
    const response = await axios.post(`${url}/api/course/remove`, { id: courseId })
    await fetchList()
    if (response.data.success) {
      toast.success("Course deleted successfully")
    }
    else {
      toast.error("Error deleting course")
    }

  }
  useEffect(() => {
    fetchList();
  }, [])
  return (
    <div className='list add flex-col'>
      <h1>List of Courses</h1>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Title</b>
          <b>Category</b>
          <b>Description</b>
          <b>Instructor</b>
          <b>Action</b>
        </div>
        {list.length === 0 && <p>No courses found</p>}
      {list.map((item,index) => (
        <div key={index} className='list-table-format'>
          <img src={`${url}/images/`+item.image} alt="" />
          <h2>{item.title}</h2>
          <p>{item.category}</p>
          <p>{item.description}</p>
          <p>{item.instructor}</p>
          <p onClick={()=>removeCourse(item._id)} className='cursor'>Delete</p>
        </div>
      ))}
        
      </div>
     

    </div>
  )
}

export default List