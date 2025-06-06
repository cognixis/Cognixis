// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom'; 
// import './Navbar.css';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50); 
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
//       <div className="logo">
//         <NavLink to="/" className="logo-link">Cognixis</NavLink>
//       </div>
//       <ul className="nav-links">
//         <NavLink to="/" activeClassName="active"><li>Home</li></NavLink>
//         <NavLink to="/internships" activeClassName="active"><li>Internships</li></NavLink>
//         <NavLink to="/about" activeClassName="active"><li>About</li></NavLink>
//         <NavLink to="/vision" activeClassName="active"><li>How It Works</li></NavLink>
//         <NavLink to="/faqs" activeClassName="active"><li>FAQs</li></NavLink>
//         <NavLink to="/contact-us" activeClassName="active"><li>Contact Us</li></NavLink>
//       </ul>
//       <div className="cta">
//         <NavLink to="/internships" className="btn-register">Apply Now</NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Toggle menu state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="logo">
        <NavLink to="/" className="logo-link"><img className='cognixis-logo-img' src="cog-logo-updated.jpg" alt="" /></NavLink>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Menu items */}
      <ul className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}><li>Home</li></NavLink>
        <NavLink to="/internships" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}><li>Internships</li></NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}><li>Services</li></NavLink>
        <NavLink to="/vision" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}><li>Vision</li></NavLink>
        <NavLink to="/faqs" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}><li>FAQs</li></NavLink>
        <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setMenuOpen(false)}><li>Contact Us</li></NavLink>

        {/* ✅ Mobile Apply Button */}
        <li className="mobile-apply-btn">
          <NavLink to="/internships" onClick={() => setMenuOpen(false)} className="btn-register">
            Internships
          </NavLink>
        </li>
      </ul>

      {/* ✅ Desktop Apply Button */}
      <div className="cta">
        <NavLink to="/internships" className="btn-register">Internships</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
