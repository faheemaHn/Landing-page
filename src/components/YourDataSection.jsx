import React from "react";
import "./YourDataSection.css";
import underlineImage from "../assets/Element12.png";
import halfCircleImage from "../assets/Element14.png";
import { FaArrowRight } from "react-icons/fa";


const YourDataSection = () => {
  return (
    <section className="your-data-section" data-aos="fade-up">
      <div className="your-data-container reverse-layout">
        {/* Right side (Image) */}
        <div className="your-data-right" data-aos="zoom-in">
          <img
            src={halfCircleImage}
            alt="Half Circle"
            className="half-circle-image"
          />
        </div>

        {/* Left side (Text) */}
        <div className="your-data-left">
          <h2 className="your-data-heading" data-aos="fade-up">100%
            <span className="underline-heading3">Your Data
                        <img src={underlineImage} alt="Underline" className="heading-underline5" />
                      </span> 
          </h2>

          <p className="your-data-description" data-aos="fade-down">
            The app is open source and your notes are saved to an open format,
            so you'll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>

          <button className="read-more-btn" data-aos="fade-down">
            Read More<FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};




export default YourDataSection;
