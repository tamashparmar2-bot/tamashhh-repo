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
  Clock,
  ArrowRight
} from "lucide-react";
import { PROJECTS } from "../data/projects";

export default function VideoEditorAnand() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const localProjects = PROJECTS.slice(0, 6);

  const faqs = [
    {
      q: "Where in Anand are you located and how do we collaborate?",
      a: "I am based in Anand, Gujarat, with educational roots at Sardar Patel University (SPU) and CVM University in Vallabh Vidyanagar. For local businesses, educational institutions, automotive showrooms, retail brands, and agencies in Anand, Vallabh Vidyanagar, Karamsad, and Nadiad, we can collaborate through in-person creative sessions or via secure high-speed cloud review links (Frame.io and Google Drive)."
    },
    {
      q: "What video editing services do you provide in Anand?",
      a: "I provide end-to-end commercial video editing services in Anand covering commercial brand films, social media reels (9:16 vertical for Instagram & YouTube Shorts), automotive delivery edits, festival & event recaps (such as Ganesha Aagman and Navratri celebrations), kinetic typography, 3D CGI product animations, and broadcast-standard DaVinci Resolve color grading."
    },
    {
      q: "Why hire YASHFX as the best video editor in Anand instead of a traditional agency?",
      a: "Traditional agencies often subcontract post-production to third-party vendors or route briefs through junior interns and slow account managers. Working directly with Yashraj Parmar gives you senior-level motion craftsmanship, frame-accurate musical pacing, rapid 48–72 hour delivery options, transparent direct communication, and significantly higher aesthetic quality without agency markups."
    },
    {
      q: "How do I hire a freelance video editor in Anand for monthly social media reels?",
      a: "You can hire me on a flexible per-project basis or on a dedicated monthly retainer. For local businesses, influencers, and brands in Anand and Vidyanagar needing consistent content, I offer batch video editing: you capture the raw footage, and I transform it into high-retention, color-graded reels complete with dynamic subtitles and custom foley sound design."
    },
    {
      q: "Can you create 3D CGI animations and motion graphics for products in Anand?",
      a: "Yes. As a 3D CGI artist and motion graphics designer in Anand, I craft photorealistic product visualizations, procedural texturing, rigid-body physics simulations, and exploded mechanical assemblies in Blender and Cinema 4D. This is ideal for manufacturing enterprises in the Vitthal Udyognagar GIDC belt, consumer brands, and tech companies seeking high-end visuals without expensive studio shoots."
    },
    {
      q: "What is your typical turnaround time for an editing project?",
      a: "Standard social media reels and short commercial edits are typically delivered within 48 to 72 hours. Comprehensive brand films, multi-camera event documentaries, or intricate 3D CGI simulations generally take 1 to 2 weeks, with milestone review cuts provided at every phase for your feedback."
    },
    {
      q: "Can I provide my own raw footage, and what camera formats do you accept?",
      a: "Yes. You can supply raw video files shot on any system—including Sony (S-Log3), Canon (C-Log), RED, Blackmagic RAW, Panasonic, DJI drone footage, or iPhone 4K ProRes. I also provide creative pre-production guidance, framing tips, and music curation prior to your shoot to ensure peak viewer retention."
    },
    {
      q: "Do you serve clients outside Anand in Central Gujarat and internationally?",
      a: "Yes. While Anand and Vallabh Vidyanagar are my primary creative base, I regularly partner with clients, agencies, and directors across Vadodara, Nadiad, Ahmedabad, Mumbai, and internationally across the United States, Europe, and the UAE using asynchronous cloud workflows."
    }
  ];

  // Dynamic SEO metadata & Schema injection
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

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.yashfx.in/video-editor-anand");

    // Comprehensive Structured Data Graph (Person + ProfessionalService + FAQPage)
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://www.yashfx.in/#person",
          "name": "Yashraj Parmar",
          "url": "https://www.yashfx.in/about",
          "jobTitle": "Freelance Video Editor & Motion Graphics Designer",
          "alumniOf": [
            { "@type": "EducationalOrganization", "name": "Sardar Patel University" },
            { "@type": "EducationalOrganization", "name": "CVM University" }
          ],
          "sameAs": [
            "https://www.instagram.com/yashfx.mov"
          ]
        },
        {
          "@type": "ProfessionalService",
          "@id": "https://www.yashfx.in/video-editor-anand#service",
          "name": "YASHFX - Video Editor & Motion Graphics in Anand",
          "alternateName": "YASHFX Post-Production & 3D CGI",
          "url": "https://www.yashfx.in/video-editor-anand",
          "image": "https://www.yashfx.in/creator-profile.jpg",
          "telephone": "+919773135547",
          "email": "contact@yashfx.in",
          "founder": { "@id": "https://www.yashfx.in/#person" },
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
          "description": "Professional commercial video editing, 3D CGI animation, motion graphics, and DaVinci Resolve color grading by freelance creator Yashraj Parmar in Anand, Gujarat."
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.yashfx.in/video-editor-anand#faq",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a
            }
          }))
        }
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
      if (scriptTag) scriptTag.remove();
    };
  }, []);

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

      {/* ── 2. Hero Section (One Clear H1) ── */}
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

          <p className="font-space text-slate-600 text-base sm:text-xl font-normal max-w-3xl mx-auto mt-6 leading-relaxed">
            Looking for the <strong>best video editor in Anand</strong>? YASHFX delivers cinema-grade commercial video editing services, kinetic motion graphics, 3D CGI product animation, and DaVinci color grading tailored for brands, entrepreneurs, and agencies across Anand, Vallabh Vidyanagar, and Central Gujarat.
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

      {/* ── 3. Core Services in Anand (Semantic H2 & H3) ── */}
      <section className="py-20 lg:py-28 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 border-b border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block mb-2">
            SPECIALIZED POST-PRODUCTION
          </span>
          <h2 className="font-podium text-3xl sm:text-5xl font-bold text-navy-900 leading-tight uppercase">
            Video Editing Services in Anand & Central Gujarat
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
                Commercial Video Editing Services
              </h3>
              <p className="font-space text-slate-600 text-xs sm:text-sm leading-relaxed">
                Automotive delivery films, brand commercials, YouTube edits, and high-retention 9:16 Instagram Reels cut tightly to beats with custom sound design.
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
                Motion Graphics Designer in Anand
              </h3>
              <p className="font-space text-slate-600 text-xs sm:text-sm leading-relaxed">
                Dynamic kinetic typography, custom logo reveals, lower thirds, and animated overlays that elevate your brand presentation above competitors.
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
                3D CGI Artist & Product Animation
              </h3>
              <p className="font-space text-slate-600 text-xs sm:text-sm leading-relaxed">
                Photorealistic product reveals, mechanical simulations, and macro studio lighting rendered in Blender & Cinema 4D for local manufacturers and brands.
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
                DaVinci Resolve Color Grading
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

        {/* Contextual Internal Link to Full Services */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Explore All Post-Production Capabilities & Disciplines</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* ── 4. Real Work Showcase (Portfolio Grid with Correct H2/H3 Hierarchy) ── */}
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
                      {/* Fixed: Semantic H3 directly under section H2 */}
                      <h3 className="font-podium text-2xl text-white font-bold leading-tight mt-0.5 group-hover:text-blue-300 transition-colors">
                        {p.title}
                      </h3>
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

          {/* Contextual Link to Full Portfolio */}
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="btn-outline inline-flex items-center gap-2">
              EXPLORE ALL 13+ PORTFOLIO CASE STUDIES
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Local Service Areas & Context (Semantic H2 & H3) ── */}
      <section className="py-20 lg:py-28 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold block mb-2">
              LOCAL REGIONAL COVERAGE
            </span>
            <h2 className="font-podium text-3xl sm:text-5xl font-bold text-navy-900 leading-tight uppercase mb-6">
              Freelance Video Editor in Anand, Vidyanagar & Regional Hubs
            </h2>
            <p className="font-space text-slate-600 text-base leading-relaxed mb-4">
              As an independent <strong>freelance video editor in Anand</strong> with academic roots at <strong>Sardar Patel University (SPU)</strong> and <strong>CVM University in Vallabh Vidyanagar</strong>, I provide local businesses, institutions, and creative agencies with direct, high-caliber creative partnerships without agency overhead.
            </p>
            <p className="font-space text-slate-600 text-base leading-relaxed mb-4">
              Whether you are an automotive dealership on 100 Feet Road, a college or coaching academy in Vidyanagar, a retail brand near Nana Bazar and Mota Bazar, or an industrial manufacturer in the Vitthal Udyognagar GIDC belt, I deliver broadcast-ready video assets tailored for your audience.
            </p>
            <p className="font-space text-slate-600 text-base leading-relaxed mb-6">
              Need a dedicated creative partner? Learn more about my journey on the <Link to="/about" className="text-blue-600 font-semibold underline underline-offset-4 hover:text-blue-700">About Yashraj Parmar</Link> page or schedule a direct consultation.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono uppercase tracking-wider text-navy-900 font-semibold">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                • Anand City & Gamdi
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                • Vallabh Vidyanagar (V.V. Nagar)
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                • Nadiad & Kheda District
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                • Vadodara & Ahmedabad Hubs
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-blue-50/70 border border-blue-200 shadow-xl shadow-blue-500/5">
              <h3 className="font-podium text-3xl text-navy-900 font-bold mb-4">
                Why Choose YASHFX for Local Projects in Anand?
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
              Frequently Asked Questions (Anand Video Editing & Motion)
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
            Hire a Top Video Editor in Anand for Your Next Project
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
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-blue-800/80 hover:bg-blue-800 text-white border border-blue-400/40 font-inter font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-1.5"
            >
              CUSTOM QUOTE FORM <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
