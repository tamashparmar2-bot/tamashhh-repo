import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play, X } from "lucide-react";

const categories = ["All", "Design", "Editing", "Courses"];

interface Project {
  title: string;
  category: string;
  gradient: string;
  videoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Tracking VFX Showcase",
    category: "Editing",
    gradient: "from-blue-600 via-purple-600 to-red-500",
    videoUrl: "/portfolio/tracking.mp4"
  },
  {
    title: "CGI Saregama Ad",
    category: "Editing",
    gradient: "from-red-500 via-pink-500 to-purple-600",
    videoUrl: "/portfolio/cgi-saregama.mp4"
  },
  {
    title: "Tamashhh Brand Film",
    category: "Editing",
    gradient: "from-blue-600 via-purple-600 to-red-500",
    videoUrl: "/portfolio/obsidian-draft-1.mp4"
  },
  {
    title: "Epic Journey Highlight",
    category: "Editing",
    gradient: "from-purple-600 via-indigo-600 to-blue-500",
    videoUrl: "/portfolio/epic-journey.mp4"
  },
  {
    title: "Mango Social Reel",
    category: "Editing",
    gradient: "from-orange-500 to-yellow-500",
    videoUrl: "/portfolio/mango-reel.mp4"
  },
  {
    title: "V5 Motion Showcase",
    category: "Editing",
    gradient: "from-violet-600 via-pink-600 to-red-400",
    videoUrl: "/portfolio/v5.mp4"
  },
  {
    title: "Luminara Brand Identity",
    category: "Design",
    gradient: "from-blue-600 to-blue-400"
  },
  {
    title: "Aurora's Journey",
    category: "Editing",
    gradient: "from-purple-600 to-purple-400"
  },
  {
    title: "Zenith Finance App",
    category: "Design",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Aurélien London",
    category: "Design",
    gradient: "from-red-600 to-red-400"
  },
  {
    title: "Social Media Mastery",
    category: "Courses",
    gradient: "from-red-500 to-orange-400"
  },
  {
    title: "Motion Squad Showreel",
    category: "Editing",
    gradient: "from-purple-500 to-pink-500"
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const handleOpenVideo = (url: string, title: string) => {
    setSelectedVideo(url);
    setSelectedTitle(title);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setSelectedTitle(null);
  };

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="relative px-6 sm:px-10 lg:px-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 text-xs tracking-[0.3em] uppercase font-semibold mb-6"
          >
            MY WORK
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-h"
          >
            Selected projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-white/50 max-w-xl mx-auto"
          >
            A curated collection of my finest work across design, editing, and creative education.
          </motion.p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="px-6 sm:px-10 lg:px-16 pb-24">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 text-white"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => project.videoUrl && handleOpenVideo(project.videoUrl, project.title)}
                className="group glass-card overflow-hidden cursor-pointer"
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-zinc-950"
                  onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector("video");
                    if (video) video.play().catch(() => {});
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector("video");
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                    }
                  }}
                >
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      preload="metadata"
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-95 transition-all duration-300"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}
                    />
                  )}
                  <div className="absolute inset-0 bg-dark/20 pointer-events-none" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 pointer-events-none">
                    <span className="text-xs uppercase tracking-widest text-blue-400 mb-1">
                      {project.category}
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      {project.videoUrl ? (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 flex items-center justify-center shadow-lg">
                          <Play className="w-4 h-4 text-white fill-current translate-x-0.5" />
                        </div>
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-white/60" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-white/30">
                      {project.category}
                    </span>
                    {project.videoUrl && (
                      <span className="text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/50">
                        VIDEO
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white mt-1">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card max-w-3xl mx-auto p-10 lg:p-14 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Have a project in mind?</h2>
          <p className="text-white/40 mb-8 max-w-md mx-auto">
            Let's collaborate and create something extraordinary together.
          </p>
          <Link to="/contact" className="btn-gradient">
            Let's Talk <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseVideo}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          >
            {/* Header info */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
              <h4 className="text-white font-bold font-podium text-lg sm:text-xl uppercase tracking-wider">
                {selectedTitle}
              </h4>
              <button
                type="button"
                onClick={handleCloseVideo}
                className="pointer-events-auto p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video element wrapper */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80"
            >
              <video
                src={selectedVideo}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
