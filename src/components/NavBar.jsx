import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LogoNav.png";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import "./navBar.css";

function Navbar(props) {
  const onClick = () => {
    props.setChangeMode(!props.changeMode);
  };
  return (
    <nav className={props.changeMode ? "headerDark" : "headerLight"}>
      <span className="logo">
        <img className="logoNav" src={logo} alt="Logo" />
        <a
          className="credits"
          href="https://www.freepik.es/vector-gratis/espacio-trabajo-disenador-grafico_4247422.htm#page=6&query=avatar%20programadora%20mujer&position=16&from_view=search&track=ais"
        >
          Image from Freepik
        </a>
      </span>
      <ul className="anchors">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className="button" onClick={onClick}>
        <img src={props.changeMode ? sun : moon} alt="Mode" />
      </button>
    </nav>
  );
}

export default Navbar;
