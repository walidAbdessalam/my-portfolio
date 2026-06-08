import React from 'react';
import { FiCheck, FiCode, FiList, FiEdit3, FiDatabase } from 'react-icons/fi';
import {
  SiHtml5,
  // SiCss3,
  SiJavascript,
  SiReact,
  SiFlutter,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostman,
  SiFigma,
} from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import './Sections.css';

const techGroups = [
  {
    title: 'Front End',
    icon: <FiCode />,
    items: [
      { label: 'HTML5', icon: <SiHtml5 /> },
      { label: 'CSS3', icon: <DiCss3 size={38} color="#FFB400"/> },
      { label: 'JavaScript', icon: <SiJavascript /> },
      { label: 'React', icon: <SiReact /> },
      { label: 'Flutter', icon: <SiFlutter /> },
    ],
  },
  {
    title: 'Back End',
    icon: <FiDatabase />,
    items: [
      { label: 'PHP', icon: <SiPhp /> },
      { label: 'Laravel', icon: <SiLaravel /> },
      { label: 'MySQL', icon: <SiMysql /> },
      { label: 'Postman', icon: <SiPostman /> },
    ],
  },
  {
    title: 'Design',
    icon: <FiEdit3 />,
    items: [{ label: 'Figma', icon: <SiFigma /> }],
  },
];

const knowledge = [
  'Building full-stack web applications',
  'Building landing pages',
  'Responsive design',
  'UI/UX best practices',
  'REST API integration',
  'Version control (Git)',
  'Agile workflow',
  'Performance optimization',
];

export default function Skills() {
  return (
    <div className="section-card skills-card">
      <div className="skills-main-header">
        <div className="orange-dot-bg"></div>
        <h2 className="skills-title">Skills</h2>
      </div>

      <div className="skills-split">
        <div className="skills-side knowledge-side">
          <div className="skills-group-header">
            <div className="circle-icon-orange">
              <FiList />
            </div>
            <h3 className="skills-side-title">Knowledge</h3>
          </div>
          <ul className="knowledge-list">
            {knowledge.map((item) => (
              <li key={item} className="knowledge-item">
                <FiCheck className="knowledge-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="skills-side techs-side">
          <div className="tech-groups-container">
            {techGroups.map((group, gIdx) => (
              <div key={gIdx} className="tech-group-section">
                <div className="skills-group-header">
                  <div className="circle-icon-orange">{group.icon}</div>
                  <h3 className="skills-side-title">{group.title}</h3>
                </div>
                <div className="tech-group-row">
                  {group.items.map((tech) => (
                    <div key={tech.label} className="tech-card-item">
                      <span className="tech-card-icon-orange">{tech.icon}</span>
                      <span className="tech-card-label">{tech.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
