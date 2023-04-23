import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";
import { CgFileDocument } from "react-icons/cg";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Working collaboratively in a team is something I find immensely
              fulfilling. Programming is my passion, and I am always eager to
              learn and grow in this field. I believe that every day is an
              opportunity to expand my knowledge and skillset.
              <br />
              <br />
              <i>
                I am constantly seeking new challenges and am particularly
                excited about developing cutting-edge web technologies and
                products. My interests also extend to the field of deep learning
                and natural language processing, where I am constantly exploring
                new possibilities.
              </i>
              <br />
              <br />
              and When it comes to developing products, I am particularly
              passionate about using <b className="purple">
                Node.js, Laravel{" "}
              </b>{" "}
              and modern JavaScript libraries and frameworks like React.js and
              Angular.
            </p>
            <div style={{ padding: 50, textAlign: "left" }}>
              <Button href="/resume" target="_blank">
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Button>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Marim99"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/marim-khaled/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
