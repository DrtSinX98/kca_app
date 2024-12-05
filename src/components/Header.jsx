import React, { useState } from "react";
import { Image, Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import ThemeSwitch from "./ThemeSwitch";
import ThemeButton from "./ThemeButton";
import logo from "../images/logo.svg"

export const useActiveState = () => {
  const [active, setActive] = useState("home");
  const handleSelect = (key) => {
    setActive(key);
  };

  return { active, handleSelect };
};

function Header(props) {
  const { active, handleSelect } = props;

  return (
    <header className="header">
      <Container>
        <Navbar variant="dark" expand="lg" collapseOnSelect>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#">
            <Image src={logo} alt="logo-image" height="80" className="d-inline-block"/>
          </Navbar.Brand>
          <ThemeButton/>
          <Navbar.Collapse id="basic-navbar-nav" className="col-nav">
            <Nav activeKey={active} onSelect={handleSelect}>
              <Nav.Item>
                <Nav.Link
                  eventKey="home"
                  className={active === "home" ? "active-link" : ""}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="oas"
                  className={active === "oas" ? "active-link" : ""}
                >
                  Old Age Support
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="about"
                  className={active === "about" ? "active-link" : ""}
                >
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="roc"
                  className={active === "roc" ? "active-link" : ""}
                >
                  Rules of Caretakes
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item 
                eventKey="rocac"
                className={active === "rocac" ? "active-link" : ""}
              >
                Rules of Customer and Companies
              </NavDropdown.Item>
              <NavDropdown.Item 
                eventKey="prices"
                className={active === "prices" ? "active-link" : ""}
              >
                Prices
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <ThemeSwitch/>
        </Navbar>
        <style>
          {`
            .header {
              background-color: rgba(255 255 255 / 0);
              backdrop-filter: blur(3px);
              -webkit-backdrop-filter: blur(3px);
              width: 100%;
              position: sticky;
              top: 0;
              z-index: 999;
            }
            .navbar {
              background-color: rgba(255 255 255 / 0);
            }

            .navbar-brand {
              margin-right: 12px;
              margin-left: 12px;
            }

            .nav-link {
              font-size: 18px;
            }

            .navbar-nav .active {
              background-color: var(--primary-color);
              border-radius: 5px;
              transition: background-color 0.4s ease;
            }

            .navbar-nav .nav-link.active {
              font-weight: bold;
            }

            .navbar {
              --bs-navbar-toggler-border-color: none;
            }

            .sec {
            color: var(--secondary-color);
            }

            @media (max-width: 992px) {
              .nav-link {
                text-align: center;
                margin-top: 10px;
                padding-left: 5px;
              }

              .navbar-brand {
                font-weight: 400;
                margin-right: 4px;
                margin-left: 4px;
              }
            }
          `}
        </style>
      </Container>
    </header>
  );
}

export default Header;
