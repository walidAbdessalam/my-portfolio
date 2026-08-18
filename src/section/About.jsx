import React from 'react';
import {
  Monitor,
  Code2,
  Rocket,
  Layout,
  Database,
  Smartphone,
} from 'lucide-react';

export default function About() {
  return (
    <div className="section-card about-section-wrapper">
      <div className="skills-main-header">
        <div className="orange-dot-bg"></div>
        <h2 className="skills-title">About Me</h2>
      </div>

      <div className="about-intro-card">
        <div className="about-content">
          <h3 className="about-greeting">
            Hello! I'm <span className="highlight">Walid Abdessalam</span>
          </h3>
          <p className="about-description">
            I am a <span className="highlight">Full-Stack Web Developer</span>{' '}
            based in Algeria, passionate about building modern web applications
            that combine high performance with exceptional user experiences. , I
            turn complex problems into simple, beautiful, and intuitive
            solutions.
          </p>
        </div>

        <div className="about-info-dashboard">
          <div className="about-info-pill">
            <span className="info-label">Age</span>
            <span className="info-value">21 Years</span>
          </div>
          <div className="about-info-pill">
            <span className="info-label">Residence</span>
            <span className="info-value">Algeria</span>
          </div>
          <div className="about-info-pill">
            <span className="info-label">Freelance</span>
            <span className="info-value highlight">Available</span>
          </div>
          <div className="about-info-pill">
            <span className="info-label">Address</span>
            <span className="info-value">Algiers</span>
          </div>
        </div>
      </div>

      <div className="skills-main-header" style={{ marginTop: '40px' }}>
        <div className="orange-dot-bg"></div>
        <h2 className="skills-title">What I Do</h2>
      </div>

      <div className="services-modern-grid">
        <div className="modern-service-card">
          <div className="service-icon-wrapper">
            <Layout className="service-icon-main" />
          </div>
          <div className="service-info">
            <h4>Landing Pages</h4>
            <p>
              Designing high-converting, responsive landing pages that capture
              attention and drive results.
            </p>
          </div>
        </div>

        <div className="modern-service-card">
          <div className="service-icon-wrapper">
            <Database className="service-icon-main" />
          </div>
          <div className="service-info">
            <h4>Web Applications</h4>
            <p>
              Building scalable and robust full-stack applications using React,
              Laravel, and modern APIs.
            </p>
          </div>
        </div>

        {/* <div className="modern-service-card">
          <div className="service-icon-wrapper">
            <Smartphone className="service-icon-main" />
          </div>
          <div className="service-info">
            <h4>Mobile-First Design</h4>
            <p>
              Ensuring your website looks perfect on every device, from small
              phones to large desktops.
            </p>
          </div>
        </div> */}

        {/* <div className="modern-service-card">
          <div className="service-icon-wrapper">
            <Rocket className="service-icon-main" />
          </div>
          <div className="service-info">
            <h4>SEO & Performance</h4>
            <p>
              Optimizing web speed and search visibility to help your business
              grow online.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
