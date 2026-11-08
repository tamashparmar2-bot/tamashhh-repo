import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Layers,
  Film,
  Box,
  Palette,
  CheckCircle,
  ArrowRight,
  Send,
  MessageSquare,
  Clock,
  ShieldCheck,
  Check,
  Zap
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
    icon: Film,
    title: "Commercial Video Editing",
    subtitle: "Rhythmic, high-octane commercial pacing",
    description:
      "Precision video editing engineered around musical cadence and sound design. From automotive delivery films to high-impact brand showcases, every cut is timed with frame accuracy.",
    features: [
      "Commercial Brand Films",
      "Automotive & Event Highlights",
      "Bespoke Foley Sound Design",
      "Musical Beat Synchronization",
      "High-Retention Vertical Reels (9:16)",
      "Speed Ramping & Smooth Match Cuts"
    ],
    videoUrl: "/portfolio/fronx-car-delivery.mp4"
  },
  {
    icon: Layers,
    title: "Motion Graphics & Kinetic Type",
    subtitle: "Visual rhythm that captivates and converts",
    description:
      "Bold typography, sleek animated logo reveals, and custom UI transitions crafted with mathematical easing curves and editorial sophistication.",
    features: [
      "Kinetic Typography Sequences",
      "2D & 3D Title Direction",
      "Logo Idents & Brand Bumpers",
      "Vector Shape Rigging",
      "Animated UI Choreographies",
      "Clean Loopable Social Graphics"
    ],
    videoUrl: "/portfolio/priya-web-promo.mp4"
  },
  {
    icon: Box,
    title: "3D CGI & Physics Simulations",
    subtitle: "Photorealistic digital lighting and dynamic movement",
    description:
      "Bespoke 3D CGI product reveals, dynamic collision physics, tactile procedural texturing, and photorealistic macro camera passes rendered in Blender and Cinema 4D.",
    features: [
      "Photorealistic Product Reveals",
      "Rigid Body & Soft Dynamics",
      "Procedural Materials & Glass Dispersion",
      "Macro Studio Key Lighting",
      "Multi-Pass Compositing",
      "Optical Flares & Film Grain"
    ],
    videoUrl: "/portfolio/dice-animation.mp4"
  },
  {
    icon: Palette,
    title: "Color Grading & Sound Foley",
    subtitle: "Cinematic depth, contrast, and tactile acoustic impact",
    description:
      "Transforming flat camera profiles into rich, contrasty, and vibrant master grades in DaVinci Resolve Studio, complemented with customized multi-channel sound design.",
    features: [
      "DaVinci Resolve Studio Color Pipeline",
      "Sony S-Log3, Canon Log & Arri Handling",
      "Custom Brand LUT Creation",
      "Multi-Layer Sound Foley & Whooshes",
      "Sub-Bass Drops & Transitions",
      "4K ProRes & H.264 Master Exports"
    ],
    videoUrl: "/portfolio/obsidian-draft-1.mp4"
  }
];

