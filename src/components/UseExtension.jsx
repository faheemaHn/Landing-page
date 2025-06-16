import React from "react";
import "./UseExtension.css";
import extensionImage from "../assets/useextention1.jpg";
import { useInView } from "react-intersection-observer";
import underlineImage from "../assets/Element12.png";

const UseExtension = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className={`extension-section ${inView ? "fade-in" : ""}`} ref={ref}>
      <div className="extension-container">
        <div className="extension-left">
            
          <h2 className="extension-heading"data-aos="fade-down">Use as {""}<span className="underline-wrapper">Extension 
            <img src={underlineImage} alt="Underline" className="heading-underline"/>
            </span>
             </h2>


          <p className="extension-description" data-aos="fade-up">
            Use the web clipper extension, available on Chrome and Firefox, to save
            web pages or take screenshots as notes.
          </p>
          <button className="extension-button" data-aos="fade-right">Let’s Go</button>
        </div>
        <div className="extension-right" data-aos="fade-up">
          <img src={extensionImage} alt="Browser Extension" className="extension-image" />
        </div>
      </div>
    </section>
  );
};

export default UseExtension;
