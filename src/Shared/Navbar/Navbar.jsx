import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation(); // Get the current route location

  const handleScroll = () => {
    setScrolling(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobile(!isMobile);
  };

  const navLinkClass = (path) =>
    location.pathname === path ? "active" : "default";

  return (
    <nav className={`navbar px-12 ${scrolling ? "scrolling" : ""}`}>
      <h3 className="logo text-2xl md:text-3xl font-semibold">Travel Vista</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={toggleMobileMenu}
      >
        {["/", "/About", "/Service", "/Blog", "/Contact"].map((path, index) => (
          <NavLink to={path} key={index} className={navLinkClass(path)}>
            <li>{path === "/" ? "Home" : path.slice(1)}</li>
          </NavLink>
        ))}
        <NavLink to="/login">
          <button className="login-btn bg-blue-600 px-4 py-[4px] mx-auto md:mb-0 mb-6  block text-white font-mono">
            Log In
          </button>
        </NavLink>
      </ul>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <AiOutlineClose /> : <BiMenuAltRight />}
      </button>
    </nav>
  );
};

export default Navbar;
