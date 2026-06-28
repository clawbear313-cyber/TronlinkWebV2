import { useState, type FormEvent } from 'react';
import Reveal from '@/components/motion/Reveal.tsx';
import { FAQS, HERO_IMAGES } from '@/lib/data.ts';

interface FormState {
  name: string;
  email: string;
  company: string;
  details: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', details: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission — placeholder (no backend)
    setSubmitted(true);
  };

  return (
    <main>
      {/* ── Hero / Form combo 2-col split ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'stretch',
        }}
        aria-label="Contact"
      >
        {/* Subtle top gradient from hero image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${HERO_IMAGES.contact})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.05,
          }}
          aria-hidden="true"
        />
        <div
          className="container-site"
          style={{
            position: 'relative',
            zIndex: 1,
            paddingTop: '8rem',
            paddingBottom: '6rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* Left — large heading + contact info */}
          <Reveal>
            <p className="label-tag ruled-label" style={{ marginBottom: '1.5rem' }}>Contact</p>
            <h1
              style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 800,
                marginBottom: '1.25rem',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#0f0e17',
              }}
            >
              開始你的下一個專案
            </h1>
            <p style={{ color: '#374151', fontSize: '1.0625rem', maxWidth: '48ch', lineHeight: 1.75, marginBottom: '3rem' }}>
              告訴我們你的需求，我們會在 24 小時內回覆。
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <p className="label-tag" style={{ marginBottom: '0.75rem' }}>Email</p>
                <a
                  href="mailto:hello@tronlix.com"
                  style={{ color: '#4f46e5', fontSize: '1rem', fontWeight: 500, fontFamily: 'JetBrains Mono, monospace' }}
                >
                  hello@tronlix.com
                </a>
              </div>
              <div>
                <p className="label-tag" style={{ marginBottom: '0.75rem' }}>Location</p>
                <p style={{ color: '#374151', fontSize: '0.9375rem' }}>Taipei, Taiwan</p>
              </div>
              <div>
                <p className="label-tag" style={{ marginBottom: '1rem' }}>Typical Response</p>
                <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '60ch' }}>
                  We respond within 24 hours on business days. For complex projects, we schedule a discovery call to understand your needs in depth.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right — form card */}
          <Reveal delay={0.15}>
            <div className="card-accent" style={{ backgroundColor: '#f5f5ff', padding: '2.5rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <p style={{ color: '#4f46e5', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Message sent
                  </p>
                  <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>感謝您的訊息</h2>
                  <p style={{ color: '#374151', fontSize: '0.9375rem' }}>我們會在 24 小時內回覆。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    { id: 'name', label: 'Name', type: 'text', key: 'name' as keyof FormState },
                    { id: 'email', label: 'Email', type: 'email', key: 'email' as keyof FormState },
                    { id: 'company', label: 'Company', type: 'text', key: 'company' as keyof FormState },
                  ].map(({ id, label, type, key }) => (
                    <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor={id} style={{ color: '#374151', fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.04em' }}>
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        required={key === 'name' || key === 'email'}
                        style={{
                          backgroundColor: '#ffffff',
                          border: '1px solid #c7d2fe',
                          borderRadius: '0.125rem',
                          padding: '0.75rem 1rem',
                          color: '#0f0e17',
                          fontSize: '0.9375rem',
                          fontFamily: 'Inter, sans-serif',
                          outline: 'none',
                          transition: 'border-color 200ms ease',
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#4f46e5')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#c7d2fe')}
                      />
                    </div>
                  ))}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="details" style={{ color: '#374151', fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.04em' }}>
                      Project Details
                    </label>
                    <textarea
                      id="details"
                      rows={5}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      required
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #c7d2fe',
                        borderRadius: '0.125rem',
                        padding: '0.75rem 1rem',
                        color: '#0f0e17',
                        fontSize: '0.9375rem',
                        fontFamily: 'Inter, sans-serif',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 200ms ease',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#4f46e5')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#c7d2fe')}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-pad" style={{ backgroundColor: '#f5f5ff', borderTop: '1px solid #c7d2fe' }}>
        <div className="container-site">
          <Reveal style={{ marginBottom: '3rem' }}>
            <p className="label-tag ruled-label" style={{ marginBottom: '0.75rem' }}>FAQ</p>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              常見問題
            </h2>
          </Reveal>

          {/* Accordion with ruled separators */}
          <div style={{ maxWidth: '800px' }}>
            {FAQS.map((faq, i) => (
              <div key={i}>
                <div
                  style={{ borderTop: '1px solid #c7d2fe', padding: '1.5rem 0' }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                    }}
                    aria-expanded={openFaq === i}
                  >
                    <span style={{ fontWeight: 600, fontSize: '1rem', color: '#0f0e17', lineHeight: 1.4 }}>
                      {faq.questionEn}
                    </span>
                    <span
                      style={{
                        flexShrink: 0,
                        width: '1.5rem',
                        height: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#4f46e5',
                        fontSize: '1.25rem',
                        lineHeight: 1,
                        transform: openFaq === i ? 'rotate(45deg)' : 'none',
                        transition: 'transform 200ms ease',
                      }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{ paddingTop: '1rem' }}>
                      <p style={{ color: '#374151', fontSize: '0.9375rem', lineHeight: 1.75, maxWidth: '60ch' }}>
                        {faq.answerEn}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #c7d2fe' }} />
          </div>
        </div>
      </section>
    </main>
  );
}
