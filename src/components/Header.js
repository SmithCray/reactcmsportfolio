import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <>
      <h1 className="container navbar">Cray Smith</h1>
      <h2 className="subHeader"> & My Coding Library</h2>
      <ul className="anchors">
        <Row>
          <Col>
            <li>
              <a className="link" href="#aboutMe">
                AboutMe:
              </a>
            </li>
          </Col>
          <Col>
            <li>
              <a className="link" href="#myWork">
                MyWork:
              </a>
            </li>
          </Col>
          <Col>
            <li className="link">
              <a href="#contact">Contact:</a>
            </li>
          </Col>
          <Col>
            <li className="link">
              <a href="#resume">Resume:</a>
            </li>
          </Col>
        </Row>
      </ul>
    </>
  );
}

export default Header;
