import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

import { FaTiktok, FaDiscord, FaYoutube } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

import './css/Footer.css';

const Footer = () => {
  return (
    <>
      <div className="mt-4">
        <MDBFooter className="text-center text-white bg-dark bg-gradient">
          <MDBContainer className="pb-0">
            <section className="p-4">
              <div className="fs-3">
                <h2>Socials :</h2>

                <a href="//" className="text-white">
                  <FaDiscord className="me-5" />
                </a>

                <a href="https://www.youtube.com/channel/UCz2OIouIHesDhlfAsLz7qDg" className="text-white">
                  <FaYoutube className="me-5" />
                </a>

                <a href="/" className="text-white">
                  <FaTiktok className="me-5"/>
                </a>

                <a href="mailto:southafricanvirtual1@gmail.com" className="text-white">
                  <IoMailOpenOutline className=""/>
                </a>
              </div>

              <div className="d-flex justify-content-center m-4">
              <iframe src="https://www.youtube.com/embed/seXXlycb6Lc?si=TjXFfW37NomOCQZT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>

              <div className="">
                <p className="footer__desc text-secondary">
                  Infinite Flight's South African Virtual is not affiliated with
                  or endorsed by the real SA Airways in any way. <br/>
                  All SAAV logos
                  are registered trademarks of South African Airways.
                </p>
              </div>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2025 Copyright : SA Virtual
          </div>
        </MDBFooter>
      </div>
    </>
  );
};

export default Footer;
