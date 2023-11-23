import { GitHub, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <h3>Hello! 👋</h3>
      <h3>
        I'm <span>Manoj Jayaraman</span>
      </h3>
      <p>
        I am a passionate Full stack web developer with expertise in the MERN
        stack. I bring a strong commitment to crafting robust and scalable
        solutions. Currently seeking opportunities to contribute my skills and
        enthusiasm to an innovative organization.
      </p>
      <div className="social-links">
        <a href="https://github.com/manoj-jayaraman2001" target="_blank">
          <GitHub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/manoj-jayaraman-37694818b/"
          target="_blank"
        >
          <LinkedIn className="icon" />
        </a>
      </div>
      <div className="btns">
        <Link to="contact">Contact me</Link>
        <a
          href="https://drive.google.com/file/d/1M-bJTNXzNhp8gEGjryxzG-1jKQe8qf4_/view?usp=sharing"
          target="_blank"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
