import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Film,
  Box,
  Palette
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
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-podium text-navy-900 mt-2 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 font-space max-w-xl mx-auto mt-4 text-base sm:text-lg leading-relaxed">
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
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/40 border-b border-slate-100">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none -translate-x-1/2" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-blue-700 text-xs tracking-[0.2em] uppercase font-inter font-bold">
            Independent Motion Designer & Editor
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-podium text-navy-900 tracking-tight leading-[0.95]"
        >
          Visuals That Move People.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-slate-600 font-space max-w-2xl mx-auto mt-6 text-base sm:text-lg leading-relaxed font-normal"
        >
          I am Yashraj Parmar, an independent motion designer and commercial video editor. I engineer high-octane commercial cuts, 3D simulations, and kinetic typography that command attention.
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
          <span className="text-blue-600 text-xs tracking-widest uppercase font-bold block mb-2 font-mono">
            CREATIVE ETHOS
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-navy-900 font-podium leading-[0.98] mb-6">
            Framing story through rhythm, light & velocity
          </h2>
          <p className="text-slate-600 font-space leading-relaxed mb-4 text-base sm:text-lg">
            YASHFX was built with a focused vision: motion is not decorative fluff — it is narrative velocity. Every cut is timed to musical transients, and every 3D simulation is grounded in physical weight and lighting.
          </p>
          <p className="text-slate-600 font-space leading-relaxed text-base sm:text-lg">
            From Sony S-Log3 footage grading in DaVinci Resolve to intricate procedural materials in Blender and Cinema 4D, I handle the complete finishing pipeline to guarantee cinematic precision.
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
          <div className="p-12 text-center w-80 h-80 flex flex-col items-center justify-center bg-slate-50 border border-slate-200/90 shadow-xl shadow-blue-500/5 rounded-3xl">
            <span className="text-7xl font-bold text-blue-600 font-podium">
              100%
            </span>
            <span className="text-navy-900 text-sm tracking-widest uppercase mt-2 font-podium font-bold">
              Pure Motion & Video Craft
            </span>
            <p className="text-slate-500 text-xs mt-2 font-space">
              Zero generic presets. Tailored keyframes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   3 — VALUES / PRINCIPLES
   ═══════════════════════════════════════════════════════════════════════ */
function MissionVisionValues() {
  const cards = [
    {
      Icon: Film,
      title: "Cadence & Rhythm",
      desc: "Editing is musical. Every match cut, speed ramp, and sound foley swell is engineered to keep viewers completely locked in.",
    },
    {
      Icon: Box,
      title: "Tactile Realism",
      desc: "3D simulations and procedural textures that feel physically tangible through accurate lighting, micro-dispersions, and camera shake.",
    },
    {
      Icon: Palette,
      title: "Color Science",
      desc: "Strict color management workflows across DaVinci Resolve Studio ensuring vibrant, contrast-rich palettes that pop on any display.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/70 border-y border-slate-200/80 px-6 sm:px-10 lg:px-16">
      <SectionHeader
        label="CORE PILLARS"
        title="Production Standards"
        subtitle="The three principles guiding every single keyframe, cut, and audio transient."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 sm:p-10 text-center bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 rounded-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
              <c.Icon className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 font-podium mb-3">
              {c.title}
            </h3>
            <p className="text-slate-600 font-space text-sm leading-relaxed">{c.desc}</p>
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
    { year: "2021", text: "Founded YASHFX, focusing on commercial video cuts and music video post-production." },
    { year: "2022", text: "Delivered high-octane automotive reels, event master films, and YouTube commercial edits." },
    { year: "2023", text: "Integrated Blender & Cinema 4D 3D simulations for photorealistic commercial product spots." },
    { year: "2024", text: "Refined full-pipeline motion direction: 4K S-Log3 grading, sound foley, and bespoke motion identities." },
  ];

  const education = [
    { year: "2023", degree: "B.Com Degree", school: "Sardar Patel University (SPU)", desc: "Graduated with a Bachelor of Commerce, building a solid foundation in business operations, economics, and marketing." },
    { year: "2025", degree: "Animation & VFX Program", school: "Arena Animation", desc: "Specialized training in visual effects compositing, motion design, video editing, color theory, and digital asset rendering." },
    { year: "Present", degree: "MBA Program", school: "CVM University (CVMU)", desc: "Pursuing Master of Business Administration to align creative motion strategy with brand scaling." },
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
            <h2 className="text-4xl font-bold font-podium text-navy-900 mt-1">
              Creative Milestones
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
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white shadow-sm" />
                <span className="text-xs uppercase tracking-widest text-blue-600 font-bold font-mono">
                  {m.year}
                </span>
                <p className="text-slate-600 font-space text-sm mt-1 leading-relaxed">
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
            <h2 className="text-4xl font-bold font-podium text-navy-900 mt-1">
              Education & VFX Background
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
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white shadow-sm" />

                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs uppercase tracking-widest text-blue-600 font-bold font-mono">
                    {edu.year}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold font-mono">
                    {edu.school}
                  </span>
                </div>
                <h4 className="text-navy-900 font-bold font-space text-base mt-2">
                  {edu.degree}
                </h4>
                <p className="text-slate-600 font-space text-sm mt-1 leading-relaxed">
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
        label="THE ARTIST"
        title="Meet Yashraj Parmar"
        subtitle="Independent Motion Designer & Video Editor based in India, collaborating with clients worldwide."
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT: Portrait Image */}
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
          <div className="p-8 sm:p-10 relative overflow-hidden bg-white border border-slate-200/90 shadow-md shadow-slate-200/40 rounded-2xl">
            <span className="text-blue-600 text-xs tracking-widest uppercase font-bold mb-2 block font-mono">
              Independent Motion Designer & Video Editor
            </span>
            <h3 className="text-navy-900 font-bold font-podium text-3xl sm:text-4xl mb-4">
              Yashraj Parmar
            </h3>
            
            <p className="text-slate-600 font-space text-sm sm:text-base leading-relaxed mb-6">
              I partner with brands, agencies, and content creators looking for world-class motion design, rhythmic commercial video editing, and 3D visual effects. From storyboard to final 4K master, I execute every frame with obsessive precision.
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
                href="https://www.instagram.com/yashhh.img"
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
        <h2 className="text-4xl sm:text-6xl font-bold font-podium text-navy-900 tracking-tight">
          Ready to elevate your visuals?
        </h2>
        <p className="text-slate-600 font-space max-w-md mx-auto mt-4 text-base leading-relaxed">
          Let&apos;s create something remarkable. Cinematic video editing and high-fidelity motion graphics.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="btn-gradient inline-flex items-center gap-2"
          >
            REQUEST A QUOTE
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            to="/portfolio"
            className="btn-outline inline-flex items-center gap-2"
          >
            VIEW PORTFOLIO
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
    <main className="bg-white text-navy-900 overflow-x-hidden">
      <HeroBanner />
      <StorySection />
      <MissionVisionValues />
      <Timeline />
      <TeamSection />
      <CtaBanner />
    </main>
  );
}
