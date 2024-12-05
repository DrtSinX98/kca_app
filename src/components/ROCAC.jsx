import React from "react";
import { Container, Row } from "react-bootstrap";

function ROCAC() {
    return (
      <Container>
        <Row>
            <h1>Rules for Clients</h1>
        </Row>
        <hr className="my-4" />
        <Row>
            <h2>Do's and Don'ts</h2>
            <br/>
            <ol>
                <li>Don't appoint your assistance by yourself without knowledge of the company.</li>
                <li>Physical exploitation and mental harassing of the employee cannot be accepted, if the incident occur company will make case against customer on employee protection (Articles 23 and 24 of the Constitution)</li>
                <li>Once client receive the acceptance letter from company, company responsibility to send caretake to customer.</li>
            </ol>
        </Row>
        <hr className="my-2" />
        <Row>
            <h2>செய்ய வேண்டியவை மற்றும் செய்யக் கூடாதவை</h2>
            <ol>
                <li>கம்பனியின் அறிவில்லாது உங்கள் உதவியளரை தனியாக நியமிக்க வேண்டாம்.</li>
                <li>பணியாளர்களை  உடலால்  மற்றும் வார்த்தையால் துன்பபடுத்தக் கூடாது, மேலும் அவ்வாறு துன்புறுத்தும் பட்சத்தில், அவர்களின் மீது சட்டம் பாயும்(இது  மேற்கோள்:இந்திய அரசிலமைப்பு 23 ,24 பிரிவு)</li>
                <li>ஒருவருக்கு கம்பனி உறுதியளித்தல், வாடிக்கையாளருக்கு பரிமாறிப்பாளர்களை  அனுப்புவது நிறுவனந்த்தின்  கடமையாகும்.</li>
            </ol>
        </Row>
        <style>
            {`
                h1 {
                    color: var(--primary-color);
                    font-weight: bold;
                }

                h2 {
                    color: var(--secondary-color);
                }

                .note {
                    color: var(--primary-color);
                    font-size: 150%;
                    font-weight: bold;
                    text-align: center;
                }
            `}
        </style>
      </Container>
    );
}

export default ROCAC;