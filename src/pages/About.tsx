import { Link } from 'react-router-dom';
import Reveal from '@/components/motion/Reveal.tsx';
import { useStagger } from '@/hooks/useGsap.ts';
import { VALUES, HERO_IMAGES } from '@/lib/data.ts';

const ROLES = ['Engineering Lead', 'Frontend Architect', 'DevOps Engineer'];

export default function About() {
  const valuesRef = useStagger<HTMLDivElement>({ stagger: 0.08 });

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_IMAGES.about})`, minHeight: '100vh' }}
        aria-label="About hero"
      >
        <div className="hero-overlay" />
        <div className="container-site hero-content w-full">
          <Reveal>
            <p className="label-tag ruled-label" style={{ marginBottom: '1.5rem' }}>About Us</p>
            <h1
              style={{
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                fontWeight: 800,
                marginBottom: '1.25rem',
                maxWidth: '680px',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: 'inherit',
              }}
            >
              我們是工程師，也是長期夥伴。
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.0625rem', maxWidth: '52ch', lineHeight: 1.75 }}>
              Tronlix 以工程化的系統建構，在長期合作中建立深厚的技術信賴。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-pad" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <Reveal style={{ marginBottom: '3.5rem' }}>
            <p className="label-tag ruled-label" style={{ marginBottom: '0.75rem' }}>01 — Core Values</p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              核心價值
            </h2>
          </Reveal>

          {/* 3-col grid, each card-accent style with number */}
          <div
            ref={valuesRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {VALUES.map((v) => (
              <div key={v.num} className="card-accent">
                <p className="section-num" style={{ marginBottom: '1rem' }}>{v.num}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.625rem', marginBottom: '0.875rem' }}>
                  <span style={{ color: '#4f46e5', fontSize: '1.25rem', fontWeight: 700, lineHeight: 1 }}>{v.titleZh}</span>
                  <span style={{ color: '#374151', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem' }}>{v.titleEn}</span>
                </div>
                <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '60ch' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container-site" style={{ marginTop: '4rem' }}>
          <hr className="divider" />
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section-pad" style={{ backgroundColor: '#f5f5ff', borderTop: '1px solid #c7d2fe' }}>
        <div className="container-site">
          <Reveal style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="label-tag ruled-label" style={{ marginBottom: '0.75rem', justifyContent: 'center' }}>02 — Team</p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              團隊
            </h2>
            <p style={{ color: '#374151', lineHeight: 1.75, fontSize: '0.9375rem', maxWidth: '52ch', margin: '1.25rem auto 0' }}>
              一支由資深前端工程師與系統架構師組成的精實團隊，在長期合作中成為客戶最信賴的技術夥伴。
            </p>
          </Reveal>

          {/* 3-col team cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {ROLES.map((role, i) => (
              <div key={role} className="card-accent">
                <p className="section-num" style={{ marginBottom: '1rem' }}>0{i + 1}</p>
                <p style={{ color: '#0f0e17', fontWeight: 600, fontSize: '1rem' }}>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#ffffff', borderTop: '1px solid #c7d2fe' }}>
        <div className="container-site" style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}>
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
