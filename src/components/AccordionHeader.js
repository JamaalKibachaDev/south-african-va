import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

import { homeAccordion } from "../assets/data";

import './css/Header.css';

const AccordionHeader = () => {
  return (
    <>
    <div className="container">
    <div className="py-5">
            
      <div className="accordion__container">
      <h1 className="faq-h text-start">FAQs</h1>
      <MDBAccordion initialActive={1} className="shadow" flush >
        {homeAccordion.map(({ id, title, description, collapseId}) => (
          <MDBAccordionItem
            collapseId= {collapseId}
            headerTitle={title}
            id={id}
           className="accordion__desc">
            {description}
          </MDBAccordionItem>
        ))}
      </MDBAccordion>
      </div>
      </div>
      </div>
    </>
  );
};

export default AccordionHeader;
