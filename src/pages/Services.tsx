import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Layers,
  Film,
  Code,
  CheckCircle,
  ArrowRight,
  Send,
  MessageSquare,
  Clock,
  ShieldCheck,
  Check,
  Zap,
  Phone
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const services = [
  {
    icon: Layers,
    title: "Brand Design",
    subtitle: "Visual identities that captivate",
    description:
      "I create cohesive brand identities, modern UI/UX design systems, and visual guidelines that resonate with your target market and elevate your brand presence.",
    features: ["Brand Identity", "UI/UX Design Systems", "Social Media Kits", "Packaging & Merch", "Logo Systems", "Typography & Guidelines"],
    videoUrl: "/portfolio/v5.mp4"
  },
  {
    icon: Film,
    title: "Video Editing",
    subtitle: "Stories brought to life with impact",
    description:
      "Professional cinematic video editing, color grading, sound design, and 3D motion graphics that transform raw footage into captivating showpieces.",
    features: ["Cinematic Editing", "Color Grading & LUTs", "Motion Graphics", "Sound Design & Mixing", "VFX & Tracking", "High-Retention Reels"],
    videoUrl: "/portfolio/obsidian-draft-1.mp4"
  },
  {
    icon: Code,
    title: "Vibe Coding",
    subtitle: "Rapid-fire fullstack development",
    description:
      "I build custom web applications, responsive landing pages, interactive portfolios, and automated workflows live at high velocity with zero friction.",
    features: ["Rapid Prototyping", "Fullstack Web Apps", "API Integrations", "Interactive UI/UX", "React & Vite Systems", "Workflow Automation"],
    videoUrl: "/portfolio/v5.mp4"
  },
];

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your brand, goals, and audience through deep research and alignment." },
  { num: "02", title: "Strategy", desc: "Crafting a tailored creative roadmap that aligns with your timeline and market." },
  { num: "03", title: "Creation", desc: "Bringing concepts to life with obsessive attention to detail, motion, and aesthetics." },
  { num: "04", title: "Delivery", desc: "Polished final deliverables, source files, and launch support with ongoing guidance." },
];

