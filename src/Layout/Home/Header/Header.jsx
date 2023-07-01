import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import resume from '../../../../public/resume.pdf';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');

  const handleSetActiveItem = (item) => {
    setActiveMenu(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const servicesSection = document.getElementById('services');
      const portfolioSection = document.getElementById('portfolio');
      const contactSection = document.getElementById('contact');

      const homeOffset = homeSection.offsetTop;
      const aboutOffset = aboutSection.offsetTop;
      const servicesOffset = servicesSection.offsetTop;
      const portfolioOffset = portfolioSection.offsetTop;
      const contactOffset = contactSection.offsetTop;

      const scrollPosition = window.scrollY;

      if (scrollPosition >= homeOffset && scrollPosition < aboutOffset) {
        setActiveMenu('home');
      } else if (
        scrollPosition >= aboutOffset &&
        scrollPosition < servicesOffset
      ) {
        setActiveMenu('about');
      } else if (
        scrollPosition >= servicesOffset &&
        scrollPosition < portfolioOffset
      ) {
        setActiveMenu('services');
      } else if (
        scrollPosition >= portfolioOffset &&
        scrollPosition < contactOffset
      ) {
        setActiveMenu('portfolio');
      } else if (scrollPosition >= contactOffset) {
        setActiveMenu('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [homeRef, homeInView] = useInView({
    triggerOnce: true,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
  });

  const [portfolioRef, portfolioInView] = useInView({
    triggerOnce: true,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <header className='main-header'>
        <div className='header container'>
          <div className='header-title'>
            <a href='/'>
              <h2>
                <span>Dev</span> Solah
              </h2>
            </a>
          </div>
          <div className='menu-n-button'>
            <div className='header-menu'>
              <div
                className='menu-bar-icons'
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>
                  {isOpen ? (
                    <FaTimes />
                  ) : (
                    <FaBars />
                  )}
                </span>
              </div>
              <ul
                className={`menu-items ${isOpen ? 'move-right' : 'move-left'}`}
              >
                <li>
                  <a
                    href='#home'
                    className={activeMenu === 'home' ? 'active' : ''}
                    onClick={() => handleSetActiveItem('home')}
                    ref={homeRef}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='#about'
                    className={activeMenu === 'about' ? 'active' : ''}
                    onClick={() => handleSetActiveItem('about')}
                    ref={aboutRef}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#services'
                    className={activeMenu === 'services' ? 'active' : ''}
                    onClick={() => handleSetActiveItem('services')}
                    ref={servicesRef}
                  >
                    What I Do
                  </a>
                </li>
                <li>
                  <a
                    href='#portfolio'
                    className={activeMenu === 'portfolio' ? 'active' : ''}
                    onClick={() => handleSetActiveItem('portfolio')}
                    ref={portfolioRef}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href='#contact'
                    className={activeMenu === 'contact' ? 'active' : ''}
                    onClick={() => handleSetActiveItem('contact')}
                    ref={contactRef}
                  >
                    Contact
                  </a>
                </li>
                <span className='header-button'>
                  <a href={resume} download="resume.pdf">
                    Download Resume
                  </a>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
