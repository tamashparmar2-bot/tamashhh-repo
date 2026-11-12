import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  TrendingUp,
  Search,
  Share2,
  CheckCircle2,
  Sparkles,
  Film,
  Layers,
  Code2,
  BarChart3,
  ArrowRight,
  MessageSquare
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const SERVICES = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fast, conversion-focused web experiences engineered with modern frameworks, crisp motion, and clean technical architecture.",
    items: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "Responsive website design",
    ],
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Data-backed paid acquisition campaigns pairing scroll-stopping creative assets with disciplined funnel optimisation.",
    items: [
      "Meta Ads",
      "Google Ads",
      "Campaign management",
      "Conversion optimisation",
    ],
  },
  {
    icon: Search,
    title: "Search Engine Optimisation",
    description:
      "Sustainable organic visibility built on clean site architecture, search intent mapping, and local authority signals.",
    items: [
      "Technical SEO",
      "On-page SEO",
      "Local SEO",
      "Keyword research",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Cohesive brand storytelling and short-form visual content systems designed to grow reach, engagement, and trust.",
    items: [
      "Social media strategy",
      "Content planning",
      "Creative development",
      "Social media management",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    desc: "Audit your brand positioning, audience intent, competitors, and current digital touchpoints.",
  },
  {
    step: "02",
    title: "Strategise",
    desc: "Map out high-leverage channels, keyword opportunities, funnel architecture, and creative angles.",
  },
  {
    step: "03",
    title: "Create",
    desc: "Design and build responsive web pages, motion-led ad creatives, and search-ready content.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Deploy campaigns, tracking pixels, technical schema, and live pages with zero friction.",
  },
  {
    step: "05",
    title: "Optimise",
    desc: "Refine conversion rates, ad spend efficiency, and organic rankings through continuous iteration.",
  },
];

const WHY_PILLARS = [
  {
    icon: Film,
    title: "Creative Production",
    desc: "Cinema-grade video editing, 3D CGI, and motion graphics that make ads and landing pages impossible to ignore.",
  },
  {
    icon: Layers,
    title: "Design Craft",
    desc: "Minimal, modern visual systems built for clarity, brand authority, and effortless user flow.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    desc: "Clean, responsive front-end engineering optimised for Core Web Vitals, speed, and search crawlability.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    desc: "Full-funnel execution across SEO, Meta Ads, Google Ads, and social channels focused on measurable ROI.",
  },
];

export default function DigitalGrowth() {
  useEffect(() => {
    const title = "Digital Growth Services | Website Development, SEO & Performance Marketing – YASHFX";
    const description =
      "We help ambitious brands build a powerful digital presence through website development, performance marketing, SEO and social media marketing.";

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.yashfx.in/digital-growth");

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "YASHFX – Digital Growth & Web Solutions",
      "url": "https://www.yashfx.in/digital-growth",
      "image": "https://www.yashfx.in/og-image.jpg",
      "telephone": "+919773135547",
      "email": "contact@yashfx.in",
      "founder": {
        "@type": "Person",
        "name": "Yashraj Parmar",
        "url": "https://www.yashfx.in/about"
      },
      "serviceType": [
        "Website Development",
        "Performance Marketing",
        "Search Engine Optimisation",
        "Social Media Marketing"
      ],
      "description": description,
      "sameAs": [
        "https://www.instagram.com/tamashhh_/"
      ]
    };

    let scriptTag = document.querySelector('script[data-schema="digital-growth"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.setAttribute("data-schema", "digital-growth");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      if (scriptTag) scriptTag.remove();
    };
  }, []);

  return (
    <article className="bg-white text-navy-900 overflow-x-hidden">
      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-8">
        <ol className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/services" className="hover:text-blue-600 transition-colors">
              Services
            </Link>
          </li>
          <li>/</li>
          <li className="text-blue-600 font-bold" aria-current="page">
            Digital Growth
          </li>
        </ol>
      </nav>

      {/* ── 1. HERO ── */}
      <header className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white border-b border-slate-100">
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-blue-700 text-xs tracking-[0.2em] uppercase font-inter font-bold">
                  YASHFX Digital Growth Studio
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-podium text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-navy-900 leading-[0.94] uppercase"
            >
              Creative Thinking. <br />
              <span className="text-blue-600">Digital Growth.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-space text-slate-600 text-base sm:text-xl font-normal max-w-2xl mx-auto mt-6 leading-relaxed"
            >
              We help ambitious brands build a powerful digital presence through website development, performance marketing, SEO and social media marketing.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-4 mt-9"
            >
              <Link to="/contact" className="btn-gradient inline-flex items-center gap-2">
                Let&apos;s Grow Your Brand
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a href="#growth-services" className="btn-outline inline-flex items-center gap-2">
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* ── 2. SERVICES ── */}
      <section
        id="growth-services"
        className="py-20 lg:py-28 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 border-b border-slate-100"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-blue-700 text-xs tracking-[0.2em] uppercase font-inter font-bold">
              CORE CAPABILITIES
            </span>
          </div>
          <h2 className="font-podium text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 tracking-tight uppercase leading-[0.96]">
            Full-Stack Digital Growth Services
          </h2>
          <p className="font-space text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Four interconnected disciplines designed to attract, convert, and retain your ideal audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 sm:p-10 rounded-3xl bg-slate-50/60 border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 shadow-sm">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-podium text-3xl text-navy-900 font-bold mb-3 tracking-tight uppercase">
                  {service.title}
                </h3>
                <p className="font-space text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200/70">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-3">
                  Key Focus Areas
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs sm:text-sm font-space font-medium text-navy-900"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. PROCESS ── */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block mb-2">
              HOW WE WORK
            </span>
            <h2 className="font-podium text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 tracking-tight uppercase leading-[0.96]">
              From Discovery to Measurable Scale
            </h2>
            <p className="font-space text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
              A structured, iterative workflow built for speed, creative precision, and compounding results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PROCESS_STEPS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="relative p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-blue-600 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100">
                      {item.step}
                    </span>
                    {idx < PROCESS_STEPS.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-300 hidden lg:block" />
                    )}
                  </div>
                  <h3 className="font-podium text-2xl font-bold text-navy-900 uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="font-space text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY YASHFX ── */}
      <section className="py-20 lg:py-28 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-widest font-bold">
              <span>THE YASHFX ADVANTAGE</span>
            </div>
            <h2 className="font-podium text-4xl sm:text-5xl text-navy-900 font-bold tracking-tight uppercase leading-[0.96] mb-6">
              Where Creative Craft Meets <span className="text-blue-600">Performance.</span>
            </h2>
            <p className="font-space text-slate-600 text-base leading-relaxed mb-4">
              Most brands struggle because their video production, website design, and marketing campaigns live in separate silos. At YASHFX, creative production, design, technology, and digital marketing operate as one unified engine.
            </p>
            <p className="font-space text-slate-600 text-base leading-relaxed mb-8">
              By pairing motion-led storytelling with clean web engineering and conversion strategy, your brand looks unmistakably premium while driving real commercial growth.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-wider font-bold">
              <Link
                to="/portfolio"
                className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 underline underline-offset-4"
              >
                View Creative Work <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/services"
                className="text-slate-600 hover:text-blue-600 inline-flex items-center gap-1 underline underline-offset-4"
              >
                Motion &amp; Post-Production <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/video-editor-anand"
                className="text-slate-600 hover:text-blue-600 inline-flex items-center gap-1 underline underline-offset-4"
              >
                Anand Local Studio <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_PILLARS.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-400 hover:bg-white transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-5">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="font-podium text-2xl font-bold text-navy-900 uppercase mb-2">
                  {pillar.title}
                </h3>
                <p className="font-space text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FINAL CTA ── */}
      <section className="py-20 lg:py-28 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-widest text-blue-200 font-bold block mb-3 relative z-10">
            READY TO SCALE
          </span>
          <h2 className="font-podium text-4xl sm:text-6xl font-bold tracking-tight mb-5 uppercase relative z-10">
            Let&apos;s Build Your Digital Growth Story.
          </h2>
          <p className="font-space text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-9 font-normal leading-relaxed relative z-10">
            Whether you need a high-converting website, targeted Meta &amp; Google ad campaigns, or technical SEO that compounds over time—let&apos;s map out your next phase of growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-blue-700 hover:bg-blue-50 font-inter font-bold text-xs uppercase tracking-wider shadow-lg transition-all inline-flex items-center gap-2"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919773135547?text=Hello%20Yashraj!%20I'd%20like%20to%20discuss%20Digital%20Growth%20services%20for%20my%20brand."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-blue-800/80 hover:bg-blue-800 text-white border border-blue-400/40 font-inter font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </article>
  );
}
