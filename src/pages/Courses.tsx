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
    title: "UI/UX Design Masterclass",
    description:
      "Learn end-to-end product design — from user research and wireframing to high-fidelity prototypes and handoff.",
    duration: "12 Hours",
    level: "Intermediate",
    price: "₹4,999",
    badge: "Popular",
    gradient: "from-blue-600 to-blue-400",
    badgeColor: "bg-blue-500",
  },
  {
    title: "Video Editing Bootcamp",
    description:
      "Master professional video editing workflows using industry-standard tools. Color grading, sound design & more.",
    duration: "18 Hours",
    level: "All Levels",
    price: "₹5,999",
    badge: "New",
    gradient: "from-purple-600 to-purple-400",
    badgeColor: "bg-purple-500",
  },
  {
    title: "Social Media Design",
    description:
      "Create scroll-stopping social media content that drives engagement. Templates, strategies & brand systems.",
    duration: "8 Hours",
    level: "Beginner",
    price: "₹2,999",
    badge: "Popular",
    gradient: "from-red-600 to-red-400",
    badgeColor: "bg-red-500",
  },
];

const features = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description:
      "Learn from seasoned professionals with years of real-world industry experience.",
  },
  {
    icon: Rocket,
    title: "Hands-On Projects",
    description:
      "Build a portfolio of stunning projects that showcase your skills to clients and employers.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    description:
      "Enroll once and access all course materials, updates, and resources forever.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Join a thriving community of creatives to collaborate, share work, and grow together.",
  },
  {
    icon: Award,
    title: "Certificate",
    description:
      "Earn a verified certificate of completion to validate your skills and boost your profile.",
  },
  {
    icon: MessageCircle,
    title: "1-on-1 Support",
    description:
      "Get personalized feedback and mentorship from instructors whenever you need it.",
  },
];

const faqs = [
  {
    question: "What payment options are available?",
    answer:
      "We accept all major credit and debit cards, UPI, net banking, and popular wallets. You can also pay via EMI options on select cards. International payments are supported through Stripe.",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Most of our courses are designed for beginners and require no prior experience. For intermediate and advanced courses, we recommend basic familiarity with the subject. Each course page lists specific prerequisites if any.",
  },
  {
    question: "How long do I have access to the course?",
    answer:
      "Once enrolled, you get lifetime access to the course content, including all future updates and additions. You can learn at your own pace and revisit the material anytime.",
  },
  {
    question: "Do I get a certificate after completion?",
    answer:
      "Yes! Upon completing all modules and assignments, you'll receive a verified digital certificate that you can share on LinkedIn, your portfolio, or with potential employers.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "We offer a 7-day money-back guarantee on all courses. If you're not satisfied with the content, simply reach out to our support team within 7 days of purchase for a full refund — no questions asked.",
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
    <main className="min-h-screen bg-dark text-white">
      {/* ───── Hero Banner ───── */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.3em] text-white/40 uppercase mb-6"
          >
            Learn &amp; Grow
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-podium font-bold gradient-text-h leading-tight"
          >
            Master creative skills
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            Practical, project-based courses designed by industry professionals
            to accelerate your creative career.
          </motion.p>
        </div>
      </section>

      {/* ───── Course Cards ───── */}
      <section className="py-24">
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
                className="glass-card rounded-xl overflow-hidden group"
              >
                {/* Image Area */}
                <div className="relative">
                  <div
                    className={`aspect-video bg-gradient-to-br ${course.gradient} rounded-t-xl flex items-center justify-center`}
                  >
                    <span className="text-4xl font-podium font-bold text-white/20 select-none">
                      0{idx + 1}
                    </span>
                  </div>
                  <span
                    className={`absolute top-4 right-4 ${course.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                  >
                    {course.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-white/40 mb-3">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BarChart className="w-4 h-4" />
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    {course.title}
                  </h3>
                  <p className="text-white/50 text-sm mt-2 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-bold gradient-text">
                      {course.price}
                    </span>
                    <button className="btn-gradient px-5 py-2.5 rounded-xl text-sm font-semibold">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── Why Learn With Us ───── */}
      <section className="py-24 bg-dark-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-podium font-bold gradient-text-h">
              Why choose our courses
            </h2>
            <div className="gradient-line mx-auto mt-6" />
          </motion.div>

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
                  className="glass-card rounded-xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-red-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                  <p className="text-white/50 text-sm mt-2 leading-relaxed">
                    {feat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ───── FAQ Section ───── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-podium font-bold gradient-text-h">
              Frequently asked questions
            </h2>
            <div className="gradient-line mx-auto mt-6" />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className="glass-card rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-white/40" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-white/60 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
