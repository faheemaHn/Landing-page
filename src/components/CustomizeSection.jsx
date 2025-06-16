import React from "react";
import customizeImage from "../assets/bgremovedImage.png"; 
import underlineImage from "../assets/Element12.png"; 
import './CustomizeSection.css';



const CustomizeSection = () => {
  return (
    <section className="customize-section white-bg">
      <div className="customize-container">
        <div className="customize-left" data-aos="fade-right">
          <img src={customizeImage} alt="Customize Feature" className="customize-image" />
        </div>
        <div className="customize-right">
          <h2 className="customize-heading" data-aos="fade-down">
  <span className="typing-animation-heading">
    Customise it to <br></br><span className="underline-heading3">your needs
      <img src={underlineImage} alt="Underline" className="heading-underline" />
    </span>
  </span>
</h2>

<p className="customize-description" data-aos="fade-up">
  Customise the app with plugins, custom themes and multiple text editors Or create your own scripts and plugins using the Extension API.
</p>

          <button className="customize-button" data-aos="fade-up">Let’s Go →</button>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
