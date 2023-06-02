import React from "react";
import github from "../assets/github.png";
import contact from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import "./footer.css";

function Footer(props) {
  const handleGitHubClick = () => {
    window.open("https://github.com/virginia-costa", "_blank");
  };

  const handleContactClick = () => {
    window.open("mailto:costa.virginia7@gmail.com", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/costa-virginia/", "_blank");
  };

  return (
    <div className={props.changeMode ? "footerDark" : "footerLight"}>
      <button onClick={handleGitHubClick}>
        <img src={github} alt="GitHub" />
      </button>
      <button onClick={handleContactClick}>
        <img src={contact} alt="Contact Me" />
      </button>
      <button onClick={handleLinkedInClick}>
        <img src={linkedin} alt="LinkedIn" />
      </button>
    </div>
  );
}

export default Footer;
