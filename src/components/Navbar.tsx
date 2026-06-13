import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, X, Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Courses", to: "/courses" },
  { label: "Blog", to: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 lg:py-5">
          {/* Logo */}
          <Link
            to="/"
            className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white"
          >
            OBSIDIAN
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-dark/98 backdrop-blur-md transition-all duration-500 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 py-4">
          <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white">
            OBSIDIAN
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
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
