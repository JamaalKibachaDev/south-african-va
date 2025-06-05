import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CiMenuBurger } from "react-icons/ci";

import Offcanvas from "react-bootstrap/Offcanvas";

import { ReactComponent as SAAVLogo } from "../assets/saav.svg";

import "./css/NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ onClick }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navLinks = [
    { path: "/sa-virtual/home", title: "Home" },
    { path: "/sa-virtual/applyNow", title: "Apply Now" },
    { path: "/sa-virtual/staff", title: "Staff" },
    { path: "/sa-virtual/fleet", title: "Fleet" },
    { path: "/sa-virtual/routedb", title: "Hubs & Route Database" },
    { path: "/sa-virtual/ranks", title: "Ranks" },
    { path: "#", title: "Crew Center" },
  ];

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="px-2 d-flex justify-content-between">
          <Navbar.Brand href="/sa-virtual/home">
            <SAAVLogo width="100" height="100" className=""/>
          </Navbar.Brand>
          <CiMenuBurger onClick={handleShow} className="CiMenuBurger mx-3" />
        </Container>

        <Offcanvas show={show} onHide={handleClose} className="offcanvas__nav">
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Container>
              <Nav className="">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.title}
                    to={link.path}
                    className="text-decoration-none text-muted my-2 fs-4"
                    onClick={handleClose}
                  >
                    {link.title}
                  </NavLink>
                ))}
              </Nav>
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
};

export default NavBar;
