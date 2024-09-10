import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faFileAlt, faBookOpen, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNavExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleLinkClick = () => {
    setIsNavExpanded(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsNavExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header id="header" className={`d-flex flex-column justify-content-center ${isNavExpanded ? 'mobile-nav-active' : ''}`}>
      <button
        type="button"
        className="mobile-nav-toggle"
        onClick={toggleNavExpanded}
        aria-controls="navbar"
        aria-expanded={isNavExpanded}
      >
        <FontAwesomeIcon icon={isNavExpanded ? faTimes : faBars} />
      </button>
      <nav id="navbar" className={`navbar nav-menu ${isNavExpanded ? 'mobile-nav-active' : ''}`}>
        <ul>
          <li>
          <a href="#hero" className="nav-link scrollto active" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link scrollto">
              <FontAwesomeIcon icon={faUser} /> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link scrollto">
              <FontAwesomeIcon icon={faCode} /> <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="nav-link scrollto">
              <FontAwesomeIcon icon={faFileAlt} /> <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link scrollto">
              <FontAwesomeIcon icon={faBookOpen} /> <span>Portfolio</span>
            </a>
          </li>
          
          <li>
            <a href="#contact" className="nav-link scrollto">
              <FontAwesomeIcon icon={faEnvelope} /> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;