import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container flex flex-col items-center justify-center">
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/tarun-bathla/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://github.com/TarunBathla2505"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="mailto:tarunbathla721@gmail.com"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-gmail"></i>
          </a>
        </div>

        <span className="footer__copyright">Tarun Bathla | &copy; 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
