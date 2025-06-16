import React from "react";
import "./FooterSection.css";
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import AppleLogo from "../assets/apple-black-logo 2.png";
import WindowsLogo from "../assets/windows-logo 1.png";
import AndroidLogo from "../assets/android-logo 1.png";
import SiteLogo from "../assets/Logo56.png";
import IconWorld from "../assets/Iconworld.png";

const FooterSection = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <h1 className="footer-heading">Try Whitepace today</h1>
        <h3 className="footer-description">
          Get started for free. <br />
          Add your whole team as your needs grow.
        </h3>
        <button className="footer-btn">
          Try Taskey Free <FaArrowRight />
        </button>
        <h4 className="footer-contact">On a big team? Contact sales</h4>
        <div className="footer-logos">
          <img src={AppleLogo} alt="Apple" />
          <img src={WindowsLogo} alt="Windows" />
          <img src={AndroidLogo} alt="Android" />
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Middle Section */}
      <div className="footer-bottom">
        <div className="footer-left">
          <img src={SiteLogo} alt="Logo" className="site-logo" />
          <p className="site-description">
            Whitepace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-subheading">Product</h4>
          <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Customer stories</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-subheading">Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Guides & tutorials</a></li>
            <li><a href="#">Help center</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-subheading">Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h5 className="footer-mini-title">Try It Today</h5>
          <p className="footer-mini-desc">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="footer-btn">
            Start today <FaArrowRight />
          </button>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Bottom Extra Section */}
      <div className="footer-extra">
        <div className="footer-extra-left">
          <img src={IconWorld} alt="Language" className="world-icon" />
          <select className="language-selector">
            <option>English</option>
            <option>தமிழ்</option>
            <option>සිංහල</option>
          </select>

          <a href="#">Terms & Privacy</a>
          <a href="#">Security</a>
          <a href="#">Status</a>
          <span>©2021 Whitepace LLC</span>
        </div>

        <div className="footer-extra-right">
          <a href="#"><FaFacebook className="social-icon" /></a>
          <a href="#"><FaInstagram className="social-icon" /></a>
          <a href="#"><FaLinkedin className="social-icon" /></a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
