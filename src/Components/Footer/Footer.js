import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-light py-3" style={{"background":"#26a9e0"}}>
      <Container>
        <Row>
          <Col md={12}>
            <h5>2024 © All Rights Reserved</h5>
          </Col>
          {/* <Col md={6}>
            <Link
              target="_blank"
              style={{ margin: "12px" }}
              to="https://wa.me/8054530498"
            >
              <FaWhatsapp style={{ color: "green" }} size={24} />
            </Link>
            <Link
              target="_blank"
              style={{ margin: "12px" }}
              to="https://www.facebook.com/your-facebook-page"
            >
              <FaFacebook style={{ color: "#597bf5" }} size={24} />
            </Link>
            <Link
              target="_blank"
              style={{ margin: "12px" }}
              to="https://www.instagram.com/ritowaterpuresystem?igsh=MXg4MjZlN2Z0MHE0YQ%3D%3D&utm_source=qr"
            >
              <FaInstagram style={{ color: "red" }} size={24} />
            </Link>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
