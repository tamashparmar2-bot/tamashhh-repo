import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layers, Film, Code, CheckCircle, ArrowRight } from "lucide-react";

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

const pricing = [
  {
    name: "Starter",
    price: "₹9,999",
    popular: false,
    features: ["1 Core Design Concept", "2 Revision Rounds", "3-day Express Delivery", "Full Source Files"],
  },
  {
    name: "Professional",
    price: "₹24,999",
    popular: true,
    features: ["3 Comprehensive Concepts", "Unlimited Revisions", "Priority Turnaround", "Full Source & Asset Pack", "Complete Brand Guidelines"],
  },
  {
    name: "Enterprise",
    price: "₹49,999+",
    popular: false,
    features: ["Custom End-to-End Scope", "Direct 1-on-1 Consultation", "Ongoing Monthly Support", "All Formats & Raw Source", "Full Strategic Direction"],
  },
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
                      className="absolute inset-0 w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
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

      {/* Pricing */}
      <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-xs tracking-[0.25em] uppercase font-bold mb-3">INVESTMENT</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-podium text-slate-900 tracking-tight">Transparent Pricing</h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-base">Clear, upfront packages for every stage of your brand's growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`p-8 sm:p-10 rounded-2xl flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? "bg-white border-2 border-blue-600 shadow-2xl shadow-blue-500/15 scale-[1.03] z-10"
                  : "bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="text-2xl font-bold font-podium text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-6 flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-bold text-slate-900 font-podium">{plan.price}</span>
                  <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider ml-2">/ project</span>
                </div>
                
                <ul className="space-y-3.5 mb-8 border-t border-slate-100 pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className={plan.popular ? "btn-gradient w-full justify-center shadow-lg shadow-blue-500/25" : "btn-outline w-full justify-center"}>
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
