import React from 'react'
import './Mark.css'
import { useState } from 'react'

const Mark = () => {
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [instructor, setInstructor] = useState("")
  const [File, setFile] = useState("")
  
  const submitImage =async (e) => {
    e.preventDefault()
    // do your axios call here to upload image
    const formData = new FormData()
    formData.append("title", title)
    formData.append("subtitle", subtitle)
    formData.append("instructor", instructor)
    formData.append("file", File)

  }

  return (
    <>
      <div className="main-sec">
        <form className='exam-form' onSubmit={submitImage} >
          <h3>Upload Exam</h3>
          <div className="description">
          <div className="title-area">
            <label htmlFor="title">Course Title:</label>
            <input onChange={(e)=>setTitle(e.target.value)} type="text"  name="title" required />
            
          </div>
          <div className="subtitle-area">
          <label htmlFor="subtitle">
              Course Subtitle (required):</label>
            <input onChange={(e)=>setSubtitle(e.target.value)} type="text"  name="subtitle" />
          </div>
          </div>
          <p className='text'>Please upload a PDF file containing your exam questions.</p>
          <div className="section-2">
          <div className="select-file">
          <label htmlFor="file">Select Exam File:</label>
          <input onChange={(e)=>setFile(e.target.files[0])} type="file" name="file" accept='application/pdf' />
          </div>
          <div className="instructor">
            <label htmlFor="instructor">Instructor:</label>
            <input onChange={(e)=>setInstructor(e.target.value)} type="text"  name="instructor" required />
          </div>
          </div>
          <button className='upload-button'>
            Upload Exam File
          </button>
        </form>

      </div>
    </>
  )
}

export default Mark