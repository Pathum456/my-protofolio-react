import React from "react";
import Fade from "react-reveal/Fade";
import "./About.css";
export default function About() {
  return (
    <div className="about-container">
      <Fade bottom className="fade-container">
        <span className="about-title">About Me</span>

        <div className="about-parent">
          <div className="image-div"></div>
          <div className="about-details">
            <div className="about-content">
              <span className="about-description">
              Full stack web and mobile developer with background knowledge of Spring  and a knack for building applications with utmost efficiency. Strong professional with a BSC willing to be an asset to an organization.
              </span>
              <div className="about-highlightes">
                <div>
                  <h5  className="highlightes-title">Here are a Few Highlights:</h5>
                </div>

                <div className="highlights">
                  <div className="highlight-blob"></div>
                  <span>Full Stack web and mobile development</span>
                </div>
                <div className="highlights">
                  <div className="highlight-blob"></div>
                  <span>
                    Interactive Front End and Back End as per the design
                  </span>
                </div>
                <div className="highlights">
                  <div className="highlight-blob"></div>
                  <span>React and React Native</span>
                </div>
                <div className="highlights">
                  <div className="highlight-blob"></div>
                  <span>Managing database</span>
                </div>
                <div className="profile-options">
                    
                <button className="btn primary-btn">
                    {""}
                    Hire Me{" "}
                </button>
               
                <button className="btn highlighted-btn"> <a href="mybio.pdf" download={'Pathum Kaleesha.pdf'}>
                    {""}
                    Get Resume{" "}
                    </a></button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
