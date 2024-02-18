import {  Row, Col, Image } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <div className="col-md-12 p-4 main-page-background">
      <Row>
        <Col md={8}>
          <h2 className="text-center">About our Company</h2>
          <p style={{ textAlign: "initial" }}>
            At Rito Water Purification Systems, we are dedicated to providing
            clean and safe drinking water for households, businesses, and
            communities. Our mission is to make clean water accessible to
            everyone, everywhere, ensuring the health and well-being of
            individuals and the sustainability of our planet.
          </p>
          <p style={{ textAlign: "initial" }}>
            At Rito, we understand the importance of clean and safe drinking
            water. Our mission is to offer innovative water purification
            technologies that ensure the health and well-being of our customers
            and their families.With years of experience in the industry, our
            team of experts continuously strives to develop advanced
            purification systems that are efficient, reliable, and
            environmentally friendly. Whether you need a residential,
            commercial, or industrial water purification solution, we have the
            expertise to meet your requirements. Customer satisfaction is our
            top priority, and we go above and beyond to deliver personalized
            service and support. From installation and maintenance to
            troubleshooting, our dedicated team is here to assist you every step
            of the way. Thank you for choosing Rito Water Purification System.
            We look forward to serving you and providing you with clean, pure
            water for years to come.
          </p>
        </Col>
        <Col md={4}>
          <Image src={process.env.PUBLIC_URL + "/logo.svg"} fluid />
        </Col>
      </Row>
    </div>
  );
}
