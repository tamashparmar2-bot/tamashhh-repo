import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { IconInstagram, IconTwitterX, IconYoutube, IconLinkedin } from "./SocialIcons";

const footerLinks = {
  services: [
    { label: "Brand Design", to: "/services" },
    { label: "UI/UX Design", to: "/services" },
    { label: "Video Editing", to: "/services" },
    { label: "Motion Graphics", to: "/services" },
    { label: "Vibe Coding", to: "/services" },
  ],
  quickLinks: [
    { label: "About", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Subtle blue accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

      <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* About */}
          <div>
            <Link to="/" className="font-podium text-2xl font-bold uppercase tracking-wider text-slate-900 hover:text-blue-600 transition-colors">
              YASHFX
            </Link>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              A modern creative studio crafting exceptional digital experiences through brand design,
              high-end editing, and vibe coding.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: IconInstagram, href: "https://instagram.com/shy_yshrj" },
                { Icon: IconTwitterX, href: "https://x.com" },
                { Icon: IconYoutube, href: "https://youtube.com" },
                { Icon: IconLinkedin, href: "https://linkedin.com" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 shadow-sm"
                >
                  <item.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-5">
              Stay Updated
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Subscribe for creative insights, templates, and releases.
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
                className="flex-1 bg-white border border-slate-200 rounded-full px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 shadow-sm transition-colors"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md shadow-blue-500/20 transition-all flex-shrink-0"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p className="text-xs text-slate-500">
              © 2026 yashfx. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600 tracking-wider">
              Crafted by <span className="text-blue-600 font-semibold uppercase">Yashraj Parmar</span> | <a href="https://yashfx.in" className="hover:text-blue-600 font-medium transition-colors">yashfx.in</a>
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
