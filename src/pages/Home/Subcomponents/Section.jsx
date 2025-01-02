import React from "react";
import "./Section.css";
import careright from "./../../../assets/caret-right-solid.svg"


const Section = () => {
  return (
    <div className="section-container">
      <div className="arrow"><img src={careright} alt="careright"/></div>
      <div className="content">
        <span className="icon">&gt;</span>
        <span>Published Newsletter for the year 2019-20</span>
      </div>
    </div>
  );
};

export default Section;