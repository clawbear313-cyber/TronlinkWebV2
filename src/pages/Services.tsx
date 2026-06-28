import { Link } from 'react-router-dom';
import Reveal from '@/components/motion/Reveal.tsx';
import { SERVICES, HERO_IMAGES } from '@/lib/data.ts';

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_IMAGES.services})` }}
        aria-label="Services hero"
      >
        <div className="hero-overlay" />
        <div className="container-site hero-content w-full">
          <Reveal>
            <p className="label-tag" style={{ marginBottom: '1.5rem' }}>What We Do</p>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 700, marginBottom: '1rem', maxWidth: '560px' }}>
              服務核心
            </h1>
            <p style={{ color: '#3d4a52', fontSize: '1.0625rem', maxWidth: '420px' }}>
              以工程紀律建構每一個數位系統。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services list */}
      <section className="section-pad" style={{ backgroundColor: '#f5f4f0' }}>
        <div className="container-site">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.id} delay={i * 0.1}>
                <div
                  style={{
                    borderTop: '1px solid #d2cdc8',
                    paddingTop: '4rem',
                    paddingBottom: '4rem',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                    {/* Left col */}
                    <div>
                      <p className="section-num" style={{ marginBottom: '1.25rem' }}>{svc.id}</p>
                      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '0.5rem' }}>{svc.nameZh}</h2>
                      <p style={{ color: '#3d4a52', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', marginBottom: '1.5rem' }}>{svc.nameEn}</p>
                      {svc.description.map((d, di) => (
                        <p key={di} style={{ color: '#3d4a52', lineHeight: 1.75, fontSize: '0.9375rem', marginBottom: di < svc.description.length - 1 ? '1rem' : 0 }}>{d}</p>
                      ))}
                      <p style={{ marginTop: '1.5rem', color: '#3d4a52', fontSize: '0.8125rem', lineHeight: 1.65 }}>
                        <span style={{ color: '#8a6a1e', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Best fit: </span>
                        {svc.bestFit}
                      </p>
                    </div>

                    {/* Right col */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignContent: 'start' }}>
                      <div>
                        <p className="label-tag" style={{ marginBottom: '1rem' }}>Includes</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                          {svc.includes.map((item) => (
                            <li key={item} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                              <span style={{ color: '#1a6e8a', marginTop: '0.25rem', flexShrink: 0 }}>—</span>
                              <span style={{ color: '#3d4a52', fontSize: '0.875rem', lineHeight: 1.55 }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="label-tag" style={{ marginBottom: '1rem' }}>Deliverables</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                          {svc.deliverables.map((item) => (
                            <li key={item} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                              <span style={{ color: '#8a6a1e', marginTop: '0.25rem', flexShrink: 0 }}>—</span>
                              <span style={{ color: '#3d4a52', fontSize: '0.875rem', lineHeight: 1.55 }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: '1px solid #d2cdc8' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#eeecea', borderTop: '1px solid #d2cdc8' }}>
        <div className="container-site" style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '1rem' }}>準備好開始了嗎？</h2>
            <p style={{ color: '#3d4a52', marginBottom: '2rem' }}>讓我們一起討論您的下一個專案。</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
