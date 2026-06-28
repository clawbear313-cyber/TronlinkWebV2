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
    <div className="divide-y" style={{ borderColor: '#1f2d38' }}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-4 py-5 text-left"
            aria-expanded={open === i}
          >
            <div>
              <p style={{ color: '#e2dbd4', fontWeight: 500, fontSize: '1rem' }}>{item.questionZh}</p>
              <p style={{ color: '#3d4a52', fontSize: '0.8125rem', marginTop: '0.25rem', fontFamily: 'JetBrains Mono, monospace' }}>
                {item.questionEn}
              </p>
            </div>
            <span
              style={{
                color: '#2e8fae',
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
              <p style={{ color: '#7e8c8c', lineHeight: 1.7, marginBottom: '0.75rem' }}>{item.answerZh}</p>
              <p style={{ color: '#3d4a52', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.answerEn}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
