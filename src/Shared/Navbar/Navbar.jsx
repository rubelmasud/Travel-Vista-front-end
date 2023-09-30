import { NavLink } from "react-router-dom";
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
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/service">
          <li>Service</li>
        </NavLink>
        <NavLink to="/gallery">
          <li>Gallery</li>
        </NavLink>
        <NavLink to="/blog">
          <li>Blog</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact Us</li>
        </NavLink>
        <NavLink to="/login">
          <button className="login-btn bg-blue-600 px-4 py-[4px] text-white font-mono ">
            Log In
          </button>
        </NavLink>
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
