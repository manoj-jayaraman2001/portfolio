import { frontendSkills, backendSkills, platforms } from "./index";
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <div className="frontend">
        <h3>Frontend Skills</h3>
        <div className="skill-grid">
          {frontendSkills.map((skill) => {
            return <Skill key={skill.name} name={skill.name} img={skill.img} />;
          })}
        </div>
      </div>
      <div className="backend">
        <h3>Backend Skills</h3>
        <div className="skill-grid">
          {backendSkills.map((skill) => {
            return <Skill key={skill.name} name={skill.name} img={skill.img} />;
          })}
        </div>
      </div>
      <div className="platforms">
        <h3>Dev Tools & Platforms</h3>
        <div className="skill-grid">
          {platforms.map((skill) => {
            return <Skill key={skill.name} name={skill.name} img={skill.img} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

const Skill = ({ name, img }) => {
  return (
    <div className="skill">
      <img src={img} alt={name} />
      <span>{name}</span>
    </div>
  );
};
