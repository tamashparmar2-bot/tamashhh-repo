import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Clock,
  CheckCircle2,
  FolderOpen,
  Settings,
  AlertCircle,
  ExternalLink,
  PlusCircle,
  Search,
  Trash2,
  User,
  LayoutList,
  ChevronRight,
  TrendingUp,
  X
} from "lucide-react";
import { supabase } from "../lib/supabaseClient";

interface ProjectBrief {
  id: string;
  clientName: string;
  clientEmail: string;
  title: string;
  category: "Design" | "Video Editing" | "Vibe Coding";
  description: string;
  driveLink: string;
  deadline: string;
  status: "Pending Review" | "In Progress" | "Review & Feedback" | "Completed";
  progress: number; // 0 to 100
  adminNotes?: string;
  createdAt: string;
}

const DEFAULT_PROJECTS: ProjectBrief[] = [
  {
    id: "proj-1",
    clientName: "Aura Cosmetics",
    clientEmail: "branding@auracosmetics.com",
    title: "Eco-Friendly Packaging Guidelines",
    category: "Design",
    description: "Create a modern, luxury lookbook design for our upcoming natural oil product line. Needs to feel minimal, premium, and feature neon-tinted organic gradients.",
    driveLink: "https://drive.google.com/drive/folders/1aBcDeFgHiJkLmNoPqRsTuVwXyZ",
    deadline: "2026-06-25",
    status: "In Progress",
    progress: 45,
    adminNotes: "Received product photography assets. Sketched draft 1 layouts; packaging mockups look solid.",
    createdAt: "2026-06-12"
  },
  {
    id: "proj-2",
    clientName: "Zara Kai Studio",
    clientEmail: "zarakaimodel@gmail.com",
    title: "Summer Editorial Lookbook Reel",
    category: "Video Editing",
    description: "Sync the high-fashion cinematic clips with an upbeat ambient electronic track. Color grading should feel warm and retro, like Kodak 500T film.",
    driveLink: "https://drive.google.com/drive/folders/2bCdEfGhIjKlMnOpQrStUvWxYz1",
    deadline: "2026-06-21",
    status: "Pending Review",
    progress: 10,
    adminNotes: "Brief registered. Raw vertical videos verified. Awaiting audio approval.",
    createdAt: "2026-06-15"
  },
  {
    id: "proj-3",
    clientName: "Zenith Financials",
    clientEmail: "engineering@zenith.io",
    title: "Crypto Dashboard Prototyping",
    category: "Vibe Coding",
    description: "Rapid prototype of a dashboard using Vite and TailwindCSS showing mock trading graphs and live HSL gradient cards.",
    driveLink: "https://drive.google.com/drive/folders/3cDeFgHiJkLmNoPqRsTuVwXyZa2",
    deadline: "2026-06-10",
    status: "Completed",
    progress: 100,
    adminNotes: "Vibe coding session completed. Sandbox preview built, pushed to Github. Shared Vercel preview link with client.",
    createdAt: "2026-06-08"
  }
];

interface Toast {
  id: string;
  type: "success" | "info" | "error";
  message: string;
}

