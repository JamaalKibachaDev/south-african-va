import React from 'react'
import Carousel from "react-bootstrap/Carousel";

import BrusselsVA from "../assets/brussels-va.jpeg";
import SriLankaVA from "../assets/srilanka-va.jpeg";
import EthiopianVA from "../assets/ethiopian-va.jpeg";

const CodeShares = () => {
  return (
    <>
    <div className='my-5'>

        <div className='m-3'>
            <h3 className='text-muted text-end'>
                SAAV Codeshares
            </h3>
        </div>
    <Carousel fade>
        <Carousel.Item>
          <img src={BrusselsVA} alt="saav-carousel-img" className="w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={EthiopianVA} alt="saav-carousel-img" className="w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={SriLankaVA} alt="saav-carousel-img" className="w-100" />
        </Carousel.Item>

      </Carousel>
    </div>
    </>
  )
}

export default CodeShares
