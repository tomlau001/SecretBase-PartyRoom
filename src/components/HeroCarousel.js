import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../photos/c-img1.jpg";
import img2 from "../photos/c-img2.jpg";
import img3 from "../photos/c-img3.jpg";

const HeroCarousel = () => {
  return (
    <section id="home">
      <Carousel>
        <Carousel.Item interval={5000} className="c-item">
            <img
              className="d-block w-100 m-auto c-img"
              src={img1}
              alt="First slide"
            />
          <Carousel.Caption>
           <h1 className="hero-h1">Extraordinary Experiences</h1>
           <hr/>
           <p><q>Adventure awaits at every turn </q></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="c-item">
            <img
              className="d-block w-100 m-auto c-img"
              src={img2}
              alt="Second slide"
            />
          <Carousel.Caption>
            <h1 className="hero-h1">Unforgettable Memories</h1>
            <hr/>
            <p><q>Create memories that last a lifetime</q></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000} className="c-item">
            <img
              className="d-block w-100 m-auto c-img"
              src={img3}
              alt="First slide"
            />
          <Carousel.Caption>
            <h1 className="hero-h1">Awesome Environment</h1>
            <hr/>
            <p><q>Immerse yourself in a stunning atmosphere</q></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
