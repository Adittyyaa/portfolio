"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { iosSoftSpring, iosSnappySpring } from "./AnimationProvider";

const roles = ["Full-Stack Developer", "MERN Specialist", "AI Integrator", "Problem Solver"];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated aurora background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full aurora-bg opacity-20" style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full aurora-bg opacity-15" style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", animationDelay: "5s" }} />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full aurora-bg opacity-10" style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)", animationDelay: "10s" }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(var(--theme-text) 1px, transparent 1px), linear-gradient(90deg, var(--theme-text) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...iosSoftSpring, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface-2 mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-sm text-muted">Open to work · Seeking Full-Stack Internships</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ...iosSoftSpring, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-4 text-main">
            I build things
            <br />
            <span className="gradient-text">that matter.</span>
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...iosSoftSpring, delay: 0.6 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <span className="text-xl md:text-2xl font-mono text-indigo-500">
            {displayText}
            <span className="cursor-blink text-indigo-400">|</span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...iosSoftSpring, delay: 0.8 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          BCA student at Christ University building production-ready apps with
          <span className="text-main font-medium"> React, Node.js, AI APIs</span> and shipping them to real users.
          3 live projects. 1 internship. Infinite curiosity.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...iosSoftSpring, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={iosSnappySpring}
            className="px-8 py-4 rounded-xl text-white font-semibold text-base shadow-lg shadow-indigo-500/25 flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
          >
            See My Work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </motion.a>
          <motion.a
            href="mailto:sharmaditya011@gmail.com"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={iosSnappySpring}
            className="px-8 py-4 rounded-xl font-semibold text-base border border-border text-muted hover:text-main hover:border-indigo-500/50 transition-colors"
          >
            Hire Me →
          </motion.a>
        </motion.div>

        {/* Quick metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...iosSoftSpring, delay: 1.3 }}
          className="mt-16 flex items-center justify-center gap-8 md:gap-12"
        >
          {[
            { value: "3+", label: "Live Projects" },
            { value: "1500+", label: "Lines Shipped" },
            { value: "100%", label: "Passion" },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">{metric.value}</p>
              <p className="text-xs text-dim uppercase tracking-wider mt-1">{metric.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
