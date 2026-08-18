import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import '../styles/project-details.css';

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const direction =
    typeof i18n.dir === 'function'
      ? i18n.dir()
      : i18n.language?.startsWith('ar')
        ? 'rtl'
        : 'ltr';
  const BackIcon = direction === 'rtl' ? ArrowRight : ArrowLeft;
  const project = projects.find((item) => String(item.id) === id);
  const [galleryState, setGalleryState] = useState({ id: null, index: 0 });
  const currentImageIndex = galleryState.id === id ? galleryState.index : 0;

  const setCurrentImageIndex = (nextIndex) => {
    setGalleryState({ id, index: nextIndex });
  };

  useEffect(() => {
    if (!project?.images?.length) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setGalleryState((state) => {
          const index = state.id === id ? state.index : 0;
          return { id, index: (index + 1) % project.images.length };
        });
      }
      if (event.key === 'ArrowLeft') {
        setGalleryState((state) => {
          const index = state.id === id ? state.index : 0;
          return {
            id,
            index: (index - 1 + project.images.length) % project.images.length,
          };
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [id, project]);

  if (!project) {
    return (
      <main className="project-details-page project-details-page--missing">
        <div className="project-details-shell">
          <Link className="project-details-back" to="/">
            <BackIcon size={18} />
            {t('common.backToProjects', 'Back to Projects')}
          </Link>
          <h1 className="modal-title-text">Project not found</h1>
          <p className="modal-desc-text">
            The project you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  const previousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + project.images.length) % project.images.length
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % project.images.length);
  };

  return (
    <main className="project-details-page">
      <div className="project-details-shell">
        <header className="project-details-header">
          <button
            className="project-details-back"
            type="button"
            onClick={() =>
              navigate('/', {
                state: { scrollTo: 'projects', activeTab: 'projects' },
              })
            }
          >
            <BackIcon size={18} />
            {t('common.backToProjects', 'Back to Projects')}
          </button>
          <span className="project-details-kicker">Project details</span>
        </header>

        <div className="project-details-content">
          <section className="modal-gallery-main" aria-label="Project gallery">
            <div className="gallery-viewport">
              {project.images?.length ? (
                <>
                  <img
                    key={project.images[currentImageIndex]}
                    className="modal-img-active"
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} preview ${currentImageIndex + 1}`}
                  />
                  <button
                    className="gallery-nav-arrow left"
                    type="button"
                    aria-label="Previous image"
                    onClick={previousImage}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="gallery-nav-arrow right"
                    type="button"
                    aria-label="Next image"
                    onClick={nextImage}
                  >
                    <ChevronRight size={24} />
                  </button>
                  <div className="image-counter-pill" aria-live="polite">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </>
              ) : (
                <div className="no-images-placeholder">No images available</div>
              )}
            </div>

            <div className="gallery-thumbs-row" aria-label="Project images">
              {project.images?.map((image, index) => (
                <button
                  key={image}
                  className={`gallery-thumb ${
                    index === currentImageIndex ? 'active' : ''
                  }`}
                  type="button"
                  aria-label={`Show image ${index + 1}`}
                  aria-current={
                    index === currentImageIndex ? 'true' : undefined
                  }
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          </section>

          <section className="modal-sidebar-info">
            <div className="modal-meta-header">
              <span className="modal-cat-pill">{project.category}</span>
              <div className="modal-status-badge">
                <span className="dot"></span> {project.status}
              </div>
            </div>

            <h1 className="modal-title-text">{project.title}</h1>

            <div className="modal-info-section">
              <h2 className="section-subtitle">Overview</h2>
              <p className="modal-desc-text">{project.description}</p>
            </div>

            <div className="modal-info-section">
              <h2 className="section-subtitle">Technologies</h2>
              <div className="modal-tech-flex">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.link && project.link !== '#' && (
              <a className="modal-primary-btn" href={project.link}>
                View live project <ExternalLink size={18} />
              </a>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
