import React, { useState } from "react";
import "./Add.css";
import { IoIosCheckmark, IoIosCloudUpload } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    instructor: "",
    requirement: "",
    expectation: "",
    category: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("instructor", data.instructor);
    formData.append("duration", data.duration);
    formData.append("level", data.level);
    formData.append("topic", data.topic);
    formData.append("subtitle", data.subtitle);
    formData.append("requirement", data.requirement);
    formData.append("expectation", data.expectation);
    formData.append("category", data.category);
    formData.append("image", image);

    {
      /*const response = await axios.post(`${url}/api/course/add`,formData);
        if (response.data.success) {
            setData({
                
                title: "",
                description: "",
        duration:"",
        instructor: "",
        requirement: "",
        expectation: "",
                category: "",
                level: "",
                topic: "",
        subtitle: "",
            })
            setImage(false);
            toast.success(response.data.message)
        
        } else {
            toast.error(response.data.message)
            
        }*/
    }
    if (image) {
      formData.append("image", image);
    }
    const response = await fetch(`${url}/api/course/add`, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      alert("Course added successfully");
      setData({
          title: "",
          duration:"",
        description: "",
        instructor: "",
        requirement: "",
        expectation: "",
        category: "",
        level: "",
        topic: "",
        subtitle: "",
      });
      setImage(false);
    } else {
      alert("Failed to add course");
    }
  };

  return (
    <div className="add">
      <form onSubmit={onSubmitHandler} className="flex-col">
        <div className="title-upload-sec">
          <div className="add-img-upload flex-col">
            <h4>Upload Course Thumbnail</h4>
            {/*<img src="https://via.placeholder.com/200x200" alt="Add Image" />*/}
            <div className="upload-sec">
              <label htmlFor="image">
                <img
                  src={image ? URL.createObjectURL(image) : "Choose file"}
                  alt=""
                />
              </label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image"
                name="image"
                hidden
                required
              />
            </div>
          </div>
          <div className=" add-course-name flex-col">
            <p>Course Title</p>
            <input
              onChange={onChangeHandler}
              type="text"
              value={data.title}
              name="title"
              required
              placeholder="Enter Course Title"
            />
          </div>
          <div className="add-course-desc flex-col">
            <p>Course Description</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              required
              placeholder="Enter Course Description..."
              rows="10"
            />
          </div>
          <div className="add-course-instructor flex-col">
            <p>Instructor's name</p>
            <input
              onChange={onChangeHandler}
              type="text"
              name="instructor"
              required
              placeholder="Enter Full Names"
            />
          </div>
          <div className="add-course-category flex-col">
            <p>Category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
              required
            >
              <option value="">Select Category</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="design">Design</option>
              <option value="data">Data Science</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        {/* <div className="upload-btn">
                  <label for="upload"><IoIosCloudUpload className='upload-icon' /><p className='upload-text'>Upload Course Video</p></label>
                  <input type="file" id="upload" name="upload" hidden required />
              </div>*/}
              <div className="sec-2">
              <div className="expectation-sec">
          <h4>Expactations</h4>
          <div className="expectation-input">
            <label htmlFor="expectation">Expect to Learn</label>
            <input
              required
              name="expectation"
              onChange={onChangeHandler}
              value={data.expectation}
              type="text"
              placeholder="Expactations"
            />
          </div>
        </div>
        <div className="requirement-sec">
          <h4>Requirements</h4>
          <div className="requirement-input">
            <label htmlFor="requirement">This are requirements</label>
            <input
              required
              name="requirement"
              onChange={onChangeHandler}
              value={data.requirement}
              type="text"
              placeholder="Requirements"
            />
          </div>
        </div>
        <div className="duration-sec">
          <h4>Duration</h4>
          <div className="duration-input">
            <label htmlFor="duration">Duration (in days)</label>
            <input
              required
              name="duration"
              onChange={onChangeHandler}
              value={data.duration}
              type="number"
              placeholder="Duration"
            />
          </div>
        </div>
        <div className="add-course-level flex-col">
          <p>Select Level</p>
          <select
            onChange={onChangeHandler}
            value={data.level}
            name="level"
            required
          >
            <option value="">Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
            <option value="professional">Professional</option>
            <option value="other">Other</option>
          </select>
        </div>
        </div>

        <button className="add-btn">
          CONFIRM
          <IoIosCheckmark className="submit-mark" />
        </button>
      </form>
    </div>
  );
};

export default Add;
