import React from "react";
import Image from "../assets/Image.png";
import "./HomePage.css";

function HomePage(props) {
  return (
    <div className={props.changeMode ? "homeDark" : "homeLight"}>
      <section className="image">
        <img src={Image} alt="Coding" />
        <a href="https://www.freepik.es/vector-gratis/ilustracion-concepto-mecanografia-codigo_10259340.htm#query=coding%20ilustration&position=22&from_view=search&track=ais">
          Image storyset from Freepik
        </a>
      </section>
      <section className="text">
        <p className="textcontent">
          Hello and welcome to my website! I'm Virginia, a passionate developer
          who loves creating innovative solutions. My goal is to collaborate
          with companies to achieve their objectives through efficient and
          high-quality software development. On my website, you will find some
          of my previous projects, skills and education, as well as my
          commitment to teamwork and collaboration to achieve optimal results.
        </p>
        <p className="textcontent">Thank you for visiting my site!</p>
      </section>
    </div>
  );
}

export default HomePage;
