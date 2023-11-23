import resumebuilder from "../../assets/resumebuilder.webp";
import cryptopedia from "../../assets/cryptopedia.webp";
import connectio from "../../assets/connectio.webp";
import reserve from "../../assets/reserve.webp";
import getsubs from "../../assets/getsubs.webp";
export const projects = [
  {
    name: "Connectio",
    img: connectio,
    description:
      "A social media web application that connects users through an interactive platform. With features like authentication, user profiles, the ability to add or unfriend friends, like posts, view comments, create your own posts, view others' profiles, and update your own.",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    auth_email: "manojjayaraman1234@gmail.com",
    auth_password: "manoj",
    github: "https://github.com/manoj-jayaraman2001/connectio-socialmedia.git",
    live: "https://connectio-socialmedia.vercel.app/",
  },
  {
    name: "Bus Reserve",
    img: reserve,
    description:
      " An online platform designed for reserving bus tickets with integrated Stripe payment. This website offers an intuitive interface for searching, filtering, seat selection, and secure booking of bus trips.",

    skills: ["React.js", "CSS", "Redux", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/manoj-jayaraman2001/bus-reserve.git",
    live: "",
    onprogress: true
  },
  {
    name: "CryptoPedia",
    img: cryptopedia,
    description:
      "This website showcases the latest global crypto statistics, provides detailed information about each digital currency, offers historical price graphs for the past 5 years, delivers latest cryptocurrency news, and ranks exchanges based on trading volume. With a responsive design.",
    skills: ["React.js", "Material UI", "CSS", "RTK Query"],
    github: "https://github.com/manoj-jayaraman2001/cryptopedia.git",
    live: "https://cryptopedia-seven.vercel.app/",
  },
  {
    name: "Resume Builder",
    img: resumebuilder,
    description: "A simple and intuitive online resume builder that allows users to choose from a variety of beautifully designed templates, and users can download, save and delete thier resumes as per thier need.",
    skills: ["React.js","Material UI" ,"CSS"],
    github: "https://github.com/manoj-jayaraman2001/resume-builder.git",
    live: "https://resume-builder-neon.vercel.app/",
  },
  {
    name: "Get Subs API",
    img: getsubs,
    description: "Streamline subscriber data retrieval with features like subscriber listing, filtered names, and individual subscriber details with API docs",
    skills: ["Node", "Express", "MongoDB"],
    github: "https://github.com/manoj-jayaraman2001/getsubs-mongodb.git",
    live: "https://getsubs-mongodb.onrender.com",
  },
];
