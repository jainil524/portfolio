import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agileSyncImage from "../../Assets/Projects/agileSyncImage.jpeg";
import docuZenImage from "../../Assets/Projects/docuZenImage.jpg";
import chessGameImage from "../../Assets/Projects/chessGameImage.png";
import placeholderImage from "../../Assets/Projects/placeholderImage.png";

function Projects() {
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
          {/* Skribbl Clone */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImage}
              isBlog={false}
              title="Skribbl Clone"
              description="Skribbl is a fun, interactive online multiplayer drawing and guessing game. Players take turns drawing a word or phrase while others try to guess it. The game includes various categories and allows players to create private rooms, making it a popular choice for group entertainment. With its simple and engaging mechanics, Skribbl promotes creativity and fast thinking, making it enjoyable for players of all ages."
              ghLink="https://github.com/jainil524/Scribble-Clone"
            />
          </Col>

          {/* Flappy Bird Clone */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImage}
              isBlog={false}
              title="Flappy Bird Clone"
              description="Flappy Bird is a highly addictive mobile game where players control a small bird that must navigate through a series of pipes by tapping the screen to make it flap its wings. The goal is to avoid crashing into the pipes while trying to achieve the highest score possible. Despite its simple gameplay and pixelated graphics, Flappy Bird became a viral sensation due to its challenging difficulty and rewarding, yet frustrating, mechanics."
              ghLink="https://github.com/jainil524/Flappy-bird"
            />
          </Col>

          {/* E-Commerce */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImage}
              isBlog={false}
              title="E-Commerce"
              description="E-Commerce refers to the buying and selling of goods and services over the internet. It encompasses a wide range of online business activities, from retail stores and digital marketplaces to service-based platforms. E-commerce allows businesses to reach global customers, provide seamless shopping experiences, and streamline transaction processes. Key features include online product catalogs, secure payment gateways, and customer support, contributing to the rapid growth of the digital economy and changing the way people shop."
              ghLink="https://github.com/jainil524/E-Commerce"
            />
          </Col>

          {/* AgileSync */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agileSyncImage}
              isBlog={false}
              title="AgileSync"
              description="Developed an AI-powered project management tool used by 50+ students, improving project tracking and communication between professors and students. Features include AI task suggestions, an integrated chatbot, and automated reporting, reducing project update time by 25%."
              ghLink="https://github.com/jainil524/AgileSync" // Replace with your GitHub link
            />
          </Col>

          {/* DocuZen */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docuZenImage}
              isBlog={false}
              title="DocuZen"
              description="Designed and deployed an auto-generation API documentation tool, reducing documentation time by 40%. Integrated Google OAuth and email/password login for secure access. Supports creating and editing documentation in Markdown format."
              ghLink="https://github.com/jainil524/DocuZen" // Replace with your GitHub link
            />
          </Col>

          {/* Database Version Control (on Going) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImage}
              isBlog={false}
              title="Database Version Control (on Going)"
              description="Building a database version control tool that manages schema changes and reduces deployment errors by up to 50%. Features include versioning, branching, and automation of migration management."
              ghLink="https://github.com/jainil524/DB-Version-Control" // Replace with your GitHub link
            />
          </Col>

          {/* Book Sharing */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImage}
              isBlog={false}
              title="Book Sharing"
              description="Created a platform for buying and selling second-hand educational books, supporting financially disadvantaged students by providing affordable books and fostering a community among students."
              ghLink="https://github.com/jainil524/BookSharing" // Replace with your GitHub link
            />
          </Col>

          {/* Chess Game */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chessGameImage}
              isBlog={false}
              title="Chess Game"
              description="Created a fully functional chess game using React, implementing game logic, user interface, and player interactions. Added multiplayer functionality for real-time player interactions."
              ghLink="https://github.com/jainil524/ChessReact" // Replace with your GitHub link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
