import React, { useEffect } from "react";
import "./SponsorsSection.css";
import AOS from "aos";
import "aos/dist/aos.css";

import underlineImage from "../assets/Element12.png";
import appleImg from "../assets/apple.png";
import microsoftImg from "../assets/Microsoft.png";
import slackImg from "../assets/Slack.png";
import googleImg from "../assets/Google.png";

const SponsorsSection = () => {
  useEffect(() => {
    //Animation trigger 
    AOS.init({ duration: 1000 });
  }, []);

  return (
   <section className="sponsors-section" data-aos="fade-up">
  <h2 className="sponsors-heading" data-aos="fade-down">
    Our Sponsors
  </h2>
  <div className="underline-heading">
    <img
      src={underlineImage}
      alt="Underline"
      className="heading-underline-center"
    />
  </div>
      <div className="sponsor-logos">
        <img
          src={appleImg}
          alt="Apple"
          className="sponsor-logo"
          data-aos="fade-right"
          data-aos-delay="100"
        />
        <img
          src={microsoftImg}
          alt="Microsoft"
          className="sponsor-logo"
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <img
          src={slackImg}
          alt="Slack"
          className="sponsor-logo"
          data-aos="fade-right"
          data-aos-delay="300"
        />
        <img
          src={googleImg}
          alt="Google"
          className="sponsor-logo"
          data-aos="fade-right"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};

export default SponsorsSection;
