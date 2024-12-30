import "./intro.css";

 import { FaAward } from "react-icons/fa";
import React from "react";
 import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.jpg'




const Intro = () => {
  return (
    <section id="about">
      <h5>Know more</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Raushan Kumar" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed Projects</small>
            </article>
          </div>
          <p id='p1'>
          Welcome to my portfolio! I'm Raushan Kumar, a Electronics and Communication Engineering student at NIT Patna, 
          where I've been passionately exploring the world of technology. With a current CGPA of 8.49, I am committed to achieving excellence
           in my academic pursuits. As a tech enthusiast, I'm constantly seeking out new challenges and opportunities to broaden my knowledge and skills. 
           This portfolio showcases some of my projects and achievements, 
           offering a glimpse into my journey as a budding technologist.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;