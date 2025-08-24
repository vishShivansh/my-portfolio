import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { DiGit } from "react-icons/di";
import { FiCloud, FiFigma } from "react-icons/fi";
import { GiPolarStar } from "react-icons/gi"; // Polar placeholder
import { RiFunctionLine, RiShieldKeyholeLine } from "react-icons/ri"; // Inngest placeholder
import {
  SiAmazonaws,
  SiAzuredevops,
  SiFirebase,
  SiPostman,
  SiPrisma,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb"; // Neon DB placeholder
import "./techstack.css";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VS Code", link: "https://code.visualstudio.com/" },
  { icon: <SiPostman />, name: "Postman", link: "https://www.postman.com/" },
  { icon: <SiVercel />, name: "Vercel", link: "https://vercel.com/" },
  { icon: <FiFigma />, name: "Figma", link: "https://www.figma.com/" },
  { icon: <SiFirebase />, name: "Firebase", link: "https://firebase.google.com/" },
  { icon: <AiFillGithub />, name: "GitHub", link: "https://github.com/" },
  { icon: <SiAzuredevops />, name: "Azure DevOps", link: "https://azure.microsoft.com/products/devops" },
  { icon: <DiGit />, name: "Git", link: "https://git-scm.com/" },

  // Extras you asked for:
  { icon: <GiPolarStar />, name: "Polar", link: "https://polar.sh/dashboard/vishshivanshs-org" }, 
  { icon: <RiFunctionLine />, name: "Inngest", link: "https://www.inngest.com/" },
  { icon: <FiCloud />, name: "Modal", link: "https://modal.com/apps/vishshivansh/" },
  { icon: <TbDatabase />, name: "Neon (Serverless Postgres)", link: "https://neon.tech/" },
  { icon: <SiPrisma />, name: "Prisma", link: "https://www.prisma.io/" },
  { icon: <RiShieldKeyholeLine />, name: "BetterAuth", link: "https://www.better-auth.com/" },
  { icon: <SiAmazonaws />, name: "AWS S3 Bucket", link: "https://aws.amazon.com/s3/" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={2} md={1} className="tech-icons">
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tool-tip-${index}`} className="custom-tooltip">
                {tool.name}
              </Tooltip>
            }
          >
            <a href={tool.link} target="_blank" rel="noreferrer">
              {tool.icon}
            </a>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
