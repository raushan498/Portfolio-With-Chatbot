import "./portfolio.css";

import IMG1 from "../../assets/Stock-Market-Tracker-Package.jpg";
import IMG2 from "../../assets/To-Do_List.jpg";
import IMG3 from "../../assets/Weather App.jpg";
import IMG4 from "../../assets/Currency-Converter-Package.jpg";
import IMG5 from "../../assets/Resume-Builder.jpg";
import IMG6 from "../../assets/Portfolio.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Stock Market Tracker- a NPM Package",
      img: IMG1,
      description:
        "A NPM package  tool for developers looking to integrate real-time stock price tracking into their Node.js applications.",
      technologies: " ",
      github: "https://github.com/raushan498/rks-stock-market-tracker",
      link : "https://www.npmjs.com/package/rks-stock-market-tracker"
    },
    {
      id: 2,
      title: "Currency Converter- a NPM Package",
      img: IMG4,
      description:
        "A NPM package  designed to help developers seamlessly convert between different currencies within their Node.js applications.",
      technologies: "",
      github: "https://github.com/raushan498/rk-currency-converter",
      link : "https://www.npmjs.com/package/rks-currency-converter"
    },
    {
      id: 3,
      title: "To-Do List",
      img: IMG2,
      description: "A To-Do List is a list of tasks that need to be completed, usually organized by priority or urgency",
      technologies: "Html | CSS | JavaScript",
      github: "https://github.com/raushan498/ToDoList",
      link : ""
    },
    {
      id: 4,
      title: "Weather App",
      img: IMG3,
      description:
        "A dedicated web page built to fetch the weather of a city.",
      technologies: "Html | CSS | JavaScript",
      github: "https://github.com/raushan498/Weather-App?tab=readme-ov-file",
      link : " https://weather-app-final-n1j32ow18-raushan498.vercel.app/"
    },
    {
      id: 5,
      title: "Resume Builder",
      img: IMG5,
      description:
        "WebSite that helps job applicants create a resume quickly by providing pre-designed templates.",
      technologies: "Html | CSS | JavaScript",
      github: "https://github.com/raushan498/Resume-Builder",
      link : "resumebuilder-raushan498s-projects.vercel.app"
    },
    {
      id: 6,
      title: "Portfolio Website",
      img: IMG6,
      description:
        "Portfolio website to showcase my skills and Project",
      technologies: "React Js | CSS | Javascript",
      github: "https://github.com/raushan498/Resume-Builder",
      link : " "
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;