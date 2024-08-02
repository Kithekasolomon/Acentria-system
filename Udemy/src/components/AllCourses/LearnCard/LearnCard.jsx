import React from "react";
import "./LearnCard.css";
import { blog } from "../../../dummydata";
import pic1 from "../../../assets/pic1.png";
import pic2 from "../../../assets/pic2.png";
import { Link } from "react-router-dom";

const LearnCard = () => {
  return (
    <>
      <div className="learn-sec">
        <div className="learn-description">
          <h1>Description</h1>
          <p>
            Are you looking for a Google My Business (GMB) course that shows you
            how to rank Google My Business listings?
          </p>
          <br />
          <p>
            In Adobe Photoshop, we will review photo editing and manipulation
            techniques like how to cut objects out, duotones, changing color on
            objects, the liquify tool and we will create a compelling YouTube
            thumbnail with our newly learned photoshop skills as well as an
            entire book cover design project.
          </p>
          <br />
          <p>
            In Adobe Illustrator, we will master the pen tool by hand tracing
            simple and complex shapes. We will explore the power of the shape
            builder tool and In the end of this section, we will design a
            complete logo design. There is an entirely new introduction and
            tools section that has been added where we work through a 7 page
            vector tracing worksheet and in the end create a complex vector
            illustration using our newly learned illustrator vector tools.
            Lastly, we will put together an event flyer to practice our layout
            skills, and even work through the branding process and create a
            logo, business card and letterhead for a business.
          </p>
          <h1>Requirements</h1>
          <p>
            Access to Adobe Photoshop, Illustrator & InDesign (Or Affinity
            Designer, Affinity Photo, Affinity Publisher as an Alternative). I
            will be using the Adobe Creative Cloud versions, but those with
            older version can still get a lot out of this class. Those wanting
            to take the course with Affinity products will find some tools and
            names do differ so Adobe is preferred.
          </p>
          <h1>What will you learn?</h1>
          <p>Logo Design</p>
          <br />
          <p>Print & Editorial Design</p>
          <br />
          <p>Pattern Design and Illustration</p>
          <br />
          <p>Pattern Design and Illustration</p>
          <br />
          <h1>Who is this course for?</h1>
          <p>Anyone interested in creating compelling and GREAT design.</p>
          <br />
          <p>
            Those interested in learning Photoshop, Illustrator and InDesign
            (Affinity Designer Too!)
          </p>
          <br />
          <p>
            Those wanting to understand graphic design basics and theory paired
            with real world projects and applications
          </p>
          <br />
        </div>
        <div className="learn-pic-card">
          <div className="pic-sec">
            <img src={pic2} alt="" />
          </div>
          <div className="img-content">
            <div className="sec1">
              <h4>Instructor</h4>
              <p>John Macharia</p>
            </div>
            <div className="sec1">
              <h4>Duration</h4>
              <p>5hrs 37mins</p>
            </div>
            <div className="sec1">
              <h4>Lessons</h4>
              <p>20</p>
            </div>
            <div className="sec1">
              <h4>Enrolled</h4>
              <p>257 Students</p>
            </div>
            <div className="sec1">
              <h4>Access</h4>
              <p>Lifetime</p>
            </div>
          </div>
          <div className="btn-sec">
            <Link to='/video-card'><button className="learn-now-btn">Start Learning</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnCard;
