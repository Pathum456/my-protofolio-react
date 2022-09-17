/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Typical from 'react-typical';
import "./Profile.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
           
            <a href="https://github.com/Pathum456">
              <i className=" fa fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/pathum-kaleesha-166a15225/">
              <i className=" fa fa-linkedin-square"></i>
            </a>
            <a href="https://twitter.com/Pathum_Kaleesha">
              <i className=" fa fa-twitter-square"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100074316473313">
              <i className=" fa fa-facebook-square"></i>
            </a>

            </div>
          </div>
          <div className="profile-details-name">
            
            {""}
            Hello, I'M <span className="highlited-text">Pathum kaleesha</span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
                {""}
                <h1>
                  {" "}
                  <Typical 
                  loop={Infinity}
                  steps={[
                    "Pathum Kaleesha",
                    5000,"Full Stack Developer..,",
                    5000,"Mobile App Developer..,",
                    5000,"React/React Native ",
                    
                  ]}></Typical>
                </h1>
                <span className="profile-role-tagline">
                    knack of building application with front and back end 
                    Operations.
                </span>
            </span>
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
        <div className="profile-picture">
            <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
