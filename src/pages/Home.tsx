import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Crown, ArrowUpRight, Layers, Film, Code, Quote, Star } from "lucide-react";

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
   HERO
   ═══════════════════════════════════════════════════════════════════════ */
function Hero() {
  const stats = [
    { value: "250+", label: "Brands Transformed" },
    { value: "95%", label: "Client Retention" },
    { value: "10+", label: "Years in the Game" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50 py-20 lg:py-28">
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
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full shadow-sm">
          <Crown className="w-4 h-4 text-blue-600" />
          <span className="text-blue-700 text-xs tracking-[0.2em] uppercase font-inter font-bold">
            World-Class Digital Creator
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="font-podium text-[clamp(3.2rem,8.5vw,7.5rem)] leading-[0.92] text-slate-900 font-bold tracking-tight"
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
          className="flex flex-wrap gap-8 sm:gap-14 mt-14 border-t border-slate-200/90 pt-8"
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
    { videoUrl: "/portfolio/yps-restroo.mp4", category: "Hospitality", title: "YP's Restroo" },
  ];

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
              className="block rounded-2xl overflow-hidden relative group aspect-[4/5] bg-slate-900 shadow-sm border border-slate-200/90 hover:shadow-xl hover:border-blue-400 transition-all duration-300"
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
