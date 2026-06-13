import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "The Future of Brand Design in 2025",
    excerpt:
      "Explore the emerging trends shaping brand identities — from AI-driven visuals to sustainable design systems.",
    category: "Design",
    date: "Dec 15",
    readTime: "5 min",
    gradient: "from-blue-600 to-cyan-400",
    categoryColor: "text-blue-400",
    badgeBg: "bg-blue-500/20",
  },
  {
    title: "Color Grading Techniques for Cinematic Look",
    excerpt:
      "Learn professional color grading workflows that give your footage that cinematic, blockbuster quality.",
    category: "Editing",
    date: "Nov 28",
    readTime: "8 min",
    gradient: "from-purple-600 to-pink-400",
    categoryColor: "text-purple-400",
    badgeBg: "bg-purple-500/20",
  },
  {
    title: "Building a Personal Brand Online",
    excerpt:
      "A step-by-step guide to crafting an authentic personal brand that stands out in the digital landscape.",
    category: "Strategy",
    date: "Nov 10",
    readTime: "6 min",
    gradient: "from-emerald-600 to-teal-400",
    categoryColor: "text-emerald-400",
    badgeBg: "bg-emerald-500/20",
  },
  {
    title: "UI/UX Trends You Can't Ignore",
    excerpt:
      "Stay ahead of the curve with these cutting-edge interface design trends reshaping digital experiences.",
    category: "Design",
    date: "Oct 22",
    readTime: "4 min",
    gradient: "from-orange-600 to-amber-400",
    categoryColor: "text-blue-400",
    badgeBg: "bg-blue-500/20",
  },
  {
    title: "How to Start Freelancing in Design",
    excerpt:
      "Everything you need to know about launching a successful freelance design career from scratch.",
    category: "Career",
    date: "Oct 5",
    readTime: "7 min",
    gradient: "from-red-600 to-rose-400",
    categoryColor: "text-red-400",
    badgeBg: "bg-red-500/20",
  },
  {
    title: "Motion Graphics: A Beginner's Guide",
    excerpt:
      "Dive into the world of motion design — from basic principles to creating your first animated project.",
    category: "Editing",
    date: "Sep 18",
    readTime: "10 min",
    gradient: "from-indigo-600 to-violet-400",
    categoryColor: "text-purple-400",
    badgeBg: "bg-purple-500/20",
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
    <main className="min-h-screen bg-dark text-white">
      {/* ───── Hero Banner ───── */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.3em] text-white/40 uppercase mb-6"
          >
            Insights
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-podium font-bold gradient-text-h leading-tight"
          >
            Our blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            Creative insights, tips, and industry trends
          </motion.p>
        </div>
      </section>

      {/* ───── Blog Grid ───── */}
      <section className="py-12 pb-24">
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
                className="glass-card rounded-xl overflow-hidden group cursor-pointer"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Image Area */}
                <div className="relative">
                  <div
                    className={`aspect-video bg-gradient-to-br ${article.gradient} rounded-t-xl flex items-center justify-center`}
                  >
                    <span className="text-5xl font-podium font-bold text-white/10 select-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    className={`absolute top-4 left-4 ${article.badgeBg} backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10`}
                  >
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span
                    className={`text-xs uppercase tracking-wider ${article.categoryColor} font-semibold`}
                  >
                    {article.category}
                  </span>

                  <h3 className="text-lg font-bold text-white mt-2 group-hover:text-white/90 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-white/50 text-sm mt-2 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-white/30 text-xs mt-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── Newsletter CTA ───── */}
      <section className="py-24 bg-dark-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card max-w-2xl mx-auto p-10 rounded-2xl text-center"
          >
            <h2 className="text-2xl font-bold gradient-text">
              Stay in the loop
            </h2>
            <p className="text-white/50 mt-3 text-sm leading-relaxed">
              Get the latest articles, tutorials, and creative resources
              delivered straight to your inbox. No spam, ever.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/30 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 outline-none transition-colors duration-200"
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
                className="text-green-400 text-sm mt-4 font-medium"
              >
                🎉 You're subscribed! Check your inbox.
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
