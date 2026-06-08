import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
} from 'lucide-react';
import './Sections.css';

const projects = [
  {
    id: 1,
    title: 'GreenSteps By Ooredoo',
    category: 'Web Application',
    status: 'Completed',
    description:
      'A modern and responsive web application designed to promote eco-friendly habits and community engagement. Built with a clean UI, smooth animations, and optimized performance.',
    tags: ['React', 'Laravel', 'Flutter', 'UI/UX'],
    link: '#',
    images: [
      '../Mockup de la plateforme Green Algérie.png',
      '../DashbordS.jpg',
      '../Dashbord.jpeg',
      '../mobileMockup.png',
      '../Desktop.png',
    ],
  },
  {
    id: 2,
    title: 'Medical Clinic Management',
    category: 'Management System',
    status: 'Completed',
    description:
      'A full-featured medical management system designed to streamline appointment scheduling, patient data handling, and healthcare services for both patients and professionals.',
    tags: ['React', 'Laravel', 'Figma', 'System Design'],
    link: '#',
    images: [
      '../Sihatk.png',
      '../DashboardSihatek.png',
      '../Medicament.png',
      '../Sihatek.png',
      '../about.png',
    ],
  },
  {
    id: 3,
    title: 'CoWork Landing Page',
    category: 'Landing Page',
    status: 'Completed',
    description:
      'CoWork is a premium landing page built with a strict mobile-first approach to deliver a seamless, high-performance experience across all devices. It features a sleek, minimalist luxury aesthetic with interactive UI components.',
    tags: ['React', 'Figma', 'tailwindcss', 'System Design'],
    link: '#',
    images: [
      '../mouckupCoWork.png',
      '../CoWork (1)header.png',
      '../CoWork (1)world-class.png',
      '../CoWork (1)price.png',
    ],
  },
  {
    id: 4,
    title: 'IRON VIBE Landing Page',
    category: 'Landing Page',
    status: 'Completed',
    description:
      'IronVibe is a high-energy, brutalist-style gym landing page featuring an integrated interactive BMI calculator. Crafted with a mobile-first approach, it features high-contrast neon aesthetics, sharp typography, and aggressive layout structures optimized for modern web experiences.',
    tags: ['React', 'Figma', 'tailwindcss', 'System Design'],
    link: '#',
    images: [
      '../mockupIronVibe.png',
      '../GymVibeHeader.png',
      '../GymVibeService.png',
      '../GymVibeBody.png',
      '../GymVibeMembers.png',
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = useMemo(() => {
    return filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);
  }, [filter]);

  const openSlider = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeSlider = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const navigateProject = (direction) => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex === -1) return;

    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (nextIndex >= projects.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = projects.length - 1;

    setSelectedProject(projects[nextIndex]);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex(
      (index) => (index + 1) % selectedProject.images.length
    );
  };

  const previousImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex(
      (index) =>
        (index - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  return (
    <div className="section-card project-card-section">
      <div className="project-section-header">
        <div className="header-top-row">
          <h2 className="section-title-services">Featured Projects</h2>
          <div className="filter-pills">
            {categories.map((cat) => (
              <button
                key={cat || 'unknown'}
                className={`filter-pill ${filter === (cat || 'All') ? 'active' : ''}`}
                onClick={() => setFilter(cat || 'All')}
              >
                {cat || 'Other'}
              </button>
            ))}
          </div>
        </div>
        <p className="about-text">
          A collection of projects where I've combined design thinking with
          robust engineering to solve real-world problems.
        </p>
      </div>

      <div className="project-section-scroll">
        <div className="project-list-modern">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id || index}
              className="project-card-modern"
              style={{ '--index': index.toString() }}
            >
              <div className="card-media-wrapper">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="card-main-image"
                />
                <div className="card-badge">{project.category}</div>
                <div className="card-hover-actions">
                  <button
                    className="action-circle-btn"
                    onClick={() => openSlider(project)}
                  >
                    <Maximize2 size={18} />
                  </button>
                  {project.link && (
                    <a href={project.link} className="action-circle-btn">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="card-content-modern">
                <div className="card-status-row">
                  <span className="status-dot"></span>
                  <span className="status-text">{project.status}</span>
                </div>
                <h3 className="card-title-modern">{project.title}</h3>
                <p className="card-description-short">{project.description}</p>

                <div className="card-footer-modern">
                  <div className="card-tags-mini">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="mini-tag">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="mini-tag">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <button
                    className="card-explore-btn"
                    onClick={() => openSlider(project)}
                  >
                    Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeSlider}>
          <div
            className="project-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header-actions">
              <div className="modal-nav-group">
                <button
                  className="modal-top-nav-btn"
                  onClick={() => navigateProject('prev')}
                >
                  <ChevronLeft size={20} /> Prev Project
                </button>
                <div className="modal-nav-divider"></div>
                <button
                  className="modal-top-nav-btn"
                  onClick={() => navigateProject('next')}
                >
                  Next Project <ChevronRight size={20} />
                </button>
              </div>
              <button className="modal-close-btn-top" onClick={closeSlider}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-content-grid">
              <div className="modal-gallery-main">
                <div className="gallery-viewport">
                  {selectedProject.images &&
                  selectedProject.images.length > 0 ? (
                    <>
                      <img
                        className="modal-img-active"
                        src={selectedProject.images[currentImageIndex]}
                        alt={selectedProject.title}
                      />
                      <button
                        className="gallery-nav-arrow left"
                        onClick={previousImage}
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        className="gallery-nav-arrow right"
                        onClick={nextImage}
                      >
                        <ChevronRight size={24} />
                      </button>
                      <div className="image-counter-pill">
                        {currentImageIndex + 1} /{' '}
                        {selectedProject.images.length}
                      </div>
                    </>
                  ) : (
                    <div className="no-images-placeholder">
                      No images available
                    </div>
                  )}
                </div>

                <div className="gallery-thumbs-row">
                  {selectedProject.images &&
                    selectedProject.images.map((img, idx) => (
                      <div
                        key={idx}
                        className={`gallery-thumb ${idx === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(idx)}
                      >
                        <img src={img} alt="thumbnail" />
                      </div>
                    ))}
                </div>
              </div>

              <div className="modal-sidebar-info">
                <div className="modal-meta-header">
                  <span className="modal-cat-pill">
                    {selectedProject.category}
                  </span>
                  <div className="modal-status-badge">
                    <span className="dot"></span> {selectedProject.status}
                  </div>
                </div>

                <h2 className="modal-title-text">{selectedProject.title}</h2>

                <div className="modal-info-section">
                  <h4 className="section-subtitle">Overview</h4>
                  <p className="modal-desc-text">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="modal-info-section">
                  <h4 className="section-subtitle">Technologies</h4>
                  <div className="modal-tech-flex">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="tech-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
