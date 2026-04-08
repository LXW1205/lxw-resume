'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

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
    ],
  },
  {
    label: 'Frontend',
    accent: '#a855f7',
    skills: [
      { name: 'React', color: '#61dafb' },
      { name: 'HTML5', color: '#e34c26' },
      { name: 'CSS3', color: '#1572B6' },
      { name: 'Tailwind CSS', color: '#38bdf8' },
    ],
  },
  {
    label: 'Backend',
    accent: '#22d3ee',
    skills: [
      { name: 'Java', color: '#b07219' },
      { name: 'Node.js', color: '#33993D' },
      { name: 'Express.js', color: '#888888' },
    ],
  },
  {
    label: 'Database',
    accent: '#f59e0b',
    skills: [
      { name: 'SQL', color: '#336791' },
      { name: 'PostgreSQL', color: '#336791' },
    ],
  },
  {
    label: 'Design',
    accent: '#ec4899',
    skills: [
      { name: 'Figma', color: '#a259ff' },
      { name: 'Canva', color: '#00C4CC' },
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
  {
    label: 'Cloud & Deployment',
    accent: '#3b82f6',
    skills: [
      { name: 'Render', color: '#46E3B7' },
      { name: 'Vercel', color: '#ffffff' },
    ],
  },
];

function Chip({ skill, delay, isDarkMode }: { skill: Skill; delay: number; isDarkMode: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const defaultBorder = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)';
  const defaultBg = isDarkMode ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)';
  const defaultText = isDarkMode ? '#ccc' : '#666';

  const hoverBorder = isDarkMode ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.3)';
  const hoverBg = isDarkMode ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.06)';
  const hoverText = isDarkMode ? '#fff' : '#000';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        padding: '9px 18px',
        borderRadius: '6px',
        border: `1px solid ${defaultBorder}`,
        background: defaultBg,
        fontSize: '13px',
        color: defaultText,
        fontFamily: "'Space Mono', monospace",
        cursor: 'default',
        transition: 'opacity 0.35s ease, transform 0.35s ease, border-color 0.35s ease, background-color 0.35s ease, color 0.35s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-12px)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = hoverBorder;
        el.style.background = hoverBg;
        el.style.color = hoverText;
        el.style.transform = 'translateY(-2px) scale(1.03)';
        el.style.boxShadow = isDarkMode ? '0 6px 24px -6px rgba(0,0,0,0.5)' : '0 6px 24px -6px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = defaultBorder;
        el.style.background = defaultBg;
        el.style.color = defaultText;
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
        width: '9px',
        height: '9px',
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
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
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
          position: 'relative',
          paddingBottom: '2rem',
          fontFamily: "'Space Mono', monospace",
        }}
      >

        {SECTIONS.map((section, si) => (
          <div key={section.label} style={{ marginBottom: si < SECTIONS.length - 1 ? '2rem' : 0 }}>
            {/* Section header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '20px',
                  height: '2px',
                  borderRadius: '2px',
                  background: section.accent,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: isDarkMode ? '#888' : '#777',
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
                  delay={si * 200 + 100 + i * 50}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
