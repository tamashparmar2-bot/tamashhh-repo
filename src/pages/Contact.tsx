import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { IconInstagram, IconTwitterX, IconYoutube, IconLinkedin } from "../components/SocialIcons";
import { supabase } from "../lib/supabaseClient";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "contact@yashfx.in",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 97731 35547",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Gujarat, India",
  },
];

const socials = [
  { icon: IconInstagram, href: "https://instagram.com/shy_yshrj", label: "Instagram" },
  { icon: IconTwitterX, href: "https://x.com", label: "Twitter / X" },
  { icon: IconYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: IconLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const services = ["Brand Design", "Video Editing", "Vibe Coding", "Other"];

function Toast({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -16, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white border border-slate-200/90 rounded-2xl px-6 py-4 flex items-center gap-3 shadow-2xl shadow-blue-500/10"
    >
      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
      <span className="text-sm text-slate-900 font-semibold">{message}</span>
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      return;
    }

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            service: formData.service,
            message: formData.message,
          },
        ]);

      if (error) {
        console.error("Database submission error:", error);
      }
    } catch (err) {
      console.error("Failed to connect to database:", err);
    }

    setShowToast(true);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const inputClass =
    "bg-white border border-slate-200 rounded-xl p-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm w-full outline-none transition-all duration-200 text-sm";
  const labelClass =
    "block text-xs text-slate-700 uppercase tracking-wider mb-2 font-bold";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <Toast
            message="Message sent! I'll get back to you soon."
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>

      {/* Hero Banner */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/50 border-b border-slate-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-bold tracking-[0.25em] text-blue-600 uppercase mb-4"
          >
            GET IN TOUCH
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-podium font-bold text-slate-900 leading-tight tracking-tight"
          >
            Let's Work Together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed"
          >
            Have a project in mind, an editing commission, or want to discuss a custom build? Send a brief message below.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 lg:py-24 pb-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 shadow-xl shadow-slate-200/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className={labelClass}>
                      Service Category
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="text-slate-400">
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} className="text-slate-900">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Project Brief / Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project scope, goals, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-gradient w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-lg shadow-blue-500/25"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 flex flex-col justify-center pt-4"
            >
              <div className="space-y-8">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">
                          {info.title}
                        </h4>
                        <p className="text-slate-600 text-sm mt-0.5 font-medium">
                          {info.detail}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-12 pt-8 border-t border-slate-200"
              >
                <p className="text-xs text-blue-600 uppercase tracking-widest mb-4 font-bold">
                  Connect on Socials
                </p>
                <div className="flex items-center gap-3">
                  {socials.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
