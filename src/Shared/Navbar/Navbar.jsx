import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMobile, setInMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar  ${scrolling ? "scrolling" : ""}`}>
      <h3 className="Logo">Travel Vista</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setInMobile(false)}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>About</li>
        </Link>
        <Link to="/">
          <li>Contact</li>
        </Link>
        <Link to="/">
          <li>Sign up</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setInMobile(!isMobile)}
      >
        {isMobile ? <AiOutlineClose /> : <BiMenuAltRight />}
      </button>
    </nav>
  );
};

export default Navbar;
