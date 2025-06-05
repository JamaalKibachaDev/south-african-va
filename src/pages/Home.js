import React from "react";
import Header from "../components/Header";
import InfoCards from "../components/InfoCards";
import AccordionHeader from "../components/AccordionHeader";

const Home = () => {
  return (
    <>
      <div className="main-contianer">
        <Header />

        <div>
          <div>
            <InfoCards />
          </div>

    
              <AccordionHeader />


          </div>
        </div>
    </>
  );
};

export default Home;
