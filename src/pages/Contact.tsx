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
    detail: "workwithtamashhh@gmail.com",
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

const services = ["Design", "Editing", "Vibe Coding", "Other"];

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
      initial={{ opacity: 0, y: -30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-dark-100 border border-white/10 rounded-xl px-6 py-4 flex items-center gap-3 shadow-2xl shadow-black/40"
    >
      <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
      <span className="text-sm text-white font-medium">{message}</span>
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
    "bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 w-full outline-none transition-colors duration-200";
  const labelClass =
    "block text-sm text-white/50 uppercase tracking-wider mb-2 font-medium";

  return (
    <main className="min-h-screen bg-dark text-white">
      {/* ───── Toast ───── */}
      <AnimatePresence>
        {showToast && (
          <Toast
            message="Message sent! I'll get back to you soon."
            onClose={() => setShowToast(false)}
          />
        )}
      </AnimatePresence>

      {/* ───── Hero Banner ───── */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-[0.3em] text-white/40 uppercase mb-6"
          >
            Get in Touch
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-podium font-bold gradient-text-h leading-tight"
          >
            Let's work together
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </motion.p>
        </div>
      </section>

      {/* ───── Contact Grid ───── */}
      <section className="py-12 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* ── Left: Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-2xl p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className={labelClass}>
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="bg-dark-100">
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-dark-100">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project…"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-gradient w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 text-base"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* ── Right: Contact Info ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2 flex flex-col justify-center"
            >
              <div className="space-y-8">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {info.title}
                        </h4>
                        <p className="text-white/50 text-sm mt-0.5">
                          {info.detail}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 pt-8 border-t border-white/10"
              >
                <p className="text-sm text-white/40 uppercase tracking-wider mb-4 font-medium">
                  Follow us
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
                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
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
