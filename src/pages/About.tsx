import { Link } from 'react-router-dom';
import Reveal from '@/components/motion/Reveal.tsx';
import { useStagger } from '@/hooks/useGsap.ts';
import { VALUES, HERO_IMAGES } from '@/lib/data.ts';

const ROLES = ['Engineering Lead', 'Frontend Architect', 'DevOps Engineer'];

export default function About() {
  const valuesRef = useStagger<HTMLDivElement>({ stagger: 0.08 });

  return (
    <main>
      {/* Hero */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_IMAGES.about})`, minHeight: '75vh' }}
        aria-label="About hero"
      >
        <div className="hero-overlay" />
        <div className="container-site hero-content w-full">
          <Reveal>
            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 700, marginBottom: '1.25rem', maxWidth: '620px' }}>
              我們是工程師，也是長期夥伴。
            </h1>
            <p style={{ color: '#a8a29e', fontSize: '1.0625rem', maxWidth: '480px', lineHeight: 1.75 }}>
              Tronlix 以工程化的系統建構，在長期合作中建立深厚的技術信賴。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ backgroundColor: '#1c1917' }}>
        <div className="container-site">
          <Reveal style={{ marginBottom: '3.5rem' }}>
            <p className="label-tag" style={{ marginBottom: '0.75rem' }}>01 — Core Values</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600 }}>核心價值</h2>
          </Reveal>
          <div
            ref={valuesRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1px',
              backgroundColor: '#44403c',
            }}
          >
            {VALUES.map((v) => (
              <div key={v.num} style={{ backgroundColor: '#1c1917', padding: '2.25rem 1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.625rem', marginBottom: '1.25rem' }}>
                  <span style={{ color: '#d97706', fontSize: '1.5rem', fontWeight: 700, lineHeight: 1 }}>{v.titleZh}</span>
                  <span style={{ color: '#a8a29e', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem' }}>{v.titleEn}</span>
                </div>
                <p style={{ color: '#a8a29e', fontSize: '0.875rem', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad" style={{ backgroundColor: '#292524', borderTop: '1px solid #44403c' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <Reveal>
              <p className="label-tag" style={{ marginBottom: '0.75rem' }}>02 — Team</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '1.25rem' }}>團隊</h2>
              <p style={{ color: '#a8a29e', lineHeight: 1.75, fontSize: '0.9375rem' }}>
                一支由資深前端工程師與系統架構師組成的精實團隊，在長期合作中成為客戶最信賴的技術夥伴。
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: '#44403c' }}>
                {ROLES.map((role, i) => (
                  <div
                    key={role}
                    style={{
                      backgroundColor: '#292524',
                      padding: '1.5rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.75rem',
                        color: '#a8a29e',
                        flexShrink: 0,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span style={{ color: '#fafaf9', fontWeight: 500 }}>{role}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1c1917', borderTop: '1px solid #44403c' }}>
        <div className="container-site" style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '1rem' }}>準備好開始了嗎？</h2>
            <p style={{ color: '#a8a29e', marginBottom: '2rem' }}>讓我們一起討論您的下一個專案。</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