export default function ClientPortal() {
  // --- State ---
  const [projects, setProjects] = useState<ProjectBrief[]>([]);

  // Form Fields
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<"Design" | "Video Editing" | "Vibe Coding">("Design");
  const [description, setDescription] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [deadline, setDeadline] = useState("");

  // UI States
  const [isCreatorMode, setIsCreatorMode] = useState(() => {
    return sessionStorage.getItem("tamashhh_creator_auth") === "true";
  });
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectBrief | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Fetch from Supabase
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from("client_portal_projects")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error fetching database projects:", error);
          const saved = localStorage.getItem("tamashhh_portal_projects");
          if (saved) {
            setProjects(JSON.parse(saved));
          } else {
            setProjects(DEFAULT_PROJECTS);
          }
        } else if (data && data.length > 0) {
          const mapped: ProjectBrief[] = data.map((d: any) => ({
            id: d.id,
            clientName: d.client_name,
            clientEmail: d.client_email,
            title: d.title,
            category: d.category as ProjectBrief["category"],
            description: d.description,
            driveLink: d.drive_link,
            deadline: d.deadline,
            status: d.status as ProjectBrief["status"],
            progress: d.progress,
            adminNotes: d.admin_notes || undefined,
            createdAt: d.created_at ? d.created_at.split("T")[0] : new Date().toISOString().split("T")[0]
          }));
          setProjects(mapped);
          localStorage.setItem("tamashhh_portal_projects", JSON.stringify(mapped));
        } else {
          // Seed initial projects if Supabase is completely empty
          setProjects(DEFAULT_PROJECTS);
          localStorage.setItem("tamashhh_portal_projects", JSON.stringify(DEFAULT_PROJECTS));
          
          DEFAULT_PROJECTS.forEach(async (p) => {
            await supabase.from("client_portal_projects").insert({
              id: p.id,
              client_name: p.clientName,
              client_email: p.clientEmail,
              title: p.title,
              category: p.category,
              description: p.description,
              drive_link: p.driveLink,
              deadline: p.deadline,
              status: p.status,
              progress: p.progress,
              admin_notes: p.adminNotes
            });
          });
        }
      } catch (err) {
        console.error("Supabase load connection failed:", err);
        const saved = localStorage.getItem("tamashhh_portal_projects");
        setProjects(saved ? JSON.parse(saved) : DEFAULT_PROJECTS);
      }
    };

    fetchProjects();
  }, []);

  // Local Storage Sync (Backup)
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem("tamashhh_portal_projects", JSON.stringify(projects));
    }
  }, [projects]);

  // Toast Helper
  const addToast = (type: "success" | "info" | "error", message: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Google Drive URL Link Checker
  const isValidDriveLink = (link: string) => {
    if (!link) return false;
    const urlPattern = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    if (!urlPattern.test(link)) return false;
    return link.includes("drive.google.com") || link.includes("dropbox.com") || link.includes("onedrive.live.com") || link.includes("github.com");
  };

  // Submit Brief
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName || !clientEmail || !title || !description || !driveLink || !deadline) {
      addToast("error", "Please complete all fields in the project brief!");
      return;
    }

    if (!isValidDriveLink(driveLink)) {
      addToast("error", "Provide a valid Google Drive, OneDrive, Github or Dropbox resource link!");
      return;
    }

    const newProject: ProjectBrief = {
      id: `proj-${Date.now()}`,
      clientName,
      clientEmail,
      title,
      category,
      description,
      driveLink,
      deadline,
      status: "Pending Review",
      progress: 0,
      createdAt: new Date().toISOString().split("T")[0]
    };

    // Optimistic UI update
    setProjects((prev) => [newProject, ...prev]);

    try {
      const { error } = await supabase.from("client_portal_projects").insert({
        id: newProject.id,
        client_name: newProject.clientName,
        client_email: newProject.clientEmail,
        title: newProject.title,
        category: newProject.category,
        description: newProject.description,
        drive_link: newProject.driveLink,
        deadline: newProject.deadline,
        status: newProject.status,
        progress: newProject.progress
      });

      if (error) {
        console.error("Database insert error:", error);
      }
    } catch (err) {
      console.error("Database insert connection failed:", err);
    }

    addToast("success", "Brief submitted successfully! Placed in Review Queue.");
    
    // Clear Form
    setClientName("");
    setClientEmail("");
    setTitle("");
    setCategory("Design");
    setDescription("");
    setDriveLink("");
    setDeadline("");
  };

  // Creator Mode Handlers
  const handleUpdateStatus = async (id: string, status: ProjectBrief["status"]) => {
    let progressVal = 0;
    if (status === "Pending Review") progressVal = 10;
    else if (status === "In Progress") progressVal = 40;
    else if (status === "Review & Feedback") progressVal = 80;
    else if (status === "Completed") progressVal = 100;

    // Optimistic UI update
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status, progress: progressVal } : p))
    );

    try {
      const { error } = await supabase
        .from("client_portal_projects")
        .update({ status, progress: progressVal })
        .eq("id", id);
      if (error) console.error("Database status update error:", error);
    } catch (err) {
      console.error("Database status update connection failed:", err);
    }

    addToast("success", `Project status updated to ${status}!`);
  };

  const handleAcceptOrder = async (id: string) => {
    // Set status to In Progress and progress to 10%
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "In Progress", progress: 10 } : p))
    );

    try {
      const { error } = await supabase
        .from("client_portal_projects")
        .update({ status: "In Progress", progress: 10 })
        .eq("id", id);
      if (error) console.error("Database accept order error:", error);
    } catch (err) {
      console.error("Database accept order connection failed:", err);
    }

    addToast("success", "Order accepted! Project status is now In Progress and live online.");
  };

  const handleUpdateProgress = async (id: string, progress: number) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, progress } : p))
    );

    try {
      await supabase
        .from("client_portal_projects")
        .update({ progress })
        .eq("id", id);
    } catch (err) {
      console.error("Database progress update connection failed:", err);
    }
  };

  const handleUpdateNotes = async (id: string, notes: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, adminNotes: notes } : p))
    );

    try {
      await supabase
        .from("client_portal_projects")
        .update({ admin_notes: notes })
        .eq("id", id);
    } catch (err) {
      console.error("Database notes update connection failed:", err);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (confirm("Are you sure you want to remove this project from the workspace queue?")) {
      setProjects((prev) => prev.filter((p) => p.id !== id));

      try {
        const { error } = await supabase
          .from("client_portal_projects")
          .delete()
          .eq("id", id);
        if (error) console.error("Database delete error:", error);
      } catch (err) {
        console.error("Database delete connection failed:", err);
      }

      addToast("info", "Project removed from workspace.");
      if (selectedProject?.id === id) {
        setSelectedProject(null);
      }
    }
  };

  // Queue Analytics
  const activeCount = projects.filter((p) => p.status !== "Completed").length;
  const completedCount = projects.filter((p) => p.status === "Completed").length;
  const avgProgress =
    projects.length > 0
      ? Math.round(projects.reduce((acc, curr) => acc + curr.progress, 0) / projects.length)
      : 0;

  // Filtered List
  const filtered = projects.filter((p) => {
    // Hide Pending Review and Completed orders from the public queue if not in Creator Mode
    if (!isCreatorMode && (p.status === "Pending Review" || p.status === "Completed")) {
      return false;
    }
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.clientName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "All" || p.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-28 pb-24 text-white relative">
      {/* Background Decorators */}
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Toast Messages */}
      <div className="fixed top-24 right-6 z-50 flex flex-col gap-3 max-w-sm w-full">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className={`p-4 rounded-xl border flex items-start gap-3 backdrop-blur-xl shadow-lg ${
                t.type === "success"
                  ? "bg-emerald-955/90 border-emerald-500/30 text-emerald-200"
                  : t.type === "error"
                  ? "bg-rose-955/90 border-rose-500/30 text-rose-200"
                  : "bg-zinc-900/90 border-white/10 text-white"
              }`}
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div className="text-sm font-medium">{t.message}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-2 text-blue-500 text-xs tracking-[0.3em] uppercase font-semibold mb-3">
              <FolderOpen className="w-4 h-4 text-blue-500" />
              Client Workspace
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-podium tracking-wide">
              PROJECT WORKSPACE & QUEUE
            </h1>
            <p className="text-white/40 text-sm mt-2 max-w-2xl">
              Submit your creative briefs, share assets securely via cloud links, and follow the real-time build queue transparently.
            </p>
          </div>

          {/* Admin Toggle */}
          <div className="flex items-center gap-3">
            <label className="text-xs uppercase tracking-widest text-white/50 font-semibold cursor-pointer select-none" htmlFor="creator-mode-switch">
              Creator Mode
            </label>
            <button
              id="creator-mode-switch"
              onClick={() => {
                if (isCreatorMode) {
                  setIsCreatorMode(false);
                  sessionStorage.removeItem("tamashhh_creator_auth");
                  addToast("info", "Creator workspace deactivated.");
                } else {
                  setShowPasswordPrompt(true);
                }
              }}
              className={`relative w-12 h-6.5 rounded-full transition-colors duration-300 flex items-center p-0.5 ${
                isCreatorMode ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-white/10"
              }`}
              aria-label="Toggle creator dashboard mode"
            >
              <motion.div
                layout
                className="w-5.5 h-5.5 bg-white rounded-full shadow-md pointer-events-none"
                animate={{ x: isCreatorMode ? 22 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <Settings className={`w-4 h-4 ${isCreatorMode ? "text-purple-400 rotate-45" : "text-white/40"} transition-all duration-300`} />
          </div>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Active Pipeline</span>
              <h2 className="text-3xl font-bold font-podium text-white mt-1">{activeCount} Jobs</h2>
            </div>
            <Clock className="w-8 h-8 text-blue-500/20" />
          </div>
          <div className="glass-card p-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Average Progress</span>
              <h2 className="text-3xl font-bold font-podium text-white mt-1">{avgProgress}%</h2>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-500/20" />
          </div>
          <div className="glass-card p-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Delivered Projects</span>
              <h2 className="text-3xl font-bold font-podium text-emerald-400 mt-1">{completedCount} Completed</h2>
            </div>
            <CheckCircle2 className="w-8 h-8 text-emerald-500/20" />
          </div>
        </div>

        {/* Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Submission Form Column */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-2.5 mb-6">
                <PlusCircle className="w-5 h-5 text-blue-500" />
                <h2 className="text-lg font-bold font-podium uppercase tracking-wider text-white">
                  Submit Creative Brief
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-2">
                    Your Name / Brand
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text"
                      placeholder="e.g. Aura Cosmetics"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 w-full transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. hello@brand.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 w-full transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-2">
                      Job Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as ProjectBrief["category"])}
                      className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 w-full transition-all duration-300"
                    >
                      <option value="Design">Design</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Vibe Coding">Vibe Coding</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-2">
                      Deadline
                    </label>
                    <input
                      type="date"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 w-full transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Summer Lookbook Design"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 w-full transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-2">
                    Brief Requirements / Info
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe what you want: layout design, grading style, script files, etc..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 w-full transition-all duration-300 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/40 font-semibold mb-1">
                    Google Drive / Asset Link
                  </label>
                  <span className="block text-[9px] text-white/30 mb-2">
                    Upload your high-res clips or assets, copy drive link, and share here.
                  </span>
                  <input
                    type="text"
                    placeholder="https://drive.google.com/drive/folders/..."
                    value={driveLink}
                    onChange={(e) => setDriveLink(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 w-full transition-all duration-300"
                  />
                </div>

                <button type="submit" className="btn-gradient w-full py-3.5 text-xs font-semibold uppercase tracking-wider mt-2 flex items-center justify-center gap-2">
                  <Send className="w-3.5 h-3.5" />
                  Submit Project Brief
                </button>
              </form>
            </div>
          </div>

          {/* Queue Column */}
          <div className="lg:col-span-7">
            {/* Filter Tabs & Search */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {["All", "Design", "Video Editing", "Vibe Coding"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                      filterCategory === cat
                        ? "bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 text-white"
                        : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cat === "Video Editing" ? "Video" : cat}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative max-w-xs w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-xs text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 w-full transition-all duration-300"
                />
              </div>
            </div>

            {/* Queue Board List */}
            <div className="flex flex-col gap-4">
              <AnimatePresence mode="popLayout">
                {filtered.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="glass-card p-12 text-center text-white/30 text-sm flex flex-col items-center justify-center gap-3"
                  >
                    <LayoutList className="w-8 h-8 opacity-20" />
                    No projects found in this queue slice.
                  </motion.div>
                ) : (
                  filtered.map((proj) => {
                    // Category Colors
                    const isDesign = proj.category === "Design";
                    const isVideo = proj.category === "Video Editing";

                    return (
                      <motion.div
                        key={proj.id}
                        layoutId={proj.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`glass-card p-5 relative overflow-hidden border ${
                          proj.status === "Completed"
                            ? "border-emerald-500/10 hover:border-emerald-500/20"
                            : "border-white/5 hover:border-white/10"
                        }`}
                      >
                        {/* Upper row info */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center flex-wrap gap-2 text-[10px] font-semibold tracking-wider uppercase">
                              <span className="text-white/40">{proj.clientName}</span>
                              <span className="text-white/20">•</span>
                              <span
                                className={
                                  isDesign
                                    ? "text-blue-400"
                                    : isVideo
                                    ? "text-purple-400"
                                    : "text-emerald-400"
                                }
                              >
                                {proj.category}
                              </span>
                            </div>
                            <h3
                              onClick={() => setSelectedProject(proj)}
                              className="text-base font-bold text-white mt-1 hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-1.5 group"
                            >
                              {proj.title}
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
                            </h3>
                          </div>

                          {/* Status Badge */}
                          <span
                            className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                              proj.status === "Completed"
                                ? "bg-emerald-950/60 border border-emerald-500/30 text-emerald-400"
                                : proj.status === "Review & Feedback"
                                ? "bg-purple-950/60 border border-purple-500/30 text-purple-400"
                                : proj.status === "In Progress"
                                ? "bg-blue-950/60 border border-blue-500/30 text-blue-400"
                                : "bg-zinc-950 border border-white/10 text-white/50"
                            }`}
                          >
                            {proj.status}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-6">
                          <div className="flex justify-between text-[10px] text-white/40 mb-1.5 font-mono">
                            <span>PROGRESS</span>
                            <span>{proj.progress}%</span>
                          </div>
                          <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${
                                proj.status === "Completed"
                                  ? "bg-emerald-500"
                                  : isDesign
                                  ? "bg-blue-500"
                                  : isVideo
                                  ? "bg-purple-500"
                                  : "bg-emerald-400"
                              }`}
                              initial={{ width: 0 }}
                              animate={{ width: `${proj.progress}%` }}
                              transition={{ duration: 0.8 }}
                            />
                          </div>
                        </div>

                        {/* Card bottom bar */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-white/5 text-[10px] font-mono text-white/40">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-white/20" />
                            <span>DUE: {proj.deadline}</span>
                          </div>

                          {/* Assets link button */}
                          <a
                            href={proj.driveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors py-1 px-2.5 rounded bg-white/5 hover:bg-white/10"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            ASSETS DRIVE
                          </a>
                        </div>

                        {/* Creator View Controls */}
                        {isCreatorMode && (
                          <div className="mt-5 pt-4 border-t border-dashed border-white/10 bg-white/3 shadow-inner p-4 rounded-xl flex flex-col gap-3">
                            <div className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">
                              CREATOR WORKSPACE CONTROLS
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* Status Dropdown */}
                              <div>
                                <label className="block text-[9px] uppercase tracking-wider text-white/40 font-semibold mb-1">
                                  Modify Status
                                </label>
                                <select
                                  value={proj.status}
                                  onChange={(e) =>
                                    handleUpdateStatus(proj.id, e.target.value as ProjectBrief["status"])
                                  }
                                  className="bg-black/40 border border-white/10 rounded-lg py-1.5 px-3 text-xs text-white focus:border-purple-500 w-full transition-all duration-300"
                                >
                                  <option value="Pending Review">Pending Review</option>
                                  <option value="In Progress">In Progress</option>
                                  <option value="Review & Feedback">Review & Feedback</option>
                                  <option value="Completed">Completed</option>
                                </select>
                              </div>

                              {/* Progress slider */}
                              <div>
                                <div className="flex justify-between text-[9px] uppercase tracking-wider text-white/40 font-semibold mb-1">
                                  <span>Progress Bar</span>
                                  <span>{proj.progress}%</span>
                                </div>
                                <input
                                  type="range"
                                  min="0"
                                  max="100"
                                  value={proj.progress}
                                  onChange={(e) =>
                                    handleUpdateProgress(proj.id, parseInt(e.target.value))
                                  }
                                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500 mt-2 font-mono"
                                />
                              </div>
                            </div>

                            {/* Creator feedback note */}
                            <div>
                              <label className="block text-[9px] uppercase tracking-wider text-white/40 font-semibold mb-1">
                                Feedback / Notes (Shown to Client)
                              </label>
                              <textarea
                                rows={2}
                                value={proj.adminNotes || ""}
                                onChange={(e) => handleUpdateNotes(proj.id, e.target.value)}
                                placeholder="Add updates: 'Reviewing resources...', 'Draft 1 uploaded!'"
                                className="bg-black/40 border border-white/10 rounded-lg py-1.5 px-3 text-xs text-white focus:border-purple-500 w-full resize-none transition-all duration-300"
                              />
                            </div>

                            <div className="flex justify-between items-center mt-1">
                              {proj.status === "Pending Review" ? (
                                <button
                                  onClick={() => handleAcceptOrder(proj.id)}
                                  className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 py-1.5 px-4 rounded-lg transition-all"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  Accept Order
                                </button>
                              ) : (
                                <div />
                              )}
                              
                              <button
                                onClick={() => handleDeleteProject(proj.id)}
                                className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 py-1.5 px-3 rounded-lg transition-all"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                Cancel Order
                              </button>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-xl w-full p-6 sm:p-8 border border-white/10 shadow-2xl relative"
            >
              {/* Close btn */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-[10px] font-bold tracking-widest uppercase text-blue-500 mb-1">
                {selectedProject.category} BRIEF
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-podium tracking-wide text-white mr-8">
                {selectedProject.title}
              </h2>

              {/* Status Header */}
              <div className="flex flex-wrap items-center gap-4 mt-4 pb-4 border-b border-white/5">
                <span
                  className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                    selectedProject.status === "Completed"
                      ? "bg-emerald-950/60 border border-emerald-500/30 text-emerald-400"
                      : selectedProject.status === "Review & Feedback"
                      ? "bg-purple-950/60 border border-purple-500/30 text-purple-400"
                      : selectedProject.status === "In Progress"
                      ? "bg-blue-950/60 border border-blue-500/30 text-blue-400"
                      : "bg-zinc-950 border border-white/10 text-white/50"
                  }`}
                >
                  {selectedProject.status}
                </span>

                <span className="text-[10px] text-white/40 font-mono">
                  CREATED: {selectedProject.createdAt}
                </span>

                <span className="text-[10px] text-white/40 font-mono">
                  DUE: {selectedProject.deadline}
                </span>
              </div>

              {/* Description Body */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2 font-mono">
                  Project Description
                </h4>
                <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line bg-white/3 p-4 rounded-xl border border-white/5 font-sans">
                  {selectedProject.description}
                </p>
              </div>

              {/* Resources Link */}
              <div className="mt-5 flex items-center justify-between p-3.5 bg-blue-500/5 rounded-xl border border-blue-500/20">
                <div className="text-xs font-semibold text-blue-300">
                  Google Drive / Cloud Assets
                </div>
                <a
                  href={selectedProject.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient py-1.5 px-4 text-[10px] font-mono tracking-wider flex items-center gap-1.5 uppercase"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  ACCESS FOLDER
                </a>
              </div>

              {/* Creator notes / Comments */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2 font-mono">
                  Feedback & Status Updates
                </h4>
                <div className="bg-purple-500/5 border border-purple-500/20 p-4 rounded-xl text-sm text-purple-200 font-sans">
                  {selectedProject.adminNotes ? (
                    selectedProject.adminNotes
                  ) : (
                    <span className="text-white/30 italic">No notes posted yet. Project is currently in review.</span>
                  )}
                </div>
              </div>

              {/* Close bottom action */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-white/5 border border-white/10 hover:bg-white/10 py-2 px-6 rounded-xl text-xs font-semibold uppercase tracking-widest text-white transition-all"
                >
                  Close Workspace
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Password Prompt Modal */}
      <AnimatePresence>
        {showPasswordPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setShowPasswordPrompt(false);
              setPasswordInput("");
            }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-sm w-full p-6 sm:p-8 border border-white/10 shadow-2xl relative"
            >
              <button
                onClick={() => {
                  setShowPasswordPrompt(false);
                  setPasswordInput("");
                }}
                className="absolute top-6 right-6 p-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white transition-colors"
                aria-label="Close password prompt"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-[10px] font-bold tracking-widest uppercase text-purple-400 mb-2 font-mono">
                Creator Verification
              </div>
              <h2 className="text-xl font-bold font-podium tracking-wide text-white mb-4 font-mono">
                ENTER ACCESS PASSWORD
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const correctPassword = import.meta.env.VITE_CREATOR_PASSWORD || "tamashhh-admin";
                  if (passwordInput === correctPassword) {
                    setIsCreatorMode(true);
                    sessionStorage.setItem("tamashhh_creator_auth", "true");
                    setShowPasswordPrompt(false);
                    setPasswordInput("");
                    addToast("success", "Creator workspace mode activated!");
                  } else {
                    addToast("error", "Incorrect password. Access denied.");
                  }
                }}
                className="flex flex-col gap-4"
              >
                <input
                  type="password"
                  placeholder="Enter creator password..."
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  autoFocus
                  className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 w-full outline-none transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="btn-gradient w-full py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  Verify Access
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
