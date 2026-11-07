import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "The Future of Brand Design in 2026",
    excerpt:
      "Explore the emerging trends shaping brand identities — from AI-driven visuals to sustainable, minimal design systems.",
    category: "Design",
    date: "Dec 15",
    readTime: "5 min",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    title: "Color Grading Techniques for Cinematic Look",
    excerpt:
      "Learn professional color grading workflows that give your footage that clean cinematic, blockbuster quality.",
    category: "Editing",
    date: "Nov 28",
    readTime: "8 min",
    gradient: "from-blue-700 to-slate-900",
  },
  {
    title: "Building a Modern Personal Brand Online",
    excerpt:
      "A step-by-step guide to crafting an authentic personal brand that stands out with modern minimalism in the digital landscape.",
    category: "Strategy",
    date: "Nov 10",
    readTime: "6 min",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "UI/UX Trends You Can't Ignore",
    excerpt:
      "Stay ahead of the curve with cutting-edge interface design trends, 80-20 color architecture, and high-conversion layouts.",
    category: "Design",
    date: "Oct 22",
    readTime: "4 min",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    title: "How to Scale as a Freelance Creative",
    excerpt:
      "Everything you need to know about launching, positioning, and scaling a high-ticket freelance creative studio.",
    category: "Career",
    date: "Oct 5",
    readTime: "7 min",
    gradient: "from-slate-800 to-blue-900",
  },
  {
    title: "Motion Graphics & Visual Rhythm",
    excerpt:
      "Dive into the principles of motion design — from keyframing dynamics to pacing and audio-visual synchronicity.",
    category: "Editing",
    date: "Sep 18",
    readTime: "10 min",
    gradient: "from-blue-600 to-sky-600",
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

export default function Blog() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
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
            Insights &amp; Articles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-podium font-bold text-slate-900 leading-tight"
          >
            Creative Insights <span className="gradient-text">&amp; Thoughts</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Actionable breakdowns on branding, video editing, vibe coding, and digital design philosophy.
          </motion.p>
        </div>
      </section>

      {/* ───── Blog Grid ───── */}
      <section className="py-20 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article, idx) => (
              <motion.article
                key={idx}
                variants={item}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400/50 group cursor-pointer transition-all duration-300 flex flex-col justify-between"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div>
                  {/* Image Header Area */}
                  <div className="relative">
                    <div
                      className={`aspect-video bg-gradient-to-br ${article.gradient} rounded-t-2xl flex items-center justify-center`}
                    >
                      <span className="text-5xl font-podium font-bold text-white/20 select-none">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="absolute top-4 left-4 bg-white/95 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-slate-200/80">
                      {article.category}
                    </span>
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 text-sm mt-2.5 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Meta */}
                <div className="px-6 pb-6 pt-0 border-t border-slate-100 flex items-center justify-between text-slate-400 text-xs mt-2">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-blue-500" />
                      {article.readTime}
                    </span>
                  </div>
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── Newsletter CTA ───── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white max-w-2xl mx-auto p-10 sm:p-12 rounded-3xl text-center border border-slate-200 shadow-sm"
          >
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Weekly Letter
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-podium text-slate-900 mt-4">
              Stay ahead with YASHFX
            </h2>
            <p className="text-slate-600 mt-3 text-sm leading-relaxed max-w-lg mx-auto">
              Get the latest articles, design templates, and creative insights delivered straight to your inbox. No fluff, no spam.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 text-sm"
              />
              <button
                type="submit"
                className="btn-gradient px-8 py-3.5 rounded-xl font-semibold text-white flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-600 text-sm mt-4 font-semibold"
              >
                🎉 You're subscribed! Check your inbox for confirmation.
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
