import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play, Volume2 } from "lucide-react";
import { PROJECTS, type Project } from "../data/projects";

const categories = ["All", "Commercial Editing", "Motion Graphics", "3D & CGI"] as const;

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");

  const handleMouseEnterVideo = (e: React.MouseEvent<HTMLElement>) => {
    // Mute all other videos
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

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="bg-white min-h-screen text-slate-900 pt-8 pb-24">
      {/* Editorial Header */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/30 border-b border-slate-100">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative px-6 sm:px-10 lg:px-16 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-blue-700 text-xs tracking-[0.2em] uppercase font-inter font-bold">
              Selected Work 2023–2024
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-podium text-slate-900 tracking-tight leading-[0.95]"
          >
            Motion & Editing Portfolio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal"
          >
            A curated archive of commercial brand films, 3D CGI simulations, visual effects tracking, and vertical motion design. Hover over any project to preview live sound.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 sm:px-10 lg:px-16 pt-12 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-200 cursor-pointer ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 shadow-sm"
              }`}
            >
              {cat}
              <span className="ml-2 text-[10px] opacity-75 font-mono">
                ({cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </motion.div>
      </section>

      {/* Masonry / Grid for Responsive 16:9 and 9:16 Layouts */}
      <section className="px-6 sm:px-10 lg:px-16 py-10">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto [column-fill:_balance]">
          <AnimatePresence>
            {filtered.map((project: Project, idx: number) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                onMouseEnter={handleMouseEnterVideo}
                onMouseLeave={handleMouseLeaveVideo}
                className="break-inside-avoid mb-6 group bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-blue-400 transition-all duration-300"
              >
                <Link to={`/work/${project.slug}`} className="block relative">
                  {/* Aspect Ratio Box */}
                  <div
                    className={`relative w-full ${
                      project.aspect === "9:16" ? "aspect-[9/16]" : "aspect-video"
                    } overflow-hidden bg-slate-950`}
                  >
                    <video
                      src={project.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onLoadedData={(e) => e.currentTarget.play().catch(() => {})}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay for Top Badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-slate-950/40 pointer-events-none" />

                    {/* Top Left: Ratio & Category Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 pointer-events-none">
                      <span className="text-[10px] uppercase tracking-wider font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/75 text-white backdrop-blur-md border border-white/10 shadow-sm">
                        {project.aspect === "9:16" ? "9:16 REEL" : "16:9 CINEMATIC"}
                      </span>
                    </div>

                    {/* Top Right: Live Audio Indicator */}
                    <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/95 text-white text-[10px] font-mono shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <Volume2 className="w-3.5 h-3.5 animate-pulse text-blue-200" />
                      <span className="font-semibold tracking-wider">AUDIO ON</span>
                    </div>

                    {/* Center hover play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-600/40 transform scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Metadata overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-5 pointer-events-none">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                          {project.category}
                        </span>
                        <span className="text-white/40">•</span>
                        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="font-podium text-2xl text-white font-bold leading-tight group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-1 mt-1 font-inter">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  {/* Editorial Card Footer */}
                  <div className="p-4 bg-white flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      {project.software.slice(0, 2).join(" • ")}
                    </span>
                    <span className="text-xs font-bold font-inter text-blue-600 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      View Project <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA to start project */}
      <section className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <div className="p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
            Looking for custom visuals?
          </span>
          <h2 className="font-podium text-3xl sm:text-4xl text-slate-900 font-bold mt-2 mb-4">
            Have a project in mind? Let&apos;s build it.
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base mb-6 font-normal">
            From high-octane commercial edits to complex 3D simulations, I deliver production-ready motion tailored to your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gradient inline-flex items-center gap-2">
              REQUEST A QUOTE
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919773135547?text=Hello%20YASHFX!%20I'd%20like%20to%20discuss%20a%20motion%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
