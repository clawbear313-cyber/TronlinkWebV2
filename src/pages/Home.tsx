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
        style={{ backgroundImage: `url(${HERO_IMAGES.home})` }}
        aria-label="Hero"
      >
        <div className="hero-overlay" />
        <Orb size={600} className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4" />
        <div className="container-site hero-content w-full">
          <div ref={heroContentRef} style={{ maxWidth: '640px' }}>
            <p className="label-tag" style={{ marginBottom: '1.5rem' }}>Architecture-First Web Engineering</p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, marginBottom: '1.5rem', color: '#fafaf9' }}>
              將概念化為形體
            </h1>
            <p style={{ color: '#a8a29e', fontSize: '1.0625rem', lineHeight: 1.75, maxWidth: '480px', marginBottom: '2.5rem' }}>
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
      <section className="section-pad" style={{ backgroundColor: '#1c1917' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <Reveal>
              <span className="section-num" style={{ display: 'block', marginBottom: '1.5rem' }}>01</span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 600, marginBottom: '1.25rem' }}>
                工程導向的設計哲學
              </h2>
              <p style={{ color: '#a8a29e', lineHeight: 1.75, fontSize: '1rem' }}>
                我們以技術精確性為基礎，在長期合作中建立深厚的信賴關係。
              </p>
            </Reveal>
            <div ref={cardsRef} style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {[
                { num: '01', title: '架構優先', desc: '從系統設計層面思考。' },
                { num: '02', title: '可維護性', desc: '程式碼是長期資產。' },
                { num: '03', title: '長期夥伴', desc: '持續的合作，讓我們成為最可靠的技術夥伴。' },
              ].map((card) => (
                <div
                  key={card.num}
                  className="card-base"
                  style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', marginBottom: '1px' }}
                >
                  <span className="section-num" style={{ flexShrink: 0, paddingTop: '0.125rem' }}>{card.num}</span>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: '0.375rem', color: '#fafaf9' }}>{card.title}</p>
                    <p style={{ color: '#a8a29e', fontSize: '0.875rem', lineHeight: 1.65 }}>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 Services ── */}
      <section className="section-pad" style={{ backgroundColor: '#292524' }}>
        <div className="container-site">
          <Reveal style={{ marginBottom: '3rem' }}>
            <p className="label-tag" style={{ marginBottom: '0.75rem' }}>Services</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600 }}>服務核心</h2>
          </Reveal>
          <div ref={servicesRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', backgroundColor: '#44403c' }}>
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                style={{ backgroundColor: '#292524', padding: '2.5rem 2rem' }}
              >
                <p className="section-num" style={{ marginBottom: '1.25rem' }}>{svc.id}</p>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fafaf9' }}>{svc.nameZh}</h3>
                <p style={{ color: '#a8a29e', fontSize: '0.8125rem', fontFamily: 'JetBrains Mono, monospace', marginBottom: '1rem' }}>{svc.nameEn}</p>
                <p style={{ color: '#a8a29e', fontSize: '0.875rem', lineHeight: 1.7 }}>{svc.description[0]}</p>
                <Link
                  to="/services"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', marginTop: '1.5rem', color: '#d97706', fontSize: '0.8125rem', fontWeight: 500 }}
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Selected Work ── */}
      <section className="section-pad" style={{ backgroundColor: '#1c1917' }}>
        <div className="container-site">
          <Reveal style={{ marginBottom: '3rem' }}>
            <p className="label-tag" style={{ marginBottom: '0.75rem' }}>Selected Work</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600 }}>實作案例</h2>
          </Reveal>
          <div ref={workRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {WORK_CASES.map((wc) => (
              <article
                key={wc.id}
                className="card-base"
                style={{ overflow: 'hidden', padding: 0 }}
              >
                <div
                  style={{
                    height: '200px',
                    backgroundImage: `url(${wc.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  role="img"
                  aria-label={`${wc.client} project`}
                />
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1rem' }}>
                    {wc.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.6875rem',
                          color: '#d97706',
                          border: '1px solid #44403c',
                          padding: '0.1875rem 0.5rem',
                          borderRadius: '0.125rem',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.25rem', color: '#fafaf9' }}>{wc.client}</h3>
                  <p style={{ color: '#a8a29e', fontSize: '0.8125rem', fontFamily: 'JetBrains Mono, monospace', marginBottom: '0.875rem' }}>{wc.industry}</p>
                  <p style={{ color: '#a8a29e', fontSize: '0.875rem', lineHeight: 1.65 }}>{wc.outcome}</p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/work" className="btn-ghost">View All Work</Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ backgroundColor: '#292524', borderTop: '1px solid #44403c', borderBottom: '1px solid #44403c' }}>
        <div className="container-site" style={{ paddingTop: '5rem', paddingBottom: '5rem', textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 600, marginBottom: '1rem' }}>準備好開始了嗎？</h2>
            <p style={{ color: '#a8a29e', fontSize: '1rem', marginBottom: '2.5rem' }}>讓我們一起討論您的下一個專案。</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
