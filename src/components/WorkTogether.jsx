import React, { useState } from "react";
import "./WorkTogether.css";
import workImage from "../assets/Work-Together-Image.png";
import underlineImage from "../assets/Element12.png";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";

const WorkTogether = () => {
    //typing animation 
  const [ref, inView] = useInView({
    triggerOnce: true, // only once when in view
    threshold: 0.3,     // fire when 30% visible
  });

  const [startTyping, setStartTyping] = useState(false);

  React.useEffect(() => {
    if (inView) {
      setStartTyping(true);
    }
  }, [inView]);

  return (
    <section className="work-together-section" ref={ref}>
      <div className="work-container">
        <div className="work-left">
          <img
            src={workImage}
            alt="Team Collaboration"
            className="work-image rotate-infinite"
          />
        </div>

        <div className="work-right">
          <h2 className="work-heading">
            <span className="underline-wrapper">
              {startTyping && (
                <TypeAnimation
                  sequence={["Work Together", 1000]}
                  speed={30}
                  wrapper="span"
                  cursor={true}
                  className="typed-text"
                  repeat={0}
                />
              )}
              <img
                src={underlineImage}
                alt="Underline"
                className="heading-underline"
              />
            </span>
          </h2>

          <p className="work-description">
            With whitepace, share your notes with your colleagues and collaborate
            on them. You can also publish a note to the internet and share the URL
            with others.
          </p>

          <button className="work-button">Try It Now</button>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
