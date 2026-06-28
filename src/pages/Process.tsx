import { Link } from 'react-router-dom';
import Reveal from '@/components/motion/Reveal.tsx';
import { useStagger } from '@/hooks/useGsap.ts';
import { PROCESS_STEPS, HERO_IMAGES } from '@/lib/data.ts';

export default function Process() {
  const stepsRef = useStagger<HTMLDivElement>({ stagger: 0.1 });

  return (
    <main>
      {/* Hero */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_IMAGES.process})` }}
        aria-label="Process hero"
      >
        <div className="hero-overlay" />
        <div className="container-site hero-content w-full">
          <Reveal>
            <p className="label-tag" style={{ marginBottom: '1.5rem' }}>How We Work</p>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 700, marginBottom: '1rem', maxWidth: '560px' }}>
              協作流程
            </h1>
            <p style={{ color: '#a8a29e', fontSize: '1.0625rem', maxWidth: '480px' }}>
              結構化的流程確保每個專案準時完成，並建立長期合作的信賴基礎。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="section-pad" style={{ backgroundColor: '#1c1917' }}>
        <div className="container-site">
          <div ref={stepsRef} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '2rem',
                  padding: '2.5rem 0',
                  borderBottom: i < PROCESS_STEPS.length - 1 ? '1px solid #44403c' : 'none',
                  alignItems: 'start',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '2.25rem',
                      fontWeight: 400,
                      color: '#44403c',
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </p>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.375rem', color: '#fafaf9' }}>
                    {step.titleZh}
                  </h2>
                  <p style={{ color: '#a8a29e', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', marginBottom: '0.875rem' }}>
                    {step.titleEn}
                  </p>
                  <p style={{ color: '#a8a29e', lineHeight: 1.7, fontSize: '0.9375rem', maxWidth: '560px' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#292524', borderTop: '1px solid #44403c' }}>
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
