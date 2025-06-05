import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { homeCarousel } from "../assets/data";
import { CarouselItem } from "react-bootstrap";

import './css/Header.css';

const LandingCarousel = () => {
  return (
    <>
    <div className="landing__container">
      <Carousel fade className="landing__carousel">
        {homeCarousel.map(({ id, image, alt }) => (
          <CarouselItem key={id} interval={2800}>
            <img src={image} alt={alt} className="w-100" />
          </CarouselItem>
        ))}
      </Carousel>
      </div>
    </>
  );
};

export default LandingCarousel;
