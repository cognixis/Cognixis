import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setSubmitStatus(null);
      return;
    }

    setIsSending(true);

    const serviceID = 'service_ot58d19';
    const templateID = 'template_958lvwm';
    const publicKey = 'M8E3bydisW5dQwj2V';

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSubmitStatus('✅ Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSubmitStatus('❌ Something went wrong. Please try again later.');
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section className="contact-section">
      <h1 className='contact-head-main' ><h1 className='contact-bl' >Contact</h1> Us</h1>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name<span className="required">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
              placeholder="Your Name"
              disabled={isSending}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email<span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
              placeholder="Your Email"
              disabled={isSending}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject<span className="required">*</span></label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? 'input-error' : ''}
              placeholder="Subject"
              disabled={isSending}
            />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message<span className="required">*</span></label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'input-error' : ''}
              placeholder="Write your message here..."
              rows="5"
              disabled={isSending}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          {submitStatus && <p className="submit-status">{submitStatus}</p>}
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: <a href="mailto:cognixisbusiness@gamil.com">cognixisbusiness@gmail.com</a></p>
          
        </div>
      </div>
    </section>
  );
}
