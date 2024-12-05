import React from "react";
import { Container, Row } from "react-bootstrap";

function ROC() {
    return (
      <Container>
        <Row>
            <h1>Rules for Caretakers</h1>
        </Row>
        <hr className="my-4" />
        <Row>
            <h2>Do's and Don'ts</h2>
            <br/>
            <ol>
                <li>Under no circumstances should a caretaker verbally or physically abuse a customer. If such a situation arises, immediately report it to the company for appropriate action to be taken against the caretaker. Whoever overcomes this rule, they will face the consequence of the laws from section 504 and 307 IPC.</li>
                <li>During the service period, caretaker will be responsible for the customers materials.</li>
                <li>Provide your active phone number, bank statement, Aadhar number, PAN card, driving license number, and Identity card (I.D) without fail.</li>
                <li>Report to your duty station 20 minutes before commencing your shift.</li>
                <li>Attend the company meeting every month and provide feedback.</li>
                <li>A 20% commission will be deducted from your earnings for the company.</li>
                <li>Do not engage separately in dealing with customers.</li>
                <li>Do not request additional payment from customers without the company's knowledge.</li>
                <li>If you are unable to fulfil a job, notify us at least a day in advance.</li>
                <li>Limit the use of phones and other electronic devices during working hours.</li>
                <li>Consumption of alcohol, smoking, or any narcotic substances during working hours is strictly prohibited. Failure to comply will result in the withholding of salary. If this behaviour persists, the caretaker must forfeit 100% of their salary and work three days without payment.</li>
                <li>Offering extra gifts or engaging in emotional activities with customers is not permitted. The company does not endorse such actions under any circumstances.</li>
            </ol>
        </Row>
        <hr className="my-2" />
        <Row>
            <h2>செய்ய வேண்டியவை மற்றும் செய்யக் கூடாதவை</h2>
            <ol>
                <li>எக்காரணம் கொண்டும் வாடிக்கையாளரை வார்த்தைகளினாலோ அல்லது உடல் வன்முறையிலோ ஈடுபடக்கூடாது. அவ்வாறு ஏற்பட்டால் அது சட்டத்திற்கு புறம்பானது. அப்படி செய்யும் பரிமாறிப்பாளர்களின் மீது சட்டம் பிரிவு இ .பி.கோ 504 யிலும், 307யிலும். வழக்குத் தொடுக்கப்படும்.</li>
                <li>ஆக்டிவ் ஃபோன் எண், வங்கிகணக்கு அறிக்கை, ஆதார் எண், பான் அட்டை, ஓட்டுநர்  அனுமதி எண், மற்றும் அடையாள அட்டை (I.D) பணி செய்யும் முன் .</li>
                <li>சேவை காலத்தில், பராமரிப்பாளர், வாடிக்கையாளரின் பொருள்களுக்கு பொறுப்பாவார்.</li>
                <li>உங்கள் பணியை  நீங்கள் பெறுவதற்கு 20 நிமிடங்களுக்கு முன்பு வரை  கோரிக்கை ஏற்றுக்கொள்ளப்படும், உடனடி சேவை, தொலைவை பொறுத்து மாறுபடும் </li>
                <li>ஒவ்வொரு மாதமும் கம்பெனி கூட்டத்தில் பங்கேற்கவும் மற்றும் உங்கள் கருத்தைக்களை பதிவு செய்யவும் .</li>
                <li>உங்கள் ஊதியத்தில்  கம்பெனிக்கு 20% கட்டணத்தை எடுத்துக்கொள்ளும் .</li>
                <li>நிறுவனத்தின் அறிவில்லாமல் எக்காரணம் கொண்டும் வாடிக்கையாளர்களுடன் தனியாக பரிவர்த்தனை செய்யக்கூடாது.</li>
                <li>கம்பெனியின் அறிவில்லாது வாடிக்கையாளர்களிடம் கூடுதல் பணம் கேட்கவேண்டாம்.</li>
                <li>நீங்கள் ஒரு வேலையை ஏற்றுக்கொள்ள முடியாத பட்சத்தில்,  கண்டிப்பாக ஒரு நாளைக்கு முன் அறிவிக்கவும்.</li>
                <li>வேலை நேரங்களில் அதிகமாக கைபேசி மற்றும் பிற எலக்ட்ரானிக் சாதனங்களை பயன்படுத்தக் கூடாது.</li>
                <li>வேலை நேரங்களில் குடிப்பழக்கம், புகைப்பழக்கம், அல்லது ஏனைய நார்கோடிக் பொருட்கள் பயன்படுத்தக் கூடாது. பயப்படுத்தியது தெரியும் பட்சத்தில், சம்பளம் வழங்கப்பட மாட்டாது. மேலும் பணியில் நீடிக்க 3 நாள் சம்பளம் இல்லது பணி செய்ய வேண்டும்.</li>
                <li>வாடிக்கையாளர்களுக்கோ அல்லது பராமரிப்பாளர்களுக்கோ  கூடுதல் பரிசுகளை அளிக்கும் அல்லது உணர்வுபூர்வமான செயல்பாடுகளில் ஈடுபடுத்தக் கூடாது. எக்காரணம் கொண்டும் நிறுவனம் பொறுப்பேற்காது.</li>
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

export default ROC;