// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple">Shivansh Gupta </span>
//             from <span className="purple"> Meerut(UP) India.</span>
//             <br />
//             I am currently in my 4th year of B.Tech from JSSATE, Noida.
//             <br />
//             I have a strong foundation in the MERN stack, which includes
//             MongoDB, Express.js, React.js, and Node.js. Additionally, I'm
//             proficient in front-end technologies like HTML, CSS, and JavaScript.
//             <br />
//             <br />
//             Apart from coding, some other activities that I love to do!
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Playing Games
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Watching Anime
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Travelling
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Finding New Tech
//             </li>
//           </ul>

//           <p style={{ color: "rgb(155 126 172)" }}>
//             "Coding is like solving puzzles in a video game, but the rewards are
//             real!"{" "}
//           </p>
//           <footer className="blockquote-footer">Shivansh</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;

import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I'm <span className="purple">Shivansh Gupta</span> from{" "}
            <span className="purple">Meerut, Uttar Pradesh 🇮🇳</span>.
            <br />
            <br />
            I recently completed my B.Tech in Information Technology from{" "}
            <b className="purple">JSS Academy of Technical Education, Noida</b>.
            Over the years, I’ve built strong foundations in the{" "}
            <b className="purple">MERN stack</b> — MongoDB, Express, React, and Node.js — and applied them to real-world projects with a focus on clean code and intuitive design.
            <br />
            <br />
            I'm also proficient in <b className="purple">JavaScript, TypeScript, HTML, and CSS</b>, and love crafting seamless frontends and scalable APIs.
            <br />
            <br />
            Outside of coding, I believe in staying curious, creative, and connected to the world around me. Some of my favorite things to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing strategy games & story-driven titles 🕹️
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching anime & cinematic series 🎬
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and capturing nature 📸
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the latest in web tech & tools 🧪
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "1rem" }}>
            "Coding is like solving puzzles in a video game... but the rewards? They're real, and they scale."
          </p>
          <footer className="blockquote-footer">Shivansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

