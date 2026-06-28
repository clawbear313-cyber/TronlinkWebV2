import { Link } from 'react-router-dom';
import Reveal from '@/components/motion/Reveal.tsx';
import { WORK_CASES, HERO_IMAGES } from '@/lib/data.ts';

export default function Work() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_IMAGES.work})`, minHeight: '100vh' }}
        aria-label="Work hero"
      >
        <div className="hero-overlay" />
        <div className="container-site hero-content w-full">
          <Reveal>
            <p className="label-tag ruled-label" style={{ marginBottom: '1.5rem' }}>Portfolio</p>
            <h1
              style={{
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                fontWeight: 800,
                marginBottom: '1rem',
                maxWidth: '640px',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#0f0e17',
              }}
            >
              實作案例
            </h1>
            <p style={{ color: '#374151', fontSize: '1.0625rem', maxWidth: '52ch', lineHeight: 1.75 }}>
              每個專案都是一次工程挑戰的完整實踐。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Cases ── */}
      <section className="section-pad" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          {WORK_CASES.map((wc, i) => (
            <Reveal key={wc.id} delay={i * 0.1}>
              <article
                style={{
                  position: 'relative',
                  borderTop: '1px solid #c7d2fe',
                  paddingTop: '5rem',
                  paddingBottom: '5rem',
                  overflow: 'hidden',
                }}
              >
                {/* Large case number top-left */}
                <span
                  className="display-num"
                  style={{ top: '0.5rem', left: '0' }}
                  aria-hidden="true"
                >
                  {wc.id}
                </span>

                {/* Client name heading */}
                <p className="label-tag ruled-label" style={{ marginBottom: '0.75rem' }}>Case {wc.id}</p>
                <h2
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  {wc.client}
                </h2>
                <p style={{ color: '#374151', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', marginBottom: '2.5rem' }}>
                  {wc.industry}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '3rem' }}>
                  {wc.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.6875rem',
                        color: '#4f46e5',
                        border: '1px solid #c7d2fe',
                        padding: '0.1875rem 0.5rem',
                        borderRadius: '0.125rem',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* 2-col grid: left=details, right=outcome pull-quote */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '4rem',
                    alignItems: 'start',
                  }}
                >
                  {/* Left: challenge / solution / architecture */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {[
                      { label: 'Challenge', text: wc.challenge },
                      { label: 'Solution', text: wc.solution },
                      { label: 'Architecture', text: wc.architecture },
                    ].map(({ label, text }) => (
                      <div key={label}>
                        <p className="label-tag" style={{ marginBottom: '0.5rem' }}>{label}</p>
                        <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '60ch' }}>{text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Right: outcome as pull-quote + image */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div
                      style={{
                        width: '100%',
                        height: '260px',
                        backgroundImage: `url(${wc.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '0.25rem',
                      }}
                      role="img"
                      aria-label={`${wc.client} project`}
                    />
                    <div>
                      <p className="label-tag" style={{ marginBottom: '1rem' }}>Outcome</p>
                      <blockquote className="pull-quote" style={{ color: '#0f0e17', margin: 0 }}>
                        {wc.outcome}
                      </blockquote>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid #c7d2fe' }} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#f5f5ff', borderTop: '1px solid #c7d2fe' }}>
        <div className="container-site" style={{ paddingTop: '5rem', paddingBottom: '5rem', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>準備好開始了嗎？</h2>
            <p style={{ color: '#374151', marginBottom: '2rem', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem' }}>讓我們一起討論您的下一個專案。</p>
            <Link to="/contact" className="btn-primary">Start a Project</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
