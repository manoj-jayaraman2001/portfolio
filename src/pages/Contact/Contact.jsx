import {
  Email,
  Place,
  Phone,
  Instagram,
  Twitter,
  LinkedIn,
  Facebook,
} from "@mui/icons-material";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Get In Touch With Me</h2>
      <div className="main-contact">
        <div className="contact-left">
          <span className="contact-about">
            I'm a curious and open-minded individual, eager to connect and
            explore new opportunities. Whether you want to discuss a potential
            project, explore new opportunities, or simply chat about the latest
            trends in tech, don't hesitate to reach out. I'm always open to
            connecting with fellow enthusiasts, collaborators, and potential
            partners.
          </span>
          <div className="details">
            <div className="detail">
              <Place className="icon" />
              <span>Nellore, India</span>
            </div>
            <div className="detail">
              <Email className="icon" />
              <span id="email">manojjayaraman2001@gmail.com</span>
            </div>
            <div className="detail">
              <Phone className="icon" />
              <span>+91-8374674730</span>
            </div>
          </div>
        </div>
        <div className="form">
          <ContactForm />
        </div>
      </div>
      <div>
        <h2>Find Me Online</h2>
        <div className="social-links">
          <a href="https://www.facebook.com/manoj.jayaraman.1">
            <Facebook className="icon" />
          </a>
          <a href="https://instagram.com/manoj_jayaraman?igshid=NzZlODBkYWE4Ng==">
            <Instagram className="icon"/>
          </a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FManojJayaraman4">
            <Twitter className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/manoj-jayaraman-37694818b/">
            <LinkedIn className="icon"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
