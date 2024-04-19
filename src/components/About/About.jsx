import "./About.css";
import about_img from "../../edusity_assets/about.png";
import play_icon from "../../edusity_assets/play-icon.png";

export default function About({ setPlayeState }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => setPlayeState(true)}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui
          ratione accusantium mollitia ut dolorem totam, molestias eveniet
          quidem provident? Perspiciatis quisquam fuga obcaecati vitae eaque
          magni illo quidem cumque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui
          ratione accusantium mollitia ut dolorem totam, molestias eveniet
          quidem provident? Perspiciatis quisquam fuga obcaecati vitae eaque
          magni illo quidem cumque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui
          ratione accusantium mollitia ut dolorem totam, molestias eveniet
          quidem provident? Perspiciatis quisquam fuga obcaecati vitae eaque
          magni illo quidem cumque.
        </p>
      </div>
    </div>
  );
}
