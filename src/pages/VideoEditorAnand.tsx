import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Film,
  Layers,
  Box,
  Palette,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Volume2,
  Clock
} from "lucide-react";
import { PROJECTS } from "../data/projects";

export default function VideoEditorAnand() {
  // SEO dynamic head injection
  useEffect(() => {
    document.title = "Video Editor in Anand, Gujarat | Motion Graphics & CGI – YASHFX";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Looking for a professional video editor in Anand? YASHFX offers premium video editing, motion graphics, 3D animation and CGI advertising for brands and businesses."
    );

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.yashfx.in/video-editor-anand");

    // JSON-LD LocalBusiness & Person Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "YASHFX - Video Editor & Motion Designer in Anand",
      "alternateName": "Yashraj Parmar Video Editing & Motion Graphics",
      "url": "https://www.yashfx.in/video-editor-anand",
      "logo": "https://www.yashfx.in/logo.png",
      "image": "https://www.yashfx.in/creator-profile.jpg",
      "telephone": "+919773135547",
      "email": "contact@yashfx.in",
      "founder": {
        "@type": "Person",
        "name": "Yashraj Parmar",
        "jobTitle": "Motion Designer & Video Editor",
        "alumniOf": [
          "Sardar Patel University",
          "CVM University",
          "Arena Animation"
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Anand",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "City", "name": "Anand" },
        { "@type": "Place", "name": "Vallabh Vidyanagar" },
        { "@type": "City", "name": "Nadiad" },
        { "@type": "City", "name": "Vadodara" },
        { "@type": "City", "name": "Ahmedabad" },
        { "@type": "AdministrativeArea", "name": "Gujarat" }
      ],
      "priceRange": "$$",
      "description": "Premium video editing, motion graphics, 3D CGI simulation, and color grading services based in Anand, Gujarat. Serving local brands and international productions.",
      "sameAs": [
        "https://www.instagram.com/yashhh.img"
      ]
    };

    let scriptTag = document.querySelector('script[data-schema="local-seo"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.setAttribute("data-schema", "local-seo");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      // Clean up injected schema on unmount
      if (scriptTag) scriptTag.remove();
    };
  }, []);

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const localProjects = PROJECTS.slice(0, 6);

  const handleMouseEnterVideo = (e: React.MouseEvent<HTMLElement>) => {
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

  const faqs = [
    {
      q: "Where in Anand are you located and how do we collaborate?",
      a: "I am based right here in Anand, Gujarat (with educational roots at Sardar Patel University and CVM University in Vallabh Vidyanagar). For local businesses, educational institutions, automotive showrooms, and agencies in Anand, Vallabh Vidyanagar, and Nadiad, we can collaborate both in-person or via secure cloud review links (Frame.io/Google Drive)."
    },
    {
      q: "What types of video editing services do you provide in Anand?",
      a: "I handle commercial brand films, social media reels (9:16 vertical), automotive delivery videos, festival/cultural recaps (such as Ganesha Aagman and Navratri celebrations), product showcases, 3D CGI animations, kinetic typography, and DaVinci Resolve color grading."
    },
    {
      q: "What is your typical turnaround time for a video project?",
      a: "Standard social reels and short commercial edits are typically delivered within 48 to 72 hours. Larger commercial spots, multi-camera event films, or complex 3D CGI simulations generally take 1 to 2 weeks with regular milestone previews."
    },
    {
      q: "Can I provide my own raw footage, or do you also help with direction?",
      a: "You can supply raw camera footage from any camera system (Sony S-Log3, Canon Log, RED, iPhone ProRes, etc.). I also provide creative pre-production guidance, storyboard review, and music curation to ensure the edit achieves maximum viewer retention."
    },
    {
      q: "Do you serve clients outside Anand in Gujarat?",
      a: "Yes. While Anand and Vallabh Vidyanagar are my home base, I frequently work with clients, brands, and agencies across Vadodara, Nadiad, Ahmedabad, and globally across remote pipelines."
    }
  ];

  return (
    <article className="bg-white text-navy-900 overflow-x-hidden pt-4 pb-24">
      {/* ── 1. Breadcrumbs & Local Tag ── */}
      <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-6">
        <ol className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          </li>
          <li>/</li>
          <li className="text-blue-600 font-bold" aria-current="page">Video Editor in Anand</li>
        </ol>
      </nav>

      {/* ── 2. Hero Section ── */}
      <header className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/40 border-b border-slate-100">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          {/* Geographical Trust Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-blue-700 text-xs tracking-[0.2em] uppercase font-inter font-bold">
              Based in Anand, Gujarat • Serving Regional & Global Brands
            </span>
          </div>

          {/* Target Keyword H1 */}
          <h1 className="font-podium text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-navy-900 leading-[0.98] uppercase">
            Video Editor in Anand, Gujarat <br />
            <span className="text-blue-600">Motion Graphics & 3D CGI</span>
          </h1>

          <p className="font-space text-slate-600 text-base sm:text-xl font-normal max-w-2xl mx-auto mt-6 leading-relaxed">
            Looking for a professional video editor in Anand? YASHFX provides cinema-grade commercial editing, kinetic typography, 3D animation, and DaVinci color grading tailored for brands, entrepreneurs, and agencies across Gujarat.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="https://wa.me/919773135547?text=Hello%20Yashraj!%20I'm%20contacting%20you%20from%20Anand%20regarding%20video%20editing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient inline-flex items-center gap-2"
            >
              CHAT ON WHATSAPP
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link to="/contact" className="btn-outline inline-flex items-center gap-2">
              REQUEST A LOCAL QUOTE
            </Link>
          </div>

          {/* Location & Spec Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-slate-200/80 text-xs font-mono text-slate-600 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 font-bold text-navy-900">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              Anand & Vidyanagar Studio
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-bold text-navy-900">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              48–72h Turnarounds
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-bold text-navy-900">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              4K 60FPS Delivery
            </span>
          </div>
        </div>
      </header>

      {/* ── 3. Core Services in Anand (Semantic H2) ── */}
      <section className="py-20 lg:py-28 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 border-b border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block mb-2">
            SPECIALIZED POST-PRODUCTION
          </span>
          <h2 className="font-podium text-3xl sm:text-5xl font-bold text-navy-900 leading-tight uppercase">
            Professional Video Editing & Motion Services in Anand
          </h2>
          <p className="font-space text-slate-600 mt-4 text-base leading-relaxed">
            From local business commercials in the Charotar region to high-octane social campaigns, I combine frame-accurate rhythmic cuts with cutting-edge visual effects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-blue-400 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="font-podium text-2xl text-navy-900 font-bold mb-2">
                Commercial Video Editing
              </h3>
              <p className="font-space text-slate-600 text-xs sm:text-sm leading-relaxed">
                Automotive delivery films, brand teasers, and high-retention 9:16 Instagram Reels cut tightly to beats with custom sound design.
              </p>
            </div>
            <span className="text-[11px] font-mono text-blue-600 font-bold mt-6 uppercase">
              Premiere Pro • Beat Sync
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-blue-400 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-podium text-2xl text-navy-900 font-bold mb-2">
                Motion Graphics & Title Direction
              </h3>
              <p className="font-space text-slate-600 text-xs sm:text-sm leading-relaxed">
                Dynamic kinetic typography, custom logo reveals, lower thirds, and animated overlays that elevate your brand presentation.
              </p>
            </div>
            <span className="text-[11px] font-mono text-blue-600 font-bold mt-6 uppercase">
              After Effects • Vector
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-blue-400 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Box className="w-6 h-6" />
              </div>
              <h3 className="font-podium text-2xl text-navy-900 font-bold mb-2">
                3D CGI & Product Animation
              </h3>
              <p className="font-space text-slate-600 text-xs sm:text-sm leading-relaxed">
                Photorealistic product reveals, mechanical simulations, and macro studio lighting rendered in Blender & Cinema 4D.
              </p>
            </div>
            <span className="text-[11px] font-mono text-blue-600 font-bold mt-6 uppercase">
              Blender • Cinema 4D
            </span>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-blue-400 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="font-podium text-2xl text-navy-900 font-bold mb-2">
                DaVinci Color Grading
              </h3>
              <p className="font-space text-slate-600 text-xs sm:text-sm leading-relaxed">
                Professional color management for Sony S-Log3, Canon Log, and RED footage, creating rich, saturated, cinematic film grades.
              </p>
            </div>
            <span className="text-[11px] font-mono text-blue-600 font-bold mt-6 uppercase">
              DaVinci Resolve Studio
            </span>
          </div>
        </div>
      </section>

      {/* ── 4. Real Work Showcase (Portfolio Grid with Audio Hover) ── */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block mb-2">
              REAL PRODUCTIONS
            </span>
            <h2 className="font-podium text-3xl sm:text-5xl font-bold text-navy-900 leading-tight uppercase">
              Recent Video Editing & Motion Portfolio
            </h2>
            <p className="font-space text-slate-600 mt-4 text-base leading-relaxed">
              Hover over any project to preview video with sound. Click to view full project breakdown.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localProjects.map((p) => (
              <div
                key={p.slug}
                onMouseEnter={handleMouseEnterVideo}
                onMouseLeave={handleMouseLeaveVideo}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-400 transition-all duration-300"
              >
                <Link to={`/work/${p.slug}`} className="block">
                  <div className={`relative w-full ${p.aspect === "9:16" ? "aspect-[9/14]" : "aspect-[16/10]"} bg-slate-950 overflow-hidden`}>
                    <video
                      src={p.videoUrl}
                      autoPlay
                      loop
                      playsInline
                      muted
                      preload="metadata"
                      onLoadedData={(e) => e.currentTarget.play().catch(() => {})}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

                    <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
                      <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-950/80 text-white backdrop-blur-md border border-white/10">
                        {p.aspect === "9:16" ? "9:16 REEL" : "16:9 CINEMATIC"}
                      </span>
                    </div>

                    <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/95 text-white text-[10px] font-mono shadow-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <Volume2 className="w-3.5 h-3.5 animate-pulse text-blue-200" />
                      <span className="font-semibold tracking-wider">AUDIO ON</span>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 p-5 pointer-events-none">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                        {p.category}
                      </span>
                      <h4 className="font-podium text-2xl text-white font-bold leading-tight mt-0.5 group-hover:text-blue-300 transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-300 line-clamp-1 mt-1 font-space">
                        {p.client}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      {p.software.slice(0, 2).join(" • ")}
                    </span>
                    <span className="text-xs font-bold font-inter text-blue-600 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Project <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Local Service Areas & Context (Semantic H2) ── */}
      <section className="py-20 lg:py-28 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block mb-2">
              LOCAL REGIONAL COVERAGE
            </span>
            <h2 className="font-podium text-3xl sm:text-5xl font-bold text-navy-900 leading-tight uppercase mb-6">
              Serving Anand, Vidyanagar & Central Gujarat
            </h2>
            <p className="font-space text-slate-600 text-base leading-relaxed mb-4">
              As an independent video editor and motion designer with roots in Anand and educational background at <strong>Sardar Patel University (SPU)</strong> and <strong>CVM University in Vallabh Vidyanagar</strong>, I provide local businesses and marketing teams with direct, high-caliber creative partnerships without agency overhead.
            </p>
            <p className="font-space text-slate-600 text-base leading-relaxed mb-6">
              Whether you are an automotive dealership on 100 Feet Road, an educational institution in Vidyanagar, a retail brand in Anand city, or a manufacturing enterprise in the GIDC belt, I deliver broadcast-ready video assets tailored for your audience.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono uppercase tracking-wider text-navy-900 font-semibold">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                • Anand City & Gamdi
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                • Vallabh Vidyanagar
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                • Nadiad & Kheda
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                • Vadodara & Ahmedabad
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-blue-50/70 border border-blue-200 shadow-xl shadow-blue-500/5">
              <h3 className="font-podium text-3xl text-navy-900 font-bold mb-4">
                Why Choose YASHFX for Local Projects?
              </h3>
              <ul className="space-y-4 text-sm font-space text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Direct 1-on-1 Access:</strong> Work directly with Yashraj with zero account managers or communication bottlenecks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Speed & Agility:</strong> Rapid 48h to 72h sprints for time-sensitive social media reels and campaign launches.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Cinematic Quality Standards:</strong> Advanced multi-pass rendering, custom sound design, and color-calibrated masters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Full Ownership:</strong> You retain 100% rights to final masters, clean cuts, and delivered project files.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Local FAQ Section (Semantic H2) ── */}
      <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/80 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-podium text-3xl sm:text-5xl font-bold text-navy-900 leading-tight uppercase">
              Frequently Asked Questions (Anand Video Editing)
            </h2>
            <p className="font-space text-slate-600 mt-3 text-base">
              Clear answers regarding pricing, footage handling, turnaround, and collaboration.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                >
                  <span className="font-space font-bold text-base sm:text-lg text-navy-900">
                    {faq.q}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-mono font-bold text-sm">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-600 font-space leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Direct Contact / WhatsApp CTA ── */}
      <section className="py-20 lg:py-28 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-widest text-blue-200 font-bold block mb-3">
            START YOUR LOCAL PROJECT TODAY
          </span>
          <h2 className="font-podium text-4xl sm:text-6xl font-bold tracking-tight mb-4 uppercase">
            Let&apos;s Create Something Impactful in Anand
          </h2>
          <p className="font-space text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Reach out directly to discuss your footage, goals, timeline, and pricing. Average response time is under 12 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919773135547?text=Hello%20Yashraj!%20I'm%20reaching%20out%20from%20Anand%20regarding%20video%20editing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-white text-blue-700 hover:bg-blue-50 font-inter font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              CHAT ON WHATSAPP (+91 97731 35547)
            </a>
            <a
              href="mailto:contact@yashfx.in?subject=Video%20Editing%20Inquiry%20from%20Anand"
              className="px-8 py-3.5 rounded-full bg-blue-800/80 hover:bg-blue-800 text-white border border-blue-400/40 font-inter font-bold text-xs uppercase tracking-wider transition-all"
            >
              EMAIL: contact@yashfx.in
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
