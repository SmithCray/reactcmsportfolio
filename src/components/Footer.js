import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <>
      <h2 id="contact" className="container">
        Contact:
      </h2>

      <ul className="anchors">
        <Row>
          <Col>
            <li>
              <a className="link" href="https://github.com/SmithCray">
                GitHub
              </a>
            </li>
          </Col>
          <Col>
            <li>
              <a
                className="link"
                href="https://www.linkedin.com/in/cray-smith-bb175b223/"
              >
                LinkedIn
              </a>
            </li>
          </Col>
          <Col>
            <li className="link">
              <a href="Email:Cmsmith004@gmail.com">
                Email: cmsmith004@gmail.com👋
              </a>
            </li>
          </Col>
        </Row>
      </ul>
    </>
  );
}

export default Footer;
