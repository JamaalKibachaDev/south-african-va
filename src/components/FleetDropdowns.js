import React from "react";
import Accordion from "react-bootstrap/Accordion";

import { SAAVFleet } from "../assets/data";

import './css/Fleet.css';

const FleetDropdowns = () => {
  return (
    <>
      <div className="container">
        <div className="p-4">
          <h3 className="text-end">SAAV Fleet</h3>
        </div>

        <Accordion defaultActiveKey="0" flush className="pb-4" >
          {SAAVFleet.map(
            ({ id, aircraft, image, range, crzSpeed, maxAlt, capacity }) => (
              <>
                <Accordion.Item eventKey={id} >
                  <Accordion.Header>{aircraft}</Accordion.Header>

                  <Accordion.Body className="accordion__fleet">
                    <div className="fleet__img__container">
                      <img
                        src={image}
                        className="fleet__img rounded my-2"
                        alt="a330-fleet"
                      />
                    </div>

                    <div className="d-flex justify-content-center">
                      <ul className="fleet__ul">
                        <li className="fleet__li">
                          <span className="fw-bold">Range:</span> {range}km
                        </li>
                        <li className="fleet__li">
                          <span className="fw-bold">CRZ Spd :</span> M{crzSpeed}
                        </li>
                        <li className="fleet__li">
                          <span className="fw-bold">Max Altitide: </span>FL{maxAlt}
                        </li>
                        <li className="fleet__li">
                          <span className="fw-bold">Capacity: </span> {capacity}pax
                        </li>
                      </ul>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </>
            )
          )}
        </Accordion>
      </div>
    </>
  );
};

export default FleetDropdowns;
