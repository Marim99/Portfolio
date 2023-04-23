import React from "react";
import Card from "react-bootstrap/Card";
import { GiPointySword } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mariam Khaled </span>
            from <span className="purple"> Alexandria, Egypt.</span>
            <br />I am a junior software developer
            <br />
            <br />
            some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GiPointySword /> Playing Games
            </li>
            <li className="about-activity">
              <GiPointySword /> Watching Movies
            </li>
            <li className="about-activity">
              <GiPointySword /> Reading
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
