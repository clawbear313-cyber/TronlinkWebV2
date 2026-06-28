import { useState, type FormEvent } from 'react';
import Reveal from '@/components/motion/Reveal.tsx';
import { HERO_IMAGES } from '@/lib/data.ts';

interface FormState {
  name: string;
  email: string;
  company: string;
  details: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission — placeholder (no backend)
    setSubmitted(true);
  };

  return (
    <main>
      {/* Hero */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${HERO_IMAGES.contact})`, minHeight: '60vh' }}
        aria-label="Contact hero"
      >
        <div className="hero-overlay" />
        <div className="container-site hero-content w-full">
          <Reveal>
            <p className="label-tag" style={{ marginBottom: '1.5rem' }}>Contact</p>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 700, marginBottom: '1rem', maxWidth: '560px' }}>
              開始你的下一個專案
            </h1>
            <p style={{ color: '#374151', fontSize: '1.0625rem', maxWidth: '420px' }}>
              告訴我們你的需求，我們會在 24 小時內回覆。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-pad" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>
            {/* Contact info */}
            <Reveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
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
                  <p style={{ color: '#374151', fontSize: '0.875rem', lineHeight: 1.7 }}>
                    We respond within 24 hours on business days. For complex projects, we schedule a discovery call to understand your needs in depth.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={0.15}>
              {submitted ? (
                <div
                  style={{
                    backgroundColor: '#eef2ff',
                    border: '1px solid #c7d2fe',
                    borderRadius: '0.25rem',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ color: '#4f46e5', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Message sent
                  </p>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>感謝您的訊息</h2>
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
                          backgroundColor: '#f5f5ff',
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
                        backgroundColor: '#f5f5ff',
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
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
