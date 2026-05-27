"use client";

import { motion } from "framer-motion";
import { iosSnappySpring, iosSoftSpring } from "./AnimationProvider";

const stats = [
  { value: "3", label: "Live Products", icon: "🚀", suffix: "+" },
  { value: "3.4", label: "GPA / 4.0", icon: "🎓", suffix: "" },
  { value: "1", label: "Internship", icon: "💼", suffix: "" },
  { value: "∞", label: "Curiosity", icon: "⚡", suffix: "" },
];

export default function StatsCard() {
  return (
    <motion.div
      className="card p-6 h-full"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={iosSnappySpring}
    >
      <div className="flex items-center gap-2 mb-5">
        <span className="text-lg">📊</span>
        <h2 className="text-sm font-semibold text-muted uppercase tracking-wider">At a Glance</h2>
      </div>

      <div className="space-y-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...iosSoftSpring, delay: 0.2 + i * 0.1 }}
            whileHover={{ x: 4, scale: 1.03 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-surface-2 border border-border cursor-default"
          >
            <motion.span
              className="text-xl"
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={iosSnappySpring}
            >
              {stat.icon}
            </motion.span>
            <div className="flex-1">
              <p className="text-xs text-dim uppercase tracking-wide">{stat.label}</p>
            </div>
            <p className="text-xl font-bold gradient-text">{stat.value}{stat.suffix}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
