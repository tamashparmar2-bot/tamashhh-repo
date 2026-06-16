import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Crown, ArrowUpRight, Layers, Film, BookOpen, Quote, Star } from "lucide-react";

/* ──────────────────────── animation variants ──────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

/* ──────────────────────── tiny reusable pieces ──────────────────────── */
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
   HERO
   ═══════════════════════════════════════════════════════════════════════ */
function Hero() {
  const stats = [
    { value: "250+", label: "Brands Transformed" },
    { value: "95%", label: "Client Retention" },
    { value: "10+", label: "Years in the Game" },
  ];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* background image */}
      <img
        src="/hero-bg.jpg"
        alt="Tamashhh Creative Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-[#0a0a0f]/50 to-dark" />

      {/* content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full px-6 sm:px-10 lg:px-16"
      >
        {/* badge */}
        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
          <Crown className="w-4 h-4 text-white/60" />
          <span className="text-white/60 text-xs tracking-[0.3em] uppercase font-inter">
            World-Class Digital Creator
          </span>
        </motion.div>

        {/* heading */}
        <motion.h1
          variants={fadeUp}
          className="font-podium text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] text-white font-bold"
        >
          Design.
          <br />
          Disrupt.
          <br />
          Conquer.
        </motion.h1>

        {/* subtext */}
        <motion.p
          variants={fadeUp}
          className="text-white/60 max-w-md mt-6 text-sm sm:text-base leading-relaxed"
        >
          I build fierce brand identities, cinematic edits, and digital
          experiences that dominate industries and turn heads.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
          <Link to="/portfolio" className="btn-gradient inline-flex items-center gap-2">
            SEE MY WORK
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="btn-outline inline-flex items-center gap-2">
            START A PROJECT
          </Link>
        </motion.div>

        {/* stats */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-10 mt-14 border-t border-white/10 pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <span className="text-2xl sm:text-4xl font-bold text-white font-podium">
                {s.value}
              </span>
              <p className="text-white/40 text-xs tracking-widest uppercase mt-1 font-inter">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
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
      color: "#3b82f6",
      title: "Design",
      desc: "Brand identities, UI/UX, and visual systems crafted to make your brand unforgettable.",
    },
    {
      Icon: Film,
      color: "#8b5cf6",
      title: "Editing",
      desc: "Cinematic video editing, motion graphics, and post-production that captivates audiences.",
    },
    {
      Icon: BookOpen,
      color: "#ef4444",
      title: "Courses",
      desc: "Industry-leading courses to sharpen your creative skills and elevate your craft.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      <SectionHeader
        label="WHAT WE DO"
        title="Services I offer"
        subtitle="From concept to creation, I deliver end-to-end creative solutions that set brands apart."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link to="/services" className="glass-card block p-8 h-full group">
              {/* icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(135deg, ${s.color}33, ${s.color}11)`,
                }}
              >
                <s.Icon className="w-5 h-5" style={{ color: s.color }} />
              </div>

              <h3 className="text-xl font-bold text-white font-podium mb-3">
                {s.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors inline-flex items-center gap-1">
                Learn More
                <ArrowUpRight className="w-3.5 h-3.5" />
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
    { videoUrl: "/portfolio/cgi-saregama.mp4", category: "CGI & Ad", title: "CGI Saregama Ad" },
    { videoUrl: "/portfolio/tracking.mp4", category: "VFX & Tracking", title: "Tracking VFX Showcase" },
    { videoUrl: "/portfolio/obsidian-draft-1.mp4", category: "Brand Film", title: "Tamashhh Brand Film" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-dark-50 px-6 sm:px-10 lg:px-16">
      <SectionHeader label="SELECTED WORK" title="My portfolio" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link
              to="/portfolio"
              className="block rounded-2xl overflow-hidden relative group aspect-[4/5] bg-zinc-950"
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) video.play().catch(() => {});
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                }
              }}
            >
              <video
                src={p.videoUrl}
                preload="metadata"
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-300"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-xs tracking-widest uppercase text-blue-400 mb-2 font-inter font-semibold">
                  {p.category}
                </span>
                <h3 className="text-lg font-bold text-white font-podium">
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
        transition={{ duration: 0.6, delay: 0.3 }}
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
    { value: "150+", label: "Projects" },
    { value: "50+", label: "Clients" },
    { value: "5+", label: "Years" },
    { value: "3", label: "Services" },
  ];

  return (
    <section className="py-24 bg-dark relative">
      <div className="gradient-line" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        {data.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <span className="text-5xl lg:text-6xl font-bold gradient-text font-podium">
              {d.value}
            </span>
            <p className="text-white/40 text-xs tracking-widest uppercase mt-3 font-inter">
              {d.label}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="gradient-line" />
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
        "Tamashhh transformed our entire brand presence. His design instincts are unmatched — every deliverable exceeded expectations.",
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
        "Tamash's courses gave my team the confidence and skills to level up our in-house creative work. Worth every penny.",
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
    <section className="py-24 lg:py-32 bg-dark-50 px-6 sm:px-10 lg:px-16">
      <SectionHeader label="TESTIMONIALS" title="What clients say" />

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card max-w-3xl mx-auto p-10 text-center"
      >
        <Quote className="w-10 h-10 mx-auto mb-6 gradient-text opacity-60" />
        <p className="text-lg sm:text-xl text-white/80 italic leading-relaxed mb-8">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-yellow-500 fill-yellow-500"
            />
          ))}
        </div>
        <p className="text-white font-bold font-podium">{t.name}</p>
        <p className="text-white/50 text-sm">{t.role}</p>
      </motion.div>

      {/* dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === active
                ? "bg-blue-500 w-6"
                : "bg-white/20 hover:bg-white/40"
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
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* decorative orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-red-600/20 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6"
      >
        <h2 className="text-3xl sm:text-5xl font-bold gradient-text-h font-podium">
          Ready to elevate your brand?
        </h2>
        <p className="text-white/50 max-w-lg mx-auto mt-4 text-sm sm:text-base">
          Let&rsquo;s craft something extraordinary together. Your next chapter
          starts here.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link to="/contact" className="btn-gradient inline-flex items-center gap-2">
            GET STARTED
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link to="/portfolio" className="btn-outline inline-flex items-center gap-2">
            VIEW OUR WORK
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
    <main className="bg-dark text-white overflow-x-hidden">
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <Stats />
      <Testimonials />
      <CtaSection />
    </main>
  );
}
