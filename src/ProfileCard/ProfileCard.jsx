import React from 'react';
import './ProfileCard.css';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaDownload,
  FaPaperPlane,
  FaWhatsapp,
} from 'react-icons/fa';

export default function ProfileCard({ onContactClick }) {
  return (
    <div className="profile-card">
      <div className="profile-banner">
        <div className="banner-overlay"></div>
      </div>

      <div className="profile-avatar-container">
        <div className="avatar-wrapper">
          <img
            src="../GitHub.jpg"
            alt="Walid Abdessalam"
            className="avatar-img"
          />
          <div className="status-indicator"></div>
        </div>
      </div>

      <div className="profile-info-content">
        <h1 className="profile-name">Walid Abdessalam</h1>
        <div className="profile-badge">
          <span className="badge-text">Full Stack Web Developer</span>
        </div>

        <div className="social-links-container">
          {/* <a
            href="https://github.com/walidAbdessalam"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-item"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/walid-abdasselam-56134a288/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-item"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a> */}
          <a
            href="https://www.instagram.com/walid_abdessalam/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-item"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/213674951270"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-item"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-item"
            title="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="profile-actions-footer">
        <a
          href="../Chibani-Walid-CV.pdf"
          download="Chibani-Walid-CV.pdf"
          className="action-btn download-btn"
          style={{ textDecoration: 'none' }}
        >
          <span>Download CV</span>
          <FaDownload className="btn-icon" />
        </a>
        <button className="action-btn contact-btn" onClick={onContactClick}>
          <span>Contact Me</span>
          <FaPaperPlane className="btn-icon" />
        </button>
      </div>
    </div>
  );
}
