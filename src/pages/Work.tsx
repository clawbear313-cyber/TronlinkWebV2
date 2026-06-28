import { Link } from 'react-router-dom';
import Reveal from '@/components/motion/Reveal.tsx';
import { WORK_CASES, HERO_IMAGES } from '@/lib/data.ts';

export default function Work() {
  return (
    <main>
      {/* Hero */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_IMAGES.work})` }}
        aria-label="Work hero"
      >
        <div className="hero-overlay" />
        <div className="container-site hero-content w-full">
          <Reveal>
            <p className="label-tag" style={{ marginBottom: '1.5rem' }}>Portfolio</p>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 700, marginBottom: '1rem', maxWidth: '560px' }}>
              實作案例
            </h1>
            <p style={{ color: '#4a5240', fontSize: '1.0625rem', maxWidth: '420px' }}>
              每個專案都是一次工程挑戰的完整實踐。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cases */}
      <section className="section-pad" style={{ backgroundColor: '#faf7f2' }}>
        <div className="container-site">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {WORK_CASES.map((wc, i) => (
              <Reveal key={wc.id} delay={i * 0.1}>
                <article style={{ borderTop: '1px solid #d4cdb8', paddingTop: '4rem', paddingBottom: '4rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                    {/* Left */}
                    <div>
                      <p className="section-num" style={{ marginBottom: '1.25rem' }}>{wc.id}</p>
                      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '0.5rem' }}>{wc.client}</h2>
                      <p style={{ color: '#4a5240', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', marginBottom: '2rem' }}>{wc.industry}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '2rem' }}>
                        {wc.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontFamily: 'JetBrains Mono, monospace',
                              fontSize: '0.6875rem',
                              color: '#2d6a4f',
                              border: '1px solid #d4cdb8',
                              padding: '0.1875rem 0.5rem',
                              borderRadius: '0.125rem',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
                        {[
                          { label: 'Challenge', text: wc.challenge },
                          { label: 'Solution', text: wc.solution },
                          { label: 'Architecture', text: wc.architecture },
                        ].map(({ label, text }) => (
                          <div key={label}>
                            <p className="label-tag" style={{ marginBottom: '0.5rem' }}>{label}</p>
                            <p style={{ color: '#4a5240', fontSize: '0.875rem', lineHeight: 1.7 }}>{text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right */}
                    <div>
                      <div
                        style={{
                          width: '100%',
                          height: '280px',
                          backgroundImage: `url(${wc.img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          borderRadius: '0.25rem',
                          marginBottom: '1.5rem',
                        }}
                        role="img"
                        aria-label={`${wc.client} project`}
                      />
                      <div style={{ backgroundColor: '#ffffff', border: '1px solid #d4cdb8', borderRadius: '0.25rem', padding: '1.5rem' }}>
                        <p className="label-tag" style={{ marginBottom: '0.75rem' }}>Outcome</p>
                        <p style={{ color: '#1a1a16', fontWeight: 500, lineHeight: 1.65 }}>{wc.outcome}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
            <div style={{ borderTop: '1px solid #d4cdb8' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#f0ebe2', borderTop: '1px solid #d4cdb8' }}>
        <div className="container-site" style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '1rem' }}>準備好開始了嗎？</h2>
            <p style={{ color: '#4a5240', marginBottom: '2rem' }}>讓我們一起討論您的下一個專案。</p>
            <Link to="/contact" className="btn-primary">Start a Project</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
