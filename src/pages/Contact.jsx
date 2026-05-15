import { useState } from "react";
import BackButton from "../components/BackButton";
import "./Contact.css";

function Contact() {
  // useState is a React Hook that lets us store data and automatically
  // update the screen when that data changes
  // here we use it to store all form field values in one object
  // without useState, typing in the form would change nothing on screen
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // useState again — this time to track if the form was submitted
  // without useState, React wouldn't know when to show the success message
  const [submitted, setSubmitted] = useState(false);


  // called every time the user types in any field
  // e.target.name = which field, e.target.value = what they typed
  // ...formData keeps all other fields unchanged, only updates the one being typed in
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page from refreshing on submit
    setSubmitted(true); // shows the success message
    setFormData({ name: "", email: "", subject: "", message: "" }); // clears the form fields
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <BackButton />

        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Have a question or special request? We'd love to hear from you.</p>
        </div>

        {/* conditional rendering: if submitted is true show success, otherwise show form */}
        {submitted ? (
          <div className="success-message">
            <span>🌸</span>
            <h2>Thank you for reaching out!</h2>
            <p>We'll get back to you as soon as possible.</p>
            {/* resets submitted to false so the form shows again */}
            <button onClick={() => setSubmitted(false)}>Send another message</button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              {/* value links input to formData state — this is called a controlled input */}
              {/* onChange calls handleChange which updates formData state on every keystroke */}
              {/* React then re-renders the input showing the new value */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"  // browser automatically validates email format
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>
            {/* type="submit" triggers the form's onSubmit when clicked */}
            <button type="submit" className="submit-btn">
              Send Message 🌸
            </button>

          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;