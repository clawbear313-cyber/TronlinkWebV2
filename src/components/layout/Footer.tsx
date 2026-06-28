import { Link } from 'react-router-dom';
import { FOOTER } from '@/lib/data.ts';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f5f5ff', borderTop: '2px solid #c7d2fe' }}>
      <div className="container-site" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        {/* 3-col grid: left tagline, center services, right connect */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid #c7d2fe',
          }}
        >
          {/* Left — large tagline */}
          <div>
            <Link to="/" aria-label="Tronlix home">
              <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="0" y="4" width="20" height="20" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
                <text x="5" y="19" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#4f46e5">T</text>
                <text x="26" y="20" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" letterSpacing="0.12em" fill="#0f0e17">RONLIX</text>
              </svg>
            </Link>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                fontWeight: 700,
                color: '#0f0e17',
                lineHeight: 1.3,
                marginTop: '1.25rem',
                maxWidth: '240px',
                letterSpacing: '-0.01em',
              }}
            >
              {FOOTER.tagline}
            </p>
            <p style={{ color: '#374151', fontSize: '0.8125rem', lineHeight: 1.7, marginTop: '0.5rem', maxWidth: '240px' }}>
              {FOOTER.tagline2}
            </p>
          </div>

          {/* Center — services list */}
          <div>
            <p className="label-tag" style={{ marginBottom: '1.25rem' }}>Services</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {FOOTER.services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    style={{ color: '#374151', fontSize: '0.875rem', transition: 'color 200ms ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0f0e17')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — connect links */}
          <div>
            <p className="label-tag" style={{ marginBottom: '1.25rem' }}>Connect</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {FOOTER.connect.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    style={{ color: '#374151', fontSize: '0.875rem', transition: 'color 200ms ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0f0e17')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
                    target={c.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar: flex between copyright and bottom tag */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <p style={{ color: '#374151', fontSize: '0.8125rem' }}>{FOOTER.copyright}</p>
          <span className="label-tag">{FOOTER.bottomTag}</span>
        </div>
      </div>
    </footer>
  );
}
