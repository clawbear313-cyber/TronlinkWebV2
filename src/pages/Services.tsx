import { Link } from 'react-router-dom';
import Reveal from '@/components/motion/Reveal.tsx';
import { SERVICES, HERO_IMAGES } from '@/lib/data.ts';

export default function Services() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_IMAGES.services})`, minHeight: '100vh' }}
        aria-label="Services hero"
      >
        <div className="hero-overlay" />
        <div className="container-site hero-content w-full">
          <Reveal>
            <p className="label-tag ruled-label" style={{ marginBottom: '1.5rem' }}>What We Do</p>
            <h1
              style={{
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                fontWeight: 800,
                marginBottom: '1rem',
                maxWidth: '640px',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: 'inherit',
              }}
            >
              服務核心
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.0625rem', maxWidth: '52ch', lineHeight: 1.75 }}>
              以工程紀律建構每一個數位系統。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Services list — alternating layout ── */}
      <section className="section-pad" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          {SERVICES.map((svc, i) => {
            const isOdd = i % 2 === 0; // 0-indexed: 0,2 = text-left/details-right; 1 = reversed
            return (
              <Reveal key={svc.id} delay={i * 0.05}>
                <div
                  style={{
                    position: 'relative',
                    borderTop: '1px solid #c7d2fe',
                    paddingTop: '5rem',
                    paddingBottom: '5rem',
                    overflow: 'hidden',
                  }}
                >
                  {/* Background display numeral */}
                  <span
                    className="display-num"
                    style={{
                      top: '1rem',
                      ...(isOdd ? { left: '0' } : { right: '0', left: 'auto' }),
                    }}
                    aria-hidden="true"
                  >
                    {svc.id}
                  </span>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '3rem',
                      direction: isOdd ? 'ltr' : 'rtl',
                    }}
                  >
                    {/* Text col */}
                    <div style={{ direction: 'ltr' }}>
                      <p className="section-num" style={{ marginBottom: '1.25rem' }}>{svc.id}</p>
                      <h2
                        style={{
                          fontSize: 'clamp(2rem, 4vw, 3rem)',
                          fontWeight: 700,
                          marginBottom: '0.5rem',
                          letterSpacing: '-0.02em',
                          lineHeight: 1.1,
                        }}
                      >
                        {svc.nameZh}
                      </h2>
                      <p style={{ color: '#374151', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', marginBottom: '1.5rem' }}>
                        {svc.nameEn}
                      </p>
                      {svc.description.map((d, di) => (
                        <p
                          key={di}
                          style={{
                            color: '#374151',
                            lineHeight: 1.75,
                            fontSize: '0.9375rem',
                            maxWidth: '60ch',
                            marginBottom: di < svc.description.length - 1 ? '1rem' : 0,
                          }}
                        >
                          {d}
                        </p>
                      ))}
                      <p style={{ marginTop: '1.5rem', color: '#374151', fontSize: '0.8125rem', lineHeight: 1.65, maxWidth: '60ch' }}>
                        <span style={{ color: '#7c3aed', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Best fit: </span>
                        {svc.bestFit}
                      </p>
                    </div>

                    {/* Details col */}
                    <div style={{ direction: 'ltr', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignContent: 'start' }}>
                      <div>
                        <p className="label-tag" style={{ marginBottom: '1rem' }}>Includes</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                          {svc.includes.map((item) => (
                            <li key={item} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                              <span style={{ color: '#4f46e5', marginTop: '0.25rem', flexShrink: 0 }}>—</span>
                              <span style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.55 }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="label-tag" style={{ marginBottom: '1rem' }}>Deliverables</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                          {svc.deliverables.map((item) => (
                            <li key={item} style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                              <span style={{ color: '#7c3aed', marginTop: '0.25rem', flexShrink: 0 }}>—</span>
                              <span style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.55 }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#f5f5ff', borderTop: '1px solid #c7d2fe' }}>
        <div className="container-site" style={{ paddingTop: '5rem', paddingBottom: '5rem', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>準備好開始了嗎？</h2>
            <p style={{ color: '#374151', marginBottom: '2rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem' }}>讓我們一起討論您的下一個專案。</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
