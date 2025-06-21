import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "React & Angular Enthusiast",
          "Firebase + MongoDB Specialist",
          "Pixel-Perfect UI Crafter",
          "API Magician ⚙️",
          "Open Source Contributor",
          "Product-Driven Developer",
          "Eager Learner & Debugger 🐞"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay: 30,
      }}
    />
  );
}

export default Type;
