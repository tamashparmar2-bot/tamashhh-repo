import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { IconInstagram, IconTwitterX, IconLinkedin } from "../components/SocialIcons";

/* ──────────────────────── animation helpers ──────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ──────────────────────── SectionHeader ──────────────────────── */
function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="text-blue-500 text-xs tracking-[0.3em] uppercase font-inter">
        {label}
      </span>
      <h2 className="gradient-text-h text-3xl sm:text-4xl lg:text-5xl font-bold font-podium mt-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/50 max-w-xl mx-auto mt-4 text-sm sm:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   1 — HERO BANNER
   ═══════════════════════════════════════════════════════════════════════ */
function HeroBanner() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* decorative orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-red-600/15 blur-3xl pointer-events-none translate-x-1/2" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 sm:px-10 lg:px-16"
      >
        <motion.span
          variants={fadeUp}
          className="text-blue-500 text-xs tracking-[0.3em] uppercase font-inter"
        >
          ABOUT ME
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-h font-podium mt-4"
        >
          I am Tamashhh
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-white/60 max-w-2xl mx-auto mt-6 text-sm sm:text-base leading-relaxed"
        >
          A creative designer, video editor, and educator who crafts digital
          experiences that leave lasting impressions. I don&rsquo;t just build
          brands — I forge legacies.
        </motion.p>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   2 — STORY SECTION
   ═══════════════════════════════════════════════════════════════════════ */
function StorySection() {
  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* left — copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white font-podium leading-tight mb-6">
            Born from a passion for exceptional craft
          </h2>
          <p className="text-white/60 leading-relaxed mb-4">
            Tamashhh was forged with a single belief: that design has the
            power to reshape industries. What began as a personal creative
            passion quickly grew into a full-service brand trusted by clients
            who refuse to settle for ordinary.
          </p>
          <p className="text-white/60 leading-relaxed">
            Every pixel I push, every frame I cut, and every lesson I teach
            is rooted in obsessive attention to detail and an unyielding
            commitment to my clients&rsquo; success. I don&rsquo;t chase
            trends — I set them.
          </p>
        </motion.div>

        {/* right — accent card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="glass-card gradient-border p-12 text-center w-64 h-64 flex flex-col items-center justify-center">
            <span className="text-6xl font-bold gradient-text font-podium">
              2021
            </span>
            <span className="text-white/40 text-xs tracking-widest uppercase mt-3 font-inter">
              Founded
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   3 — MISSION / VISION / VALUES
   ═══════════════════════════════════════════════════════════════════════ */
function MissionVisionValues() {
  const cards = [
    {
      Icon: Target,
      color: "#3b82f6",
      title: "My Mission",
      desc: "To empower brands with design that speaks — visuals that resonate, narratives that captivate, and experiences that convert.",
    },
    {
      Icon: Eye,
      color: "#8b5cf6",
      title: "My Vision",
      desc: "To be a leading creative force, known for pushing boundaries and redefining what's possible in digital craft.",
    },
    {
      Icon: Heart,
      color: "#ef4444",
      title: "My Values",
      desc: "Craft, integrity, and relentless innovation. I hold myself to an uncompromising standard because my clients deserve nothing less.",
    },
  ];

  return (
    <section className="py-24 bg-dark-50 px-6 sm:px-10 lg:px-16">
      <SectionHeader
        label="MY FOUNDATION"
        title="What drives me"
        subtitle="The principles that guide every project, pixel, and partnership."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card p-8 text-center"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: `linear-gradient(135deg, ${c.color}33, ${c.color}11)`,
              }}
            >
              <c.Icon className="w-5 h-5" style={{ color: c.color }} />
            </div>
            <h3 className="text-xl font-bold text-white font-podium mb-3">
              {c.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   4 — TIMELINE
   ═══════════════════════════════════════════════════════════════════════ */
function Timeline() {
  const milestones = [
    { year: "2021", text: "Started Tamashhh with a vision to redefine creative excellence." },
    { year: "2022", text: "Crossed 50+ projects, earning the trust of clients across industries." },
    { year: "2023", text: "Launched online courses, empowering creators worldwide." },
    { year: "2024", text: "Expanded to full-service creative offerings with design, editing, and education." },
  ];

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16">
      <SectionHeader label="MY JOURNEY" title="The timeline" />

      <div className="relative max-w-4xl mx-auto">
        {/* center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 -translate-x-1/2 hidden md:block" />

        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex md:items-center mb-12 last:mb-0 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* card */}
              <div
                className={`glass-card p-6 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                }`}
              >
                <span className="text-2xl font-bold gradient-text font-podium">
                  {m.year}
                </span>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">
                  {m.text}
                </p>
              </div>

              {/* dot on center line */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-red-500 border-4 border-dark hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   5 — CREATOR PROFILE (REPLACES TEAM)
   ═══════════════════════════════════════════════════════════════════════ */
function TeamSection() {
  return (
    <section className="py-24 bg-dark-50 px-6 sm:px-10 lg:px-16">
      <SectionHeader
        label="THE CREATOR"
        title="Behind Tamashhh"
        subtitle="The designer, editor, and educator behind every pixel and frame."
      />

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 sm:p-12 text-center group relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-blue-500/10 blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-red-500/10 blur-2xl pointer-events-none group-hover:bg-red-500/20 transition-colors duration-500" />

          {/* Avatar */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:scale-105 shadow-xl shadow-purple-500/10">
            <span className="text-3xl font-bold text-white font-podium">
              TP
            </span>
          </div>

          <h3 className="text-white font-bold font-podium text-2xl">
            Tamash Parmar
          </h3>
          <p className="text-blue-400 text-xs tracking-widest uppercase font-semibold mt-2 mb-6">
            Founder & Solo Creator
          </p>

          <p className="text-white/60 text-sm leading-relaxed max-w-lg mx-auto mb-8">
            Hi! I&rsquo;m Tamash, a multi-disciplinary creator specializing in brand identity design, high-end video editing, and motion graphics. With years of experience working with global clients, I help businesses elevate their aesthetics and tell stories that resonate. I also run online bootcamps and share creative resources to empower the next generation of designers and editors.
          </p>

          {/* social icons */}
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 border border-white/10 group"
              aria-label="Twitter"
            >
              <IconTwitterX className="w-4 h-4 text-white/60 group-hover:text-white" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 border border-white/10 group"
              aria-label="LinkedIn"
            >
              <IconLinkedin className="w-4 h-4 text-white/60 group-hover:text-white" />
            </a>
            <a
              href="https://instagram.com/shy_yshrj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 border border-white/10 group"
              aria-label="Instagram"
            >
              <IconInstagram className="w-4 h-4 text-white/60 group-hover:text-white" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   6 — CTA BANNER
   ═══════════════════════════════════════════════════════════════════════ */
function CtaBanner() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="text-3xl sm:text-5xl font-bold gradient-text-h font-podium">
          Want to work with me?
        </h2>
        <p className="text-white/50 max-w-md mx-auto mt-4 text-sm sm:text-base">
          I&rsquo;m always looking for ambitious projects and creative partnerships. Let&rsquo;s create something remarkable.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="btn-gradient inline-flex items-center gap-2"
          >
            GET IN TOUCH
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            to="/portfolio"
            className="btn-outline inline-flex items-center gap-2"
          >
            SEE MY WORK
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════════ */
export default function About() {
  return (
    <main className="bg-dark text-white overflow-x-hidden">
      <HeroBanner />
      <StorySection />
      <MissionVisionValues />
      <Timeline />
      <TeamSection />
      <CtaBanner />
    </main>
  );
}
