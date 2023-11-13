import React from "react";
import "../css/PopularMenuStyling.css";

const PopularMenu = () => {
  const images = [
    "/kim/suhiMenu1.png",
    "/kim/SushiMenu2.png",
    "/kim/suhimenu3.png",
  ];

  return (
    <div className="popular-menu">
      <h2 className="popular-menu-title">Popular Menu</h2>
      <p className="popular-menu-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="menu-items">
        {images.map((image, index) => (
          <div key={index} className="menu-item">
            <div className="image-container">
              <img src={image} alt={`Menu Item ${index + 1}`} />
            </div>
            <h3>Title Here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
