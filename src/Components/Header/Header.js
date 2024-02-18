import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

export const Header = () => {

  const location = useLocation();
  
  return (
    <Navbar expand="lg">
      <Container>
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/logo.svg"}
            height={50}
            alt="logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto"></Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              className={
                location.pathname === "/"
                  ? "active header-links"
                  : "header-links"
              }
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                location.pathname === "/contact-us"
                  ? "active header-links"
                  : "header-links"
              }
              to="/contact-us"
            >
              Contact us
            </Link>
            <Link
              className={
                location.pathname === "/about-us"
                  ? "active header-links"
                  : "header-links"
              }
              to="/about-us"
            >
              About Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
