import React from "react";
import github from "../assets/iconGit.svg";
import "./ProjectPage.css";

function ProjectPage(props) {
  const handleGitHubClick = () => {
    window.open("https://github.com/virginia-costa", "_blank");
  };
  return (
    <section className={props.changeMode ? "aboutDark" : "aboutLight"}>
      <h1 className="aboutTitle">My projects</h1>
      <div className="presentation projectPage">
        <button className="github" onClick={handleGitHubClick}>
          <img className="goGit" src={github} alt="github" />
        </button>
        <p>
          Throughout my career, I have developed various projects using
          technologies such as JavaScript, React, Node.js, Express, React Router
          DOM, and APIs. These projects range from interactive web applications
          to server applications and RESTful services. If you're interested in
          seeing the projects I have worked on, I invite you to visit my GitHub
          repository. There, you will find a wide variety of projects where I
          have applied these technologies, and you can explore the source code,
          implemented functionalities, and achievements. Feel free to take a
          look at my repository and learn more about my skills and experience in
          web development. I am proud of the projects I have completed, and I
          would love to have the opportunity to discuss them with you in detail.
        </p>
      </div>
    </section>
  );
}

export default ProjectPage;
