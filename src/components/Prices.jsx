import React from "react";
import { Container, Row } from "react-bootstrap";

function Prices() {
    return (
      <Container>
        <Row>
            <h1>Prices</h1>
        </Row>
        <hr className="my-4" />
        <Row>
            <h2>Prices of the service have been fixed based on the urgency of the service </h2>
            <br/>
            <br/>
            <p>(சேவைக்கான கட்டணம், சேவையின் தேவை மற்றும் அவசர நிலையை பொறுத்து நிர்ணயம் செய்யப்படுகிறது, மேலும்கட்டணம் அனைத்தும் ஒரு மணி நேரத்திற்கு கணக்கிடப்படுகிறது )
                <br/>
                <h3>10 கிலோமீட்டருக்குள்-சுரண்டையில் இருந்து</h3>
                <ol>
                    <li>அவசரத்தேவைக்கு  - 300 ரூபாய் </li>
                    <li>சாதாரணதேவை  -200 ரூபாய்</li>
                </ol>
                <br/>
                <br/>
                <h3>10 கிலோமீட்டருக்கு மேல் -சுரண்டையில் இருந்து</h3>
                <ol>
                    <li>அவசரத்தேவைக்கு  - 200 ரூபாய்</li>
                    <li>சாதாரணதேவை  - 100 ரூபாய் </li>
                </ol>
            </p>
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

export default Prices;