import React from "react";

import LandingCarousel from "./LandingCarousel";

import "./css/Header.css";

import { homeHeader } from "../assets/data";

const Header = () => {
  return (
    <>
      <div className="">
        <LandingCarousel />

        <div className="text-center p-3">
          {homeHeader.map(({title, description }) => (
            <>
            <div className="card__main">
              <h3 className="header__h3">{title}</h3>
              <p className="header__p text-muted m-4">{description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
