import { Link } from 'react-router-dom';
import { useStagger, useReveal } from '@/hooks/useGsap.ts';
import Reveal from '@/components/motion/Reveal.tsx';
import Orb from '@/components/motion/Orb.tsx';
import { SERVICES, WORK_CASES, HERO_IMAGES } from '@/lib/data.ts';

export default function Home() {
  const cardsRef = useStagger<HTMLDivElement>({ stagger: 0.12 });
  const servicesRef = useStagger<HTMLDivElement>({ stagger: 0.1 });
  const workRef = useStagger<HTMLDivElement>({ stagger: 0.12 });
  const heroContentRef = useReveal<HTMLDivElement>({ y: 40, duration: 1, delay: 0.1 });

  return (
    <main>
      {/* ── Hero ── */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_IMAGES.home})`, minHeight: '100vh' }}
        aria-label="Hero"
      >
        <div className="hero-overlay" />
        <Orb size={600} className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4" />
        {/* Display numeral bottom-right */}
        <span
          className="display-num"
          style={{ bottom: '2rem', right: '2rem', top: 'auto', left: 'auto' }}
          aria-hidden="true"
        >
          01
        </span>
        <div className="container-site hero-content w-full">
          <div ref={heroContentRef} style={{ maxWidth: '640px' }}>
            <p
              className="label-tag ruled-label"
              style={{ marginBottom: '1.5rem' }}
            >
              Architecture-First Web Engineering
            </p>
            <h1
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                fontWeight: 800,
                marginBottom: '1.5rem',
                color: '#0f0e17',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              將概念化為形體
            </h1>
            <p
              style={{
                color: '#374151',
                fontSize: '1.0625rem',
                lineHeight: 1.75,
                maxWidth: '52ch',
                marginBottom: '2.5rem',
              }}
            >
              我們以架構設計為核心，建構能隨品牌成長持續演進的網站系統。每一段合作，都是信賴關係的起點。
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/work" className="btn-primary">View Our Work</Link>
              <Link to="/contact" className="btn-ghost">Start a Project</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 Philosophy ── */}
      <section className="section-pad" style={{ backgroundColor: '#ffffff', position: 'relative', overflow: 'hidden' }}>
        <div className="editorial-grid">
          {/* Left col 1–4 */}
          <div
            style={{
              gridColumn: '1 / 5',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <span className="display-num" style={{ top: '-1rem', left: '-0.5rem' }} aria-hidden="true">01</span>
            <Reveal>
              <p className="label-tag ruled-label" style={{ marginBottom: '0.5rem' }}>Philosophy</p>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                工程導向的設計哲學
              </h2>
              <p style={{ color: '#374151', lineHeight: 1.75, fontSize: '1rem', maxWidth: '60ch' }}>
                我們以技術精確性為基礎，在長期合作中建立深厚的信賴關係。
              </p>
            </Reveal>
          </div>

          {/* Right col 5–12 — 3 stacked cards */}
          <div
            ref={cardsRef}
            style={{
              gridColumn: '5 / 13',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingTop: '3rem',
            }}
          >
            {[
              { num: '01', title: '架構優先', desc: '從系統設計層面思考。' },
              { num: '02', title: '可維護性', desc: '程式碼是長期資產。' },
              { num: '03', title: '長期夥伴', desc: '持續的合作，讓我們成為最可靠的技術夥伴。' },
            ].map((card) => (
              <div
                key={card.num}
                className="card-accent"
                style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
              >
                <span className="section-num" style={{ flexShrink: 0, paddingTop: '0.125rem' }}>{card.num}</span>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '0.375rem', color: '#0f0e17' }}>{card.title}</p>
                  <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.65 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container-site" style={{ marginTop: '4rem' }}>
          <hr className="divider" />
        </div>
      </section>

      {/* ── 02 Services ── */}
      <section className="section-pad" style={{ backgroundColor: '#f5f5ff' }}>
        <div className="editorial-grid">
          {/* Label + heading full-width */}
          <div className="col-span-full" style={{ marginBottom: '3rem' }}>
            <Reveal>
              <p className="label-tag ruled-label" style={{ marginBottom: '0.75rem' }}>02 — Services</p>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                服務核心
              </h2>
            </Reveal>
          </div>

          {/* 3-column services grid */}
          <div
            ref={servicesRef}
            className="col-span-full"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1px',
              backgroundColor: '#c7d2fe',
            }}
          >
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                style={{ backgroundColor: '#f5f5ff', padding: '2.5rem 2rem', position: 'relative' }}
              >
                <p
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 'clamp(3rem, 5vw, 4rem)',
                    fontWeight: 800,
                    color: '#4f46e5',
                    opacity: 0.12,
                    lineHeight: 1,
                    marginBottom: '1rem',
                    letterSpacing: '-0.04em',
                  }}
                  aria-hidden="true"
                >
                  {svc.id}
                </p>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f0e17' }}>{svc.nameZh}</h3>
                <p style={{ color: '#374151', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', marginBottom: '1rem' }}>{svc.nameEn}</p>
                <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '60ch' }}>{svc.description[0]}</p>
                <Link
                  to="/services"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', marginTop: '1.5rem', color: '#4f46e5', fontSize: '0.8125rem', fontWeight: 500 }}
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="container-site" style={{ marginTop: '4rem' }}>
          <hr className="divider" />
        </div>
      </section>

      {/* ── 03 Selected Work ── */}
      <section className="section-pad" style={{ backgroundColor: '#ffffff' }}>
        <div className="editorial-grid">
          <div className="col-span-full" style={{ marginBottom: '3rem' }}>
            <Reveal>
              <p className="label-tag ruled-label" style={{ marginBottom: '0.75rem' }}>03 — Selected Work</p>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                實作案例
              </h2>
            </Reveal>
          </div>

          <div
            ref={workRef}
            className="col-span-full"
            style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
          >
            {WORK_CASES.map((wc, i) => (
              <article key={wc.id} style={{ borderTop: '1px solid #c7d2fe', paddingTop: '3rem', paddingBottom: '3rem' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '3rem',
                    alignItems: 'start',
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: 800,
                        color: '#4f46e5',
                        opacity: 0.1,
                        lineHeight: 1,
                        marginBottom: '1rem',
                        letterSpacing: '-0.04em',
                      }}
                      aria-hidden="true"
                    >
                      {wc.id}
                    </p>
                    <h3 style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 600, marginBottom: '0.375rem', color: '#0f0e17' }}>{wc.client}</h3>
                    <p style={{ color: '#374151', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', marginBottom: '1.25rem' }}>{wc.industry}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
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
                  </div>
                  {/* Outcome as pull-quote */}
                  <blockquote className="pull-quote" style={{ color: '#374151', margin: 0 }}>
                    {wc.outcome}
                  </blockquote>
                </div>
              </article>
            ))}
            <div style={{ borderTop: '1px solid #c7d2fe' }} />
          </div>

          <div className="col-span-full" style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/work" className="btn-ghost">View All Work</Link>
          </div>
        </div>
        <div className="container-site" style={{ marginTop: '4rem' }}>
          <hr className="divider" />
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ backgroundColor: '#f5f5ff', borderTop: '1px solid #c7d2fe', borderBottom: '1px solid #c7d2fe' }}>
        <div
          className="container-site"
          style={{ paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center' }}
        >
          <Reveal>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              準備好開始了嗎？
            </h2>
            <p
              style={{
                color: '#374151',
                fontSize: '1rem',
                marginBottom: '2.5rem',
                fontFamily: 'JetBrains Mono, monospace',
                letterSpacing: '0.04em',
              }}
            >
              讓我們一起討論您的下一個專案。
            </p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
