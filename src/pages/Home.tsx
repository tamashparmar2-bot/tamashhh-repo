import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Film,
  Layers,
  Box,
  Palette,
  Send,
  MessageSquare,
  Clock
} from "lucide-react";
import { PROJECTS } from "../data/projects";

/* ──────────────────────── animation presets ──────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ──────────────────────── section header ──────────────────────── */
function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
}: {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}
    >
      <div className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 ${align === "center" ? "mx-auto" : ""}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
        <span className="text-blue-700 text-xs tracking-[0.2em] uppercase font-inter font-bold">
          {badge}
        </span>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-podium text-navy-900 tracking-tight leading-[0.95]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 font-space mt-4 text-base sm:text-lg leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   HERO INTERACTIVE SHOWREEL PREVIEW
   ═══════════════════════════════════════════════════════════════════════ */
const HERO_CLIPS = [
  { src: "/portfolio/ganesha-aagman.mp4", title: "Ganesha Aagman Showcase", format: "16:9 • FESTIVAL", category: "Commercial Film" },
  { src: "/portfolio/bairan-edit.mp4", title: "Bairan Cinematic Edit", format: "16:9 • MOTION", category: "Motion Graphics" },
  { src: "/portfolio/fronx-car-delivery.mp4", title: "Fronx Commercial Delivery", format: "16:9 • 4K", category: "Commercial" },
  { src: "/portfolio/dice-animation.mp4", title: "Kinetic Dice 3D Simulation", format: "9:16 • CGI", category: "3D Motion" },
  { src: "/portfolio/cgi-saregama.mp4", title: "Saregama CGI Motion Spot", format: "9:16 • 3D", category: "CGI Reveal" },
];

