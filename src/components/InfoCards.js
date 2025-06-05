import React from "react";
import Card from "react-bootstrap/Card";

import './css/Header.css'


import { homeCards } from "../assets/data";


//icons


const InfoCards = () => {
  return (
    <>
      <div className="container px-4">
        <div className="card__container">
        {homeCards.map(({id, title, icon, description}) => (
          <>

          <Card.Title className="d-flex justify-content-center p-2">
           {title}
          </Card.Title>

          <Card.Body className="card__body bg bg-dark bg-gradient m-2 rounded text-white p-3">
          {description}
          </Card.Body>
          </>
        ))}
     
      </div>
      </div>
    </>
  );
};

export default InfoCards;
