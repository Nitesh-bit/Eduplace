import "./Hero.css";
import dark_arrow from "../../edusity_assets/dark-arrow.png";

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          iusto magnam debitis ipsam quo. Cumque nam at dolorem expedita aut cum
          ut laborum consequatur beatae perspiciatis vitae autem, est ipsa!
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}
