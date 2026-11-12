import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  X,
  Menu,
  Mail,
  Phone,
  Clock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IconInstagram, IconTwitterX, IconYoutube, IconLinkedin } from "./SocialIcons";

const NAV_LINKS = [
  { label: "Work", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const ANNOUNCEMENTS = [
  "⚡ Available for Motion Design & Commercial Video Editing — Direct Inquiries Open",
  "🎬 High-Octane Commercial Cuts, 3D CGI Simulations & Color Grading",
  "🚀 Fast Delivery: 48-72h High-Priority Motion Sprints Available"
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [announcementIdx, setAnnouncementIdx] = useState(0);
  const [istTime, setIstTime] = useState("");

  // Live IST Time
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        setIstTime(timeStr);
      } catch {
        setIstTime("IST");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Cycle Announcements
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIdx((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex flex-col bg-white">
        {/* Top Details & Announcement Strip */}
        <div className="bg-slate-900 text-white text-[11px] font-medium border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-9 flex items-center justify-between gap-4">
            {/* Left: Availability Status */}
            <div className="hidden sm:flex items-center gap-2 text-slate-300 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="font-semibold text-slate-200">Available for projects</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 flex items-center gap-1 font-mono text-[10px]">
                <Clock className="w-3 h-3 text-blue-400" />
                {istTime || "IST"} (GMT+5:30)
              </span>
            </div>

            {/* Center: Rotating Announcements / Offers */}
            <div className="flex-1 overflow-hidden h-full flex items-center justify-center relative min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={announcementIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-center truncate px-2 text-slate-200 text-[11px] tracking-wide font-space"
                >
                  {ANNOUNCEMENTS[announcementIdx]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Direct Contact Details */}
            <div className="hidden md:flex items-center gap-4 shrink-0 text-slate-300">
              <a
                href="mailto:contact@yashfx.in"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                title="Send an email"
              >
                <Mail className="w-3 h-3 text-blue-400" />
                <span>contact@yashfx.in</span>
              </a>
              <span className="text-slate-700">|</span>
              <a
                href="tel:+919773135547"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5 font-mono text-[10px]"
                title="Call directly"
              >
                <Phone className="w-3 h-3 text-blue-400" />
                <span>+91 97731 35547</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className="bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12 py-3.5">
            {/* Logo + Tagline */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="YASHFX Logo"
                  className="h-10 w-10 object-contain rounded-xl shadow-sm transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-podium text-2xl font-bold tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors">
                    YASHFX
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold -mt-1 font-mono hidden sm:block">
                  Motion Designer & Video Editor
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`font-inter text-xs uppercase tracking-widest transition-all duration-200 relative py-1.5 flex items-center gap-1.5 ${
                      isActive
                        ? "text-blue-600 font-bold"
                        : "text-slate-600 hover:text-blue-600 font-medium"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/919773135547?text=Hello%20YASHFX!%20I'd%20like%20to%20discuss%20a%20motion%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50 transition-all font-mono"
              >
                <span>WhatsApp</span>
              </a>

              {/* Primary Quote CTA */}
              <Link
                to="/contact"
                className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-xs font-inter font-semibold uppercase tracking-wider rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Hamburger Button for Mobile */}
              <button
                onClick={() => setMenuOpen(true)}
                className="flex lg:hidden text-slate-800 hover:text-blue-600 transition-colors p-1.5 rounded-xl border border-slate-200 hover:border-blue-300 cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-featured Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl lg:hidden flex flex-col"
          >
            {/* Top drawer header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <img src="/logo.png" alt="YASHFX Logo" className="h-9 w-9 object-contain rounded-xl shadow-sm" />
                <div className="flex flex-col">
                  <span className="font-podium text-2xl font-bold tracking-wider text-slate-900">
                    YASHFX
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold font-mono">
                    Motion Designer & Video Editor
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable menu body */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
              {/* Live availability banner */}
              <div className="mb-6 p-3 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                  <span className="text-xs font-semibold text-slate-800">
                    Available for Motion Projects
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  {istTime} IST
                </span>
              </div>

              {/* Navigation links */}
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl transition-all ${
                        isActive
                          ? "bg-blue-600 text-white font-bold"
                          : "text-slate-800 hover:bg-slate-100 hover:text-blue-600"
                      }`}
                    >
                      <span className="font-podium text-2xl uppercase tracking-wider">
                        {link.label}
                      </span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </div>

              {/* Contact Details & Socials Card */}
              <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
                <div className="space-y-2 text-xs text-slate-600">
                  <a
                    href="mailto:contact@yashfx.in"
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">contact@yashfx.in</span>
                  </a>
                  <a
                    href="tel:+919773135547"
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="font-mono font-medium">+91 97731 35547</span>
                  </a>
                </div>

                {/* Social icons row */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    {[
                      { Icon: IconInstagram, href: "https://www.instagram.com/tamashhh_/" },
                      { Icon: IconTwitterX, href: "https://x.com" },
                      { Icon: IconYoutube, href: "https://youtube.com" },
                      { Icon: IconLinkedin, href: "https://linkedin.com" },
                    ].map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-all shadow-sm"
                      >
                        <item.Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="btn-gradient py-2 px-4 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 text-white"
                  >
                    <span>Get a Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
