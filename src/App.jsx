import Sidebar from './sidebar/Sidebar';
import ProfileCard from './ProfileCard/ProfileCard';
import About from './section/About';
import Resume from './section/Resume';
import Skills from './section/Skills';
import Projects from './section/Projects';
import Contact from './section/Contact';
import ParticlesBackground from './ParticlesBackground';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import ProjectDetailsPage from './section/ProjectDetailsPage';
import Preloader from './Preloader';
import './App.css';

function PortfolioDashboard() {
  const [activeTab, setActiveTab] = useState('about');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.activeTab !== 'projects') return;

    const frameRefs = { current: [] };

    const firstFrame = window.requestAnimationFrame(() => {
      setActiveTab('projects');

      const secondFrame = window.requestAnimationFrame(() => {
        document.getElementById('projects')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        navigate(location.pathname, { replace: true, state: null });
      });

      frameRefs.current.push(secondFrame);
    });

    frameRefs.current.push(firstFrame);

    return () => {
      frameRefs.current.forEach((frame) => window.cancelAnimationFrame(frame));
    };
  }, [location.pathname, location.state, navigate]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);

    window.addEventListener('resize', handleResize);

    // Intersection Observer for Mobile/Tablet scrolling
    let observer;
    if (isMobile) {
      const observerOptions = {
        root: null,
        rootMargin: '-150px 0px -50% 0px',
        threshold: 0,
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      };

      observer = new IntersectionObserver(observerCallback, observerOptions);
      const sections = ['about', 'resume', 'skills', 'projects', 'contact'];

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.observe(element);
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (observer) observer.disconnect();
    };
  }, [isMobile]);

  const handleNavClick = (sectionId) => {
    setActiveTab(sectionId);
    if (isMobile) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="app-container">
      <ParticlesBackground />
      {/* Mobile Header (Hidden on Desktop) */}
      {/* <header className="mobile-header">
        <div className="mobile-profile-info">
          <img
            src="/GitHub.jpg"
            alt="Walid Abdessalam"
            className="header-avatar"
          />
          <div className="header-text">
            <span className="header-name">Walid Abdessalam</span>
            <span className="header-title">Full Stack Web Developer</span>
          </div>
        </div>
      </header> */}

      {/* Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={handleNavClick}
        isVisible={true}
      />

      <main className="main-content">
        <ProfileCard onContactClick={() => handleNavClick('contact')} />

        <div className="content-area">
          {isMobile ? (
            // Mobile/Tablet: All sections for scrolling
            <>
              <div id="about" className="scroll-section">
                <About />
              </div>
              <div id="resume" className="scroll-section">
                <Resume />
              </div>
              <div id="skills" className="scroll-section">
                <Skills />
              </div>
              <div id="projects" className="scroll-section">
                <Projects />
              </div>
              <div id="contact" className="scroll-section">
                <Contact />
              </div>
            </>
          ) : (
            // Desktop: Dashboard-style conditional rendering
            <div className="dashboard-section">
              {activeTab === 'about' && <About />}
              {activeTab === 'resume' && <Resume />}
              {activeTab === 'skills' && <Skills />}
              {activeTab === 'projects' && <Projects />}
              {activeTab === 'contact' && <Contact />}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Routes>
      <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      <Route path="*" element={<PortfolioDashboard />} />
    </Routes>
  );
}

export default App;
