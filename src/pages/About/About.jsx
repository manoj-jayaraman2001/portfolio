import certiImg from "../../assets/certificate-svgrepo-com.svg";
import "./about.scss";
const About = () => {
  const certifications = [
    {
      name: "Full Stack Web Development",
      date: "August 2023",
      by: "AlmaBetter",
      link: "https://certificates.almabetter.com/en/verify/00548941843694",
    },
    {
      name: "Data Structures & Algorithms",
      date: "August 2023",
      by: "AlmaBetter",
      link: "https://certificates.almabetter.com/en/verify/45950097674856",
    },
  ];
  return (
    <div className="about">
      <h4>ABOUT ME</h4>
      <p>
        I'm from Nellore, Andhra Pradesh, India, and I graduated in
        Computer Science and Engineering from Bennett University. I'm pretty
        good with React and love building all sorts of web applications from
        start to finish. My favorite stack is MERN, and I'm a fan of making
        websites that look good on all devices. I've used frontend tools like
        Material UI and Tailwind CSS. When I'm not coding, you'll find me in the
        kitchen, cooking up a storm. I also enjoy listening to music, and I'm a
        big cricket enthusiast. I'm always eager to learn new things, and I'm on
        the lookout for opportunities where I can bring my skills and enthusiasm
        to create cool digital stuff.
      </p>
      <h5>CERTIFICATIONS</h5>
      <div className="certifications">
        {certifications.map((certificate) => {
          return (
            <Certificate
              key={certificate.name}
              name={certificate.name}
              date={certificate.date}
              by={certificate.by}
              link={certificate.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default About;

const Certificate = ({ name, date, by, link }) => {
  function handleClick() {
    window.open(link, "_blank");
  }
  return (
    <div className="certificate" data-url={link} onClick={handleClick}>
      <img src={certiImg} alt="image" />
      <div className="cert-content">
        <span className="cert-name" onClick={handleClick}>
          {name}
        </span>
        <span onClick={handleClick}>
          by {by}, {date}
        </span>
      </div>
    </div>
  );
};
