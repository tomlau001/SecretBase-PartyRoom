import "../App.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import image1 from "../photos/image1.jpg";
import image2 from "../photos/image2.jpg";

function AboutUs() {
  return (
    <section className="about-bg" id="about-us">
      <p className="trasnsparent-t1">Secret Base</p>
      <p className="trasnsparent-t2">Party Room</p>
      <Container className="about-us mt-5 mb-5 ">
        <Row className="align-items-center mb-3 ps-2">
          <Col md={6} className="align-self-center justify-self-center">
            <h2>About Us</h2>
            <p>
              SECRET BASE party room is a spacious and versatile party venue
              located in the vibrant neighborhood of Tai Kok Tsui that can host
              groups ranging from 3 to 12 people. 
              <br /> 
              <br />
              We opened our doors just a few
              months ago and have already established ourselves as a premier
              destination for parties, events, and special occasions.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src={image1}
              alt="About Us Image"
              fluid
              className="about-img1"
            />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6}>
            <Image
              src={image2}
              alt="About Us Image"
              fluid
              className="about-img2 me-5 "
            />
          </Col>
          <Col md={6} className=" align-self-center justify-self-center mt-2 ps-md-5">
            <h2 className="pt-2">What's More</h2>
            <p>
              The room features two-story layout modern decor, comfortable
              seating, and an impressive sound system, making it ideal for
              celebrating any occasion.
              <br />
              <br />
              Whether you're looking to host a birthday party, a small
              gathering, or a corporate event, SECRET BASE party room is the
              perfect choice for an unforgettable experience.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
