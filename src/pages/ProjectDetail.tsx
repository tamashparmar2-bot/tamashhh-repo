import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Volume2,
  VolumeX,
  CheckCircle2,
  Calendar,
  User,
  Briefcase,
  Monitor
} from "lucide-react";
import { PROJECTS, getProjectBySlug } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [isMuted, setIsMuted] = useState(true);

  // Scroll to top and set page metadata on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMuted(true);

    if (project) {
      document.title = `${project.title} | ${project.category} Portfolio – YASHFX`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          `${project.tagline} Built with ${project.software.slice(0, 3).join(", ")} by Yashraj Parmar (YASHFX).`
        );
      }
    }
  }, [slug, project]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-podium text-5xl text-navy-900 mb-4">Project Not Found</h1>
        <p className="text-slate-600 mb-8 max-w-md">The project you are looking for does not exist or has been relocated.</p>
        <Link to="/portfolio" className="btn-gradient inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Selected Work
        </Link>
      </div>
    );
  }

  // Next and previous project calculation
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="bg-white min-h-screen text-navy-900 pt-8 pb-24">
      {/* Top back bar */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 mb-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors py-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Work</span>
        </Link>
      </div>

      {/* Main Project Header */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 mb-12">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {project.category}
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
            {project.year}
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
            {project.aspect === "9:16" ? "Vertical Reel 9:16" : "Cinematic 16:9"}
          </span>
        </div>

        <h1 className="font-podium text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-navy-900 leading-[0.95] mb-6">
          {project.title}
        </h1>

        <p className="font-space text-lg sm:text-xl text-slate-700 font-medium max-w-3xl leading-relaxed">
          {project.tagline}
        </p>
      </section>

      {/* Cinematic Main Video Showcase */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 mb-16">
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-2xl shadow-blue-500/10 group">
          <div className={`relative w-full ${project.aspect === "9:16" ? "max-w-md mx-auto aspect-[9/16]" : "aspect-video"}`}>
            <video
              src={project.videoUrl}
              autoPlay
              loop
              playsInline
              preload="auto"
              muted={isMuted}
              className="w-full h-full object-cover"
            />

            {/* Mute/Unmute Overlay Control */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-5 right-5 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-xs font-mono hover:bg-blue-600 transition-all shadow-lg border border-white/10"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-300" />
                  <span>Unmute Audio</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-blue-300 animate-pulse" />
                  <span>Audio Playing</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Project Meta Details Strip */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5 mb-1 font-bold">
              <Briefcase className="w-3 h-3 text-blue-600" /> Client
            </span>
            <p className="font-space font-bold text-navy-900 text-sm sm:text-base">{project.client}</p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5 mb-1 font-bold">
              <User className="w-3 h-3 text-blue-600" /> Role
            </span>
            <p className="font-space font-bold text-navy-900 text-sm sm:text-base">{project.role}</p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5 mb-1 font-bold">
              <Calendar className="w-3 h-3 text-blue-600" /> Timeline
            </span>
            <p className="font-space font-bold text-navy-900 text-sm sm:text-base">{project.year}</p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5 mb-1 font-bold">
              <Monitor className="w-3 h-3 text-blue-600" /> Format
            </span>
            <p className="font-space font-bold text-navy-900 text-sm sm:text-base">{project.aspect === "9:16" ? "9:16 Vertical" : "16:9 4K UHD"}</p>
          </div>
        </div>
      </section>

      {/* Two-Column Editorial: Overview + Process & Software */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Deep Overview */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-blue-600 text-xs font-mono uppercase tracking-[0.25em] font-bold block">
              PROJECT OVERVIEW
            </span>
            <h2 className="font-space text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight leading-snug">
              Behind the Motion & Visual Architecture
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {project.overview}
            </p>

            {/* Creative Process Steps */}
            <div className="pt-6">
              <h3 className="font-space text-lg font-bold text-navy-900 mb-4">
                Creative Breakdown & Milestones
              </h3>
              <div className="space-y-3.5">
                {project.creativeProcess.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 font-mono text-xs font-bold flex items-center justify-center shrink-0 border border-blue-100">
                      0{idx + 1}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Software Stack & Deliverables */}
          <div className="lg:col-span-5 space-y-8">
            {/* Software Used */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <span className="text-blue-600 text-xs font-mono uppercase tracking-[0.2em] font-bold block mb-4">
                SOFTWARE & TOOLING
              </span>
              <div className="flex flex-wrap gap-2">
                {project.software.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-navy-900 text-xs font-mono font-bold border border-slate-200/80 shadow-2xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables Delivered */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <span className="text-blue-600 text-xs font-mono uppercase tracking-[0.2em] font-bold block mb-4">
                FINAL DELIVERABLES
              </span>
              <ul className="space-y-2.5">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Inquiry Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl shadow-blue-500/20">
              <h4 className="font-podium text-2xl font-bold tracking-wide mb-1">Like this visual style?</h4>
              <p className="text-blue-100 text-xs mb-4 leading-relaxed">
                Commission a bespoke motion graphics piece or high-end edit for your next launch.
              </p>
              <a
                href={`https://wa.me/919773135547?text=${encodeURIComponent(`Hi Yashraj! I was reviewing your project "${project.title}" on yashfx.in and would like to discuss a project.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white text-blue-700 font-bold text-xs uppercase tracking-wider text-center block hover:bg-blue-50 transition-colors shadow"
              >
                Start Similar Project →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Next / Prev Navigation */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 border-t border-slate-200/80 pt-12">
        <div className="flex items-center justify-between">
          <Link
            to={`/work/${prevProject.slug}`}
            className="group flex flex-col items-start gap-1 text-left max-w-[45%]"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-3 h-3" /> Previous Work
            </span>
            <span className="font-podium text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-blue-600 transition-colors line-clamp-1">
              {prevProject.title}
            </span>
          </Link>

          <Link
            to="/portfolio"
            className="hidden sm:inline-flex px-4 py-2 rounded-full border border-slate-200 text-xs font-mono uppercase tracking-widest text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-all"
          >
            All Work
          </Link>

          <Link
            to={`/work/${nextProject.slug}`}
            className="group flex flex-col items-end gap-1 text-right max-w-[45%]"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
              Next Work <ArrowRight className="w-3 h-3" />
            </span>
            <span className="font-podium text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-blue-600 transition-colors line-clamp-1">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
