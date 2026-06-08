import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';
import './Sections.css';

export default function Resume() {
  return (
    <div className="section-card resume-card">
      <h2 className="section-title">Resume</h2>

      <div className="resume-layout">
        <div className="resume-block">
          <div className="resume-heading-row">
            <div className="resume-heading-icon">
              <BookOpen size={20} />
            </div>
            <h3 className="resume-heading">Education</h3>
          </div>

          <div className="timeline">
            <div className="resume-item">
              <span className="timeline-pill">2026 - Present</span>
              <h4>Self-Learning: Related Technologies</h4>
              <span className="timeline-sub">YouTube & Online Resources</span>
              <p>
                Continuously learning modern tools and frameworks through
                YouTube and online resources.
              </p>
            </div>

            <div className="resume-item">
              <span className="timeline-pill">2023 - 2026</span>
              <h4>Web Development & Mobile Development</h4>
              <span className="timeline-sub">INSFP</span>
              <p>
                Institut National Spécialisé de Formation Professionnelle en
                Audiovisuels Technicien Supérieur en Informatique, Développement
                web et mobile
              </p>
            </div>
          </div>
        </div>

        <div className="resume-block">
          <div className="resume-heading-row">
            <div className="resume-heading-icon">
              <Briefcase size={20} />
            </div>
            <h3 className="resume-heading">Work</h3>
          </div>

          <div className="timeline">
            <div className="resume-item">
              <span className="timeline-pill">Nov 2025 – April 2026</span>
              <h4>Ooredoo Algeria Internship</h4>
              <span className="timeline-sub">6 Months (2025 - 2026)</span>
              <p>
                Developed <strong>GreenSteps</strong>, a full-stack eco-platform
                for reforestation and cleaning campaigns. I built the responsive
                web showcase and the mobile application using{' '}
                <strong>React.js</strong>, <strong>Laravel</strong>, and{' '}
                <strong>Flutter</strong>. Worked within the corporate dev team
                to deliver a scalable, professional UI/UX.
              </p>
            </div>

            <div className="resume-item">
              <span className="timeline-pill">Mar 2025 – June 2025</span>
              <h4>Sihatek – Smart Medical Clinic Management System</h4>
              <span className="timeline-sub">
                Simplifying clinic operations with smart digital solutions
              </span>
              <p>
                Built "Sihatek" - a comprehensive Medical Clinic Management
                System using modern JavaScript stacks. Developed responsive
                frontend and robust backend features for patient management,
                appointment scheduling, medical records, and daily clinic
                operations with clean and intuitive UI/UX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
