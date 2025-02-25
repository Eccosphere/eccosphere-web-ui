import React from "react";
import image from "../../../../assets/spaceImages/lord_buddha.jpg";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div className="home-section">
      {/* Left Side - Text Content */}
      <div className="home-content">
        <h2 className="home-title">The Essence of home Philosophy</h2>
        <p className="home-text">
          home emphasizes simplicity, mindfulness, and harmony with nature. It
          encourages a peaceful mind, balanced work-life, and minimal
          distractions. Our workspace is designed with home principles,
          fostering creativity, focus, and well-being.
        </p>
        <p className="home-text">
          Experience a tranquil environment where you can work with clarity,
          surrounded by inspiration.
        </p>
      </div>

      {/* Right Side - Image Cards */}
      <div className="home-images">
        <img src={image} alt="home Garden" className="home-img" />
      </div>
    </div>
  );
};

export default HomeContent;
