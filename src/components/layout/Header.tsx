import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useScrolled } from '@/hooks/useGsap.ts';
import { NAV_ITEMS } from '@/lib/data.ts';

export default function Header() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background-color 300ms ease, border-color 300ms ease',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid #c7d2fe' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="container-site" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
        {/* Logo */}
        <Link to="/" aria-label="Tronlix home">
          <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="0" y="4" width="20" height="20" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
            <text x="5" y="19" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#4f46e5">T</text>
            <text x="26" y="20" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" letterSpacing="0.12em" fill="#0f0e17">RONLIX</text>
          </svg>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
          {NAV_ITEMS.filter((n) => n.label !== 'Home' && n.label !== 'Contact').map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: isActive ? '#0f0e17' : '#374151',
                transition: 'color 200ms ease',
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary" style={{ fontSize: '0.8125rem', padding: '0.5rem 1.25rem' }}>
            Get in Touch
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          style={{ color: '#374151', padding: '0.5rem' }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.98)',
            borderTop: '1px solid #c7d2fe',
            padding: '1.5rem',
          }}
          className="md:hidden"
        >
          <nav aria-label="Mobile navigation" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {NAV_ITEMS.filter((n) => n.label !== 'Contact').map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => ({
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: isActive ? '#0f0e17' : '#374151',
                  padding: '0.875rem 0',
                  borderBottom: '1px solid #c7d2fe',
                  display: 'block',
                })}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="btn-primary"
              style={{ marginTop: '1.5rem', justifyContent: 'center' }}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
