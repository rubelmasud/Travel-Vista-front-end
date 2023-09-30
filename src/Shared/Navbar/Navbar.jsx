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
    <nav className={`navbar px-12 ${scrolling ? "scrolling" : ""}`}>
      <h3 className=" logo text-2xl md:text-3xl font-semibold">Travel Vista</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setInMobile(false)}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>Service</li>
        </Link>
        <Link to="/">
          <li>Gallery</li>
        </Link>
        <Link to="/">
          <li>Blog</li>
        </Link>
        <Link to="/">
          <li>Contact Us</li>
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
