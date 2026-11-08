import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { IconInstagram, IconTwitterX, IconYoutube, IconLinkedin } from "./SocialIcons";

const footerLinks = {
  disciplines: [
    { label: "Commercial Video Editing", to: "/services" },
    { label: "Motion Graphics & Kinetic Type", to: "/services" },
    { label: "3D CGI & Physics Simulations", to: "/services" },
    { label: "Color Grading & Foley Sound", to: "/services" },
  ],
  navigation: [
    { label: "Selected Work", to: "/portfolio" },
    { label: "About Yashraj", to: "/about" },
    { label: "Disciplines", to: "/services" },
    { label: "Get a Custom Quote", to: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Subtle blue electric line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />

      <div className="px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 max-w-7xl mx-auto">
          {/* Brand & Positioning */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img src="/logo.png" alt="YASHFX Logo" className="h-9 w-9 object-contain rounded-xl shadow-sm transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-podium text-2xl font-bold uppercase tracking-wider text-navy-900 group-hover:text-blue-600 transition-colors">
                  YASHFX
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-500 font-semibold font-mono">
                  Visuals That Move People.
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed font-space">
              Independent Motion Designer & Video Editor crafting high-impact commercial films, 3D simulations, and kinetic typography.
            </p>
            <div className="flex gap-2.5 mt-6">
              {[
                { Icon: IconInstagram, href: "https://www.instagram.com/yashhh.img" },
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

          {/* Disciplines */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-navy-900 mb-5">
              Disciplines
            </h4>
            <ul className="space-y-3 font-space">
              {footerLinks.disciplines.map((link) => (
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

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-navy-900 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 font-space">
              {footerLinks.navigation.map((link) => (
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

          {/* Direct Inquiries & Response Time */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-navy-900 mb-5">
              Direct Contact
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-space mb-4">
              Open for commercial projects, brand showreels, and 3D visual contracts. Average response time under 12 hours.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:contact@yashfx.in"
                className="flex items-center gap-2 text-xs font-mono text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>contact@yashfx.in</span>
              </a>
              <a
                href="tel:+919773135547"
                className="flex items-center gap-2 text-xs font-mono text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>+91 97731 35547</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} YASHFX. Visuals That Move People.</p>
          <div className="flex items-center gap-4">
            <span>Independent Motion Designer</span>
            <span>•</span>
            <span className="text-blue-600">yashfx.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
