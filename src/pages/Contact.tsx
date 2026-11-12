import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  MessageSquare,
  Clock
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
    title: "Phone / WhatsApp",
    detail: "+91 97731 35547",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Gujarat, India (Global Remote)",
  },
];

const socials = [
  { icon: IconInstagram, href: "https://www.instagram.com/tamashhh_/", label: "Instagram" },
  { icon: IconTwitterX, href: "https://x.com", label: "Twitter / X" },
  { icon: IconYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: IconLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const services = [
  "Commercial Video Editing",
  "Motion Graphics & Kinetic Type",
  "3D CGI & Visual Simulations",
  "Color Grading & Foley Sound",
  "Digital Growth (Website & Marketing)",
  "Other Creative Direction"
];

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
      <span className="text-sm text-navy-900 font-semibold font-space">{message}</span>
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      return;
    }

    const whatsappText =
      `Hello Yashraj! New project inquiry from yashfx.in:\n\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Discipline: ${formData.service}\n` +
      `• Project Overview & Timeline:\n${formData.message}`;

    const whatsappUrl = `https://wa.me/919773135547?text=${encodeURIComponent(whatsappText)}`;

    // Open WhatsApp synchronously within user gesture context
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Save to Supabase in background
    supabase
      .from("contact_submissions")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        },
      ])
      .then(({ error }) => {
        if (error) {
          console.error("Database submission error:", error);
        }
      });

    setShowToast(true);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const inputClass =
    "bg-white border border-slate-200 rounded-xl p-4 text-navy-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm w-full outline-none transition-all duration-200 text-sm font-space";
  const labelClass =
    "block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-bold";

  return (
    <main className="min-h-screen bg-white text-navy-900 pt-8">
      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <Toast
            message="Inquiry submitted! I will reply within 12 hours."
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>

      {/* Hero Banner */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-slate-50/40 border-b border-slate-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-blue-700 text-xs tracking-[0.2em] uppercase font-inter font-bold">
              Direct Production Inquiries
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-podium font-bold text-navy-900 leading-tight tracking-tight uppercase"
          >
            Start A Project
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed font-space"
          >
            Have a commercial edit, 3D simulation, or motion project in mind? Fill out the brief below or chat directly on WhatsApp.
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
              <div className="rounded-3xl p-8 sm:p-10 bg-slate-50 border border-slate-200/90 shadow-xl shadow-blue-500/5">
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
                      placeholder="e.g. Alex Morgan"
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
                      placeholder="alex@brand.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className={labelClass}>
                      Production Discipline
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select a discipline
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Project Overview & Timeline
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Describe your footage, reference style, estimated deliverable lengths, or deadline..."
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="btn-gradient flex-1 inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      SUBMIT INQUIRY
                    </button>
                    <a
                      href="https://wa.me/919773135547?text=Hello%20Yashraj!%20I'd%20like%20to%20discuss%20a%20motion%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      DIRECT WHATSAPP
                    </a>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Right: Contact Information & Direct Channels */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Direct Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                        {item.title}
                      </span>
                      <span className="text-sm font-space font-bold text-navy-900">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Turnaround Guarantee Card */}
              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200">
                <div className="flex items-center gap-2 text-blue-700 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>12-Hour Guarantee</span>
                </div>
                <p className="text-xs text-slate-600 font-space leading-relaxed">
                  Every inquiry receives a personal reply, availability check, and detailed estimate within 12 hours.
                </p>
              </div>

              {/* Social Channels */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block mb-4">
                  Follow & Connect
                </span>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.label}
                      className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50 transition-all shadow-sm"
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
