import { Link } from 'react-router-dom';
import Reveal from '@/components/motion/Reveal.tsx';
import { useStagger } from '@/hooks/useGsap.ts';
import { PRINCIPLES, FAQS, HERO_IMAGES } from '@/lib/data.ts';
import Accordion from '@/components/ui/Accordion.tsx';

export default function Approach() {
  const principlesRef = useStagger<HTMLDivElement>({ stagger: 0.12 });

  return (
    <main>
      {/* Hero */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_IMAGES.approach})` }}
        aria-label="Approach hero"
      >
        <div className="hero-overlay" />
        <div className="container-site hero-content w-full">
          <Reveal>
            <p className="label-tag" style={{ marginBottom: '1.5rem' }}>Our Approach</p>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 700, maxWidth: '560px' }}>
              工程導向的設計哲學
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section-pad" style={{ backgroundColor: '#0f1117' }}>
        <div className="container-site">
          <Reveal style={{ marginBottom: '3.5rem' }}>
            <p className="label-tag" style={{ marginBottom: '0.75rem' }}>Core Principles</p>
            <p style={{ color: '#7e8c8c', fontSize: '1rem' }}>The foundation of how we build.</p>
          </Reveal>
          <div
            ref={principlesRef}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', backgroundColor: '#1f2d38' }}
          >
            {PRINCIPLES.map((p) => (
              <div key={p.num} style={{ backgroundColor: '#0f1117', padding: '2.5rem 2rem' }}>
                <p className="section-num" style={{ marginBottom: '1.5rem' }}>{p.num}</p>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#2e8fae' }}>{p.title}</h2>
                <p style={{ color: '#7e8c8c', lineHeight: 1.75, fontSize: '0.9375rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="section-pad" style={{ backgroundColor: '#0d1219', borderTop: '1px solid #1f2d38' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <Reveal>
              <p className="label-tag" style={{ marginBottom: '0.75rem' }}>02</p>
              <p className="label-tag" style={{ marginBottom: '1.5rem' }}>Brand Voice</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '1.25rem' }}>溝通原則</h2>
              <p style={{ color: '#7e8c8c', lineHeight: 1.75, fontSize: '0.9375rem', marginBottom: '1.25rem' }}>
                每一次對外溝通，都體現我們對技術精確性的堅持。我們以清晰、結構化的語言描述技術決策，建立深厚的信賴關係。
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
                {['架構', '模組化', '可維護性', '擴展性', '工程導向', '結構化', '解耦', '效能', '長期資產', '信賴', '夥伴', '演進'].map((word) => (
                  <span
                    key={word}
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.75rem',
                      color: '#2e8fae',
                      border: '1px solid #1f2d38',
                      padding: '0.25rem 0.625rem',
                      borderRadius: '0.125rem',
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="label-tag" style={{ marginBottom: '1.5rem' }}>FAQ</p>
              <Accordion items={FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0f1117', borderTop: '1px solid #1f2d38' }}>
        <div className="container-site" style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '1rem' }}>準備好開始了嗎？</h2>
            <p style={{ color: '#7e8c8c', marginBottom: '2rem' }}>讓我們一起討論您的下一個專案。</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
