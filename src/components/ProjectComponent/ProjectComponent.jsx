import { OpenInNew, GitHub } from "@mui/icons-material";
import "./project.scss";
const ProjectComponent = ({
  name,
  img,
  skills,
  description,
  auth_email,
  auth_password,
  link,
  github,
  onprogress
}) => {
  const credentials = auth_email && auth_password;
  return (
    <div className="project">
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <div className="project-content">
        <span className="desc">{description}</span>
        <div className="project-skills">
          {skills.map((skill) => {
            return <div className="skill-badge" key={skill}>{skill}</div>;
          })}
        </div>
        <div className="project-info">
          {onprogress && <div className="status">On Progress</div>}
          {credentials && (
            <div className="creds">
              <span><strong>Email: </strong> {auth_email}</span>
              <span><strong>Password: </strong>{auth_password}</span>
            </div>
          )}
          <div className="project-links">
            <a href={github} target="_blank">
              <GitHub className="link-ico"/>
              <span>Code</span>
            </a>
            <a href={link} target="_blank">
              <OpenInNew className="link-ico"/>
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectComponent;
