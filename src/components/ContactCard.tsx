"use client";

import { motion } from "framer-motion";
import { iosSnappySpring, iosSoftSpring } from "./AnimationProvider";

const contacts = [
  {
    label: "Email",
    value: "sharmaditya011@gmail.com",
    href: "mailto:sharmaditya011@gmail.com",
    icon: "✉️",
  },
  {
    label: "Phone",
    value: "+91 9125251164",
    href: "tel:+919125251164",
    icon: "📱",
  },
  {
    label: "LinkedIn",
    value: "/in/adityasharma0147",
    href: "https://www.linkedin.com/in/adityasharma0147/",
    icon: "💼",
  },
  {
    label: "GitHub",
    value: "Adittyyaa",
    href: "https://github.com/Adittyyaa",
    icon: "💻",
  },
];

export default function ContactCard() {
  return (
    <motion.div
      className="card p-6 h-full flex flex-col"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={iosSnappySpring}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">💬</span>
        <h2 className="text-sm font-semibold text-muted uppercase tracking-wider">Let&apos;s Talk</h2>
      </div>

      <p className="text-xs text-dim mb-4 leading-relaxed">
        Looking for a developer who ships? Let&apos;s connect. I respond within 24 hours.
      </p>

      <div className="space-y-2 flex-1">
        {contacts.map((contact, i) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...iosSoftSpring, delay: 0.2 + i * 0.08 }}
            whileHover={{ x: 5, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 p-2.5 rounded-lg bg-surface-2 border border-border hover:border-indigo-500/30 transition-colors group"
          >
            <span className="text-base">{contact.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-dim uppercase tracking-wider">{contact.label}</p>
              <p className="text-xs text-muted group-hover:text-indigo-500 transition-colors truncate font-medium">
                {contact.value}
              </p>
            </div>
            <svg className="w-3 h-3 text-dim group-hover:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </motion.a>
        ))}
      </div>

      <motion.a
        href="mailto:sharmaditya011@gmail.com"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={iosSnappySpring}
        className="mt-4 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white shadow-lg shadow-indigo-500/20"
        style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
      >
        Hire Me 🚀
      </motion.a>
    </motion.div>
  );
}
