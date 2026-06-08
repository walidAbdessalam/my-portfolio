import './Sidebar.css';
import { User, FileText, Code, Layout, Mail } from 'lucide-react';

function Sidebar({ activeTab, setActiveTab, isVisible }) {
  const menuItems = [
    { id: 'about', label: 'ABOUT', icon: <User size={20} /> },
    { id: 'resume', label: 'RESUME', icon: <FileText size={20} /> },
    { id: 'skills', label: 'SKILLS', icon: <Layout size={20} /> },
    { id: 'projects', label: 'PROJECTS', icon: <Code size={20} /> },
    { id: 'contact', label: 'CONTACT', icon: <Mail size={20} /> },
  ];

  return (
    <nav className={`sidebar ${isVisible === false ? 'sidebar-hidden' : ''}`}>
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => setActiveTab(item.id)}
        >
          <div className="icon-box">{item.icon}</div>
          <span className="label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default Sidebar;
