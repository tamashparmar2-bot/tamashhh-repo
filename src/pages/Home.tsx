import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Crown,
  ArrowUpRight,
  Layers,
  Film,
  Code,
  Quote,
  Star,
  Sparkles,
  CheckCircle2,
  Play,
  Volume2
} from "lucide-react";

/* ──────────────────────── animation variants ──────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ──────────────────────── reusable section header ──────────────────────── */
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
   HERO VISUAL ANIMATION COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
/* 5 most-recently-added portfolio videos */
const HERO_VIDEOS = [
  { src: "/portfolio/yps-restroo.mp4",        label: "RESTAURANT BRAND REEL",  tag: "4K" },
  { src: "/portfolio/fronx-car-delivery.mp4", label: "COMMERCIAL // CAR DELIVERY", tag: "60 FPS" },
  { src: "/portfolio/navratri-project.mp4",   label: "EVENT SHOWCASE",         tag: "4K" },
  { src: "/portfolio/dice-animation.mp4",     label: "MOTION DESIGN",          tag: "CGI" },
  { src: "/portfolio/priya-web-promo.mp4",    label: "WEB PROMO",              tag: "CINEMATIC" },
];

function HeroVisual() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const waveformBars = [40, 75, 50, 90, 65, 85, 45, 95, 70, 55, 80, 60, 88, 45, 70, 55];
  const VIDEO_DURATION = 8; // seconds per video before switching

  /* Auto-advance timer & progress bar */
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActiveIdx((i) => (i + 1) % HERO_VIDEOS.length);
          return 0;
        }
        return p + 100 / (VIDEO_DURATION * 20); // 20 ticks/sec
      });
    }, 50);
    return () => clearInterval(interval);
  }, [activeIdx]);

  const current = HERO_VIDEOS[activeIdx];

  return (
    <div className="relative w-full h-full flex flex-col gap-4">

      {/* ── Main Cinematic Video Player ── */}
      <motion.div
        key={activeIdx}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/15 border border-slate-200/80 bg-slate-950 flex-1 min-h-0"
        style={{ aspectRatio: "16/10" }}
      >
        {/* Video */}
        <video
          key={current.src}
          src={current.src}
          autoPlay
          muted
          playsInline
          preload="auto"
          loop
          onLoadedData={(e) => e.currentTarget.play().catch(() => {})}
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay — bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Top bar: macOS dots + live badge */}
        <div className="absolute top-0 inset-x-0 flex items-center justify-between px-4 py-3 bg-black/30 backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
            <span className="text-[10px] font-mono text-white/70 ml-2">yashfx_render.mp4</span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest text-blue-300 bg-blue-900/60 border border-blue-500/40 px-2 py-0.5 rounded-full uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
            </span>
            {current.tag}
          </div>
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-14 left-4 text-[10px] font-mono tracking-widest text-white/80 uppercase bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
          {current.label}
        </div>

        {/* Progress bar + waveform at bottom */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-black/50 backdrop-blur-sm space-y-2">
          {/* Timeline scrub */}
          <div className="relative h-1 w-full bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-none"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Waveform + meta */}
          <div className="flex items-center justify-between">
            <div className="flex items-end gap-0.5 h-4">
              {waveformBars.map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ scaleY: [0.2, 1, 0.3, 0.9, 0.2] }}
                  transition={{ duration: 1.0 + (i % 4) * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.04 }}
                  className="w-0.5 bg-blue-400/80 rounded-full origin-bottom"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-[9px] font-mono text-white/60">
              <span>{activeIdx + 1} / {HERO_VIDEOS.length}</span>
              <span className="text-blue-400">•</span>
              <span>DaVinci LUT</span>
            </div>
          </div>
        </div>

        {/* Floating badge: Color Grading */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-14 right-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-2.5 shadow-xl shadow-blue-500/10 flex items-center gap-2"
        >
          <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-slate-900 leading-tight">Color Grading</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <p className="text-[9px] text-slate-500 font-mono">DaVinci • S-Log3</p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Video Thumbnail Strip ── */}
      <div className="flex gap-2">
        {HERO_VIDEOS.map((v, i) => (
          <button
            key={v.src}
            onClick={() => { setActiveIdx(i); setProgress(0); }}
            className={`relative flex-1 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
              i === activeIdx
                ? "border-blue-500 shadow-lg shadow-blue-500/25"
                : "border-slate-200/80 opacity-60 hover:opacity-90"
            }`}
            style={{ aspectRatio: "16/9" }}
          >
            <video
              src={v.src}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover pointer-events-none"
            />
            {i === activeIdx && (
              <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-blue-600/90 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 text-white fill-current ml-0.5" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* ── Floating chips row ── */}
      <div className="flex items-center gap-2 flex-wrap">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 bg-white border border-slate-200/80 rounded-full px-3 py-1.5 shadow-sm"
        >
          <Code className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-[10px] font-bold text-slate-800 font-mono">Vibe Coding</span>
          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700 font-bold">100%</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="flex items-center gap-2 bg-blue-600 text-white rounded-full px-3 py-1.5 shadow-md shadow-blue-500/30"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-200" />
          <span className="text-[10px] font-bold font-mono">48–72h Sprints</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="flex items-center gap-2 bg-white border border-slate-200/80 rounded-full px-3 py-1.5 shadow-sm"
        >
          <Film className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-[10px] font-bold text-slate-800 font-mono">4K Cinematic</span>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════════════ */
function Hero() {
  const stats = [
    { value: "250+", label: "Brands Transformed" },
    { value: "95%", label: "Client Retention" },
    { value: "10+", label: "Years in the Game" },
  ];

  return (
    <section className="relative min-h-screen flex items-stretch bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50">
      {/* Background Hero Subtle Artwork & Grid */}
      <img
        src="/hero-bg.jpg"
        alt="yashfx Creative Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-right md:object-center opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white pointer-events-none" />

      {/* Decorative Subtle Blue Ambient Glows */}
      <div className="absolute -top-24 right-1/4 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[calc(100vh-160px)]">
          {/* Left Column: Heading, Badge, Subtext, CTAs, Stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full shadow-sm self-start">
              <Crown className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-xs tracking-[0.2em] uppercase font-inter font-bold">
                World-Class Digital Creator
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-podium text-[clamp(3.2rem,7.5vw,6.5rem)] leading-[0.92] text-slate-900 font-bold tracking-tight"
            >
              Design.
              <br />
              <span className="text-blue-600">Disrupt.</span>
              <br />
              Conquer.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-slate-600 max-w-lg mt-6 text-base sm:text-lg leading-relaxed font-normal"
            >
              I build fierce brand identities, cinematic video edits, and modern
              vibe coding web applications that dominate markets and captivate users.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
              <Link to="/portfolio" className="btn-gradient inline-flex items-center gap-2">
                SEE MY WORK
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919773135547?text=Hello%20yashfx!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
              >
                START A PROJECT
              </a>
            </motion.div>

            {/* Stats Strip */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-8 sm:gap-14 mt-12 border-t border-slate-200/90 pt-8"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="text-3xl sm:text-4xl font-bold text-slate-900 font-podium">
                    {s.value}
                  </span>
                  <p className="text-slate-500 text-xs tracking-wider uppercase mt-1 font-inter font-semibold">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Studio Showcase & Floating Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative mt-12 lg:mt-0 flex flex-col"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SERVICES PREVIEW
   ═══════════════════════════════════════════════════════════════════════ */
function ServicesPreview() {
  const services = [
    {
      Icon: Layers,
      title: "Design",
      desc: "Brand identities, UI/UX systems, packaging, and visual design crafted to make your brand instantly recognizable.",
    },
    {
      Icon: Film,
      title: "Editing",
      desc: "High-end cinematic video editing, 3D motion graphics, VFX tracking, and reels engineered for virality.",
    },
    {
      Icon: Code,
      title: "Vibe Coding",
      desc: "Interactive web applications, portfolios, and dynamic digital tools built rapidly with cutting-edge tech.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-white">
      <SectionHeader
        label="WHAT I DO"
        title="Services I offer"
        subtitle="From concept to execution, I deliver end-to-end creative solutions that set ambitious brands apart."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link to="/services" className="glass-card block p-8 sm:p-10 h-full group bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <s.Icon className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 font-podium mb-3 group-hover:text-blue-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                {s.desc}
              </p>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 group-hover:text-blue-700 transition-colors inline-flex items-center gap-1.5">
                Learn More
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PORTFOLIO PREVIEW
   ═══════════════════════════════════════════════════════════════════════ */
function PortfolioPreview() {
  const items = [
    { videoUrl: "/portfolio/fronx-car-delivery.mp4", category: "Commercial", title: "Fronx Car Delivery" },
    { videoUrl: "/portfolio/navratri-project.mp4", category: "Culture & Reel", title: "Navratri Project" },
    { videoUrl: "/portfolio/tracking.mp4", category: "VFX & Motion", title: "Tracking VFX Showcase" },
  ];

  const handleMouseEnterVideo = (e: React.MouseEvent<HTMLElement>) => {
    document.querySelectorAll("video").forEach((v) => {
      if (v !== e.currentTarget.querySelector("video")) {
        v.muted = true;
      }
    });
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeaveVideo = (e: React.MouseEvent<HTMLElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.muted = true;
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-50/70 border-y border-slate-200/80 px-6 sm:px-10 lg:px-16">
      <SectionHeader label="SELECTED WORK" title="Featured Portfolio" subtitle="A quick glimpse of recent editing and visual productions." />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              to="/portfolio"
              onMouseEnter={handleMouseEnterVideo}
              onMouseLeave={handleMouseLeaveVideo}
              className="block rounded-2xl overflow-hidden relative group aspect-video bg-slate-900 shadow-sm border border-slate-200/90 hover:shadow-xl hover:border-blue-400 transition-all duration-300"
            >
              <video
                src={p.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={(e) => e.currentTarget.play().catch(() => {})}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
              />
              {/* Audio on indicator */}
              <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/90 text-white text-[10px] font-mono shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-blue-200" />
                <span className="font-semibold tracking-wider">AUDIO ON</span>
              </div>
              {/* hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs tracking-widest uppercase text-blue-400 mb-1 font-inter font-bold">
                  {p.category}
                </span>
                <h3 className="text-xl font-bold text-white font-podium">
                  {p.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mt-12"
      >
        <Link
          to="/portfolio"
          className="btn-outline inline-flex items-center gap-2"
        >
          View All Projects
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════════════════════════════════ */
function Stats() {
  const data = [
    { value: "150+", label: "Projects Delivered" },
    { value: "50+", label: "Global Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
        {data.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <span className="text-5xl lg:text-6xl font-bold text-blue-600 font-podium">
              {d.value}
            </span>
            <p className="text-slate-500 text-xs tracking-wider uppercase mt-2 font-inter font-semibold">
              {d.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════════════════════════════════ */
function Testimonials() {
  const testimonials = [
    {
      quote:
        "yashfx transformed our entire brand presence. His design instincts are unmatched — every deliverable exceeded expectations.",
      name: "Priya Sharma",
      role: "CEO, Luxora Brands",
    },
    {
      quote:
        "The video editing quality is cinematic-grade. He turned raw footage into storytelling gold. An absolute game-changer.",
      name: "Marcus Chen",
      role: "Founder, Elevate Media",
    },
    {
      quote:
        "Yash's courses gave my team the confidence and skills to level up our in-house creative work. Worth every penny.",
      name: "Ananya Patel",
      role: "Creative Director, Nomad Studio",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const t = testimonials[active];

  return (
    <section className="py-24 lg:py-32 bg-slate-50/60 border-t border-slate-200/80 px-6 sm:px-10 lg:px-16">
      <SectionHeader label="TESTIMONIALS" title="What clients say" />

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass-card max-w-3xl mx-auto p-8 sm:p-12 text-center bg-white border border-slate-200/90 shadow-md shadow-slate-200/50"
      >
        <Quote className="w-10 h-10 mx-auto mb-6 text-blue-600/70" />
        <p className="text-lg sm:text-xl text-slate-700 italic leading-relaxed mb-8 font-normal">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-amber-500 fill-amber-500"
            />
          ))}
        </div>
        <p className="text-slate-900 font-bold font-podium text-xl">{t.name}</p>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{t.role}</p>
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active
                ? "bg-blue-600 w-6"
                : "bg-slate-300 hover:bg-slate-400 w-2"
            }`}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════════════════════════════ */
function CtaSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/50 border-t border-slate-100">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl sm:text-6xl font-bold font-podium text-slate-900 tracking-tight">
          Ready to elevate your brand?
        </h2>
        <p className="text-slate-600 max-w-lg mx-auto mt-4 text-base sm:text-lg leading-relaxed">
          Let&rsquo;s craft something extraordinary together. Premium design, cinematic storytelling, and modern code.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link to="/contact" className="btn-gradient inline-flex items-center gap-2">
            GET STARTED
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link to="/portfolio" className="btn-outline inline-flex items-center gap-2">
            VIEW MY WORK
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <Stats />
      <Testimonials />
      <CtaSection />
    </main>
  );
}
