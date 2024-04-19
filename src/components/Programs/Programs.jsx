import "./Programs.css";
import program1 from "../../edusity_assets/program-1.png";
import program2 from "../../edusity_assets/program-2.png";
import program3 from "../../edusity_assets/program-3.png";
import program_icon_1 from "../../edusity_assets/program-icon-1.png";
import program_icon_2 from "../../edusity_assets/program-icon-2.png";
import program_icon_3 from "../../edusity_assets/program-icon-3.png";

export default function Programs() {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
}
