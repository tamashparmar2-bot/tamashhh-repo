import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layers, Film, BookOpen, CheckCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const services = [
  {
    icon: Layers,
    title: "Design",
    subtitle: "Visual identities that captivate",
    color: "#3b82f6",
    description:
      "We create stunning brand identities, UI/UX designs, and visual systems that resonate with your audience and elevate your brand presence.",
    features: ["Brand Identity", "UI/UX Design", "Social Media Graphics", "Packaging Design", "Logo Design", "Print Design"],
    gradient: "from-blue-600/20 to-blue-900/10",
  },
  {
    icon: Film,
    title: "Editing",
    subtitle: "Stories brought to life",
    color: "#8b5cf6",
    description:
      "Professional video editing, color grading, and motion graphics that transform raw footage into cinematic masterpieces.",
    features: ["Video Editing", "Color Grading", "Motion Graphics", "Sound Design", "VFX", "YouTube Content"],
    gradient: "from-purple-600/20 to-purple-900/10",
  },
  {
    icon: BookOpen,
    title: "Courses",
    subtitle: "Master your craft",
    color: "#ef4444",
    description:
      "Learn from industry professionals with hands-on courses designed to take your creative skills to the next level.",
    features: ["Live Classes", "Project-Based", "Certificate", "Community Access", "Lifetime Updates", "1-on-1 Mentoring"],
    gradient: "from-red-600/20 to-red-900/10",
  },
];

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your brand, goals, and audience through deep research." },
  { num: "02", title: "Strategy", desc: "Crafting a tailored approach that aligns with your vision and market." },
  { num: "03", title: "Creation", desc: "Bringing concepts to life with meticulous attention to every detail." },
  { num: "04", title: "Delivery", desc: "Polished final deliverables with ongoing support and refinement." },
];

const pricing = [
  {
    name: "Starter",
    price: "₹9,999",
    popular: false,
    features: ["1 Design concept", "2 Revisions", "3-day delivery", "Source files"],
  },
  {
    name: "Professional",
    price: "₹24,999",
    popular: true,
    features: ["3 Design concepts", "Unlimited revisions", "Priority delivery", "Source files", "Brand guide"],
  },
  {
    name: "Enterprise",
    price: "₹49,999+",
    popular: false,
    features: ["Custom scope", "Dedicated team", "Ongoing support", "All deliverables", "Strategy included"],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
        <div className="relative px-6 sm:px-10 lg:px-16 text-center">
          <motion.p {...fadeUp} className="text-blue-500 text-xs tracking-[0.3em] uppercase font-semibold mb-6">
            OUR SERVICES
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-h"
          >
            Crafted to perfection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-white/50 max-w-2xl mx-auto"
          >
            From brand identity to video production to creative education — we deliver end-to-end creative
            solutions tailored to your unique vision.
          </motion.p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="px-6 sm:px-10 lg:px-16 pb-24">
        {services.map((s, i) => (
          <div key={s.title}>
            {i > 0 && <div className="gradient-line my-16 lg:my-24 max-w-4xl mx-auto opacity-30" />}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                >
                  <s.icon className="w-6 h-6" style={{ color: s.color }} />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{s.title}</h2>
                <p className="text-lg text-white/50 mb-6">{s.subtitle}</p>
                <p className="text-white/40 leading-relaxed mb-8">{s.description}</p>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-3 mb-8"
                >
                  {s.features.map((f) => (
                    <motion.div key={f} variants={fadeUp} className="flex items-center gap-2 text-sm text-white/60">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: s.color }} />
                      {f}
                    </motion.div>
                  ))}
                </motion.div>
                <Link to="/contact" className="btn-gradient">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Visual */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className={`glass-card p-1 bg-gradient-to-br ${s.gradient}`}>
                  <div className="aspect-[4/3] rounded-xl bg-dark-100/80 flex items-center justify-center relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(circle at 30% 40%, ${s.color}40, transparent 60%), radial-gradient(circle at 70% 60%, ${s.color}20, transparent 50%)`,
                      }}
                    />
                    <s.icon className="w-20 h-20 opacity-10" style={{ color: s.color }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-dark-50 px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-blue-500 text-xs tracking-[0.3em] uppercase font-semibold mb-4">HOW WE WORK</p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text-h">Our Process</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 text-center"
            >
              <span className="text-5xl font-bold gradient-text">{step.num}</span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">{step.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-blue-500 text-xs tracking-[0.3em] uppercase font-semibold mb-4">PRICING</p>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text-h">Simple pricing</h2>
          <p className="mt-4 text-white/40 max-w-xl mx-auto">Transparent pricing for every stage of your brand journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`p-8 rounded-2xl ${
                plan.popular
                  ? "gradient-border bg-white/[0.04] scale-[1.03]"
                  : "glass-card"
              } relative`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-red-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold gradient-text">{plan.price}</span>
                <span className="text-white/30 text-sm ml-1">/project</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={plan.popular ? "btn-gradient w-full justify-center" : "btn-outline w-full justify-center"}>
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
