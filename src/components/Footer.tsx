import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { IconInstagram, IconTwitterX, IconYoutube, IconLinkedin } from "./SocialIcons";

const footerLinks = {
  services: [
    { label: "Brand Design", to: "/services" },
    { label: "UI/UX Design", to: "/services" },
    { label: "Video Editing", to: "/services" },
    { label: "Motion Graphics", to: "/services" },
    { label: "Online Courses", to: "/courses" },
  ],
  quickLinks: [
    { label: "About", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Blog", to: "/blog" },
    { label: "Courses", to: "/courses" },
    { label: "Contact", to: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-50 border-t border-white/5">
      {/* Gradient line */}
      <div className="gradient-line" />

      <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About */}
          <div>
            <Link to="/" className="font-podium text-2xl font-bold uppercase tracking-wider text-white">
              TAMASHHH
            </Link>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              A premium creative brand crafting exceptional digital experiences through design,
              editing, and education.
            </p>
            <div className="flex gap-3 mt-6">
              {[IconInstagram, IconTwitterX, IconYoutube, IconLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/35 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/35 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-5">
              Stay Updated
            </h4>
            <p className="text-sm text-white/35 leading-relaxed mb-4">
              Subscribe for creative insights and updates.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for subscribing! 🎉");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-blue-500/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-red-500 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity flex-shrink-0"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p className="text-xs text-white/25">
              © 2026 Tamashhh. All rights reserved.
            </p>
            <p className="text-[10px] text-white/40 tracking-wider">
              Crafted by <span className="gradient-text font-semibold uppercase">Tamash Parmar</span> | Tamashhh
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
