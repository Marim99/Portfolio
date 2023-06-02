import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import linkedin from "../../Assets/Projects/linkedin.png";
import netflix from "../../Assets/Projects/netflix.png";
import pharmacy from "../../Assets/Projects/pharmacy.jpg";
import threads from "../../Assets/Projects/threads.jpg";
import jsProject from "../../Assets/Projects/jsProject.jpg";
import workoutApp from "../../Assets/Projects/workout.jpg";
import bitsOfCode from "../../Assets/Projects/blog.jpg";
import writing from "../../Assets/Projects/writing.png";

function Projects() {
  const projects = [
    {
      title: "Threads and Beads",
      description:
        "online marketplace for handmade crafts and jewelry with an Angular-based frontend and a Node js-based backend",
      websiteUrl: "https://threadsandbeads-4863e.web.app/",
      imgUrl: threads,
      gitHubUrl: "https://github.com/orgs/ThreadsAndBeads/repositories",
    },
    {
      title: "Authorlytics",
      description:
        "Authorlytics is an articles website it is designed to manage users and groups, and assign roles to each user based on their group. The website allows users to create, read, update and delete articles based on their assigned roles",
      demoLinkUrl: "https://www.youtube.com/watch?v=4-UdTVfevS0",
      imgUrl: writing,
      gitHubUrl: "https://github.com/Authorlytics-Dashboard/Articles-Dashboard",
    },
    {
      title: "Linked in app",
      description:
        "LinkedIn website posting posts using react, redux, and firebase for database and hosting.",
      websiteUrl: "https://linkedin-clone-191f6.web.app/",
      imgUrl: linkedin,
      gitHubUrl: "https://github.com/Marim99/Linked-In-App",
    },
    {
      title: "DrugRadar",
      description:
        "DrugRadar is a pharmacy system that makes it easy for clients to order medication and for pharmacists and doctors to manage those orders. It's a comprehensive solution that simplifies the prescription process and helps everyone involved keep track of orders and medications from one platform.",
      imgUrl: pharmacy,
      gitHubUrl: "https://github.com/DrugRadar/Pharmacy-Proj",
      demoLinkUrl: "https://www.youtube.com/watch?v=q13ReHRv8VM",
    },
    {
      title: "E-Commerce",
      websiteUrl: "https://rhm-e-commerce.web.app/",
      description:
        "RHM is a Furniture E-Commerce project built with vanilla JS and attractive animated UI.",
      imgUrl: jsProject,
      gitHubUrl: "https://github.com/RHM-team/RHM-E-Commerce",
      demoLinkUrl: "https://www.youtube.com/watch?v=dmpEiHEEMuI",
    },
    {
      title: "Netflix Clone",
      websiteUrl: "https://movies-6d5c5.web.app/",
      description:
        "View all movies and tv series and you can see the trailer of them, using a firebase for hosting.",
      imgUrl: netflix,
      gitHubUrl: "https://github.com/Marim99/Netflix-React-app",
    },
    {
      title: "Blog ",
      description:
        "Laravel Blog, a dashboard for writing and managing blog articles. With this application, you can create new blog posts, manage comments on your posts, and update your user profile.",
      imgUrl: bitsOfCode,
      gitHubUrl: "https://github.com/Marim99/laravel-blog",
    },
    {
      title: "Workout App ",
      description:
        "Workout App is an Application to put your workout plans on your map whether Running or Cycling, all workouts are saved even if you close the website.",
      imgUrl: workoutApp,
      gitHubUrl: "https://github.com/Marim99/workout_App",
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
                  websiteUrl={project.websiteUrl ? project.websiteUrl : ""}
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
