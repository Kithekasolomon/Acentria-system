import React from "react";
import Hero from "./Hero/Hero";
import Hblog from "./HBlog";
import Habout from "./Habout";
import AboutCard from "../About/AboutCard";
import Testimonal from "./Testimonials/Testimonials";
import { useState } from "react";
import CourseDisplay from "../CourseDisplay/CourseDisplay";

const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <>
      <Hero />
      <AboutCard />
      <h2>Course Home</h2>
      {/* Add your course cards here */}
      <CourseDisplay category={ category} setCategory={setCategory} />

      <Habout />
      <Testimonal />
      <Hblog />
    </>
  );
};

export default Home;
