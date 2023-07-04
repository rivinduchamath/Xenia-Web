import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import { Link } from "react-scroll";
import AboutUs from "../About-us/AboutUs";
const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "/AboutUs"
  },

  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];


const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> Xenia.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">

                <li>
                  <Link  style={{ fontWeight: "bold"}} activeClass="active" to="#" spy={true} smooth={true}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link  style={{ fontWeight: "bold"}} to="aboutUs" spy={true} smooth={true}>
                    About
                  </Link>
                </li>
                    <li>
                      <Link  style={{ fontWeight: "bold"}} to="aboutUs" spy={true} smooth={true}>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link  style={{ fontWeight: "bold"}} to="aboutUs" spy={true} smooth={true}>
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link  style={{ fontWeight: "bold"}} to="aboutUs" spy={true} smooth={true}>
                        Pricing
                      </Link>
                    </li>

              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +1(407)545-3103
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
