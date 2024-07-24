import { Link } from "react-router-dom";
import Style from "./style.module.css";
import logo from "../../assets/logofull.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        scrolled
          ? `${Style.navbar_container} ${Style.scrolled}`
          : Style.navbar_container
      }
    >
      <div className={Style.logo_container}>
        <Link to="/">
          <img src={logo} alt="logo" width="100%" />
        </Link>
      </div>
      <ul className={`${Style.menu_bar} flex space-x-4 gap-10 items-center`}>
        <li>
          <Link to="/">Home</Link>
          <div className={Style.borderBottom}></div>
        </li>
        <li className="flex items-center">
          <Link to="/products">Products</Link>
          <div className={Style.borderBottom}></div>
        </li>
        <li>
          <Link to="/about">About</Link>
          <div className={Style.borderBottom}></div>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
          <div className={Style.borderBottom}></div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
