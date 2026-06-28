import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useScrolled } from '@/hooks/useGsap.ts';
import { NAV_ITEMS } from '@/lib/data.ts';

export default function Header() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // When scrolled: white bg + dark text. When on hero (transparent): white text.
  const navColor   = scrolled ? '#374151' : '#ffffff';
  const navActive  = scrolled ? '#0f0e17' : '#ffffff';
  const logoText   = scrolled ? '#0f0e17' : '#ffffff';
  const hamColor   = scrolled ? '#374151' : '#ffffff';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background-color 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
          borderBottom: scrolled ? '1px solid #c7d2fe' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 12px rgba(79,70,229,0.06)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '4rem',
          }}
        >
          {/* Logo */}
          <Link to="/" aria-label="Tronlix home">
            <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="0" y="4" width="20" height="20" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
              <text x="5" y="19" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#4f46e5">T</text>
              <text
                x="26" y="20"
                fontFamily="Inter, sans-serif"
                fontSize="13"
                fontWeight="600"
                letterSpacing="0.12em"
                fill={logoText}
                style={{ transition: 'fill 300ms ease' }}
              >RONLIX</text>
            </svg>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main navigation"
            style={{ gap: '2rem', alignItems: 'center' }}
            className="hidden md:flex"
          >
            {NAV_ITEMS.filter((n) => n.label !== 'Home' && n.label !== 'Contact').map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                style={({ isActive }) => ({
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: isActive ? navActive : navColor,
                  transition: 'color 300ms ease',
                  opacity: isActive ? 1 : 0.85,
                })}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="btn-primary"
              style={{ fontSize: '0.8125rem', padding: '0.5rem 1.25rem' }}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              color: hamColor,
              padding: '0.5rem',
              transition: 'color 300ms ease',
              alignItems: 'center',
              justifyContent: 'center',
            }}
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
      </header>

      {/* Mobile menu — full-screen overlay */}
      <div
        className="md:hidden"
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          backgroundColor: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(16px)',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '6rem 2rem 3rem',
          // Animate in/out with CSS transitions via opacity + pointer-events
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 280ms ease',
        }}
      >
        <nav aria-label="Mobile navigation">
          {NAV_ITEMS.filter((n) => n.label !== 'Contact').map((item, i, arr) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                display: 'block',
                fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: isActive ? '#4f46e5' : '#0f0e17',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
                borderBottom: i < arr.length - 1 ? '1px solid #eef2ff' : 'none',
                // Staggered slide-in
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'none' : 'translateY(12px)',
                transition: `opacity 300ms ease ${i * 50}ms, transform 300ms ease ${i * 50}ms`,
              })}
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="btn-primary"
            style={{
              marginTop: '2.5rem',
              justifyContent: 'center',
              fontSize: '1rem',
              padding: '0.875rem 2rem',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'none' : 'translateY(12px)',
              transition: `opacity 300ms ease ${NAV_ITEMS.length * 50}ms, transform 300ms ease ${NAV_ITEMS.length * 50}ms`,
            }}
          >
            Get in Touch
          </Link>
        </nav>

        {/* Footer note */}
        <p
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.6875rem',
            color: '#9ca3af',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          © 2026 Tronlix
        </p>
      </div>
    </>
  );
}
