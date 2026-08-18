import React, { useMemo, useState } from 'react';
import { ArrowRight, ExternalLink, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = useMemo(() => {
    return filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);
  }, [filter]);

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
                  <Link
                    className="action-circle-btn"
                    to={`/projects/${project.id}`}
                  >
                    <Maximize2 size={18} />
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      className="action-circle-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
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
                  <Link
                    className="card-explore-btn"
                    to={`/projects/${project.id}`}
                  >
                    Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
