import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { trackPageView } from "../lib/analytics";

interface RouteMeta {
  title: string;
  description: string;
  canonicalPath?: string;
}

const STATIC_ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "YASHFX – Video Editing, 3D CGI & Motion Graphics Studio",
    description:
      "YASHFX is a creative post-production studio by Yashraj Parmar, delivering commercial video editing, kinetic motion graphics, 3D CGI simulations, and DaVinci color grading.",
  },
  "/video-editor-anand": {
    title: "Video Editor in Anand, Gujarat | Motion Graphics & CGI – YASHFX",
    description:
      "Looking for a professional video editor in Anand? YASHFX offers premium video editing, motion graphics, 3D animation and CGI advertising for brands and businesses.",
  },
  "/portfolio": {
    title: "Selected Works & Portfolio | Commercial Video Editing & CGI – YASHFX",
    description:
      "Explore the commercial video editing, 3D CGI animations, vertical social reels, and kinetic typography portfolio by Yashraj Parmar (YASHFX).",
  },
  "/services": {
    title: "Post-Production & Motion Design Services | YASHFX",
    description:
      "Explore post-production services including commercial video editing, kinetic typography, 3D CGI animation, and DaVinci Resolve color grading.",
  },
  "/digital-growth": {
    title: "Digital Growth Services | Website Development, SEO & Performance Marketing – YASHFX",
    description:
      "We help ambitious brands build a powerful digital presence through website development, performance marketing, SEO and social media marketing.",
  },
  "/about": {
    title: "About Yashraj Parmar | Motion Designer & Video Editor – YASHFX",
    description:
      "Meet Yashraj Parmar, independent motion designer and commercial video editor behind YASHFX, crafting narrative velocity for brands and creators.",
  },
  "/contact": {
    title: "Contact YASHFX | Hire Video Editor & Motion Designer",
    description:
      "Get in touch with Yashraj Parmar for commercial video editing, 3D CGI, and motion graphics projects. Get a quote within 12 hours.",
  },
  "/blog": {
    title: "Insights & Articles on Motion Design and Video Editing | YASHFX",
    description:
      "Articles, techniques, and workflows covering commercial video editing, DaVinci Resolve color grading, 3D visual effects, and creative direction.",
  },
  "/resources": {
    title: "Creator Resources, Video Templates & Presets | YASHFX",
    description:
      "Download curated video editing templates, Premiere Pro presets, and motion graphics assets created by YASHFX.",
  },
  "/portal": {
    title: "Client Project Portal | YASHFX",
    description:
      "Private client portal for tracking project deliverables, review links, and milestones with YASHFX.",
  },
};

export default function Layout() {
  const location = useLocation();
  const lastTrackedPathRef = useRef<string | null>(null);

  // Scroll to top and synchronize title, meta description, canonical & og/twitter tags on route change
  useEffect(() => {
    window.scrollTo(0, 0);

    const fullPath = location.pathname + location.search;
    // Compute route canonical URL and normalize paths
    const cleanPath = location.pathname === "/" ? "" : location.pathname.replace(/\/+$/, "");
    let canonicalPath = cleanPath;

    let title = "YASHFX – Video Editing, 3D CGI & Motion Graphics Studio";
    let description =
      "YASHFX is a creative studio by Yashraj Parmar, specializing in commercial video editing, kinetic typography, 3D CGI animation, and DaVinci color grading.";

    const lookupPath = cleanPath || "/";
    if (STATIC_ROUTE_META[lookupPath]) {
      const meta = STATIC_ROUTE_META[lookupPath];
      title = meta.title;
      description = meta.description;
      if (meta.canonicalPath) canonicalPath = meta.canonicalPath;
    }

    // Update document title
    document.title = title;

    // Update <meta name="description">
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Compute canonical URL
    const canonicalUrl = `https://www.yashfx.in${canonicalPath}`;

    // Update or create <link rel="canonical">
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);

    // Update <meta property="og:title"> and <meta name="twitter:title">
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);

    // Update <meta property="og:description"> and <meta name="twitter:description">
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);

    // Update <meta property="og:url"> and <meta name="twitter:url">
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", canonicalUrl);
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute("content", canonicalUrl);

    // Track GA4 page view on route changes while avoiding duplicate events
    if (lastTrackedPathRef.current !== fullPath) {
      lastTrackedPathRef.current = fullPath;
      trackPageView(fullPath, title);
    }
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 text-slate-900 dark:text-slate-100 font-inter relative transition-colors duration-300">
      <Navbar />
      <main className="pt-[92px] lg:pt-[100px]">
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919773135547?text=Hello%20yashfx!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/10 hover:bg-[#20ba5a] hover:scale-110 hover:shadow-green-500/20 active:scale-95 transition-all duration-300 group border border-white/5"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-7 h-7 text-white fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 2C6.479 2 2 6.477 2 12.03c0 2.215.719 4.316 2.062 6.035L2.56 22.583a.524.524 0 0 0 .618.618l4.517-1.503A10.016 10.016 0 0 0 12.03 22c5.552 0 10.03-4.478 10.03-10.03S17.583 2 12.031 2zm0 18.06c-1.922 0-3.729-.623-5.226-1.782a.524.524 0 0 0-.44-.069l-3.329 1.11.956-2.871a.523.523 0 0 0-.083-.49C2.68 14.484 2.052 12.8 2.052 11.03c0-4.954 4.026-8.98 8.98-8.98 4.954 0 8.98 4.026 8.98 8.98s-4.026 8.98-8.981 8.98zM16.14 13.568c-.282-.142-1.673-.825-1.932-.919-.26-.094-.448-.142-.636.142-.188.283-.729.919-.894 1.107-.165.189-.33.212-.612.071a7.71 7.71 0 0 1-2.274-1.402 8.498 8.498 0 0 1-1.573-1.959c-.165-.283-.018-.435.124-.575.127-.126.282-.33.424-.495.141-.165.188-.283.282-.472.094-.188.047-.353-.023-.495-.071-.141-.636-1.532-.871-2.097-.23-.553-.464-.477-.636-.486-.165-.008-.353-.009-.542-.009-.188 0-.494.07-.753.353-.259.283-.988.966-.988 2.355 0 1.389 1.012 2.73 1.153 2.919.141.189 1.993 3.044 4.827 4.266.674.29 1.2.464 1.61.595.68.217 1.3.187 1.79.113.546-.081 1.673-.683 1.908-1.343.235-.66.235-1.226.165-1.343-.07-.117-.259-.188-.54-.33z"/>
        </svg>
      </a>
    </div>
  );
}
