"use client";

import { motion } from "framer-motion";
import { iosSnappySpring } from "./AnimationProvider";

const skills = [
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Python", level: 65, category: "backend" },
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "OpenAI API", level: 80, category: "ai" },
  { name: "Supabase", level: 75, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "Vercel", level: 80, category: "tools" },
  { name: "Linux", level: 70, category: "tools" },
  { name: "Zustand", level: 75, category: "frontend" },
];

const categoryColors: Record<string, string> = {
  frontend: "#6366f1",
  backend: "#8b5cf6",
  tools: "#06b6d4",
  ai: "#f59e0b",
};

export default function SkillsCard() {
  return (
    <motion.div
      className="card p-7"
      whileHover={{ scale: 1.005 }}
      transition={iosSnappySpring}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚡</span>
          <h2 className="text-sm font-semibold text-muted uppercase tracking-wider">Tech Arsenal</h2>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-dim">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: "#6366f1" }} />Frontend</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: "#8b5cf6" }} />Backend</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: "#06b6d4" }} />Tools</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b" }} />AI</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...iosSnappySpring, delay: i * 0.03 }}
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.92 }}
            className="relative p-3 rounded-xl bg-surface-2 border border-border overflow-hidden cursor-default group"
          >
            {/* Skill level bar */}
            <div className="absolute bottom-0 left-0 h-[3px] rounded-full transition-all duration-500 group-hover:h-[4px]" style={{ width: `${skill.level}%`, background: categoryColors[skill.category] }} />
            <p className="text-xs font-medium text-main">{skill.name}</p>
            <p className="text-[10px] text-dim mt-0.5">{skill.level}%</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
