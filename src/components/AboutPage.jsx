import React from "react";
import "./aboutpage.css";
import me from "../assets/avatar.webp";
import diplomatura from "../assets/diplomatura.jpg";
import gamificacion from "../assets/gamificacion.jpg";
import java from "../assets/java.jpg";
import metodologias from "../assets/metodologias.jpg";
import stem from "../assets/stem.jpg";
import videogames from "../assets/videogames.jpg";
import webanalitycs from "../assets/webanalitycs.jpg";
import unity from "../assets/unity.jpg";

function AboutPage(props) {
  return (
    <section className={props.changeMode ? "aboutDark" : "aboutLight"}>
      <h1 className="aboutTitle">About me</h1>
      <div className="presentation">
        <img className="imageMe" src={me} alt="Me" />
        <p>
          Hi! I'm Virginia, a web and video game developer with a background in
          electrical engineering and physics teaching. Throughout my career, I
          discovered my passion for programming and decided to focus on software
          development. For six years, I've dedicated myself to teaching physics,
          where I led gamification, programming, and robotics projects with my
          students, allowing me to develop teaching, leadership, and teamwork
          skills. In search of expanding my knowledge in software development, I
          completed an online master's degree in software development, as well
          as other courses and certifications in soft skills and development
          technologies. Today, I combine my technical and teaching skills to
          create innovative solutions. I am excited to continue growing as a
          developer and exploring new opportunities in this fascinating field. I
          love learning and am always looking for new challenges and
          opportunities to grow professionally. I believe that continuous
          learning is key to staying up-to-date in a constantly changing field
          like software development, which is why I continue to dedicate time
          and effort to expanding my knowledge and skills.
        </p>
      </div>
      <div
        className={
          props.changeMode ? "certificationsDark" : "certificationsLight"
        }
      >
        <h1 className="certificationsTitle">Some of my certifications</h1>
        <div className="certificationsImages">
          <img src={diplomatura} alt="Diplomature" />
          <img src={java} alt="Java" />
          <img src={metodologias} alt="Metodologies" />
          <img src={stem} alt="STEM" />
          <img src={videogames} alt="videogames" />
          <img src={webanalitycs} alt="Web analitycs" />
          <img src={gamificacion} alt="Gamification" />
          <img src={unity} alt="Unity" />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
