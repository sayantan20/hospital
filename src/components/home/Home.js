import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import pharmacyImage from "../../images/pharmacy-logo.png";
import carouselOne from "../../images/carousel-one.jpg";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar className="navbar">
        <Navbar.Brand>
          <span className="hospitalname">ABC Hospital</span>
        </Navbar.Brand>
        <Nav className="me-auto mb-1">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="registration">Registration</Nav.Link>
          <NavDropdown title="Service" >
            <NavDropdown.Item href="#appoinment">Book an Appointment</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="Investigation">Diagnostics</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="registration">Register</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>

      <Image
        className="d-block w-100"
        src={carouselOne}
        alt="First slide"
        fluid
      />
    </div>
  );
};

export default Home;
