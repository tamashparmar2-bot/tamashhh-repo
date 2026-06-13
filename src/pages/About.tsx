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
          ABOUT US
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-h font-podium mt-4"
        >
          We are Obsidian Studio
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-white/60 max-w-2xl mx-auto mt-6 text-sm sm:text-base leading-relaxed"
        >
          A collective of designers, editors, and educators who craft digital
          experiences that leave lasting impressions. We don&rsquo;t just build
          brands — we forge legacies.
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
            Obsidian Studio was forged with a single belief: that design has the
            power to reshape industries. What began as a small creative
            experiment quickly grew into a full-service studio trusted by brands
            that refuse to settle for ordinary.
          </p>
          <p className="text-white/60 leading-relaxed">
            Every pixel we push, every frame we cut, and every lesson we teach
            is rooted in obsessive attention to detail and an unyielding
            commitment to our clients&rsquo; success. We don&rsquo;t chase
            trends — we set them.
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
      title: "Our Mission",
      desc: "To empower brands with design that speaks — visuals that resonate, narratives that captivate, and experiences that convert.",
    },
    {
      Icon: Eye,
      color: "#8b5cf6",
      title: "Our Vision",
      desc: "To become the most sought-after creative collective, known for pushing boundaries and redefining what's possible in digital craft.",
    },
    {
      Icon: Heart,
      color: "#ef4444",
      title: "Our Values",
      desc: "Craft, integrity, and relentless innovation. We hold ourselves to an uncompromising standard because our clients deserve nothing less.",
    },
  ];

  return (
    <section className="py-24 bg-dark-50 px-6 sm:px-10 lg:px-16">
      <SectionHeader
        label="OUR FOUNDATION"
        title="What drives us"
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
    { year: "2021", text: "Founded Obsidian Studio with a vision to redefine creative excellence." },
    { year: "2022", text: "Crossed 50+ projects, earning the trust of brands across industries." },
    { year: "2023", text: "Launched online courses, empowering creators worldwide." },
    { year: "2024", text: "Expanded to a full-service agency with design, editing, and education." },
  ];

  return (
    <section className="py-24 px-6 sm:px-10 lg:px-16">
      <SectionHeader label="OUR JOURNEY" title="The timeline" />

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
   5 — TEAM
   ═══════════════════════════════════════════════════════════════════════ */
function TeamSection() {
  const team = [
    { name: "Yashrajsinh Parmar", role: "Founder & Creative Director", initials: "YP" },
    { name: "Arjun Kapoor", role: "Lead Designer", initials: "AK" },
    { name: "Neha Reddy", role: "Video Editor", initials: "NR" },
    { name: "Sahil Mehta", role: "Instructor", initials: "SM" },
  ];

  return (
    <section className="py-24 bg-dark-50 px-6 sm:px-10 lg:px-16">
      <SectionHeader
        label="THE TEAM"
        title="Meet the Creators"
        subtitle="Talented individuals united by a passion for craft and an obsession with quality."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card p-8 text-center group"
          >
            {/* avatar */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
              <span className="text-xl font-bold text-white font-podium">
                {t.initials}
              </span>
            </div>

            <h3 className="text-white font-bold font-podium text-lg">
              {t.name}
            </h3>
            <p className="text-white/50 text-sm mt-1 mb-5">{t.role}</p>

            {/* social icons */}
            <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <IconTwitterX className="w-3.5 h-3.5 text-white/60" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <IconLinkedin className="w-3.5 h-3.5 text-white/60" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <IconInstagram className="w-3.5 h-3.5 text-white/60" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   CTA BANNER
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
          Want to work with us?
        </h2>
        <p className="text-white/50 max-w-md mx-auto mt-4 text-sm sm:text-base">
          We&rsquo;re always looking for ambitious brands and talented
          collaborators. Let&rsquo;s create something remarkable.
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
            SEE OUR WORK
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
