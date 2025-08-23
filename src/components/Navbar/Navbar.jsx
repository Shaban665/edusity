import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => setMobileMenu(prev => !prev);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Overlay when mobile menu is open */}
      {mobileMenu && <div className="overlay" onClick={() => setMobileMenu(false)}></div>}

      <nav className={`nav-container ${sticky ? 'dark-nav' : ''}`}>
        <div className="nav-left">
          <img src={logo} alt="logo" className="logo" />
          <p className="university-name"></p>
        </div>

        <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
          <li><Link to="hero" smooth={true} duration={500} onClick={() => setMobileMenu(false)}>Home</Link></li>
          <li><Link to="program" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Program</Link></li>
          <li><Link to="about" smooth={true} offset={-150} duration={500} onClick={() => setMobileMenu(false)}>About Us</Link></li>
          <li><Link to="campus" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Campus</Link></li>
          <li><Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Testimonials</Link></li>
          <li><Link to="contact" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)} className="btn">Contact us</Link></li>
        </ul>

        <img src={menu_icon} alt="menu icon" className="menu-icon" onClick={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
