import "./ShrinkCarousel.css";
import { Users } from "../data.js";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "../components/NavigationBar";
import { Link } from "react-router-dom";
function ShrinkCarousel() {
  const usersarray = Users.map((item) => (
    <Carousel.Item key={item.id}>
      <img
        className="d-block w-100"
        src={item.profilepicture}
        alt="First slide"
      />
      <Carousel.Caption className="carouselCaption">
        <div>
          <h5>
            <b>{item.username}</b>
          </h5>
          <p>
            <b>{item.LiscenceType}</b>
          </p>
          <button className="carouselbutton">
            <b>Lets Connect</b>
          </button>
          <Link className="carouselbutton" to="/shrink-profile-page">
            <b>More Info</b>
          </Link>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
      <Navbar mode="user" />
      <div className="carouselpage">
        <Carousel className="carousel">{usersarray}</Carousel>
      </div>
    </>
  );
}

export default ShrinkCarousel;
