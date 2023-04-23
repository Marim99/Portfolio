import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import linkedin from "../../Assets/Projects/linkedin.png";
import netflix from "../../Assets/Projects/emotion.png";
import pharmacy from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const projects = [
    {
      title: "Linked in app",
      description:
        "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      websiteUrl: "Design & Development",
      imgUrl: linkedin,
      gitHubUrl: "https://github.com/Marim99/Linked-In-App",
    },
    {
      title: "Linked in app",
      websiteUrl: "Design & Development",
      description:
        "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      imgUrl: netflix,
      gitHubUrl: "https://github.com/Marim99/Linked-In-App",
      demoLinkUrl: "https://github.com/Marim99/Linked-In-App",
    },
    {
      title: "Linked in app",
      websiteUrl: "Design & Development",
      description:
        "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      imgUrl: pharmacy,
      gitHubUrl: "https://github.com/Marim99/Linked-In-App",
    },
  ];
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => {
            return (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={project.imgUrl}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.gitHubUrl}
                  demoLink={project.demoLinkUrl ? project.demoLinkUrl : ""}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
