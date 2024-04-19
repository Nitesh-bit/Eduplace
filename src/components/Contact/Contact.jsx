import "./Contact.css";
import msg_icon from "../../edusity_assets/msg-icon.png";
import mail_icon from "../../edusity_assets/mail-icon.png";
import phone_icon from "../../edusity_assets/phone-icon.png";
import location_icon from "../../edusity_assets/location-icon.png";
import white_arrow from "../../edusity_assets/white-arrow.png";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5d458078-0bc1-4b83-a4ad-76c82738d07e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setTimeout(() => {
      setResult("");
    }, 3000);
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} />
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          aperiam, fugiat minus atque delectus nihil repudiandae odit cum velit
          autem. Dolore, mollitia voluptatum ad molestias error perspiciatis
          labore voluptate reprehenderit.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@Eduplace.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +91 1234567890
          </li>
          <li>
            <img src={location_icon} alt="" />
            88 Massachusetts Ave, Cambridge <br /> MA 01234, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Enter your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button className="btn dark-btn" type="submit">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}
