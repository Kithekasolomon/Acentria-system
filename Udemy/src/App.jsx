import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import "./App.css";

import FullCoursePage from "./components/AllCourses/FullCoursePage";
import LearnCard from "./components/AllCourses/LearnCard/LearnCard";
import VideoCard from "./components/VideoCard/VideoCard";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        

        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<FullCoursePage />} />
          <Route path="/learn-card" element={<LearnCard />} />
          <Route path="video-card" element={<VideoCard />} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
