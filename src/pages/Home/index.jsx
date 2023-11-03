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
        I'm a Full Stack Developer, driven by a strong passion for web
        development. My journey in this field is marked by a relentless pursuit
        of knowledge and a commitment to crafting innovative digital solutions
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
          href="https://drive.google.com/file/d/1fqbAoHv8wjXq9crw_76N0_yS0Tym_rzy/view?usp=sharing"
          target="_blank"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
