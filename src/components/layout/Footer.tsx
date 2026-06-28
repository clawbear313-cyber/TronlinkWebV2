import { Link } from 'react-router-dom';
import { FOOTER, NAV_ITEMS } from '@/lib/data.ts';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#eeecea', borderTop: '1px solid #d2cdc8' }}>
      <div className="container-site" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid #d2cdc8',
          }}
        >
          {/* Brand */}
          <div>
            <Link to="/" aria-label="Tronlix home">
              <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="0" y="4" width="20" height="20" fill="none" stroke="#1a6e8a" strokeWidth="1.5" />
                <text x="5" y="19" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#1a6e8a">T</text>
                <text x="26" y="20" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" letterSpacing="0.12em" fill="#111318">RONLIX</text>
              </svg>
            </Link>
            <p style={{ color: '#3d4a52', fontSize: '0.8125rem', lineHeight: 1.7, marginTop: '1rem', maxWidth: '220px' }}>
              {FOOTER.tagline}<br />
              {FOOTER.tagline2}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-tag" style={{ marginBottom: '1.25rem' }}>Navigation</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{ color: '#3d4a52', fontSize: '0.875rem', transition: 'color 200ms ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#111318')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#3d4a52')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="label-tag" style={{ marginBottom: '1.25rem' }}>Services</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {FOOTER.services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    style={{ color: '#3d4a52', fontSize: '0.875rem', transition: 'color 200ms ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#111318')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#3d4a52')}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="label-tag" style={{ marginBottom: '1.25rem' }}>Connect</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {FOOTER.connect.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    style={{ color: '#3d4a52', fontSize: '0.875rem', transition: 'color 200ms ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#111318')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#3d4a52')}
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

        {/* Bottom row */}
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
          <p style={{ color: '#3d4a52', fontSize: '0.8125rem' }}>{FOOTER.copyright}</p>
          <span className="label-tag">{FOOTER.bottomTag}</span>
        </div>
      </div>
    </footer>
  );
}
