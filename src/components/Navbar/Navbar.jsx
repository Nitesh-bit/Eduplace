import "./Navbar.css";
import logo from "../../edusity_assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import menu_icon from "../../edusity_assets/menu-icon.png";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobilMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobilMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? " " : "hide-mobile-menu "}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
}
