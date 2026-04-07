'use client';

import { useEffect, useRef, useState } from 'react';

type Skill = { name: string; color: string };
type Section = { label: string; accent: string; skills: Skill[] };

const SECTIONS: Section[] = [
  {
    label: 'Languages',
    accent: '#ff6b35',
    skills: [
      { name: 'JavaScript', color: '#f7df1e' },
      { name: 'Python', color: '#4b8bbe' },
      { name: 'Java', color: '#b07219' },
      { name: 'C++', color: '#659bd3' },
      { name: 'SQL', color: '#336791' },
    ],
  },
  {
    label: 'Frontend',
    accent: '#a855f7',
    skills: [
      { name: 'React', color: '#61dafb' },
      { name: 'HTML', color: '#e34c26' },
      { name: 'CSS', color: '#1572B6' },
      { name: 'Tailwind', color: '#38bdf8' },
    ],
  },
  {
    label: 'Backend',
    accent: '#22d3ee',
    skills: [
      { name: 'Node.js', color: '#33993D' },
    ],
  },
  {
    label: 'Tools & DevOps',
    accent: '#10b981',
    skills: [
      { name: 'Git', color: '#f05032' },
      { name: 'Docker', color: '#0db7ed' },
      { name: 'Nginx', color: '#009639' },
      { name: 'Linux', color: '#fcc624' },
    ],
  },
];

function Chip({ skill, delay }: { skill: Skill; delay: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '10px 20px',
        borderRadius: '6px',
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(255,255,255,0.04)',
        fontSize: '14px',
        color: '#ccc',
        fontFamily: "'Space Mono', monospace",
        cursor: 'default',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-12px)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'rgba(255,255,255,0.35)';
        el.style.background = 'rgba(255,255,255,0.09)';
        el.style.color = '#fff';
        el.style.transform = 'translateY(-2px) scale(1.03)';
        el.style.boxShadow = '0 6px 24px -6px rgba(0,0,0,0.5)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'rgba(255,255,255,0.1)';
        el.style.background = 'rgba(255,255,255,0.04)';
        el.style.color = '#ccc';
        el.style.transform = 'translateX(0)';
        el.style.boxShadow = 'none';
      }}
    >
      <Dot color={skill.color} />
      {skill.name}
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      style={{
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        background: color,
        flexShrink: 0,
        display: 'inline-block',
        animation: 'tsDotPulse 2.5s ease-in-out infinite',
      }}
    />
  );
}

export default function TechStack() {
  const scanRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        @keyframes tsDotPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.55; transform: scale(0.75); }
        }
      `}</style>

      <div
        style={{
          background: '#0a0a0a',
          padding: '2.5rem 3rem 4rem 3rem',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Space Mono', monospace",
        }}
      >

        {/* Watermark */}
        <div
          style={{
            position: 'absolute',
            top: '-10px',
            right: '-8px',
            fontSize: '120px',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.025)',
            letterSpacing: '-6px',
            pointerEvents: 'none',
            lineHeight: 1,
          }}
        >
          SKILLS
        </div>

        {SECTIONS.map((section, si) => (
          <div key={section.label} style={{ marginBottom: si < SECTIONS.length - 1 ? '2rem' : 0 }}>
            {/* Section header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '24px',
                  height: '2px',
                  borderRadius: '2px',
                  background: section.accent,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#888',
                }}
              >
                {section.label}
              </span>
              <div
                style={{
                  height: '1px',
                  flex: 1,
                  background: 'linear-gradient(to right, rgba(255,255,255,0.12), transparent)',
                }}
              />
            </div>

            {/* Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {section.skills.map((skill, i) => (
                <Chip
                  key={skill.name}
                  skill={skill}
                  delay={si * 300 + 100 + i * 70}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
