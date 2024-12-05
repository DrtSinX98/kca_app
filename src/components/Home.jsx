import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import jumb from "../images/jumb.jpeg";
import gif from "../images/gif.webp";

function Home() {
  return (
    <Container>
      <Row>
          <Image src={jumb} className='jumbotron' fluid/>
      </Row>
      <hr className="my-4" />
      <Row>
        <h3 className="type">
        <Typewriter
            options={{
              cursor: "_",
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Karthick Contractual Assistance (KCA)")
                .start();
            }}
          />
        </h3>
        <p className="mt-3 catch">
          <span className="sec">{'{  '}</span>
          As a fledgling start-up, our services are currently exclusively offered within the Kadaiyam and Tenkasi regions of Tamil Nadu.
          It will soon be expanded nationwide across India-Service starts from April-14"
          <br/>
          வயதானவர்களை அவர்களின் வீட்டிலே பராமரிக்க சேவைகளை வழங்குகிறோம்  , தற்காலிகமாக எங்கள் சேவைகளை தமிழ்நாட்டில், கடையம் மற்றும் தென்காசி பகுதிகளில்  மட்டுமே வழங்குகின்றோம் (சேவை தொடங்கும் நாள் சித்திரை-1-ஏப்ரல் -14, 2024. "விரைவில் இந்தியா முழுவதும் ") 
          <span className="sec">{'  }'}</span>
        </p>
      </Row>
      <Row>
        <Col md={6} className="my-2 who">
            <h2>Who We Are</h2>
            <p>
            We are dedicated for providing old age care support to any person when physical presence is unable to meet, whether it's emergency need, regular care, Physical assistance, and mental needs [Health and wealth related emergency needs]. Our commitment lies in working alongside individuals, ensuring that our services are always delivered with people in mind.
            <br/>
            we are here to help you. When you think, you need support to assist your parents, 
            please call us.
            <br/>
            <br/>
            யாரெல்லாம தங்களின் பெற்றோர்களை கவனிக்க இயலாமல்உள்ளார்களோ அவர்களுக்கு , அவர்களின் பெற்றோர்களை கவனிக்க எங்களின் சேவைகள் ஆனது (1) உடனடி சேவை, (2) தொடர்ச்சியான சேவை, (3) மனது மேம்பாட்டிற்கான சேவை என பல சேவைகளை வழங்குகிறோம். 
            உங்களுக்கு உதவவே நங்கள், வாழ்வில் நீங்கள் முன்னேற பெற்றோர்களை கைவிடாதீர்கள் நங்கள் உறுதி அளிக்கிறோம். 
            <br/>
            உங்கள் பெற்றோர்களின் நல்வாழ்விற்கு.
            </p>
        </Col>
        <Col md={6} className="my-2">
            <Image src={gif} className="gif" fluid/>
        </Col>
      </Row>
      
      <style>
       {`
       .col-lg-4 {
          justify-content: center;
        }

        .type {
          font-weight: bold;
          text-align: center;
          font-size: 48px;
          color: var(--primary-color)
        }

        .jumbotron {
          border-radius: 30px;      
        }

        .who {
          text-align: justify;
          background-color: var(--secondary-color);
        }

        .who h2 {
          text-align: center;
          color: var(--primary-color);
          font-weight: bold;
        }

        .who p {
          color: black;
          font-weight: bold;
        }

        .gif {
          object-fit: cover;
        }

        .catch {
          font-size: 18px;
          font-weight: bold;
        }

        .catch .sec {
          color: var(--secondary-color);
          font-size: 22px;
        }

        .list-group-item {
          font-weight: bold;
          font-size: 18px;
        }

        .lg-head {
          background-color: var(--secondary-color);
          color: var(--primary-color);
          font-size: 24px;
        }

        @media (max-width: 767px) {
            .catch {
              text-align: justify;
            }
          }
        `}
      </style>
    </Container>
  );
}

export default Home;
