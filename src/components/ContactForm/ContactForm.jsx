import { Send } from "@mui/icons-material";
import { useState } from "react";
import "./form.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="phone">Your Phone Number</label>
      <input
        type="text"
        id="phone"
        placeholder="Your Mobile Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <label htmlFor="message">Your Message</label>
      <textarea
        id="message"
        cols="30"
        rows="5"
        placeholder="Enter Your Message"
        onChange={handleChange}
      ></textarea>
      <button type="submit">
        <Send />
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;