export default function Services() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* Hero */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative px-6 sm:px-10 lg:px-16 text-center max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 text-xs tracking-[0.25em] uppercase font-bold mb-4"
          >
            OUR EXPERTISE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-podium text-slate-900 tracking-tight"
          >
            Crafted To Perfection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal"
          >
            From brand identity design to high-impact cinematic editing and vibe coding web applications — I deliver premium, end-to-end creative solutions.
          </motion.p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        {services.map((s, i) => (
          <div key={s.title}>
            {i > 0 && <div className="h-px bg-slate-200 my-16 lg:my-24 max-w-4xl mx-auto" />}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-6 shadow-sm">
                  <s.icon className="w-7 h-7" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-podium text-slate-900 mb-2">{s.title}</h2>
                <p className="text-lg font-medium text-blue-600 mb-4">{s.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-8 text-base">{s.description}</p>
                
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-3 mb-8"
                >
                  {s.features.map((f) => (
                    <motion.div key={f} variants={fadeUp} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {f}
                    </motion.div>
                  ))}
                </motion.div>

                <Link to="/contact" className="btn-gradient inline-flex items-center gap-2">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Visual Thumbnail Video */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="glass-card p-2 bg-white border border-slate-200 shadow-xl rounded-2xl">
                  <div className="aspect-[4/3] rounded-xl bg-slate-900 flex items-center justify-center relative overflow-hidden">
                    <video
                      src={s.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      onLoadedData={(e) => e.currentTarget.play().catch(() => {})}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-slate-50/70 border-y border-slate-200/80 px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-xs tracking-[0.25em] uppercase font-bold mb-3">HOW I WORK</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-podium text-slate-900 tracking-tight">My Process</h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base">A disciplined, agile workflow tailored for world-class quality.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 text-center bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 rounded-2xl"
            >
              <span className="text-5xl font-bold text-blue-600 font-podium">{step.num}</span>
              <h3 className="text-xl font-bold text-slate-900 font-podium mt-4 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Get a Quote Section */}
      <section id="quote" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-white via-blue-50/30 to-slate-50/50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs tracking-[0.25em] uppercase font-bold mb-3 inline-block">
              CUSTOM ESTIMATE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-podium text-slate-900 tracking-tight">
              Get a Project Quote
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base leading-relaxed">
              Every project is unique. Select your scope and timeline below to receive an exact, customized quote within 24 hours.
            </p>
          </div>

          <QuoteCalculator />

          {/* Guarantees / Value Props Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: Zap, title: "48–72h Sprints", desc: "Lightning fast turnarounds available for urgent deadlines." },
              { icon: MessageSquare, title: "Direct 1-on-1", desc: "Work directly with Yashraj with zero agency middlemen." },
              { icon: ShieldCheck, title: "Full Ownership", desc: "You own 100% of final masters, raw assets, and source code." },
              { icon: Clock, title: "24h Response", desc: "Detailed timeline and quote delivered within 24 hours." },
            ].map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 border border-blue-100">
                  <g.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{g.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function QuoteCalculator() {
  const [selectedService, setSelectedService] = useState("Brand Design");
  const [selectedTimeline, setSelectedTimeline] = useState("Standard (1–2 Weeks)");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "Full Source / Project Files"
  ]);
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    { id: "Brand Design", label: "Brand Design", desc: "Identity, Logo, UI Systems" },
    { id: "Video Editing", label: "Video Editing", desc: "Reels, Commercials, 4K VFX" },
    { id: "Vibe Coding", label: "Vibe Coding", desc: "Fullstack Apps & Portfolios" },
    { id: "Full Creative Suite", label: "Full Creative Suite", desc: "End-to-End Visual Overhaul" }
  ];

  const timelineList = [
    "Express (48–72h Sprint)",
    "Standard (1–2 Weeks)",
    "Comprehensive (1 Month+)"
  ];

  const addonsList = [
    "Full Source / Project Files",
    "4K 60FPS Master Export",
    "DaVinci Color Grade + LUTs",
    "Sound Design & Audio Mix",
    "Live Web Deployment",
    "Rush Weekend Delivery"
  ];

  const toggleAddon = (addon: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Yashraj! I would like to get a project quote.\n\n` +
    `• Service: ${selectedService}\n` +
    `• Timeline: ${selectedTimeline}\n` +
    `• Add-ons: ${selectedAddons.length > 0 ? selectedAddons.join(", ") : "Standard package"}\n` +
    (name ? `• Name: ${name}\n` : "") +
    (contactInfo ? `• Contact: ${contactInfo}\n` : "") +
    (details ? `• Project Details: ${details}\n` : "")
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-blue-500/5">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-200 shadow-md">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold font-podium text-slate-900 mb-2">Quote Request Sent!</h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
            Thanks {name || "there"}! Yashraj will review your project requirements and send a customized quote within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919773135547?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              Chat Directly on WhatsApp
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-outline text-sm"
            >
              Modify Scope
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Select Service */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              1. Select Service Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesList.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedService(s.id)}
                  className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedService === s.id
                      ? "border-blue-600 bg-blue-50/50 shadow-md shadow-blue-500/10"
                      : "border-slate-200 hover:border-blue-200 hover:bg-slate-50/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{s.label}</span>
                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      selectedService === s.id ? "border-blue-600 bg-blue-600" : "border-slate-300"
                    }`}>
                      {selectedService === s.id && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{s.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Timeline */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              2. Preferred Timeline
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {timelineList.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTimeline(t)}
                  className={`py-3 px-4 rounded-xl text-xs font-semibold border-2 transition-all duration-200 text-center ${
                    selectedTimeline === t
                      ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50/30"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Add-on Capabilities */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              3. Deliverable Add-ons (Optional)
            </label>
            <div className="flex flex-wrap gap-2">
              {addonsList.map((addon) => {
                const isSelected = selectedAddons.includes(addon);
                return (
                  <button
                    key={addon}
                    type="button"
                    onClick={() => toggleAddon(addon)}
                    className={`px-3.5 py-2 rounded-full text-xs font-medium border transition-all duration-200 flex items-center gap-1.5 ${
                      isSelected
                        ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold"
                        : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                      isSelected ? "bg-blue-600 text-white" : "border border-slate-300"
                    }`}>
                      {isSelected && "✓"}
                    </span>
                    {addon}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Contact info */}
          <div className="border-t border-slate-100 pt-6 space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              4. Your Contact & Project Overview
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  placeholder="Email or WhatsApp Number *"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                />
              </div>
            </div>
            <div>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Brief project details, reference links, or specific requirements..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all resize-none"
              />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="submit"
              className="btn-gradient w-full sm:w-auto sm:flex-1 justify-center py-3.5 text-sm inline-flex items-center gap-2 shadow-lg shadow-blue-500/25"
            >
              <Send className="w-4 h-4" />
              Submit Quote Request
            </button>
            <a
              href={`https://wa.me/919773135547?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto justify-center py-3.5 text-sm inline-flex items-center gap-2 hover:border-emerald-500 hover:text-emerald-600"
            >
              <MessageSquare className="w-4 h-4" />
              Quote via WhatsApp
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
