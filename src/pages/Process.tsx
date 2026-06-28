import { Link } from 'react-router-dom';
import Reveal from '@/components/motion/Reveal.tsx';
import { useStagger } from '@/hooks/useGsap.ts';
import { PROCESS_STEPS, HERO_IMAGES } from '@/lib/data.ts';

export default function Process() {
  const stepsRef = useStagger<HTMLDivElement>({ stagger: 0.1 });

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_IMAGES.process})`, minHeight: '100vh' }}
        aria-label="Process hero"
      >
        <div className="hero-overlay" />
        <div className="container-site hero-content w-full">
          <Reveal>
            <p className="label-tag ruled-label" style={{ marginBottom: '1.5rem' }}>How We Work</p>
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
              協作流程
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.0625rem', maxWidth: '52ch', lineHeight: 1.75 }}>
              結構化的流程確保每個專案準時完成，並建立長期合作的信賴基礎。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="section-pad" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <Reveal style={{ marginBottom: '4rem' }}>
            <p className="label-tag ruled-label" style={{ marginBottom: '0.5rem' }}>Process</p>
          </Reveal>

          {/*
            Desktop: horizontal flex row with connecting thin line
            Mobile: vertical column
          */}
          <div
            ref={stepsRef}
            style={{
              position: 'relative',
            }}
          >
            {/* Horizontal connector line — visible on desktop */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '2.25rem',
                left: '0',
                right: '0',
                height: '1px',
                backgroundColor: '#c7d2fe',
                zIndex: 0,
              }}
            />

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    flex: '1 1 180px',
                    paddingTop: '0',
                    paddingRight: '2rem',
                    paddingBottom: '2rem',
                    position: 'relative',
                  }}
                >
                  {/* Step dot */}
                  <div
                    aria-hidden="true"
                    style={{
                      width: '0.75rem',
                      height: '0.75rem',
                      borderRadius: '50%',
                      backgroundColor: '#4f46e5',
                      marginBottom: '1.5rem',
                      flexShrink: 0,
                    }}
                  />
                  {/* Large number */}
                  <p
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                      fontWeight: 800,
                      color: '#4f46e5',
                      opacity: 0.15,
                      lineHeight: 1,
                      marginBottom: '1rem',
                      letterSpacing: '-0.04em',
                    }}
                    aria-hidden="true"
                  >
                    {step.num}
                  </p>
                  <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.375rem', color: '#0f0e17' }}>
                    {step.titleZh}
                  </h2>
                  <p style={{ color: '#374151', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                    {step.titleEn}
                  </p>
                  <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.875rem', maxWidth: '30ch' }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