function HeroShowreelPreview() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const DURATION_PER_CLIP = 7; // seconds

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActiveIdx((prev) => (prev + 1) % HERO_CLIPS.length);
          return 0;
        }
        return p + 100 / (DURATION_PER_CLIP * 20);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [activeIdx]);

  const toggleSound = () => {
    setIsAudioMuted(!isAudioMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isAudioMuted;
    }
  };

  const current = HERO_CLIPS[activeIdx];

  return (
    <div className="relative w-full flex flex-col gap-4">
      {/* Main Video Viewport */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-2xl shadow-blue-500/15 group">
        <video
          ref={videoRef}
          key={current.src}
          src={current.src}
          autoPlay
          muted={isAudioMuted}
          playsInline
          loop
          preload="auto"
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Ambient Vignette & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40 pointer-events-none" />

        {/* Top Control Bar */}
        <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-mono text-white/80 ml-2 hidden sm:inline">
              yashfx_reel_master.mp4
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 hover:bg-blue-600 text-white text-xs font-mono backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-sm"
              title="Toggle Audio"
            >
              {isAudioMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-300" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-blue-300 animate-pulse" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-blue-200">Audio On</span>
                </>
              )}
            </button>

            {/* Live Indicator */}
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-300 bg-blue-900/70 border border-blue-500/40 px-2.5 py-1 rounded-full">
              {current.format}
            </span>
          </div>
        </div>

        {/* Bottom Metadata & Scrub Bar */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col gap-2.5">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                {current.category}
              </span>
              <h4 className="text-white font-podium text-xl sm:text-2xl leading-none mt-0.5">
                {current.title}
              </h4>
            </div>
            <span className="text-[11px] font-mono text-white/70">
              0{activeIdx + 1} / 0{HERO_CLIPS.length}
            </span>
          </div>

          {/* Scrub bar */}
          <div className="relative w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-none rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Clip Selectors Thumbnail Strip */}
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {HERO_CLIPS.map((clip, idx) => (
          <button
            key={clip.src}
            onClick={() => {
              setActiveIdx(idx);
              setProgress(0);
            }}
            className={`relative rounded-xl overflow-hidden aspect-video border-2 transition-all cursor-pointer ${
              idx === activeIdx
                ? "border-blue-600 shadow-md shadow-blue-500/30 scale-[1.02]"
                : "border-slate-200/80 opacity-60 hover:opacity-100"
            }`}
          >
            <video
              src={clip.src}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover pointer-events-none"
            />
            {idx === activeIdx && (
              <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 text-white fill-current" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 2: HERO SECTION
   ═══════════════════════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      {/* Subtle background radial ambient lights */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-blue-400/8 blur-3xl pointer-events-none" />

      {/* Decorative Technical Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Editorial Narrative */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Identity Badge */}
            <motion.div variants={fadeUp} className="self-start mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                <span className="text-blue-700 text-xs tracking-[0.2em] uppercase font-inter font-bold">
                  Independent Motion Designer & Video Editor
                </span>
              </div>
            </motion.div>

            {/* Giant Headline: Masked & Animated */}
            <motion.div variants={fadeUp} className="overflow-hidden">
              <h1 className="font-podium text-[clamp(3.5rem,8.5vw,7.2rem)] leading-[0.92] text-navy-900 font-bold tracking-tight uppercase">
                Visuals That <br />
                <span className="text-blue-600 relative inline-block">
                  Move People.
                </span>
              </h1>
            </motion.div>

            {/* Refined Editorial Subtext */}
            <motion.p
              variants={fadeUp}
              className="font-space text-slate-600 text-base sm:text-xl font-normal max-w-xl mt-6 leading-relaxed"
            >
              Engineering cinematic motion graphics, 3D CGI simulations, and high-impact commercial video editing for ambitious brands and creators worldwide.
            </motion.p>

            {/* Direct CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8 items-center">
              <Link to="/portfolio" className="btn-gradient inline-flex items-center gap-2">
                EXPLORE WORK
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="#quote"
                className="btn-outline inline-flex items-center gap-2"
              >
                REQUEST A QUOTE
              </a>
            </motion.div>

            {/* Discipline Badges */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mt-12 pt-8 border-t border-slate-200/90 text-slate-500 font-mono text-xs uppercase tracking-wider"
            >
              <div className="flex items-center gap-2 text-navy-900 font-semibold">
                <Film className="w-4 h-4 text-blue-600" />
                <span>Commercial Editing</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-2 text-navy-900 font-semibold">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Motion Graphics</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-2 text-navy-900 font-semibold">
                <Box className="w-4 h-4 text-blue-600" />
                <span>3D & CGI</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Hero Video Interactive Showreel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex flex-col"
          >
            <HeroShowreelPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 3: FULL-WIDTH CINEMATIC SHOWREEL
   ═══════════════════════════════════════════════════════════════════════ */
function FullWidthShowreel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-20 lg:py-32 bg-navy-950 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header with White / Cyan accents */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/30 text-blue-300 text-xs font-mono uppercase tracking-widest font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            <span>Cinematic Reel</span>
          </div>
          <h2 className="font-podium text-4xl sm:text-6xl text-white font-bold tracking-tight uppercase">
            The Showreel
          </h2>
          <p className="font-space text-slate-300 text-base sm:text-lg mt-3 font-normal max-w-xl mx-auto">
            A high-speed compilation of motion design, color treatment, and cinematic commercial sequences crafted for impact.
          </p>
        </div>

        {/* Video Canvas with Controls */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-blue-500/20 aspect-video bg-black max-w-5xl mx-auto group">
          <video
            ref={videoRef}
            src="/portfolio/fronx-car-delivery.mp4"
            autoPlay
            loop
            playsInline
            muted={isMuted}
            preload="auto"
            className="w-full h-full object-cover"
          />

          {/* Letterbox Bars Top/Bottom Subtle Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Center Play/Pause Overlay */}
          <button
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-blue-600/90 text-white flex items-center justify-center backdrop-blur-md shadow-2xl shadow-blue-600/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-current" />
            ) : (
              <Play className="w-8 h-8 fill-current ml-1" />
            )}
          </button>

          {/* Bottom Floating Bar */}
          <div className="absolute bottom-0 inset-x-0 p-6 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <button
                onClick={toggleAudio}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-colors cursor-pointer flex items-center gap-1.5 px-3"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-blue-400" />}
                <span className="text-[11px] font-mono uppercase tracking-wider">{isMuted ? "Unmute" : "Mute"}</span>
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                4K 60FPS
              </span>
              <span className="hidden sm:inline">DaVinci S-Log3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 4: SELECTED WORK PORTFOLIO GRID
   ═══════════════════════════════════════════════════════════════════════ */
function SelectedWorkSection() {
  const featured = PROJECTS.slice(0, 6);

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
    <section className="py-24 lg:py-32 bg-white px-6 sm:px-10 lg:px-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            badge="PORTFOLIO"
            title="Selected Work"
            subtitle="Curated motion design projects, commercial edits, and 3D visual studies. Hover to preview live sound."
            align="left"
          />

          <Link
            to="/portfolio"
            className="btn-outline inline-flex items-center gap-2 self-start md:self-auto shrink-0 mb-8"
          >
            VIEW ALL WORK ({PROJECTS.length})
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p, idx) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onMouseEnter={handleMouseEnterVideo}
              onMouseLeave={handleMouseLeaveVideo}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-400 transition-all duration-300"
            >
              <div className="block">
                {/* Visual Viewport with 16:9 or 9:16 aspect */}
                <div className={`relative w-full ${p.aspect === "9:16" ? "aspect-[9/14]" : "aspect-[16/10]"} bg-slate-950 overflow-hidden`}>
                  <video
                    src={p.videoUrl}
                    autoPlay
                    loop
                    playsInline
                    muted
                    preload="metadata"
                    onLoadedData={(e) => e.currentTarget.play().catch(() => {})}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

                  {/* Top Tags */}
                  <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-950/80 text-white backdrop-blur-md border border-white/10">
                      {p.aspect === "9:16" ? "9:16 REEL" : "16:9 CINEMATIC"}
                    </span>
                  </div>

                  {/* Audio indicator */}
                  <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/95 text-white text-[10px] font-mono shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <Volume2 className="w-3.5 h-3.5 animate-pulse text-blue-200" />
                    <span className="font-semibold tracking-wider">AUDIO ON</span>
                  </div>

                  {/* Bottom Text Over Visual */}
                  <div className="absolute bottom-0 inset-x-0 p-5 pointer-events-none">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                      {p.category}
                    </span>
                    <h3 className="font-podium text-2xl text-white font-bold leading-tight mt-0.5 group-hover:text-blue-300 transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Editorial Card Footer */}
                <div className="p-4 bg-white flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    {p.software.slice(0, 2).join(" • ")}
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {p.aspect === "9:16" ? "Vertical Reel" : "Commercial Cut"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 5: ABOUT THE ARTIST
   ═══════════════════════════════════════════════════════════════════════ */
function AboutArtistSection() {
  const tools = [
    { name: "After Effects", desc: "Kinetic typography, compositing & 2D motion" },
    { name: "Premiere Pro", desc: "Commercial assembly, rhythmic pacing & sound" },
    { name: "DaVinci Resolve", desc: "Color grading, S-Log3/Arri LUT management" },
    { name: "Blender 3D", desc: "Procedural shaders, rigid dynamics & CGI" },
    { name: "Cinema 4D", desc: "Mograph simulation & studio lighting" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-50/70 border-b border-slate-200/80 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Identity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-blue-500/5 aspect-[4/5] group">
              <img
                src="/creator-profile.jpg"
                alt="Yashraj Parmar — YASHFX"
                className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                  Motion Designer & Editor
                </span>
                <h3 className="font-podium text-3xl font-bold text-white">
                  Yashraj Parmar
                </h3>
                <p className="text-xs text-slate-300 font-inter mt-1">
                  Founder & Creative Lead at YASHFX
                </p>
              </div>
            </div>

            {/* Quick Experience Pill */}
            <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Discipline</p>
                <p className="text-sm font-bold text-navy-900 font-space">Pure Motion Craft</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-widest font-bold self-start">
              <span>Behind the Canvas</span>
            </div>

            <h2 className="font-podium text-4xl sm:text-5xl text-navy-900 font-bold tracking-tight uppercase leading-[0.98]">
              Motion isn&apos;t decoration. <br />
              <span className="text-blue-600">It is narrative velocity.</span>
            </h2>

            <p className="font-space text-slate-600 text-base sm:text-lg leading-relaxed mt-6">
              I am Yashraj Parmar, an independent motion designer and commercial video editor based in Anand, Gujarat. I collaborate with direct brands, directors, and agencies looking for razor-sharp visual rhythm, cinematic color grading, and tactile 3D simulations.
            </p>

            <p className="font-space text-slate-600 text-base sm:text-lg leading-relaxed mt-4">
              Every transition is paced to music; every frame is graded with purpose. In addition to remote productions worldwide, I offer dedicated <Link to="/video-editor-anand" className="text-blue-600 font-semibold underline underline-offset-4 hover:text-blue-700 transition-colors">video editing services in Anand</Link> for regional businesses, creators, and agencies across Anand, Vallabh Vidyanagar, and Central Gujarat seeking hands-on creative collaboration.
            </p>

            {/* Software Stack Pills */}
            <div className="mt-8 pt-8 border-t border-slate-200/90">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
                Core Production Pipeline
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tools.map((t) => (
                  <div
                    key={t.name}
                    className="p-3 rounded-xl bg-white border border-slate-200 flex flex-col gap-0.5 shadow-sm"
                  >
                    <span className="text-xs font-bold font-space text-navy-900">
                      {t.name}
                    </span>
                    <span className="text-[11px] text-slate-500 font-inter">
                      {t.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 6: CREATIVE SERVICES
   ═══════════════════════════════════════════════════════════════════════ */
function CreativeServicesSection() {
  const services = [
    {
      Icon: Layers,
      title: "Motion Graphics & Kinetic Type",
      desc: "Title sequences, brand idents, graphic overlays, and animated UI choreographies designed with mathematical easing and rhythm.",
      deliverables: ["2D & 2.5D Animation", "Vector Rigging", "Kinetic Typography", "Lottie / Web Motion"],
    },
    {
      Icon: Film,
      title: "Commercial Video Editing",
      desc: "Punchy, rhythm-driven commercial edits, event showcases, and social cutdowns structured around narrative cadence and sound cues.",
      deliverables: ["Commercial Spots", "Vertical 9:16 Reels", "Music Beat Sync", "Speed Ramping"],
    },
    {
      Icon: Box,
      title: "3D CGI Visuals & Simulations",
      desc: "Photorealistic product reveals, mechanical simulations, abstract physics animations, and macro lighting explorations.",
      deliverables: ["Rigid Body Physics", "Procedural Texturing", "Studio Key Lighting", "Multi-Pass Compositing"],
    },
    {
      Icon: Palette,
      title: "Color Grading & Sound Foley",
      desc: "Transforming raw flat LOG footage into cinematic palettes, paired with multi-layer foley sound effects, whooshes, and bass swells.",
      deliverables: ["DaVinci Resolve Grade", "LUT Creation", "Custom Foley Mix", "Audio Mastering"],
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white px-6 sm:px-10 lg:px-16 border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="DISCIPLINES"
          title="Creative Services"
          subtitle="Precision motion design and high-end editing capabilities engineered to elevate your brand films."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 shadow-sm">
                  <s.Icon className="w-6 h-6" />
                </div>
                <h3 className="font-podium text-3xl text-navy-900 font-bold mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="font-space text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/70">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-3">
                  Key Deliverables
                </span>
                <div className="flex flex-wrap gap-2">
                  {s.deliverables.map((d) => (
                    <span
                      key={d}
                      className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Service Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block">
              Regional Production Hub
            </span>
            <p className="font-space text-base text-navy-900 font-bold">
              Looking for a dedicated video editor or motion graphics designer in Anand?
            </p>
            <p className="font-space text-xs sm:text-sm text-slate-600">
              Direct, in-person or cloud-collaborative editing for businesses across Anand, Vallabh Vidyanagar, Nadiad, and Central Gujarat.
            </p>
          </div>
          <Link
            to="/video-editor-anand"
            className="btn-outline inline-flex items-center gap-2 self-start sm:self-auto shrink-0 text-xs py-3 px-6"
          >
            LOCAL SERVICES IN ANAND
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 7: GET A QUOTE & CONTACT CTA
   ═══════════════════════════════════════════════════════════════════════ */
function GetAQuoteSection() {
  const [projectType, setProjectType] = useState("Commercial Editing");
  const [timeline, setTimeline] = useState("Within 2 Weeks");
  const [notes, setNotes] = useState("");

  const projectTypes = [
    "Commercial Editing",
    "Motion Graphics",
    "3D CGI Visual",
    "Brand Showreel",
    "Color & Sound Finishing",
  ];

  const timelineOptions = ["Urgent (48-72h)", "Within 2 Weeks", "1 Month+", "Flexible"];

  const handleWhatsAppQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Yashraj! I would like to get a quote for a project:\n\n• Type: ${projectType}\n• Timeline: ${timeline}\n• Brief/Details: ${notes || "Available to discuss"}\n\nLooking forward to hearing from you.`;
    const url = `https://wa.me/919773135547?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="quote" className="py-24 lg:py-32 bg-white px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="PROJECT ESTIMATE"
          title="Get a Custom Quote"
          subtitle="Tell me about your project scope and timeline. I respond within 12 hours with availability and custom pricing."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-podium text-3xl text-navy-900 font-bold mb-3">
                Let&apos;s Build Something Memorable
              </h3>
              <p className="font-space text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Whether you need a full commercial campaign cut, 3D simulations, or social reels that stop the scroll, I take on a limited number of projects each month to guarantee bespoke quality.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Fast Turnaround</span>
                    <p className="text-sm font-bold text-navy-900 font-space">48h–72h for high-priority sprints</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Direct Contact</span>
                    <p className="text-sm font-bold text-navy-900 font-space">contact@yashfx.in • +91 97731 35547</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-slate-600 font-semibold">Currently Booking for 2024 / Q2</span>
            </div>
          </div>

          {/* Right Column: Interactive Quote Request Builder */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleWhatsAppQuote}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xl shadow-blue-500/5 flex flex-col gap-6"
            >
              {/* Step 1: Select Type */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-3">
                  1. Project Discipline
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`px-4 py-2 rounded-xl text-xs font-space font-medium transition-all cursor-pointer ${
                        projectType === type
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50/50"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Desired Timeline */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-3">
                  2. Timeline / Urgency
                </label>
                <div className="flex flex-wrap gap-2">
                  {timelineOptions.map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setTimeline(time)}
                      className={`px-4 py-2 rounded-xl text-xs font-space font-medium transition-all cursor-pointer ${
                        timeline === time
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50/50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Brief Details */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-3">
                  3. Project Overview or Links (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell me about the footage, mood, reference videos, or deliverables..."
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder:text-slate-400"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="btn-gradient flex-1 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  REQUEST QUOTE VIA WHATSAPP
                </button>
                <a
                  href={`mailto:contact@yashfx.in?subject=${encodeURIComponent(`Project Inquiry: ${projectType}`)}&body=${encodeURIComponent(`Project Type: ${projectType}\nTimeline: ${timeline}\n\nDetails:\n${notes}`)}`}
                  className="btn-outline inline-flex items-center justify-center gap-2"
                >
                  EMAIL INQUIRY
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   EXPORTED HOME COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="bg-white text-navy-900 overflow-x-hidden">
      {/* 1. Minimal Sticky Navigation is in Navbar.tsx */}
      
      {/* 2. Hero with Large Animated Typography and Showreel */}
      <HeroSection />

      {/* 3. Full-Width Cinematic Showreel */}
      <FullWidthShowreel />

      {/* 4. Selected Work Portfolio Grid */}
      <SelectedWorkSection />

      {/* 5. About the Artist */}
      <AboutArtistSection />

      {/* 6. Creative Services */}
      <CreativeServicesSection />

      {/* 7. Get a Quote & Contact CTA */}
      <GetAQuoteSection />
    </main>
  );
}
