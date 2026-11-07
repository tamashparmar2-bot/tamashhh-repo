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
          I am yashfx
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
            yashfx was forged with a single belief: that design has the
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
    <section className="py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* LEFT COLUMN: Career Timeline */}
        <div>
          <div className="mb-10 text-left">
            <span className="text-blue-500 text-xs tracking-[0.3em] uppercase font-inter font-semibold">
              EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-podium text-white mt-1">
              Professional Timeline
            </h2>
          </div>
          
          <div className="relative border-l border-white/10 pl-6 space-y-8 ml-2">
            {career.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-zinc-950" />
                
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
                  {m.year}
                </span>
                <p className="text-white/60 text-sm mt-1 leading-relaxed">
                  {m.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Education Timeline */}
        <div>
          <div className="mb-10 text-left">
            <span className="text-red-500 text-xs tracking-[0.3em] uppercase font-inter font-semibold">
              ACADEMICS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-podium text-white mt-1">
              Education Details
            </h2>
          </div>

          <div className="relative border-l border-white/10 pl-6 space-y-8 ml-2">
            {education.map((edu, i) => (
              <motion.div
                key={edu.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-red-500 border-4 border-zinc-950" />

                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs uppercase tracking-widest text-red-400 font-semibold font-mono">
                    {edu.year}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/40 font-mono font-semibold">
                    {edu.school}
                  </span>
                </div>
                <h4 className="text-white font-bold text-base mt-2">
                  {edu.degree}
                </h4>
                <p className="text-white/50 text-sm mt-1 leading-relaxed">
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
   5 — CREATOR PROFILE (REPLACES TEAM)
   ═══════════════════════════════════════════════════════════════════════ */
function TeamSection() {
  return (
    <section className="py-24 bg-dark-50 px-6 sm:px-10 lg:px-16">
      <SectionHeader
        label="THE CREATOR"
        title="Behind yashfx"
        subtitle="The designer, editor, and educator behind every pixel and frame."
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT: Portrait Image with premium border frame */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group w-full max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/5 transition-transform duration-500 hover:scale-[1.02] hover:border-white/20">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500 -z-10" />
            
            <img
              src="/creator-profile.jpg"
              alt="Yashraj Parmar Portrait"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* RIGHT: Bio & Social Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="glass-card p-8 sm:p-10 relative overflow-hidden h-full flex flex-col justify-center">
            {/* Decorative background glow */}
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-red-500/5 blur-2xl pointer-events-none" />

            <span className="text-blue-400 text-xs tracking-widest uppercase font-semibold mb-2 block">
              Founder & Solo Creator
            </span>
            <h3 className="text-white font-bold font-podium text-3xl sm:text-4xl mb-4">
              Yashraj Parmar
            </h3>
            
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Hi! I&rsquo;m Yashraj, a multi-disciplinary creator specializing in brand identity design, high-end video editing, and motion graphics. With years of experience working with global clients, I help businesses elevate their aesthetics and tell stories that resonate. I also run online bootcamps and share creative resources to empower the next generation of designers and editors.
            </p>

            <div className="gradient-line my-6 opacity-30" />

            {/* Social Icons row */}
            <div className="flex gap-4">
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
