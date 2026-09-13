import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav>
      <Link to="/">
        <img src="/images/logo6.png" className="logo" alt="Logo" style={{ height: '70px', width: '170px' }} />
      </Link>
      <ul id="sidemenu" className={menuOpen ? 'open' : ''}>
        {navLinks.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              onClick={() => setMenuOpen(false)}
              className={location.pathname === to ? 'active-nav' : ''}
            >
              {label}
            </Link>
          </li>
        ))}
        <i className="fas fa-times" onClick={() => setMenuOpen(false)}></i>
      </ul>
      <i className="fas fa-bars" onClick={() => setMenuOpen(true)}></i>
    </nav>
  );
}
