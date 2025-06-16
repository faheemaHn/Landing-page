import React from "react";
import "./AppSection.css";
import waveBackground from "../assets/Element15.png";
import appImage from "../assets/Apps.png";
import { FaArrowRight } from "react-icons/fa";

const AppSection =()=> {
    return(
        <section className="app-section" data-aos="fade-up">
            <div className="app-container">
                {/*left side image*/}

                <div className="app-left" data-aos="zoom-in">
                    <img
                    src={appImage} 
                    alt="Apps"
                    className="rotating-app-img"
                    />
                </div>

                {/*rightside -text*/}
                <div className="app-right" data-aos="fade-left">
                    <h2 className="app-heading">
                          Work with Your Favorite Apps Using{" "}
                          <span className="Whitepace-text">Whitepace</span>

                    </h2>
                    <p className="app-description">
                        Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success. 
                    </p>
                    <button className="read-more-btn">
                         Read More <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AppSection;