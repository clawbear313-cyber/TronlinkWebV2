import { useState } from 'react';

interface AccordionItem {
  questionZh: string;
  questionEn: string;
  answerZh: string;
  answerEn: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y" style={{ borderColor: '#44403c' }}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 py-5 text-left"
            aria-expanded={open === i}
          >
            <div>
              <p style={{ color: '#fafaf9', fontWeight: 500, fontSize: '1rem' }}>{item.questionZh}</p>
              <p style={{ color: '#a8a29e', fontSize: '0.8125rem', marginTop: '0.25rem', fontFamily: 'JetBrains Mono, monospace' }}>
                {item.questionEn}
              </p>
            </div>
            <span
              style={{
                color: '#d97706',
                fontSize: '1.25rem',
                lineHeight: 1,
                flexShrink: 0,
                marginTop: '0.125rem',
                transition: 'transform 200ms ease',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: '1.25rem' }}>
              <p style={{ color: '#a8a29e', lineHeight: 1.7, marginBottom: '0.75rem' }}>{item.answerZh}</p>
              <p style={{ color: '#a8a29e', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.answerEn}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
