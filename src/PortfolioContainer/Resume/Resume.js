import React from "react";
import { Fade } from "react-reveal";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <Fade>
        <div className="resume-header">
            <span>Resume</span> 
        </div>
        <div className="bullet-content">
            <div className="bullet-icon-bar">
                <div className="bullet-icon icon1"></div>
                <div className="bullet-icon icon2"></div>
                <div className="bullet-icon icon3"></div>
                <div className="bullet-icon icon4"></div>
            </div>
            <div className="icon-list">
                <div className="list1" >
                    <span>Education</span>
                </div>
                <div className="list2">
                    <span>Education</span>
                </div>
                <div className="list3">
                    <span>Education</span>
                </div>
                <div className="list4">
                    <span>Education</span>
                </div>
            </div>
        </div>
      </Fade>
    </div>
  );
}
