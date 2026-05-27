"use client";

import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import HeroSection from "@/components/HeroSection";
import AboutCard from "@/components/AboutCard";
import StatsCard from "@/components/StatsCard";
import SkillsCard from "@/components/SkillsCard";
import ProjectsCard from "@/components/ProjectsCard";
import ExperienceCard from "@/components/ExperienceCard";
import ContactCard from "@/components/ContactCard";
import { iosSoftSpring, iosSnappySpring } from "@/components/AnimationProvider";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  initial: { opacity: 0, y: 40, scale: 0.95, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: iosSoftSpring,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={iosSnappySpring}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        style={{ background: "color-mix(in srgb, var(--theme-bg) 80%, transparent)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.span
            className="text-lg font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={iosSnappySpring}
          >
            Portfolio
          </motion.span>
          <div className="flex items-center gap-5">
            {["About", "Projects", "Experience", "Contact"].map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...iosSnappySpring, delay: 0.1 + i * 0.05 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm text-muted hover:text-main transition-colors hidden md:block"
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={iosSnappySpring}
              className="hidden sm:flex px-4 py-2 rounded-lg text-xs font-semibold text-white items-center gap-1.5"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Resume
            </motion.a>
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <HeroSection />

      {/* Main Content */}
      <div className="px-4 md:px-8 lg:px-12 max-w-6xl mx-auto pb-20">
        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/* About Card - spans 2 cols */}
          <motion.div variants={item} className="lg:col-span-2" id="about">
            <AboutCard />
          </motion.div>

          {/* Stats Card */}
          <motion.div variants={item}>
            <StatsCard />
          </motion.div>

          {/* Skills Card - full width */}
          <motion.div variants={item} className="md:col-span-2 lg:col-span-3">
            <SkillsCard />
          </motion.div>

          {/* Projects Card - full width */}
          <motion.div variants={item} className="md:col-span-2 lg:col-span-3" id="projects">
            <ProjectsCard />
          </motion.div>

          {/* Experience Card - spans 2 cols */}
          <motion.div variants={item} className="lg:col-span-2" id="experience">
            <ExperienceCard />
          </motion.div>

          {/* Contact Card */}
          <motion.div variants={item} id="contact">
            <ContactCard />
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-dim border-t border-border">
        <p>© 2025 Aditya Sharma · Built with Next.js, Tailwind CSS & Framer Motion</p>
      </footer>
    </main>
  );
}
