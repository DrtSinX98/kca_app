import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import care from "../images/care.svg"
import one from "../images/1.jpg"
import two from "../images/2.png"
import three from "../images/3.png"
import four from "../images/4.png"
import five from "../images/5.png"
import six from "../images/6.jpg"

function About() {
    return (
      <Container>
        <Row>
            <h1>About Us</h1>
        </Row>
        <hr className="my-4" />
        <Row className="abt">
            <Col md={6}>
            <p>
            Our team comprises trained professionals from diverse backgrounds, including IT, mechanical engineering, science, and literature. Each member possesses exceptional credentials and upholds high ethical standards, earning a stellar reputation. Our services go beyond the ordinary, offering you additional benefits and dividends
            We are regularly updating our team to provide better service to the people and always welcome to receive the critics and comments from our elderly people. 
            <br/>
            <br/>
            எங்கள் அணியில் திறனுள்ள  வலிமையான நபர்கள்  இடம் பெற்றிருக்கின்றனர். அவர்கள் ஐடி, இயந்திர பொறியியல், அறிவியல், மருத்துவம் மற்றும் இலக்கியங்கள் போன்ற துறைகளில் கல்வி பெற்றவர்கள். ஒவ்வொரு உறுப்பினரும் பாராட்டத்தக்க  சான்றிதழ்களை உடையவர்கள். அணியில் உள்ள நபர்கள்  உயர்ந்த குறிக்கோள்களையும் சேவை மனப்பான்யுடன்  பனி செய்ப்பவர்கள் . 
            நாங்கள் மக்களுக்கு சிறப்பான சேவை வழங்குவதற்கான மேலும் நல்ல அணியை சேர்க்கின்றோம், எப்போதும் எங்கள் வாடிக்கையாளர்களிடம் இருந்து  முழுமையான விமர்சனங்களை  வரவேற்கிறோம். விமர்சனங்களுக்கு தகுந்தவாறு எங்களை மாற்றியமைக்க தயாராக  உள்ளோம்.
            </p>
            </Col>
            <Col md={6}>
                <Image src={care}/>
            </Col>
        </Row>
        <Row className="mt-4">
            <h2>The Team</h2>
        </Row>
        <Row className="mt-4">
        <Col md={6} className="mb-4">
          <Card className="main">
            <Card.Img variant="top" src={one} alt="Card cap" />
            <Card.Body>
              <Card.Title>Dr. P. Esakki Karthik Ph.D.</Card.Title>
              <Card.Text className="c-text">
                <h3>Founder and CEO</h3>
                <p>More than 10 years experience from various education institutes across the India (Kanyakumari to Punjab and Kolkata)
                Earned people credential from various people, build the higher credibility. He can communicate </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="main">
            <Card.Img variant="top" src={two} alt="Card cap" />
            <Card.Body>
              <Card.Title>Dr. Vinitha</Card.Title>
              <Card.Text className="c-text">
                <h3>Physiotherapy Doctor</h3>
                <p>8/210, Duraisamypuram
                Mathapuram, Kadyam
                Perumpattu</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row className="mt-4">
        <Col md={6} className="mb-4">
          <Card className="main">
            <Card.Img variant="top" src={three} alt="Card cap" />
            <Card.Body>
              <Card.Title>Mrs. P. Maragatahm DN</Card.Title>
              <Card.Text className="c-text">
                <h3>Nurse-State Government-TN</h3>
                <p>More than 10 years experience from Tamilnadu Government medial system and 3 years of experience from private hospitals. Experience in Delivery, Heart operation, kidney dialysis.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="main">
            <Card.Img variant="top" src={four} alt="Card cap" />
            <Card.Body>
              <Card.Title>Mr. Anthreya</Card.Title>
              <Card.Text className="c-text">
                <h3>Local expert</h3>
                <p>He is having very good local experience in the area of Tenkasi and its surrounding, He can fulfill the customer needs from Tenkasi surrounding commodities such as packed palm juice.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row className="mt-4">
        <Col md={6} className="mb-4">
          <Card className="main">
            <Card.Img variant="top" src={five} alt="Card cap" />
            <Card.Body>
              <Card.Title>Mr. A. Mohamed Saffi B.L.</Card.Title>
              <Card.Text className="c-text">
                <h3>Legal Advisor</h3>
                <p>Ambasamudram court</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="main">
            <Card.Img variant="top" src={six} alt="Card cap" />
            <Card.Body>
              <Card.Title>Mr. N. Kaushik MCA.</Card.Title>
              <Card.Text className="c-text">
                <h3>IT-expert</h3>
                <p>Vast experience in internationally reputed company like CTS, Oracle, More than 6 years experience in the area of IT. He worked as an interviewer in the many employee recruitment process, particularly information technology firms. He is an very active traveler to all over India</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <style>
            {`
                h1 {
                    color: var(--primary-color);
                    font-weight: bold;
                }

                h2 {
                    color: var(--secondary-color);
                    text-align: center;
                }

                .abt {
                text-align: justify;
                background-color: var(--secondary-color);
                }

                .abt h2 {
                text-align: center;
                color: var(--primary-color);
                font-weight: bold;
                }

                .abt p {
                color: black;
                font-weight: bold;
                }

                .card-img-top {
                    padding: 5px;
                    border-radius: 10px;
                }

                .card {
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                }

                .main {
                    height: 630px;
                }

                .card-body {
                    border-radius: 10px;
                }

                .card-title {
                    text-align: center;
                    font-size: 24px;
                    font-weight: bold;
                }

                .card h3 {
                    color: var(--secondary-color);
                    text-align: center;
                }

                .c-text {
                    text-align: center;
                }
            `}
        </style>
      </Container>
    );
}

export default About;