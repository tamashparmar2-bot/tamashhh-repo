import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Resources", to: "/resources" },
  { label: "Portal", to: "/portal" },
];

const OFFERS = [
  "🔥 Limited Time Offer: Save 25% on Brand Identity Design & Video Editing. Code: YASHFX25",
  "🎓 Learn Creative Skills: Enroll in our UI/UX Masterclass & Video Bootcamp for 20% off. Code: STUDY20",
  "⚡ Premium Assets Hub: Download templates, presets, and color LUTs for free!"
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % OFFERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex flex-col">
        {/* Latest Offer Announcement Strip */}
        <div className="bg-blue-600 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider h-8 overflow-hidden select-none relative flex items-center justify-center shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentOffer}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute w-full px-6 text-center text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {OFFERS[currentOffer]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Modern Minimal Navigation Bar (White & Blue) */}
        <nav className="bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] w-full">
          <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 lg:py-4.5">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
            >
              <img src="/favicon.png" alt="yashfx Logo" className="h-8 w-auto object-contain transition-transform group-hover:scale-105" />
              <span className="font-podium text-2xl font-bold tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors">
                YASHFX
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-inter text-xs uppercase tracking-widest transition-colors duration-200 relative py-1 ${
                    location.pathname === link.to
                      ? "text-blue-600 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full"
                      : "text-slate-600 hover:text-blue-600 font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-xs font-inter font-semibold uppercase tracking-wider rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200"
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex lg:hidden text-slate-900 hover:text-blue-600 transition-colors p-1"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 py-4 border-b border-slate-100">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <img src="/favicon.png" alt="yashfx Logo" className="h-8 w-auto object-contain" />
            <span className="font-podium text-2xl font-bold tracking-wider text-slate-900">
              YASHFX
            </span>
          </Link>
          <button onClick={() => setMenuOpen(false)} className="text-slate-800 p-1" aria-label="Close menu">
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100%-72px)] gap-5">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`font-podium text-3xl sm:text-4xl uppercase tracking-wider transition-all duration-300 ${
                location.pathname === link.to ? "text-blue-600" : "text-slate-800 hover:text-blue-600"
              }`}
              style={{
                transitionDelay: `${i * 50 + 50}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 btn-gradient text-sm"
            style={{
              transitionDelay: `${NAV_LINKS.length * 50 + 50}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
            }}
          >
            Contact Me
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
