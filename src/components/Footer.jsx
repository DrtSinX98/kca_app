import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faBootstrap, faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import area from "../images/area.png";

function Footer() {
  return (
    <footer className="footer">
        <Container>
            <Row>
                <Col sm={4} className='footer-cols mb-3'>
                    <span className='sec'>Social</span>
                    <br/>
                    <FontAwesomeIcon icon={faFacebook} />{' '} Connect with us on Facebook
                    <br/>
                    <FontAwesomeIcon icon={faInstagram} />{' '} Follow us on Instagram
                    <br/>
                    <FontAwesomeIcon icon={faTwitter} />{' '} Follow us on Twitter
                </Col>
                <Col sm={4} className='footer-cols mb-3'>
                    <span className='sec'>Service_Area</span>
                    <Image src={area} className='area' fluid/>
                </Col>
                <Col sm={4} className='footer-cols mb-3'>
                    <span className='sec'>Contact</span>
                    <br/>
                    Call/Whatsapp:
                    <br/>
                    <a href="https://wa.me/+919840671987" target="_top">+919840671987</a>
                    <br/>
                    <a href="https://wa.me/+917418829916" target="_top">+917418829916</a>
                    <br/>
                    E-mail:
                    <br/>
                    <a href="mailto:atozpekos@gmail.com" target="_top">atozpekos@gmail.com</a>
                </Col>
            </Row>
            <hr className="my-4" />
            <Row>
                <p><span className='sec'>&copy;</span> 2024 Pritish Joshi
                <br/>
                <br/>Written in <FontAwesomeIcon icon={faReact} /> & <FontAwesomeIcon icon={faBootstrap} /></p>
            </Row>
            <style>
                {`
                .footer {
                    background-color: var(--primary-color);
                    color: var(--tertiary-color);
                    text-align: center;
                    width: 100%;
                    bottom: 0;
                }

                .footer-img {
                    width: 80%;
                }

                .footer-cols {
                    text-align: justify;
                    padding-left: 20px;
                    padding-right: 20px;
                }

                .footer .sec {
                    color: var(--secondary-color);
                    font-weight: bold;
                    font-size: 150%;
                }

                .footer a {
                    color: var(--secondary-color);
                }

                .footer a:hover {
                    cusror: pointer;
                    font-size: 110%;
                }

                .fa-react {
                    color: var(--secondary-color);
                }

                .fa-bootstrap {
                    color: var(--secondary-color);
                }

                .fa-facebook {
                    color: var(--secondary-color);
                }

                .fa-instagram {
                    color: var(--secondary-color);
                }

                .fa-twitter {
                    color: var(--secondary-color);
                }

                .area {
                    border-radius: 10px;
                }

                @media (max-width: 767px) {
                    .footer-img {
                        width: 50%;
                    }
                }
                `}
            </style>
        </Container>
    </footer>
  );
}

export default Footer;
