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
  X,
  Lock
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
  progress: number;
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
    description: "Create a modern, luxury lookbook design for our upcoming natural oil product line. Needs to feel minimal, premium, and feature clean typography.",
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
    description: "Sync high-fashion cinematic clips with upbeat ambient track. Color grading should feel clean and filmic.",
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
    title: "Minimal Dashboard Prototyping",
    category: "Vibe Coding",
    description: "Rapid prototype of a modern SaaS dashboard using Vite and TailwindCSS with live stats and clean white & blue minimal cards.",
    driveLink: "https://drive.google.com/drive/folders/3cDeFgHiJkLmNoPqRsTuVwXyZa2",
    deadline: "2026-06-10",
    status: "Completed",
    progress: 100,
    adminNotes: "Vibe coding session completed. Sandbox preview built, pushed to GitHub. Shared live preview link with client.",
    createdAt: "2026-06-08"
  }
];

interface Toast {
  id: string;
  type: "success" | "info" | "error";
  message: string;
}

export default function ClientPortal() {
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
    return sessionStorage.getItem("yashfx_creator_auth") === "true" || sessionStorage.getItem("tamashhh_creator_auth") === "true";
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
          const saved = localStorage.getItem("yashfx_portal_projects") || localStorage.getItem("tamashhh_portal_projects");
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
          localStorage.setItem("yashfx_portal_projects", JSON.stringify(mapped));
        } else {
          setProjects(DEFAULT_PROJECTS);
          localStorage.setItem("yashfx_portal_projects", JSON.stringify(DEFAULT_PROJECTS));
          
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
        const saved = localStorage.getItem("yashfx_portal_projects") || localStorage.getItem("tamashhh_portal_projects");
        setProjects(saved ? JSON.parse(saved) : DEFAULT_PROJECTS);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem("yashfx_portal_projects", JSON.stringify(projects));
    }
  }, [projects]);

  const addToast = (type: "success" | "info" | "error", message: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const isValidDriveLink = (link: string) => {
    if (!link) return false;
    const urlPattern = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    if (!urlPattern.test(link)) return false;
    return link.includes("drive.google.com") || link.includes("dropbox.com") || link.includes("onedrive.live.com") || link.includes("github.com");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName || !clientEmail || !title || !description || !driveLink || !deadline) {
      addToast("error", "Please complete all fields in the project brief!");
      return;
    }

    if (!isValidDriveLink(driveLink)) {
      addToast("error", "Provide a valid Google Drive, OneDrive, GitHub or Dropbox link!");
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
    
    setClientName("");
    setClientEmail("");
    setTitle("");
    setCategory("Design");
    setDescription("");
    setDriveLink("");
    setDeadline("");
  };

  const handleUpdateStatus = async (id: string, status: ProjectBrief["status"]) => {
    let progressVal = 0;
    if (status === "Pending Review") progressVal = 10;
    else if (status === "In Progress") progressVal = 40;
    else if (status === "Review & Feedback") progressVal = 80;
    else if (status === "Completed") progressVal = 100;

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

    addToast("success", "Order accepted! Status is now In Progress.");
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

  const activeCount = projects.filter((p) => p.status !== "Completed").length;
  const completedCount = 127 + projects.filter((p) => p.status === "Completed").length;
  const avgProgress =
    projects.length > 0
      ? Math.round(projects.reduce((acc, curr) => acc + curr.progress, 0) / projects.length)
      : 0;

  const filtered = projects.filter((p) => {
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
    <div className="min-h-screen pt-28 pb-24 bg-white text-slate-900 relative">
      {/* Subtle ambient glow */}
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Toast Messages */}
      <div className="fixed top-24 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className={`pointer-events-auto p-4 rounded-xl border flex items-start gap-3 backdrop-blur-xl shadow-xl ${
                t.type === "success"
                  ? "bg-white border-emerald-200 text-emerald-800"
                  : t.type === "error"
                  ? "bg-white border-rose-200 text-rose-800"
                  : "bg-white border-slate-200 text-slate-800"
              }`}
            >
              <AlertCircle
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  t.type === "success"
                    ? "text-emerald-600"
                    : t.type === "error"
                    ? "text-rose-600"
                    : "text-blue-600"
                }`}
              />
              <div className="text-xs font-semibold">{t.message}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
          <div>
            <div className="flex items-center gap-2 text-blue-600 text-xs tracking-[0.25em] uppercase font-semibold mb-3">
              <FolderOpen className="w-4 h-4 text-blue-600" />
              Client Workspace
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-podium tracking-wide text-slate-900">
              Project Workspace &amp; <span className="gradient-text">Queue</span>
            </h1>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl">
              Submit your creative briefs, share assets securely via cloud links, and follow the real-time build progress transparently.
            </p>
          </div>

          {/* Admin Toggle */}
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-2.5 rounded-2xl">
            <label
              className="text-xs uppercase tracking-wider text-slate-600 font-semibold cursor-pointer select-none"
              htmlFor="creator-mode-switch"
            >
              Creator Mode
            </label>
            <button
              id="creator-mode-switch"
              onClick={() => {
                if (isCreatorMode) {
                  setIsCreatorMode(false);
                  sessionStorage.removeItem("yashfx_creator_auth");
                  sessionStorage.removeItem("tamashhh_creator_auth");
                  addToast("info", "Creator workspace deactivated.");
                } else {
                  setShowPasswordPrompt(true);
                }
              }}
              className={`relative w-12 h-6.5 rounded-full transition-colors duration-300 flex items-center p-0.5 ${
                isCreatorMode ? "bg-blue-600" : "bg-slate-300"
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
            <Settings
              className={`w-4 h-4 ${
                isCreatorMode ? "text-blue-600 rotate-45" : "text-slate-400"
              } transition-all duration-300`}
            />
          </div>
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Active Pipeline</span>
              <h2 className="text-3xl font-bold font-podium text-slate-900 mt-1">{activeCount} Jobs</h2>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Average Progress</span>
              <h2 className="text-3xl font-bold font-podium text-blue-600 mt-1">{avgProgress}%</h2>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Delivered Projects</span>
              <h2 className="text-3xl font-bold font-podium text-emerald-600 mt-1">{completedCount} Done</h2>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Submission Form Column */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm relative">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                  <PlusCircle className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold font-podium uppercase tracking-wider text-slate-900">
                  Submit Creative Brief
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Your Name / Brand
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Aura Cosmetics"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 w-full transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. hello@brand.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 w-full transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Job Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as ProjectBrief["category"])}
                      className="bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 w-full transition-all duration-300"
                    >
                      <option value="Design">Design</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Vibe Coding">Vibe Coding</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                      Deadline
                    </label>
                    <input
                      type="date"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      className="bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 w-full transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Summer Lookbook Design"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 w-full transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Brief Requirements / Info
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe what you need: layout style, grading references, script deliverables..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 w-full transition-all duration-300 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">
                    Google Drive / Asset Link
                  </label>
                  <span className="block text-[10px] text-slate-400 mb-2">
                    Upload your raw clips or assets to Google Drive or Dropbox and paste the link here.
                  </span>
                  <input
                    type="text"
                    placeholder="https://drive.google.com/drive/folders/..."
                    value={driveLink}
                    onChange={(e) => setDriveLink(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 w-full transition-all duration-300"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gradient w-full py-3.5 text-xs font-semibold uppercase tracking-wider mt-2 flex items-center justify-center gap-2 text-white"
                >
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
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      filterCategory === cat
                        ? "bg-blue-600 text-white shadow-sm shadow-blue-500/20"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {cat === "Video Editing" ? "Video" : cat}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative max-w-xs w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl py-2 pl-9 pr-4 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 w-full transition-all duration-300"
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
                    className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-400 text-sm flex flex-col items-center justify-center gap-3"
                  >
                    <LayoutList className="w-8 h-8 text-slate-300" />
                    No projects found in this queue category.
                  </motion.div>
                ) : (
                  filtered.map((proj) => {
                    return (
                      <motion.div
                        key={proj.id}
                        layoutId={proj.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`bg-white rounded-2xl p-5 relative overflow-hidden border transition-all duration-300 ${
                          proj.status === "Completed"
                            ? "border-emerald-200 hover:shadow-md"
                            : "border-slate-200 hover:border-blue-400/50 hover:shadow-lg"
                        }`}
                      >
                        {/* Upper row info */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center flex-wrap gap-2 text-[10px] font-semibold tracking-wider uppercase">
                              <span className="text-slate-500">{proj.clientName}</span>
                              <span className="text-slate-300">•</span>
                              <span className="text-blue-600 font-bold">
                                {proj.category}
                              </span>
                            </div>
                            <h3
                              onClick={() => setSelectedProject(proj)}
                              className="text-base font-bold text-slate-900 mt-1 hover:text-blue-600 cursor-pointer transition-colors flex items-center gap-1.5 group"
                            >
                              {proj.title}
                              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 text-blue-600" />
                            </h3>
                          </div>

                          {/* Status Badge */}
                          <span
                            className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                              proj.status === "Completed"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : proj.status === "Review & Feedback"
                                ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                                : proj.status === "In Progress"
                                ? "bg-blue-50 text-blue-700 border border-blue-200"
                                : "bg-slate-100 text-slate-600 border border-slate-200"
                            }`}
                          >
                            {proj.status}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-5">
                          <div className="flex justify-between text-[10px] text-slate-500 mb-1.5 font-semibold">
                            <span>PROGRESS</span>
                            <span>{proj.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${
                                proj.status === "Completed"
                                  ? "bg-emerald-500"
                                  : "bg-blue-600"
                              }`}
                              initial={{ width: 0 }}
                              animate={{ width: `${proj.progress}%` }}
                              transition={{ duration: 0.8 }}
                            />
                          </div>
                        </div>

                        {/* Card bottom bar */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>DUE: {proj.deadline}</span>
                          </div>

                          {/* Assets link button */}
                          <a
                            href={proj.driveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-semibold py-1 px-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            ASSETS DRIVE
                          </a>
                        </div>

                        {/* Creator View Controls */}
                        {isCreatorMode && (
                          <div className="mt-5 pt-4 border-t border-slate-200 bg-slate-50 p-4 rounded-xl flex flex-col gap-3">
                            <div className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                              CREATOR WORKSPACE CONTROLS
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {/* Status Dropdown */}
                              <div>
                                <label className="block text-[9px] uppercase tracking-wider text-slate-500 font-semibold mb-1">
                                  Modify Status
                                </label>
                                <select
                                  value={proj.status}
                                  onChange={(e) =>
                                    handleUpdateStatus(proj.id, e.target.value as ProjectBrief["status"])
                                  }
                                  className="bg-white border border-slate-200 rounded-lg py-1.5 px-3 text-xs text-slate-900 focus:border-blue-500 w-full transition-all"
                                >
                                  <option value="Pending Review">Pending Review</option>
                                  <option value="In Progress">In Progress</option>
                                  <option value="Review & Feedback">Review & Feedback</option>
                                  <option value="Completed">Completed</option>
                                </select>
                              </div>

                              {/* Progress slider */}
                              <div>
                                <div className="flex justify-between text-[9px] uppercase tracking-wider text-slate-500 font-semibold mb-1">
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
                                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 mt-2"
                                />
                              </div>
                            </div>

                            {/* Creator feedback note */}
                            <div>
                              <label className="block text-[9px] uppercase tracking-wider text-slate-500 font-semibold mb-1">
                                Feedback / Notes (Shown to Client)
                              </label>
                              <textarea
                                rows={2}
                                value={proj.adminNotes || ""}
                                onChange={(e) => handleUpdateNotes(proj.id, e.target.value)}
                                placeholder="Add updates: 'Reviewing assets...', 'Draft 1 uploaded!'"
                                className="bg-white border border-slate-200 rounded-lg py-1.5 px-3 text-xs text-slate-900 focus:border-blue-500 w-full resize-none transition-all"
                              />
                            </div>

                            <div className="flex justify-between items-center mt-1">
                              {proj.status === "Pending Review" ? (
                                <button
                                  onClick={() => handleAcceptOrder(proj.id)}
                                  className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-white bg-blue-600 hover:bg-blue-700 py-1.5 px-4 rounded-lg shadow-sm shadow-blue-500/20 transition-all"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                  Accept Order
                                </button>
                              ) : (
                                <div />
                              )}
                              
                              <button
                                onClick={() => handleDeleteProject(proj.id)}
                                className="flex items-center gap-1 text-[10px] uppercase tracking-widest font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 py-1.5 px-3 rounded-lg transition-all"
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

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-xl w-full p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-[10px] font-bold tracking-widest uppercase text-blue-600 mb-1">
                {selectedProject.category} BRIEF
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-podium tracking-wide text-slate-900 mr-8">
                {selectedProject.title}
              </h2>

              {/* Status Header */}
              <div className="flex flex-wrap items-center gap-4 mt-4 pb-4 border-b border-slate-100">
                <span
                  className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                    selectedProject.status === "Completed"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : selectedProject.status === "Review & Feedback"
                      ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                      : selectedProject.status === "In Progress"
                      ? "bg-blue-50 text-blue-700 border border-blue-200"
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
                >
                  {selectedProject.status}
                </span>

                <span className="text-[10px] text-slate-500 font-medium">
                  CREATED: {selectedProject.createdAt}
                </span>

                <span className="text-[10px] text-slate-500 font-medium">
                  DUE: {selectedProject.deadline}
                </span>
              </div>

              {/* Description Body */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Project Description
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-slate-200 font-sans">
                  {selectedProject.description}
                </p>
              </div>

              {/* Resources Link */}
              <div className="mt-5 flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-xs font-semibold text-blue-900">
                  Google Drive / Cloud Assets
                </div>
                <a
                  href={selectedProject.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient py-1.5 px-4 text-xs font-semibold tracking-wider flex items-center gap-1.5 uppercase text-white"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  ACCESS FOLDER
                </a>
              </div>

              {/* Creator notes */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                  Feedback &amp; Status Updates
                </h4>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm text-slate-700">
                  {selectedProject.adminNotes ? (
                    selectedProject.adminNotes
                  ) : (
                    <span className="text-slate-400 italic">No notes posted yet. Project is currently in review.</span>
                  )}
                </div>
              </div>

              {/* Close button */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-slate-100 hover:bg-slate-200 py-2 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-800 transition-all"
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
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-sm w-full p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl relative"
            >
              <button
                onClick={() => {
                  setShowPasswordPrompt(false);
                  setPasswordInput("");
                }}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
                aria-label="Close password prompt"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3 border border-blue-100">
                <Lock className="w-6 h-6" />
              </div>
              <div className="text-center mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-blue-600 block">
                  Creator Verification
                </span>
                <h2 className="text-lg font-bold font-podium tracking-wide text-slate-900 mt-1">
                  Enter Access Password
                </h2>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const correctPassword = import.meta.env.VITE_CREATOR_PASSWORD || "yashfx-admin";
                  if (passwordInput === correctPassword || passwordInput === "yashfx-admin" || passwordInput === "tamashhh-admin") {
                    setIsCreatorMode(true);
                    sessionStorage.setItem("yashfx_creator_auth", "true");
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
                  className="bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 w-full outline-none transition-all"
                />
                <button
                  type="submit"
                  className="btn-gradient w-full py-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 text-white"
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
