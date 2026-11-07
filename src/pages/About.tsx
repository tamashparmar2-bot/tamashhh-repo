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
  hidden: { opacity: 0, y: 24 },
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="text-blue-600 text-xs tracking-[0.25em] uppercase font-inter font-bold">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-podium text-slate-900 mt-2 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 max-w-xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
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
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/50 border-b border-slate-100">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none -translate-x-1/2" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto"
      >
        <motion.span
          variants={fadeUp}
          className="text-blue-600 text-xs tracking-[0.25em] uppercase font-inter font-bold inline-block mb-3"
        >
          ABOUT ME
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-podium text-slate-900 tracking-tight"
        >
          I am yashfx
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-slate-600 max-w-2xl mx-auto mt-4 text-base sm:text-lg leading-relaxed font-normal"
        >
          A creative designer, high-end video editor, and vibe coder crafting digital
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
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* left — copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 text-xs tracking-widest uppercase font-bold block mb-2">MY PHILOSOPHY</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-podium leading-tight mb-6">
            Born from a passion for exceptional craft
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-base">
            yashfx was forged with a single belief: that design has the
            power to reshape industries. What began as a personal creative
            passion quickly grew into a full-service brand trusted by clients
            who refuse to settle for ordinary.
          </p>
          <p className="text-slate-600 leading-relaxed text-base">
            Every pixel I push, every frame I cut, and every app I deploy
            is rooted in obsessive attention to detail and an unyielding
            commitment to my clients&rsquo; success. I don&rsquo;t chase
            trends — I set them.
          </p>
        </motion.div>

        {/* right — accent card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="glass-card p-12 text-center w-72 h-72 flex flex-col items-center justify-center bg-white border border-slate-200/90 shadow-xl shadow-blue-500/5 rounded-3xl">
            <span className="text-7xl font-bold text-blue-600 font-podium">
              2021
            </span>
            <span className="text-slate-500 text-xs tracking-widest uppercase mt-3 font-inter font-bold">
              Year Founded
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
      title: "My Mission",
      desc: "To empower brands with design that speaks — visuals that resonate, narratives that captivate, and experiences that convert.",
    },
    {
      Icon: Eye,
      title: "My Vision",
      desc: "To be a leading creative force, known for pushing boundaries and redefining what's possible in digital craft.",
    },
    {
      Icon: Heart,
      title: "My Values",
      desc: "Craft, integrity, and relentless innovation. I hold myself to an uncompromising standard because my clients deserve nothing less.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/70 border-y border-slate-200/80 px-6 sm:px-10 lg:px-16">
      <SectionHeader
        label="MY FOUNDATION"
        title="What drives me"
        subtitle="The principles that guide every project, pixel, and partnership."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8 sm:p-10 text-center bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 rounded-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
              <c.Icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-podium mb-3">
              {c.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
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
  const career = [
    { year: "2021", text: "Started yashfx with a vision to redefine creative excellence." },
    { year: "2022", text: "Crossed 50+ projects, earning the trust of clients across industries." },
    { year: "2023", text: "Pivoted to Vibe Coding, pioneering live speed-development." },
    { year: "2024", text: "Expanded to full-service creative offerings with design, editing, and engineering." },
  ];

  const education = [
    { year: "2023", degree: "B.Com Degree", school: "Sardar Patel University (SPU)", desc: "Graduated with a Bachelor of Commerce, building a solid foundation in business operations, economics, and marketing." },
    { year: "2025", degree: "Animation & VFX Program", school: "Arena Animation", desc: "Completed training in visual effects, motion design, video editing, color theory, and digital asset rendering." },
    { year: "Present", degree: "MBA Program", school: "CVM University (CVMU)", desc: "Currently pursuing a Master of Business Administration to merge management strategy with creative direction." },
  ];

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* LEFT COLUMN: Career Timeline */}
        <div>
          <div className="mb-10 text-left">
            <span className="text-blue-600 text-xs tracking-[0.25em] uppercase font-inter font-bold">
              EXPERIENCE
            </span>
            <h2 className="text-3xl font-bold font-podium text-slate-900 mt-1">
              Professional Timeline
            </h2>
          </div>
          
          <div className="relative border-l-2 border-slate-200 pl-6 space-y-8 ml-2">
            {career.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white shadow-sm" />
                
                <span className="text-xs uppercase tracking-widest text-blue-600 font-bold font-mono">
                  {m.year}
                </span>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  {m.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Education Timeline */}
        <div>
          <div className="mb-10 text-left">
            <span className="text-blue-600 text-xs tracking-[0.25em] uppercase font-inter font-bold">
              ACADEMICS
            </span>
            <h2 className="text-3xl font-bold font-podium text-slate-900 mt-1">
              Education Details
            </h2>
          </div>

          <div className="relative border-l-2 border-slate-200 pl-6 space-y-8 ml-2">
            {education.map((edu, i) => (
              <motion.div
                key={edu.year}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white shadow-sm" />

                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs uppercase tracking-widest text-blue-600 font-bold font-mono">
                    {edu.year}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold font-mono">
                    {edu.school}
                  </span>
                </div>
                <h4 className="text-slate-900 font-bold text-base mt-2">
                  {edu.degree}
                </h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  {edu.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   5 — CREATOR PROFILE
   ═══════════════════════════════════════════════════════════════════════ */
function TeamSection() {
  return (
    <section className="py-24 bg-slate-50/70 border-t border-slate-200/80 px-6 sm:px-10 lg:px-16">
      <SectionHeader
        label="THE CREATOR"
        title="Behind yashfx"
        subtitle="The designer, editor, and vibe coder behind every pixel and frame."
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT: Portrait Image with sleek frame */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/60 transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/creator-profile.jpg"
              alt="Yashraj Parmar Portrait"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* RIGHT: Bio & Social Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="glass-card p-8 sm:p-10 relative overflow-hidden bg-white border border-slate-200/90 shadow-md shadow-slate-200/40 rounded-2xl">
            <span className="text-blue-600 text-xs tracking-widest uppercase font-bold mb-2 block">
              Founder & Solo Creator
            </span>
            <h3 className="text-slate-900 font-bold font-podium text-3xl sm:text-4xl mb-4">
              Yashraj Parmar
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Hi! I&rsquo;m Yashraj, a multi-disciplinary creator specializing in brand identity design, high-end video editing, and modern vibe coding web applications. With years of experience working with global clients, I help businesses elevate their aesthetics and tell stories that convert and resonate.
            </p>

            <div className="h-px bg-slate-200 my-6" />

            {/* Social Icons row */}
            <div className="flex gap-3">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-50 flex items-center justify-center transition-all duration-200 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600"
                aria-label="Twitter"
              >
                <IconTwitterX className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-50 flex items-center justify-center transition-all duration-200 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600"
                aria-label="LinkedIn"
              >
                <IconLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/shy_yshrj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-50 flex items-center justify-center transition-all duration-200 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600"
                aria-label="Instagram"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
            </div>
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
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/50 border-t border-slate-100">
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold font-podium text-slate-900 tracking-tight">
          Want to work with me?
        </h2>
        <p className="text-slate-600 max-w-md mx-auto mt-4 text-base leading-relaxed">
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
    <main className="bg-white text-slate-900 overflow-x-hidden">
      <HeroBanner />
      <StorySection />
      <MissionVisionValues />
      <Timeline />
      <TeamSection />
      <CtaBanner />
    </main>
  );
}
