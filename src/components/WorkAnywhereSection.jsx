import React from "react";
import "./WorkAnywhereSection.css";
import { FaArrowRight } from "react-icons/fa";
import underlineImage from "../assets/ElementBlue.png";
import waveImage from "../assets/GroupSde.png";



const WorkAnywhereSection = () => {
  return (
    <section className="work-section2" data-aos="fade-up">
      <img 
      src={waveImage}
       alt="Wave background"
        className="wave-image"
         />
      
      <h2 className="work-heading2">
        Your work, everywhere <span className="underline-heading3"> you are
                    <img src={underlineImage} alt="Underline" className="heading-underline" />
                  </span>
        
      </h2>

      <p className="work-description2">
        Access your notes from your computer, phone or tablet by synchronising with various services, including Whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
      </p>

      <button className="try-taskey-btn">
        Try Taskey <FaArrowRight />
      </button>
    </section>
  );
};







export default WorkAnywhereSection;
