"use client";

import { motion } from "framer-motion";
import { iosSnappySpring, iosSoftSpring } from "./AnimationProvider";

const experiences = [
  {
    role: "PostgreSQL Database Engineer",
    company: "PV Advisory",
    period: "May 2026 – Present",
    type: "Internship · Hybrid",
    location: "Gurugram, Haryana",
    description: "Managing and optimizing PostgreSQL databases for advisory operations.",
    tech: ["PostgreSQL", "Database Design"],
    icon: "💼",
    current: true,
  },
  {
    role: "Technical Lead",
    company: "Student Welfare Office (SWO)",
    period: "Jul 2025 – Present",
    type: "Part-time · On-site",
    location: "Christ University, Ghaziabad",
    description: "Leading a team of developers, managing technical infrastructure and digital initiatives.",
    tech: ["Leadership", "Team Management", "Strategy"],
    icon: "🎯",
    current: true,
  },
  {
    role: "Hackathon Finalist",
    company: "Mastery Union",
    period: "Mar 2026",
    type: "Competition",
    location: "Gurugram, Haryana",
    description: "Built and iterated on a React app in a time-constrained environment. Improved usability by ~20% through peer feedback.",
    tech: ["React", "JavaScript", "Rapid Prototyping"],
    icon: "🏆",
  },
];

export default function ExperienceCard() {
  return (
    <motion.div
      className="card p-7 h-full"
      whileHover={{ scale: 1.005 }}
      transition={iosSnappySpring}
    >
      <div className="flex items-center gap-2 mb-6">
        <span className="text-lg">🚀</span>
        <h2 className="text-sm font-semibold text-muted uppercase tracking-wider">Experience & Education</h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-[2px] rounded-full" style={{ background: "linear-gradient(to bottom, #6366f1, #8b5cf6, transparent)" }} />

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...iosSoftSpring, delay: i * 0.12 }}
              whileHover={{ x: 6 }}
              className="relative pl-8 group cursor-default"
            >
              {/* Timeline dot */}
              <div className={`absolute left-[6px] top-1.5 w-3 h-3 rounded-full border-2 ${exp.current ? "bg-indigo-500 border-indigo-500 shadow-lg shadow-indigo-500/50" : "bg-surface-2 border-border group-hover:border-indigo-500"} transition-colors`} />

              <div className="p-4 rounded-xl bg-surface-2 border border-border hover:border-indigo-500/30 transition-colors">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="text-sm font-bold text-main">{exp.role}</h3>
                    <p className="text-xs text-indigo-500 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] font-mono text-dim block">{exp.period}</span>
                    {exp.current && <span className="text-[9px] font-semibold text-green-500">● Active</span>}
                  </div>
                </div>
                <p className="text-xs text-dim mb-2">{exp.description}</p>
                <div className="flex flex-wrap gap-1">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] rounded-md text-indigo-500 border border-indigo-500/20 font-medium" style={{ background: "rgba(99,102,241,0.08)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <motion.div
        className="mt-6 p-4 rounded-xl border-2 border-dashed border-border hover:border-indigo-500/30 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...iosSoftSpring, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-3">
          <motion.span
            className="text-2xl"
            whileHover={{ scale: 1.2, rotate: -5 }}
            transition={iosSnappySpring}
          >
            🎓
          </motion.span>
          <div>
            <h3 className="text-sm font-bold text-main">Bachelor of Computer Applications</h3>
            <p className="text-xs text-dim">Christ University, Delhi NCR · 2024 – 2027</p>
            <p className="text-xs text-indigo-500 font-semibold mt-1">GPA: 3.4 / 4.0 — First Class</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
