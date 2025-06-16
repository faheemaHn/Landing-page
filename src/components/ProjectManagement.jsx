import React from "react";
import "./ProjectManagement.css";
import backgroundImage from "../assets/BACKGROUND.png";
import underlineImage from "../assets/Element11.png";
import projectVideo from "../assets/Accept_tasks.mp4";


const ProjectManagement =() =>{
    return(
        <section 
        className="project-section"
        style={{backgroundImage:`url(${backgroundImage})` }}
        >
            <div className="content-container">
                {/*Left side*/}

                <div className="left-content">
                    <h2 className="heading" data-aos="fade-down">
                        Project Management
                        <img 
                        src={underlineImage}
                        alt="underline"
                        className="heading-underline1"
                        />
                    </h2>
                    <p className="project-description" data-aos="fade-up">
                        Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with
            the mobile app and save them to a note.
                    </p>
                    <button className="get-started-btn">
                        Get Started →
                    </button>
                </div>

                {/* Right side*/}

                <div className="right-content">
                    <video
                    className="right-video"
                    src={projectVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    />

                </div>
            </div>
        </section>
    );
};


export default ProjectManagement;