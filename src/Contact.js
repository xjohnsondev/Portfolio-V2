import React from "react";
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    // Create the email body with proper line breaks
    const body = `
    Name: 
    
    ${name}
    
    Message: 
    
    ${message}

    Respond To:

    ${email}
    `;

    const mailtoLink = `mailto:xjohnsondev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-section">
      <h5 className="contact-header">Contact</h5>
      <h1 className="contact-title">I&apos;d Love To Hear From You.</h1>
      <p className="description">
        If you’re interested in working together or just want to say hello, please drop me a message. I’m eager to connect and explore new opportunities, and I’ll make sure to get back to you as soon as possible.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" className="form-input"  />
        <input type="email" name="email" placeholder="Email" className="form-input"  />
        <input type="text" name="subject" placeholder="Subject" className="form-input"  />
        <textarea name="message" placeholder="Message" className="form-textarea" ></textarea>
        <button type="submit" className="form-submit">Submit</button>
      </form>
      <div className="contact-details">
      </div>
    </div>
  );
};

export default Contact;