export default function Services() {
  return (
    <div className="bg-white min-h-screen text-navy-900 pt-8">
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/40 border-b border-slate-100">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative px-6 sm:px-10 lg:px-16 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-blue-700 text-xs tracking-[0.2em] uppercase font-inter font-bold">
              Creative Disciplines
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-podium text-navy-900 tracking-tight leading-[0.95]"
          >
            Motion & Post-Production
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-slate-600 font-space max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal"
          >
            From high-energy commercial edits to procedural 3D simulations and DaVinci color grading, I provide end-to-end visual finishing for ambitious brands.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 flex justify-center"
          >
            <Link
              to="/video-editor-anand"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-400 shadow-sm transition-all"
            >
              <span>Based in Anand, Gujarat</span>
              <span className="text-blue-600 font-bold">• Local Video Editing Services →</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        {services.map((s, i) => (
          <div key={s.title}>
            {i > 0 && <div className="h-px bg-slate-200 my-16 lg:my-24 max-w-5xl mx-auto" />}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto"
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center mb-6 shadow-sm">
                  <s.icon className="w-7 h-7" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-podium text-navy-900 mb-2">{s.title}</h2>
                <p className="text-base font-space font-medium text-blue-600 mb-4">{s.subtitle}</p>
                <p className="text-slate-600 font-space leading-relaxed mb-8 text-base">{s.description}</p>
                
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
                >
                  {s.features.map((f) => (
                    <motion.div key={f} variants={fadeUp} className="flex items-center gap-2 text-sm text-slate-700 font-medium font-space">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {f}
                    </motion.div>
                  ))}
                </motion.div>

                <a href="#quote" className="btn-gradient inline-flex items-center gap-2">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Visual Thumbnail Video */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="p-2 bg-white border border-slate-200 shadow-xl rounded-2xl">
                  <div className="aspect-[16/10] rounded-xl bg-slate-900 flex items-center justify-center relative overflow-hidden">
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

      {/* Get a Quote Section */}
      <section id="quote" className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-white via-blue-50/20 to-slate-50/50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-blue-600 text-xs tracking-[0.25em] uppercase font-bold mb-3 inline-block font-mono">
              PROJECT ESTIMATE
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-podium text-navy-900 tracking-tight">
              Get a Project Quote
            </h2>
            <p className="mt-4 text-slate-600 font-space max-w-xl mx-auto text-base leading-relaxed">
              Select your project parameters below to receive an exact estimate and availability within 12 hours.
            </p>
          </div>

          <QuoteCalculator />

          {/* Guarantees / Value Props Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: Zap, title: "48–72h Sprints", desc: "High-priority turnarounds available for urgent campaign deadlines." },
              { icon: MessageSquare, title: "Direct 1-on-1", desc: "Collaborate directly with Yashraj with zero agency middle layers." },
              { icon: ShieldCheck, title: "Full Ownership", desc: "You own 100% of final master exports and raw project assets." },
              { icon: Clock, title: "12h Response", desc: "Direct quote and availability timeline delivered within 12 hours." },
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
                <h4 className="font-bold text-navy-900 font-space text-sm mb-1">{g.title}</h4>
                <p className="text-xs text-slate-500 font-inter leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function QuoteCalculator() {
  const [selectedService, setSelectedService] = useState("Commercial Video Editing");
  const [selectedTimeline, setSelectedTimeline] = useState("Standard (1–2 Weeks)");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "Full Source / Project Files"
  ]);
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    { id: "Commercial Video Editing", label: "Commercial Video Editing", desc: "Reels, Commercials, 4K Master" },
    { id: "Motion Graphics & Kinetic Type", label: "Motion Graphics", desc: "Title Sequences, Idents, UI" },
    { id: "3D CGI & Simulations", label: "3D CGI & Simulations", desc: "Product Reveals, Procedural 3D" },
    { id: "Full Motion & Finishing Suite", label: "Full Motion Suite", desc: "End-to-End Post-Production" }
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
    "Vertical 9:16 Social Cutdowns",
    "Rush Weekend Delivery"
  ];

  const toggleAddon = (addon: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Yashraj! I would like to get a project quote.\n\n` +
    `• Discipline: ${selectedService}\n` +
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
          <h3 className="font-podium text-3xl font-bold text-navy-900 mb-2">Quote Request Sent!</h3>
          <p className="text-slate-600 font-space text-sm max-w-md mx-auto mb-6">
            Thank you for reaching out. I have received your project details and will send a detailed estimate and proposal within 12 hours.
          </p>
          <a
            href={`https://wa.me/919773135547?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex items-center gap-2"
          >
            Open in WhatsApp
          </a>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1 */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-3">
              1. Select Production Discipline
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesList.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedService === s.id
                      ? "border-blue-600 bg-blue-50/50 shadow-md shadow-blue-500/10"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <p className="font-space font-bold text-sm text-navy-900">{s.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-3">
              2. Timeline Expectation
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {timelineList.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setSelectedTimeline(t)}
                  className={`p-3.5 rounded-2xl text-center border text-xs font-space font-semibold transition-all cursor-pointer ${
                    selectedTimeline === t
                      ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "border-slate-200 text-slate-700 hover:border-slate-300 bg-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-3">
              3. Deliverable Add-ons (Optional)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {addonsList.map((addon) => {
                const checked = selectedAddons.includes(addon);
                return (
                  <button
                    type="button"
                    key={addon}
                    onClick={() => toggleAddon(addon)}
                    className={`p-2.5 rounded-xl border text-xs font-space font-medium text-left flex items-center justify-between transition-all cursor-pointer ${
                      checked
                        ? "border-blue-600 bg-blue-50/60 text-blue-700"
                        : "border-slate-200 text-slate-600 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <span className="truncate pr-1">{addon}</span>
                    <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                      checked ? "bg-blue-600 border-blue-600 text-white" : "border-slate-300"
                    }`}>
                      {checked && <Check className="w-2.5 h-2.5" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-2">
                Email or WhatsApp Number
              </label>
              <input
                type="text"
                required
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="contact@brand.com or +91 ..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 font-bold mb-2">
              Brief Project Notes or Video Links
            </label>
            <textarea
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Tell me about your footage, aesthetic preferences, reference videos, or target delivery date..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-navy-900 text-sm focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Submit CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="btn-gradient flex-1 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              SUBMIT QUOTE REQUEST
            </button>
            <a
              href={`https://wa.me/919773135547?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              SEND ON WHATSAPP
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
