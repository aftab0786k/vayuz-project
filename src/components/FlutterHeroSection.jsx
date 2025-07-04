import React from "react";
import code1 from "../assets/code1.svg";
import code2 from "../assets/code2.svg";
import code from "../assets/code.svg";
import "./FlutterHeroSection.css"; // Make sure to import the CSS below

const FlutterHeroSection = () => {
  return (
    <section className="hero-gradient overflow-hidden">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <h1 className="hero-title">
            Unlock the Potential <br /> of Flutter
          </h1>
          <p className="hero-subtitle">
            Your Premier Partner for Cross-Platform <br /> App Excellence!
          </p>
          <button className="btn">
            UPGRADE YOUR TECH
          </button>
        </div>

        {/* Right Visual Content */}
        <div className="hero-right">
          <img
            src={code1}
            alt="Main Code"
            className="main-code-img"
          />
          <img
            src={code}
            alt="Snippet 1"
            className="snippet1-img"
          />
          <img
            src={code2}
            alt="Snippet 2"
            className="snippet2-img"
          />
        </div>
      </div>
    </section>
  );
};

export default FlutterHeroSection;
