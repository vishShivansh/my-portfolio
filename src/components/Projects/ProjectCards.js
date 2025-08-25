import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const [showAll, setShowAll] = useState(false);

  const handleImageClick = () => {
    if (props.demoLink && !props.isBlog) {
      window.open(props.demoLink, "_blank");
    }
  };

  // limit for preview (2 lines approx → 6 items)
  const previewLimit = 4;
  const techToShow = showAll
    ? props.techStack
    : props.techStack?.slice(0, previewLimit);

  const [latestCommit, setLatestCommit] = useState(null);

  useEffect(() => {
    if (props.ghLink) {
      const repoPath = props.ghLink.replace("https://github.com/", "");
      fetch(`https://api.github.com/repos/${repoPath}/commits`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data[0]) {
            const date = new Date(data[0].commit.author.date);
            setLatestCommit(date.toLocaleDateString());
          }
        })
        .catch((err) => console.log(err));
    }
  }, [props.ghLink]);

  return (
    <Card className="project-card-view h-100 d-flex flex-column position-relative">
      {props.isUpcoming && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "#ff9800",
            color: "white",
            padding: "5px 10px",
            borderRadius: "20px",
            fontSize: "0.75rem",
            fontWeight: "600",
            zIndex: 10,
          }}
        >
          Upcoming
        </div>
      )}
      {/* Image */}
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{ cursor: props.demoLink ? "pointer" : "default" }}
        onClick={handleImageClick}
      />

      {/* Body */}
      <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Tech Stack Section */}
        {props.techStack && (
          <div style={{ marginBottom: "15px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                justifyContent: "center",
              }}
            >
              {techToShow.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    backgroundColor: "#be50f4",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tech}
                </motion.span>
              ))}

              {/* See more / See less as inline chip */}
              {props.techStack.length > previewLimit && (
                <motion.span
                  onClick={() => setShowAll(!showAll)}
                  style={{
                    backgroundColor: "transparent",
                    color: "#be50f4",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    border: "1px dashed #be50f4",
                  }}
                >
                  {showAll ? "See less ↑" : "See more ↓"}
                </motion.span>
              )}
            </div>
          </div>
        )}


        {/* Spacer to push buttons bottom */}
        <div className="mt-auto d-flex flex-wrap justify-content-center">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
      {/* {latestCommit && (
        <div style={{ textAlign: "center", marginTop: "10px", fontSize: "0.75rem", color: "#555" }}>
          Last updated: {latestCommit}
        </div>
      )} */}
    </Card>
  );
}

export default ProjectCards;
