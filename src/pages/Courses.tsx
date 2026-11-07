import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  BarChart,
  ChevronDown,
  GraduationCap,
  Rocket,
  Infinity,
  Users,
  Award,
  MessageCircle,
} from "lucide-react";

const courses = [
  {
    title: "UI/UX & Product Design Masterclass",
    description:
      "Learn end-to-end product design — from user research and wireframing to high-fidelity minimal design systems and design handoff.",
    duration: "12 Hours",
    level: "Intermediate",
    price: "₹4,999",
    badge: "Popular",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Cinematic Video Editing Bootcamp",
    description:
      "Master professional video editing workflows using Premiere Pro, After Effects, and DaVinci Resolve. Color grading, pacing & sound design.",
    duration: "18 Hours",
    level: "All Levels",
    price: "₹5,999",
    badge: "Featured",
    gradient: "from-blue-700 to-slate-900",
  },
  {
    title: "Modern Brand Identity & Typography",
    description:
      "Create bold, memorable brand identities that drive results. Learn layout grids, typography hierarchies, and cohesive brand systems.",
    duration: "8 Hours",
    level: "Beginner",
    price: "₹2,999",
    badge: "Best Seller",
    gradient: "from-blue-500 to-blue-700",
  },
];

const features = [
  {
    icon: GraduationCap,
    title: "Expert Mentorship",
    description:
      "Learn directly from real-world projects with practical, production-ready design practices.",
  },
  {
    icon: Rocket,
    title: "Hands-On Projects",
    description:
      "Build a portfolio of stunning client-ready work to land high-value creative opportunities.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    description:
      "Enroll once and access all course materials, exercise files, and updates forever.",
  },
  {
    icon: Users,
    title: "Creative Network",
    description:
      "Connect with driven creators, share project feedback, and grow in a focused community.",
  },
  {
    icon: Award,
    title: "Verified Certificate",
    description:
      "Earn a recognized certificate of completion to validate your expertise on LinkedIn and resumes.",
  },
  {
    icon: MessageCircle,
    title: "1-on-1 Feedback",
    description:
      "Get actionable design critiques and personal guidance to refine your work.",
  },
];

const faqs = [
  {
    question: "What payment options are available?",
    answer:
      "All major credit and debit cards, UPI, net banking, and popular wallets are accepted. International payments are supported securely via Stripe.",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Most courses are structured from the fundamentals up and require zero prior experience. Advanced sections build progressively on foundational modules.",
  },
  {
    question: "How long do I retain access to the course content?",
    answer:
      "You receive lifetime access to all video lessons, project files, and future curriculum additions. Learn completely at your own pace.",
  },
  {
    question: "Do I receive a certificate upon finishing?",
    answer:
      "Yes! After completing all modules and the capstone project, you will be issued a verified certificate of completion.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "A 7-day money-back guarantee applies to all courses. If you are not satisfied, simply email support within 7 days for a full refund.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Courses() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ───── Hero Banner ───── */}
      <section className="relative py-28 lg:py-36 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/40 border-b border-slate-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase mb-4 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200"
          >
            Learn &amp; Master
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-podium font-bold text-slate-900 leading-tight"
          >
            Master High-Impact <span className="gradient-text">Creative Skills</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Practical, project-driven masterclasses built to fast-track your design, editing, and creative career.
          </motion.p>
        </div>
      </section>

      {/* ───── Course Cards ───── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative">
                    <div
                      className={`aspect-video bg-gradient-to-br ${course.gradient} flex items-center justify-center`}
                    >
                      <span className="text-4xl font-podium font-bold text-white/20 select-none">
                        0{idx + 1}
                      </span>
                    </div>
                    <span className="absolute top-4 right-4 bg-white/95 text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-slate-200/80">
                      {course.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-blue-600" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BarChart className="w-4 h-4 text-blue-600" />
                        {course.level}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold font-podium text-blue-600">
                    {course.price}
                  </span>
                  <button className="btn-gradient px-5 py-2.5 rounded-xl text-sm font-semibold text-white">
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── Why Choose Section ───── */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-podium font-bold text-slate-900 mt-4">
              Why Learn With YASHFX
            </h2>
            <div className="gradient-line mx-auto mt-4" />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-blue-400/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{feat.title}</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ───── FAQ Section ───── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 uppercase bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-podium font-bold text-slate-900 mt-4">
              Frequently Asked Questions
            </h2>
            <div className="gradient-line mx-auto mt-4" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
