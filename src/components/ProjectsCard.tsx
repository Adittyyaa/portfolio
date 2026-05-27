"use client";

import { motion } from "framer-motion";
import { iosSnappySpring, iosSoftSpring } from "./AnimationProvider";

const projects = [
  {
    title: "PhysioTrack",
    subtitle: "Patient Management SaaS for Physiotherapists",
    date: "2025",
    tech: ["React 18", "Vite", "Tailwind CSS", "Supabase", "Zustand", "Netlify"],
    points: [
      "Mobile-first healthcare SaaS with full patient profiles, appointment scheduling & session logging",
      "Pain tracking (0-10 scale), exercise library by body area, and WhatsApp integration for reminders",
      "Per-user Row Level Security for complete data privacy — used by real clinicians",
    ],
    icon: "🏥",
    link: "https://physiotrack-pati.netlify.app",
    highlight: true,
    metric: "Live in Production",
  },
  {
    title: "BiteHive",
    subtitle: "Canteen Management System",
    date: "Dec 2025 – Present",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    points: [
      "Full-stack multi-outlet canteen platform — browse menus, place orders, receive digital receipts",
      "Real-time order management dashboard for canteen staff across multiple outlets",
      "JWT-based authentication and role-based access control",
    ],
    icon: "🍽️",
    metric: "Multi-outlet",
  },
  {
    title: "EShine",
    subtitle: "AI-Powered Fashion E-Commerce",
    date: "Mar 2025",
    tech: ["React.js", "Node.js", "OpenAI API", "MongoDB"],
    points: [
      "AI-powered outfit recommendations across 5 occasion categories via OpenAI API",
      "Smart cart aggregating AI-recommended items, consolidating 4-6 items into single checkout",
      "100+ SKU catalog with sub-second UI responses on filter changes",
    ],
    icon: "👗",
    link: "https://nextstock-fashion.vercel.app",
    metric: "AI-Powered",
  },
];

export default function ProjectsCard() {
  return (
    <motion.div className="card p-7">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔥</span>
          <h2 className="text-sm font-semibold text-muted uppercase tracking-wider">Featured Projects</h2>
        </div>
        <span className="text-xs text-dim">{projects.length} shipped</span>
      </div>

      <div className="space-y-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...iosSoftSpring, delay: i * 0.12 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={`p-5 rounded-xl bg-surface-2 border transition-colors group cursor-default relative overflow-hidden ${
              project.highlight ? "border-indigo-500/40" : "border-border hover:border-indigo-500/30"
            }`}
          >
            {/* Highlight glow for featured */}
            {project.highlight && (
              <div className="absolute inset-0 opacity-5" style={{ background: "radial-gradient(ellipse at top left, #6366f1, transparent 60%)" }} />
            )}

            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <motion.span
                    className="text-2xl"
                    whileHover={{ scale: 1.3, rotate: -10 }}
                    transition={iosSnappySpring}
                  >
                    {project.icon}
                  </motion.span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-main group-hover:text-indigo-500 transition-colors">
                        {project.title}
                      </h3>
                      {project.highlight && (
                        <span className="px-2 py-0.5 text-[9px] rounded-full font-semibold text-white" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
                          FEATURED
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-dim">{project.subtitle}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] font-mono text-dim block">{project.date}</span>
                  {project.metric && (
                    <span className="text-[10px] font-semibold text-indigo-500">{project.metric}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-1.5 mb-4 ml-9">
                {project.points.map((point, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...iosSnappySpring, delay: 0.2 + j * 0.06 }}
                    className="text-xs text-muted leading-relaxed flex gap-2"
                  >
                    <span className="text-indigo-500 mt-0.5 shrink-0">▸</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-1.5 ml-9">
                {project.tech.map((t, idx) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-0.5 text-[10px] rounded-md text-indigo-500 border border-indigo-500/20 font-medium"
                    style={{ background: "rgba(99,102,241,0.08)" }}
                  >
                    {t}
                  </motion.span>
                ))}
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: 3 }}
                    whileTap={{ scale: 0.9 }}
                    transition={iosSnappySpring}
                    className="ml-auto px-3 py-1 text-[10px] rounded-lg font-semibold text-white flex items-center gap-1"
                    style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                  >
                    Live Demo ↗
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
