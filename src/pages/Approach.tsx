import { Link } from 'react-router-dom';
import Reveal from '@/components/motion/Reveal.tsx';
import { useStagger } from '@/hooks/useGsap.ts';
import { PRINCIPLES, FAQS, HERO_IMAGES } from '@/lib/data.ts';
import Accordion from '@/components/ui/Accordion.tsx';

export default function Approach() {
  const principlesRef = useStagger<HTMLDivElement>({ stagger: 0.12 });

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_IMAGES.approach})`, minHeight: '100vh' }}
        aria-label="Approach hero"
      >
        <div className="hero-overlay" />
        <div className="container-site hero-content w-full">
          <Reveal>
            <p className="label-tag ruled-label" style={{ marginBottom: '1.5rem' }}>Our Approach</p>
            <h1
              style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 800,
                maxWidth: '640px',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#0f0e17',
              }}
            >
              工程導向的設計哲學
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="section-pad" style={{ backgroundColor: '#ffffff' }}>
        <div className="editorial-grid">
          {/* Left sticky label col 1–3 */}
          <div
            style={{
              gridColumn: '1 / 4',
              position: 'sticky',
              top: '6rem',
              alignSelf: 'start',
            }}
          >
            <Reveal>
              <p className="label-tag ruled-label" style={{ marginBottom: '0.75rem' }}>Core Principles</p>
              <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '60ch' }}>
                The foundation of how we build.
              </p>
            </Reveal>
          </div>

          {/* Right scrolling principles col 4–12 */}
          <div
            ref={principlesRef}
            style={{
              gridColumn: '4 / 13',
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
            }}
          >
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.num}
                style={{
                  position: 'relative',
                  padding: '3rem 0',
                  borderBottom: i < PRINCIPLES.length - 1 ? '1px solid #c7d2fe' : 'none',
                }}
              >
                <span
                  className="display-num"
                  style={{ top: '1rem', right: '0', left: 'auto' }}
                  aria-hidden="true"
                >
                  {p.num}
                </span>
                <p className="section-num" style={{ marginBottom: '1rem' }}>{p.num}</p>
                <h2
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: '#4f46e5',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {p.title}
                </h2>
                <p style={{ color: '#374151', lineHeight: 1.75, fontSize: '0.9375rem', maxWidth: '60ch' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="container-site" style={{ marginTop: '4rem' }}>
          <hr className="divider" />
        </div>
      </section>

      {/* ── Brand Voice ── */}
      <section className="section-pad" style={{ backgroundColor: '#f5f5ff', borderTop: '1px solid #c7d2fe' }}>
        <div className="editorial-grid">
          {/* Left heading col 1–5 */}
          <div style={{ gridColumn: '1 / 6', paddingRight: '2rem' }}>
            <Reveal>
              <p className="label-tag ruled-label" style={{ marginBottom: '0.75rem' }}>Brand Voice</p>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                溝通原則
              </h2>
              <p style={{ color: '#374151', lineHeight: 1.75, fontSize: '0.9375rem', maxWidth: '60ch' }}>
                每一次對外溝通，都體現我們對技術精確性的堅持。我們以清晰、結構化的語言描述技術決策，建立深厚的信賴關係。
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
                {['架構', '模組化', '可維護性', '擴展性', '工程導向', '結構化', '解耦', '效能', '長期資產', '信賴', '夥伴', '演進'].map((word) => (
                  <span
                    key={word}
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.75rem',
                      color: '#4f46e5',
                      border: '1px solid #c7d2fe',
                      padding: '0.25rem 0.625rem',
                      borderRadius: '0.125rem',
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right rules list col 6–12 */}
          <div style={{ gridColumn: '6 / 13' }}>
            <Reveal delay={0.15}>
              <p className="label-tag" style={{ marginBottom: '1.5rem' }}>FAQ</p>
              <Accordion items={FAQS} />
            </Reveal>
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
