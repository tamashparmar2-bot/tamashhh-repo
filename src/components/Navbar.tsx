import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Courses", to: "/courses" },
  { label: "Blog", to: "/blog" },
  { label: "Resources", to: "/resources" },
];

const OFFERS = [
  "🔥 Limited Time Offer: Save 25% on Brand Identity Design & Video Editing. Code: TAMASHHH25",
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
        {/* Latest Offer Announcement Strip Line Carousel */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-widest h-8 overflow-hidden select-none shadow-lg shadow-red-500/5 relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentOffer}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute w-full px-6 text-center text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {OFFERS[currentOffer]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-dark/80 backdrop-blur-xl border-b border-white/5 w-full">
          <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 lg:py-5">
          {/* Logo */}
          <Link
            to="/"
            className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white"
          >
            TAMASHHH
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-inter text-sm uppercase tracking-widest transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 border border-white/20 px-5 py-2.5 text-xs font-inter uppercase tracking-widest text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5 rounded-full"
          >
            Contact
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex lg:hidden text-white"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-dark/98 backdrop-blur-md transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 py-4">
          <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white">
            TAMASHHH
          </span>
          <button onClick={() => setMenuOpen(false)} className="text-white" aria-label="Close menu">
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-[calc(100%-72px)] gap-5">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`font-podium text-3xl sm:text-4xl uppercase tracking-wider transition-all duration-500 ${
                location.pathname === link.to ? "gradient-text" : "text-white"
              }`}
              style={{
                transitionDelay: `${i * 60 + 80}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
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
              transitionDelay: `${NAV_LINKS.length * 60 + 80}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
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
