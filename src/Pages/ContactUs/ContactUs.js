import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ContactUs = () => {
  return (
    <div className="col-md-12 p-4 main-page-background">
      <Row>
        <Col md={8}>
          <h2 className="text-center">Contact Form</h2>
          <div className="row p-2">
            <div className="col-sm-2">
              <label>Enter Name </label>
              <span>:</span>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                className="form-control input-sm"
              />
            </div>
          </div>
          <div className="row p-2">
            <div className="col-sm-2">
              <label>Email Address </label>
              <span>:</span>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="name"
                placeholder="Enter Email Address"
                className="form-control input-sm"
              />
            </div>
          </div>
          <div className="row p-2">
            <div className="col-sm-2">
              <label>Mobile Number</label>
              <span>:</span>
            </div>
            <div className="col-sm-8">
              <input
                type="text"
                name="name"
                placeholder="Enter Mobile Number"
                className="form-control input-sm"
              />
            </div>
          </div>
          <div className="row p-2">
            <div className="col-sm-2">
              <label>Enter Message</label>
              <span>:</span>
            </div>
            <div className="col-sm-8">
              <textarea
                rows="5"
                placeholder="Enter Your Message"
                className="form-control input-sm"
              ></textarea>
            </div>
          </div>
          <div style={{ "margin-top": "10px" }} className="text-center mb-4">
            <button className="btn btn-primary-color">Send Message</button>
          </div>
        </Col>
        <Col md={4}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1668.0022140758779!2d-79.87065552419526!3d43.69816330443289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b14d33b6ced61%3A0xd483f29f9d3239dd!2sRito%20Renovation%20Ltd.!5e0!3m2!1sen!2sin!4v1708195358780!5m2!1sen!2sin"
            width={350}
            height={400}
            style={{ border: "0" }}
            title="map"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div style={{ margin: "50px", "text-align": "start" }}>
            <h2 className="fs-4 fw-bold" style={{ "margin-top": "10px" }}>
              Address
            </h2>{" "}
            12139 Mississauga RdCaledon, <br /> ON L7C 1X1 <br />{" "}
            Email:ritowaterpuresystem@gmail.com <br />
            <br />
            <br />
            <h2 className="fs-4 fw-bold" style={{ "margin-top": "10px" }}>
              Coming Soon At{" "}
              <span>
                <Link
                  class="btn btn-primary"
                  to="https://www.google.com/maps/dir//589+Hanlon+Creek+Boulevard,+Guelph,+ON/@43.4933417,-80.2339713,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b84fdef8d1a7d:0xc03279c537b079b8!2m2!1d-80.2313964!2d43.4933378?entry=ttu"
                  target="_blank"
                >
                  Get Direction
                </Link>
              </span>
            </h2>{" "}
            589 Hanlon Creek Boulevard, <br />
            Guelph, ON
          </div>
        </Col>
      </Row>
    </div>
  );
};
