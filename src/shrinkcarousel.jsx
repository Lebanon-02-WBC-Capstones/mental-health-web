import "./App.css";
import "./style.css";
import { Users } from "./data.js";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

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
          <button className="carouselbutton">
            <b>More Info</b>
          </button>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <div className="carouselpage">
      <button className="showcards">
        <b>Show cards</b>
      </button>
      <Carousel className="carousel">{usersarray}</Carousel>
    </div>
  );
}

export default ShrinkCarousel;
