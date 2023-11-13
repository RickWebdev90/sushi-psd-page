import "../css/HeaderStyling.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Big Title Here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <button className="order-button">ORDER NOW</button>
      </div>
    </div>
  );
};

export default Header;
