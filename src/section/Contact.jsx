import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Briefcase,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted || submitError) {
      setSubmitted(false);
      setSubmitError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setSubmitError('');

    try {
      await emailjs.sendForm(
        'service_e396qrn',
        'template_yllvdau',
        formRef.current,
        '2n1cHy9qWhPmEjHl8'
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitError(
        'Unable to send your message right now. Please try again later.'
      );
      console.error('EmailJS error:', error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="section-card contact-section-wrapper">
      <div className="skills-main-header">
        <div className="orange-dot-bg"></div>
        <h2 className="skills-title">Get in Touch</h2>
      </div>

      <div className="contact-dashboard-grid">
        {/* Left Side: Contact Info */}
        <div className="contact-info-column">
          <div className="contact-intro">
            <h3>Let’s build something great together.</h3>
            <p>
              I’m always open to new opportunities, collaborations, or just a
              friendly chat. Feel free to reach out!
            </p>
          </div>

          <div className="contact-cards-container">
            <div className="contact-info-card">
              <div className="contact-card-icon">
                <Mail size={20} />
              </div>
              <div className="contact-card-details">
                <span>Email</span>
                <p>chibaniwalid16@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">
                <Phone size={20} />
              </div>
              <div className="contact-card-details">
                <span>Phone</span>
                <p>+213 674 951 270</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-card-details">
                <span>Location</span>
                <p>Algeria</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-card-icon">
                <Briefcase size={20} />
              </div>
              <div className="contact-card-details">
                <span>Freelance</span>
                <p>Available for projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-column">
          <div className="contact-form-glass-card">
            <form
              ref={formRef}
              className="contact-modern-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="modern-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="modern-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="modern-input"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  className="modern-textarea"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                />
              </div>

              <button
                type="submit"
                className="modern-submit-btn"
                disabled={sending}
              >
                {sending ? (
                  'Sending...'
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              {submitted && (
                <div className="status-message success">
                  <CheckCircle size={18} />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {submitError && (
                <div className="status-message error">
                  <AlertCircle size={18} />
                  <span>{submitError}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
