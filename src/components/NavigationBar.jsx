import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = (props) => {
  if (props.mode === "visitor") {
    return (
      <>
        <Navbar style={{ backgroundColor: "#007A79" }}>
          <Container>
            <Navbar.Brand
              href="#home"
              style={{ color: "white", fontFamily: "Exo2" }}
            >
              Cerebra
            </Navbar.Brand>
            <Nav style={{ textAlign: "right" }}>
              <Nav.Link href="#book" style={{ color: "white" }}>
                Book
              </Nav.Link>
              <Nav.Link href="#contactUs" style={{ color: "white" }}>
                Contact Us
              </Nav.Link>
              <Nav.Link
                href="#login"
                style={{ paddingLeft: "100px", color: "white" }}
              >
                Login
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  } else if (props.mode === "user") {
    return (
      <>
        <Navbar style={{ backgroundColor: "#007A79" }}>
          <Container>
            <Navbar.Brand href="#home" style={{ color: "white" }}>
              Cerebra
            </Navbar.Brand>
            <Nav style={{ textAlign: "right" }}>
              <Nav.Link href="#book" style={{ color: "white" }}>
                Book
              </Nav.Link>
              <Nav.Link href="#contactUs" style={{ color: "white" }}>
                Contact Us
              </Nav.Link>
              <Nav.Link
                href="#logout"
                style={{ paddingLeft: "100px", color: "white" }}
              >
                Logout
              </Nav.Link>
              <Nav.Link href="#notifications">
                <img
                  src="https://www.kindpng.com/picc/m/699-6998313_ios-bell-outline-comments-white-bell-icon-png.png"
                  alt="Logo"
                  style={{
                    width: "25px",
                    borderRadius: "100%",
                    margin: "0 15px 0 15px",
                  }}
                />
              </Nav.Link>
              <Nav.Link href="#profile">
                <img
                  src="https://eshendetesia.com/images/user-profile.png"
                  alt="Logo"
                  style={{ width: "30px", borderRadius: "100%" }}
                />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  } else if (props.mode === "psych") {
    return (
      <>
        <Navbar style={{ backgroundColor: "#007A79" }}>
          <Container>
            <Navbar.Brand href="#home" style={{ color: "white" }}>
              Cerebra
            </Navbar.Brand>
            <Nav style={{ textAlign: "right" }}>
              <Nav.Link href="#bookings" style={{ color: "white" }}>
                Bookings
              </Nav.Link>
              <Nav.Link href="#contactUs" style={{ color: "white" }}>
                Contact Us
              </Nav.Link>
              <Nav.Link
                href="#logout"
                style={{ paddingLeft: "100px", color: "white" }}
              >
                Logout
              </Nav.Link>
              <Nav.Link href="#notifications">
                <img
                  src="https://www.kindpng.com/picc/m/699-6998313_ios-bell-outline-comments-white-bell-icon-png.png"
                  alt="Logo"
                  style={{
                    width: "25px",
                    borderRadius: "100%",
                    margin: "0 15px 0 15px",
                  }}
                />
              </Nav.Link>
              <Nav.Link href="#profile">
                <img
                  src="https://eshendetesia.com/images/user-profile.png"
                  alt="Logo"
                  style={{ width: "30px", borderRadius: "100%" }}
                />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  } else if (props.mode === "moderator") {
    return (
      <>
        <Navbar style={{ backgroundColor: "#007A79" }}>
          <Container>
            <Navbar.Brand href="#home" style={{ color: "white" }}>
              Cerebra
            </Navbar.Brand>
            <Nav style={{ textAlign: "right" }}>
              <Nav.Link href="#moderate" style={{ color: "white" }}>
                Moderate
              </Nav.Link>
              <Nav.Link href="#requests" style={{ color: "white" }}>
                Requests
              </Nav.Link>
              <Nav.Link href="#contactUs" style={{ color: "white" }}>
                Contact Us
              </Nav.Link>
              <Nav.Link
                href="#logout"
                style={{ paddingLeft: "100px", color: "white" }}
              >
                Logout
              </Nav.Link>
              <Nav.Link href="#notifications">
                <img
                  src="https://www.kindpng.com/picc/m/699-6998313_ios-bell-outline-comments-white-bell-icon-png.png"
                  alt="Logo"
                  style={{
                    width: "25px",
                    borderRadius: "100%",
                    margin: "0 15px 0 15px",
                  }}
                />
              </Nav.Link>
              <Nav.Link href="#profile">
                <img
                  src="https://eshendetesia.com/images/user-profile.png"
                  alt="Logo"
                  style={{ width: "30px", borderRadius: "100%" }}
                />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  } else return <></>;
};

export default NavigationBar;
