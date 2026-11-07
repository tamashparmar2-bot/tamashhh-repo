import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play, X, Volume2 } from "lucide-react";

const categories = ["All", "Editing", "Vibe Coding"];

interface Project {
  title: string;
  category: string;
  gradient: string;
  videoUrl?: string;
  imageUrl?: string;
  projectUrl?: string;
  aspect: "9:16" | "16:9" | "16:10";
}

const projects: Project[] = [
  {
    title: "YP's Restroo",
    category: "Editing",
    gradient: "from-blue-600 via-indigo-600 to-slate-900",
    videoUrl: "/portfolio/yps-restroo.mp4",
    aspect: "9:16"
  },
  {
    title: "Fronx Car Delivery",
    category: "Editing",
    gradient: "from-blue-600 via-cyan-600 to-indigo-900",
    videoUrl: "/portfolio/fronx-car-delivery.mp4",
    aspect: "16:9"
  },
  {
    title: "Navratri Project",
    category: "Editing",
    gradient: "from-blue-500 via-indigo-600 to-slate-900",
    videoUrl: "/portfolio/navratri-project.mp4",
    aspect: "16:9"
  },
  {
    title: "Dice 3D Animation",
    category: "Editing",
    gradient: "from-blue-600 via-sky-500 to-indigo-800",
    videoUrl: "/portfolio/dice-animation.mp4",
    aspect: "9:16"
  },
  {
    title: "Priya Web Promo",
    category: "Editing",
    gradient: "from-sky-500 via-blue-600 to-indigo-900",
    videoUrl: "/portfolio/priya-web-promo.mp4",
    aspect: "9:16"
  },
  {
    title: "Tracking VFX Showcase",
    category: "Editing",
    gradient: "from-blue-600 via-indigo-600 to-slate-900",
    videoUrl: "/portfolio/tracking.mp4",
    aspect: "16:9"
  },
  {
    title: "CGI Saregama Ad",
    category: "Editing",
    gradient: "from-blue-700 via-indigo-600 to-slate-900",
    videoUrl: "/portfolio/cgi-saregama.mp4",
    aspect: "9:16"
  },
  {
    title: "yashfx Brand Film",
    category: "Editing",
    gradient: "from-blue-600 via-indigo-600 to-slate-900",
    videoUrl: "/portfolio/obsidian-draft-1.mp4",
    aspect: "16:9"
  },
  {
    title: "Epic Journey Highlight",
    category: "Editing",
    gradient: "from-indigo-600 via-blue-600 to-slate-900",
    videoUrl: "/portfolio/epic-journey.mp4",
    aspect: "9:16"
  },
  {
    title: "Mango Social Reel",
    category: "Editing",
    gradient: "from-sky-500 via-blue-600 to-slate-900",
    videoUrl: "/portfolio/mango-reel.mp4",
    aspect: "9:16"
  },
  {
    title: "V5 Motion Showcase",
    category: "Editing",
    gradient: "from-blue-600 via-indigo-700 to-slate-900",
    videoUrl: "/portfolio/v5.mp4",
    aspect: "9:16"
  },
  {
    title: "Creatikar Website",
    category: "Vibe Coding",
    gradient: "from-blue-600 via-indigo-600 to-slate-900",
    imageUrl: "/portfolio/creatikar-portfolio.png",
    projectUrl: "https://creatikar-website.vercel.app/",
    aspect: "16:10"
  },
  {
    title: "Zara Kai Fashion Portfolio",
    category: "Vibe Coding",
    gradient: "from-blue-600 via-indigo-600 to-slate-900",
    imageUrl: "/portfolio/fashion-portfolio.png",
    projectUrl: "/fashion_portfolio_modern.html",
    aspect: "16:10"
  },
  {
    title: "Priya Solanki Portfolio",
    category: "Vibe Coding",
    gradient: "from-blue-600 via-indigo-600 to-slate-900",
    imageUrl: "/portfolio/priya-portfolio.png",
    projectUrl: "https://priya-solanki-portfolio.vercel.app/",
    aspect: "16:10"
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [selectedAspect, setSelectedAspect] = useState<"9:16" | "16:9" | "16:10">("16:9");

  const handleOpenVideo = (url: string, title: string, aspect: "9:16" | "16:9" | "16:10") => {
    setSelectedVideo(url);
    setSelectedTitle(title);
    setSelectedAspect(aspect);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setSelectedTitle(null);
  };

  const handleMouseEnterVideo = (e: React.MouseEvent<HTMLElement>) => {
    // Mute any other videos
    document.querySelectorAll("video").forEach((v) => {
      if (v !== e.currentTarget.querySelector("video")) {
        v.muted = true;
      }
    });
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeaveVideo = (e: React.MouseEvent<HTMLElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.muted = true;
    }
  };

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* Hero Header */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative px-6 sm:px-10 lg:px-16 text-center max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-600 text-xs tracking-[0.25em] uppercase font-bold mb-4"
          >
            SELECTED PRODUCTIONS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-podium text-slate-900 tracking-tight"
          >
            My Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            A curated showcase of video editing, visual effects, and speed vibe coding web apps.
          </motion.p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-200 ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid - Masonry Columns perfectly matching 9:16 and 16:9 aspect ratios */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto [column-fill:_balance]">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={project.videoUrl ? handleMouseEnterVideo : undefined}
                onMouseLeave={project.videoUrl ? handleMouseLeaveVideo : undefined}
                onClick={() => {
                  if (project.projectUrl) {
                    window.open(project.projectUrl, "_blank");
                  } else if (project.videoUrl) {
                    handleOpenVideo(project.videoUrl, project.title, project.aspect);
                  }
                }}
                className="break-inside-avoid mb-6 group glass-card overflow-hidden cursor-pointer bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-2xl hover:border-blue-400 transition-all duration-300"
              >
                <div
                  className={`relative ${
                    project.aspect === "9:16"
                      ? "aspect-[9/16]"
                      : project.aspect === "16:9"
                      ? "aspect-[16/9]"
                      : "aspect-[16/10]"
                  } overflow-hidden bg-slate-950`}
                >
                  {project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      onLoadedData={(e) => e.currentTarget.play().catch(() => {})}
                      className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1.02]"
                    />
                  ) : project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                    />
                  )}
                  <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />

                  {/* Format ratio pill tag (Top Left) */}
                  <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                    <span className="text-[10px] uppercase tracking-wider font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/75 text-white backdrop-blur-md border border-white/10 shadow-sm">
                      {project.aspect === "9:16" ? "9:16 REEL" : project.aspect === "16:9" ? "16:9 CINEMATIC" : "WEB APP"}
                    </span>
                  </div>

                  {/* Audio indicator when video has sound (Top Right) */}
                  {project.videoUrl && (
                    <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/95 text-white text-[10px] font-mono shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <Volume2 className="w-3.5 h-3.5 animate-pulse text-blue-200" />
                      <span className="font-semibold tracking-wider">AUDIO ON</span>
                    </div>
                  )}

                  {/* Hover overlay with title & icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 pointer-events-none">
                    <span className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-1">
                      {project.category}
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white font-podium leading-tight">{project.title}</h3>
                      {project.videoUrl ? (
                        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/40">
                          <Play className="w-4 h-4 text-white fill-current translate-x-0.5" />
                        </div>
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/40">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                      {project.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                      {project.title}
                    </h3>
                  </div>
                  {project.videoUrl ? (
                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full ${
                      project.aspect === "9:16"
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}>
                      {project.aspect}
                    </span>
                  ) : project.projectUrl ? (
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full bg-blue-600 text-white shadow-sm">
                      LIVE APP
                    </span>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-slate-50/70 border-t border-slate-200/80">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card max-w-3xl mx-auto p-10 lg:p-14 text-center bg-white border border-slate-200/90 shadow-md shadow-slate-200/50"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-podium text-slate-900 mb-3">Have a project in mind?</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto text-base">
            Let's collaborate and create something extraordinary together.
          </p>
          <Link to="/contact" className="btn-gradient inline-flex items-center gap-2">
            Let's Talk <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Video Lightbox Modal with responsive aspect-ratio fitting */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseVideo}
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
          >
            {/* Header info */}
            <div className={`w-full flex items-center justify-between pointer-events-none z-10 mb-4 ${
              selectedAspect === "9:16" ? "max-w-sm" : "max-w-4xl"
            }`}>
              <h4 className="text-white font-bold font-podium text-lg sm:text-xl uppercase tracking-wider">
                {selectedTitle}
              </h4>
              <button
                type="button"
                onClick={handleCloseVideo}
                className="pointer-events-auto p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video element wrapper with adaptive 9:16 vs 16:9 ratio */}
            <motion.div
              initial={{ scale: 0.95, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black ${
                selectedAspect === "9:16"
                  ? "max-w-sm aspect-[9/16] max-h-[80vh]"
                  : "max-w-4xl aspect-video"
              }`}
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
