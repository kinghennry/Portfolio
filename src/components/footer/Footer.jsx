import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container px py">
        <div className="footer__flex">
          <div className="footer__nav ">
            <h2>Henry</h2>
            <div className="footer__navLinks ">
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
            </div>
          </div>
          <div className="footer__icons">
            <a
              href="http://github.com/kinghennry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://twitter.com/KingHeenry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
