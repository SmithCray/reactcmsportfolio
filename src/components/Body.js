import React from "react";

import venue from "../assets/Venuefinder.png";
import milehi from "../assets/milehiPreview.png";
import wegen from "../assets/passwordGenerator.png";
import gistthis from "../assets/Gistthis.png";
import resume from "../assets/resume.jpg";
import horiseon from "../assets/Horiseon.png";
import eShopper from "../assets/eShopperInsomnia.png";
import resumePdf from "../assets/SmithCrayResume.pdf";
import profile from "../assets/p2cray.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";

const MyDoc = () => (
  <Document>
    <Page>// My document data</Page>
  </Document>
);

function Body() {
  return (
    <div>
      <Row>
        <div id="aboutMe">About me:</div>
        <img
          id="profilePic"
          className="card-img-top"
          src={profile}
          alt="Cray Smith Profile"
        ></img>
      </Row>
      <Row>
        <Col>
          <p id="headLine" className="article">
            "GREATNESS takes PATIENCE and PRACTICE!"
          </p>
          <p className="article">
            Hi my name is Cray Smith! I'm currently a student at DU under the
            Full-Stack Flex program nearing the end of the course. I'm excited
            to learn all I can and create something new and exciting! Moving
            forward my goal is to continue to challenge myself by learning new
            technologies and improving on the knowledge I've gained thus far. In
            addition to looking to the future I plan to build on the foundations
            I've developed at DU and the knowledge gained throughout my
            education. As a Junior Developer I want to gain reliable real-world
            experience in a challenging and thriving environment while building
            on the tools and techniques I've learned so far. My goal for the
            future is to establish a position in Coding and Development with a
            Career and Team driven company where I can gain real-world
            experience, and use new technologies all in a thriving and
            challenging work environment.
          </p>
        </Col>
      </Row>
      <h2 id="featured">Featured:</h2>
      <Row id="venueFinder" className="card-body">
        <img
          className="card-img-top"
          src={venue}
          alt="Venue Project Preview"
        ></img>
        <h5 className="card-title card-body">Venue Finder</h5>
        <p className="card-text card-body">
          This Venue Finder allows a user to have one website they can access in
          order to find music venues in whatever city they would like to search.
          This provides the user with a list of the 9 most popular venues in the
          city and gives links and addresses for easy access to find
          tickets/events for that venue.
        </p>
        <a href="https://bitly.com/venuefinder" className="btn btn-primary">
          Visit Venue Finder
        </a>
      </Row>
      <Row>
        <h3 id="myWork">My Work:</h3>
        <Col className="card-body">
          <img
            className="card-img-top"
            src={milehi}
            alt="MileHi Project Preview"
          ></img>
          <h5 className="card-title card-body">MileHi!</h5>
          <p className="card-text card-body">
            Meeting people can be hard. That's why MileHi exists to create new
            friendships across the state of Colorado. Our vision is to be the
            front page of the outernet - the place that you log into in order to
            quickly log out of. You can begin by clicking on any of our
            recreation categories and browsing the various activities. Find one
            you like? Select it to see when and where people are playing,
            running, dancing, etc. Have a group you would like to invite people
            to? Create a posting of your own to let people know where they can
            find people like you with their same interests. We encourage
            everyone to be friendly, take pictures, and tag us @milehi_denver on
            instagram with the 👋 emoji to be featured weekly on our website!
            Join our Recreational Activities Database for Denver and Colorado
            today!
          </p>
          <a
            href="https://project2-milehi.herokuapp.com/"
            className="btn btn-primary"
          >
            Checkout MileHi! 👋
          </a>
        </Col>
        <Col className="card-body">
          <img
            className="card-img-top"
            src={wegen}
            alt="WeGenerate4U Project Preview"
          ></img>
          <h5 className="card-title card-body">WeGenerate4U</h5>
          <p className="card-text card-body">
            Don't like long passwords? With a minimum password length of 8
            characters and a max of 128 we can generate a password perfect for
            you! Easy, secure, and fast password generation.
          </p>
          <a
            href="https://smithcray.github.io/WeGenerate4U/"
            className="btn btn-primary"
          >
            Give it a try!
          </a>
        </Col>
        <Col className="card-body">
          <img
            className="card-img-top"
            src={gistthis}
            alt="Featured GitHub Gist"
          ></img>
          <h5 className="card-title card-body">Gist.This- Let's talk Regex!</h5>
          <p className="card-text card-body">
            What is a regular expression? Regular expressions often refered to
            as "REGEX" are most often a sequence of characters used to define a
            search pattern within a body of text. Regular Expressions use a
            combination of "Literal" characters as well as "Meta" characters,
            these combined can be used to define highly complicated and fexible
            search patterns.
          </p>
          <a
            href="https://gist.github.com/SmithCray/0f6af437c9108f964f31f626022a3adf"
            className="btn btn-primary"
          >
            Read more
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="card-body">
          <img
            className="card-img-top"
            src={horiseon}
            alt="Horiseon web page snippet"
          ></img>
          <h5 className="card-title card-body">Horiseon code refactor</h5>
          <p className="card-text card-body">
            Tasked too optimize and refactor Horiseon's webpage and code for an
            upcomming product launch that is expected to increase their userbase
            and create more travel on their site. In addition we will be
            replacing non-semantic code with semantic-elements to make the
            database cleaner, easier to read, and easier to edit in the future.
            At the end of this project our goal is to present a BETTER
            experience for Horiseon's growing userbase though a stream lined
            wedpage with a familiar look we all know and love.
          </p>
          <a
            href="https://smithcray.github.io/cs-horiseon-code-refactor/"
            className="btn btn-primary"
          >
            Look at them now!
          </a>
        </Col>
        <Col className="card-body">
          <img
            className="card-img-top"
            src={eShopper}
            alt="Snippet of Insomnia demo"
          ></img>
          <h5 className="card-title card-body">
            EShopper backend Insomnia demo
          </h5>
          <p className="card-text card-body">
            Welcome to eShopper! Our goal is to provide a simple, small, and
            functional API with the help of MySQL2 and Sequelize to provide a
            small E-Commerce platform using common "crud" operations (Create,
            Read, Update, and Delete). In addition to those great tools our
            Express.js Api uses dotenv to store sensitive data, like a user's
            MySQL username, password, and database name, using it's environment
            variables.
          </p>
          <a
            href="https://github.com/SmithCray/eShopper"
            className="btn btn-primary"
          >
            Checkout the GitHub!
          </a>
        </Col>
        <Col id="resume" className="card-body">
          <img className="card-img-top" src={resume} alt="A laptop"></img>
          <h5 className="card-title card-body">My Resume</h5>
          <a href={resumePdf} target="_blank" className="btn btn-primary">
            Download my Resume
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Body;
