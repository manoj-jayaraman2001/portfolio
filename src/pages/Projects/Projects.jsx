import { projects } from "./index.js";
import ProjectComponent from "../../components/ProjectComponent/ProjectComponent.jsx";
import "./projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project) => {
        return (
          <ProjectComponent
            key={project.name}
            name={project.name}
            img={project.img}
            skills={project.skills}
            description={project.description}
            auth_email={project.auth_email}
            auth_password={project.auth_password}
            link={project.live}
            github={project.github}
            onprogress = {project.onprogress}
          />
        );
      })}
    </div>
  );
};

export default Projects;
