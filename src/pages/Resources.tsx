import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Trash2,
  Copy,
  Check,
  Search,
  ArrowUpDown,
  Download,
  FileText,
  FileCode,
  Video,
  Layers,
  Plus,
  Grid,
  List,
  AlertCircle,
  File,
  Calendar,
  X,
  Lock,
  Unlock
} from "lucide-react";

interface ResourceFile {
  id: string;
  title: string;
  description: string;
  category: "design" | "video" | "courses" | "code" | "docs";
  fileName: string;
  fileSize: string;
  fileType: string;
  downloads: number;
  createdAt: string;
}

const DEFAULT_RESOURCES: ResourceFile[] = [
  {
    id: "1",
    title: "Tamashhh Intro Template",
    description: "Premiere Pro intro sequence template with modern motion graphics and title presets.",
    category: "video",
    fileName: "tamashhh-intro-v1.prproj",
    fileSize: "84.5 MB",
    fileType: "prproj",
    downloads: 142,
    createdAt: "2026-04-12",
  },
  {
    id: "2",
    title: "Luminara Design System Assets",
    description: "Full logo vector kit, typography configurations, color palette exports, and Figma design system components.",
    category: "design",
    fileName: "luminara-design-kit.zip",
    fileSize: "14.2 MB",
    fileType: "zip",
    downloads: 321,
    createdAt: "2026-05-03",
  },
  {
    id: "3",
    title: "Vite + Tailwind Boilerplate",
    description: "Starter template configured with ESLint, Prettier, TypeScript, absolute paths, and pre-built layout wrappers.",
    category: "code",
    fileName: "vite-tailwind-starter.zip",
    fileSize: "2.1 MB",
    fileType: "zip",
    downloads: 98,
    createdAt: "2026-05-10",
  },
  {
    id: "4",
    title: "Motion Design Principles E-Book",
    description: "A comprehensive guide outlining timing, spacing, anticipation, and easing curves for motion designers.",
    category: "courses",
    fileName: "motion-design-principles.pdf",
    fileSize: "8.4 MB",
    fileType: "pdf",
    downloads: 512,
    createdAt: "2026-05-20",
  },
  {
    id: "5",
    title: "Framer Motion Custom Hooks",
    description: "Utility animation hooks for scroll triggers, text animations, and smooth magnetic mouse tracking elements.",
    category: "code",
    fileName: "framer-hooks.json",
    fileSize: "48 KB",
    fileType: "json",
    downloads: 74,
    createdAt: "2026-06-01",
  },
  {
    id: "6",
    title: "Cinematic Color Grading LUTs",
    description: "Professional LUT cube files designed for Sony S-Log3 and LOG footage to achieve warm shadow tones and clean skin.",
    category: "video",
    fileName: "tamashhh-cinematic-luts.cube",
    fileSize: "12.8 MB",
    fileType: "cube",
    downloads: 45,
    createdAt: "2026-06-05",
  },
];

interface Toast {
  id: string;
  type: "success" | "info" | "error";
  message: string;
}

export default function Resources() {
  // --- States ---
  const [files, setFiles] = useState<ResourceFile[]>(() => {
    const saved = localStorage.getItem("tamashhh_resources");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved resources:", e);
      }
    }
    return DEFAULT_RESOURCES;
  });

  const [toasts, setToasts] = useState<Toast[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Admin Auth States
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return sessionStorage.getItem("tamashhh_is_admin") === "true";
  });
  const [passcode, setPasscode] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authError, setAuthError] = useState(false);

  // Upload Form States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<"design" | "video" | "courses" | "code" | "docs">("design");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  // Upload Progress Simulator
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState("0 MB/s");
  const [uploadStage, setUploadStage] = useState<"uploading" | "scanning" | "done">("uploading");

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    sessionStorage.setItem("tamashhh_is_admin", isAdmin ? "true" : "false");
  }, [isAdmin]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "tamashhh2026") {
      setIsAdmin(true);
      setShowAuthModal(false);
      setPasscode("");
      setAuthError(false);
      addToast("success", "Admin authentication successful!");
    } else {
      setAuthError(true);
      addToast("error", "Incorrect admin passcode.");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    addToast("info", "Admin session ended.");
  };

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("tamashhh_resources", JSON.stringify(files));
  }, [files]);

  // --- Toast Actions ---
  const addToast = (type: "success" | "info" | "error", message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // --- Helper Functions ---
  const formatBytes = (bytes: number, decimals = 1) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case "zip":
      case "rar":
      case "7z":
        return <Layers className="w-6 h-6 text-blue-400" />;
      case "prproj":
      case "aep":
      case "mp4":
      case "mov":
      case "cube":
        return <Video className="w-6 h-6 text-purple-400" />;
      case "pdf":
      case "doc":
      case "docx":
        return <FileText className="w-6 h-6 text-red-400" />;
      case "json":
      case "js":
      case "ts":
      case "tsx":
      case "css":
      case "html":
        return <FileCode className="w-6 h-6 text-emerald-400" />;
      default:
        return <File className="w-6 h-6 text-zinc-400" />;
    }
  };

  const parseSizeInBytes = (sizeStr: string) => {
    const parts = sizeStr.split(" ");
    const val = parseFloat(parts[0]);
    if (!parts[1]) return val;
    const unit = parts[1].toUpperCase();
    if (unit === "KB") return val * 1024;
    if (unit === "MB") return val * 1024 * 1024;
    if (unit === "GB") return val * 1024 * 1024 * 1024;
    return val;
  };

  const getTotalStorage = () => {
    const totalBytes = files.reduce((acc, f) => acc + parseSizeInBytes(f.fileSize), 0);
    return formatBytes(totalBytes);
  };

  // --- File Drag & Drop Handlers ---
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, ""));
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, ""));
      }
    }
  };

  // --- Simulated Upload Flow ---
  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      addToast("error", "Please select or drop a resource file first.");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setUploadStage("uploading");

    // Random upload speed simulation
    const speed = (Math.random() * 8 + 3).toFixed(1);
    setUploadSpeed(`${speed} MB/s`);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadStage("scanning");
          // Hold in scan mode briefly
          setTimeout(() => {
            setUploadStage("done");
            setTimeout(() => {
              // Final creation
              const extension = selectedFile.name.split(".").pop() || "zip";
              const newFile: ResourceFile = {
                id: Date.now().toString(),
                title: title.trim() || selectedFile.name.replace(/\.[^/.]+$/, ""),
                description: description.trim() || "Tamashhh deliverable package file.",
                category,
                fileName: selectedFile.name,
                fileSize: formatBytes(selectedFile.size),
                fileType: extension,
                downloads: 0,
                createdAt: new Date().toISOString().split("T")[0],
              };

              setFiles((prevFiles) => [newFile, ...prevFiles]);
              addToast("success", `Resource "${newFile.title}" uploaded successfully!`);

              // Reset Form
              setTitle("");
              setDescription("");
              setCategory("design");
              setSelectedFile(null);
              setIsUploading(false);
              setUploadProgress(0);
            }, 600);
          }, 1200);

          return 100;
        }
        // Increment progress randomly
        const increment = Math.floor(Math.random() * 12 + 6);
        return Math.min(prev + increment, 100);
      });
    }, 150);
  };

  // --- Resource File Actions ---
  const handleDownload = (id: string, name: string, fileName: string) => {
    // Increment download counter
    setFiles((prev) =>
      prev.map((f) => {
        if (f.id === id) {
          return { ...f, downloads: f.downloads + 1 };
        }
        return f;
      })
    );
    addToast("success", `Downloading: ${name}`);

    // Download real file from server public directory
    const element = document.createElement("a");
    element.href = `/resources/${fileName}`;
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopyLink = (fileName: string) => {
    const downloadUrl = `${window.location.origin}/resources/${fileName}`;

    navigator.clipboard
      .writeText(downloadUrl)
      .then(() => {
        addToast("success", "Shareable download link copied to clipboard!");
      })
      .catch(() => {
        addToast("error", "Unable to copy link to clipboard.");
      });
  };

  const handleDelete = (id: string, title: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    addToast("info", `Resource "${title}" has been deleted.`);
  };

  // --- Filtering & Sorting Logic ---
  const filteredFiles = files.filter((f) => {
    const matchesCategory = filter === "all" || f.category === filter;
    const matchesSearch =
      f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.fileName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedFiles = [...filteredFiles].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    if (sortBy === "size") {
      return parseSizeInBytes(b.fileSize) - parseSizeInBytes(a.fileSize);
    }
    if (sortBy === "downloads") {
      return b.downloads - a.downloads;
    }
    return 0;
  });

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden pb-24">
      {/* Background Decorative Gradients */}
      <div className="absolute top-24 left-1/4 w-[40rem] h-[40rem] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 right-1/4 w-[40rem] h-[40rem] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Toast Notification Containers */}
      <div className="fixed top-24 right-6 z-50 flex flex-col gap-3 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className="pointer-events-auto flex items-center justify-between gap-4 bg-zinc-900/95 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-md min-w-[280px] max-w-sm"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${
                    toast.type === "success"
                      ? "bg-green-500 animate-pulse"
                      : toast.type === "error"
                      ? "bg-red-500 animate-pulse"
                      : "bg-blue-500 animate-pulse"
                  }`}
                />
                <p className="text-xs font-semibold uppercase tracking-wider text-white">
                  {toast.message}
                </p>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Hero Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-500 text-xs tracking-[0.3em] uppercase font-semibold mb-4"
          >
            TAMASHHH STORAGE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-podium uppercase tracking-wider gradient-text-h"
          >
            Creative Resources Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/50 max-w-xl mx-auto text-sm sm:text-base"
          >
            A dedicated system for uploading, tracking, and distributing resource files, assets, presets, and tutorials.
          </motion.p>
        </div>
      </section>

      {/* Dynamic Statistics Metrics Banner */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card p-6 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-white/40">Total Files</span>
            <span className="text-3xl font-bold mt-2 font-podium tracking-wide text-white">
              {files.length}
            </span>
          </div>
          <div className="glass-card p-6 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-white/40">Bandwidth / Storage</span>
            <span className="text-3xl font-bold mt-2 font-podium tracking-wide gradient-text">
              {getTotalStorage()}
            </span>
          </div>
          <div className="glass-card p-6 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-white/40">Total Downloads</span>
            <span className="text-3xl font-bold mt-2 font-podium tracking-wide text-white">
              {files.reduce((acc, f) => acc + f.downloads, 0)}
            </span>
          </div>
          <div className="glass-card p-6 flex flex-col justify-between">
            <span className="text-[10px] uppercase tracking-widest text-white/40">System Health</span>
            <span className="text-3xl font-bold mt-2 font-podium tracking-wide text-green-400 flex items-center gap-2">
              ONLINE
            </span>
          </div>
        </div>
      </section>

      {/* Main Panel grid layout */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Upload Form or Visitor Intro */}
          <div className="lg:col-span-4 space-y-6">
            {isAdmin ? (
              <>
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-bold font-podium uppercase tracking-wider text-white/80">
                    Upload New Asset
                  </h2>
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="text-[10px] text-red-400 hover:text-red-300 font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors animate-fade-in"
                  >
                    <Unlock className="w-3.5 h-3.5" />
                    Sign Out
                  </button>
                </div>

                <form onSubmit={handleUploadSubmit} className="glass-card p-6 space-y-5 relative animate-fade-in">
                  {/* Drag and Drop Zone */}
                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => !isUploading && fileInputRef.current?.click()}
                    className={`relative border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ${
                      dragActive
                        ? "border-blue-500 bg-blue-500/10 scale-[1.02]"
                        : "border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20"
                    } ${isUploading ? "opacity-50 pointer-events-none" : ""}`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      disabled={isUploading}
                    />
                    <Upload className="w-8 h-8 text-white/40 mb-3 animate-pulse" />
                    {selectedFile ? (
                      <div className="space-y-1">
                        <p className="text-xs font-semibold text-white break-all max-w-[200px] mx-auto">
                          {selectedFile.name}
                        </p>
                        <p className="text-[10px] text-white/40">{formatBytes(selectedFile.size)}</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xs font-semibold text-white">Drag & drop asset package</p>
                        <p className="text-[10px] text-white/40 mt-1">or click to browse local files</p>
                      </div>
                    )}
                  </div>

                  {/* Title input */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider text-white/40 block font-semibold">
                      Resource Name
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g., Motion Pack 2026"
                      disabled={isUploading}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder-white/25 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
                      required
                    />
                  </div>

                  {/* Category input */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider text-white/40 block font-semibold">
                      Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value as any)}
                      disabled={isUploading}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-blue-500 transition-all"
                    >
                      <option value="design">Design Assets</option>
                      <option value="video">Video Projects</option>
                      <option value="courses">Course Material</option>
                      <option value="code">Code Templates</option>
                      <option value="docs">Documents</option>
                    </select>
                  </div>

                  {/* Description input */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-wider text-white/40 block font-semibold">
                      Short Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Explain what is included in this asset..."
                      disabled={isUploading}
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder-white/25 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isUploading || !selectedFile}
                    className={`w-full flex items-center justify-center gap-2 p-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                      isUploading || !selectedFile
                        ? "bg-white/5 text-white/20 border border-white/5 cursor-not-allowed"
                        : "btn-gradient hover:shadow-lg"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                    Upload Resource
                  </button>

                  {/* Uploading progress bar simulation overlay */}
                  <AnimatePresence>
                    {isUploading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-dark/95 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center items-center text-center"
                      >
                        <div className="w-full max-w-[200px] space-y-4">
                          {uploadStage === "uploading" ? (
                            <>
                              <div className="flex justify-between text-xs text-white/50">
                                <span>Uploading...</span>
                                <span>{uploadProgress}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-500"
                                  style={{ width: `${uploadProgress}%` }}
                                />
                              </div>
                              <p className="text-[10px] text-white/40">{uploadSpeed}</p>
                            </>
                          ) : uploadStage === "scanning" ? (
                            <div className="space-y-3">
                              <div className="flex justify-center">
                                <span className="w-8 h-8 rounded-full border-2 border-t-blue-500 border-r-transparent border-l-transparent border-b-transparent animate-spin" />
                              </div>
                              <p className="text-xs text-blue-400 font-semibold tracking-wider animate-pulse">
                                SCANNING FOR THREATS...
                              </p>
                              <p className="text-[10px] text-white/30">Securing cloud architecture</p>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <Check className="w-8 h-8 text-green-500 mx-auto bg-green-500/10 p-1.5 rounded-full animate-bounce" />
                              <p className="text-xs text-green-400 font-bold tracking-wider">
                                COMPLETE!
                              </p>
                              <p className="text-[10px] text-white/40">Registering resource metadata</p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </>
            ) : (
              <div className="glass-card p-6 text-center space-y-6 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 flex items-center justify-center mx-auto shadow-lg shadow-blue-500/20">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    Tamashhh Deliverables
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Filter, search, and download content creative assets, layouts, plugins, and courses packages created by Tamashhh.
                  </p>
                </div>
                <button
                  onClick={() => setShowAuthModal(true)}
                  type="button"
                  className="w-full btn-outline flex items-center justify-center gap-2 p-3 text-xs"
                >
                  <Lock className="w-3.5 h-3.5 text-blue-400" />
                  Owner Access Login
                </button>
              </div>
            )}
          </div>

          {/* RIGHT: File List & Search controls */}
          <div className="lg:col-span-8 space-y-6">
            {/* Filter controls headers */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <h2 className="text-lg font-bold font-podium uppercase tracking-wider text-white/80">
                Asset Registry ({sortedFiles.length})
              </h2>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Search query field */}
                <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search resources..."
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/10 transition-all"
                  />
                </div>

                {/* View layout Mode Toggles */}
                <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-full transition-all ${
                      viewMode === "grid" ? "bg-white/10 text-white" : "text-white/40 hover:text-white"
                    }`}
                    aria-label="Grid layout"
                  >
                    <Grid className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded-full transition-all ${
                      viewMode === "list" ? "bg-white/10 text-white" : "text-white/40 hover:text-white"
                    }`}
                    aria-label="List layout"
                  >
                    <List className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Assets" },
                { id: "design", label: "Design" },
                { id: "video", label: "Video Projects" },
                { id: "courses", label: "Courses" },
                { id: "code", label: "Code templates" },
                { id: "docs", label: "Documents" },
              ].map((pill) => (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => setFilter(pill.id)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all ${
                    filter === pill.id
                      ? "bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 text-white"
                      : "bg-white/5 text-white/40 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Sorting pill selection & Count indicator */}
            <div className="flex items-center gap-2 text-xs text-white/40 pb-2 border-b border-white/5 justify-between">
              <span className="text-[10px] uppercase tracking-widest font-semibold">
                Sorted by {sortBy}
              </span>
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-white transition-colors">
                <ArrowUpDown className="w-3.5 h-3.5" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none outline-none text-xs text-white/70 font-semibold uppercase tracking-wider cursor-pointer focus:ring-0 p-0 animate-fade-in"
                >
                  <option value="newest" className="bg-zinc-900 text-white">
                    Newest First
                  </option>
                  <option value="size" className="bg-zinc-900 text-white">
                    Largest Size
                  </option>
                  <option value="downloads" className="bg-zinc-900 text-white">
                    Popularity
                  </option>
                </select>
              </div>
            </div>

            {/* Render empty state */}
            {sortedFiles.length === 0 && (
              <div className="glass-card p-12 text-center flex flex-col items-center justify-center animate-fade-in">
                <AlertCircle className="w-12 h-12 text-white/20 mb-4 animate-bounce" />
                <h3 className="text-sm font-semibold text-white">No files found</h3>
                <p className="text-xs text-white/40 mt-1 max-w-xs">
                  We couldn't find any resources matching current filters or search terms. Try uploading some files.
                </p>
              </div>
            )}

            {/* Render Grid layout */}
            {viewMode === "grid" ? (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                  {sortedFiles.map((file) => (
                    <motion.div
                      key={file.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="group glass-card p-5 flex flex-col justify-between hover:scale-[1.01] duration-300"
                    >
                      <div>
                        {/* Tag & Icon header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                            {getFileIcon(file.fileType)}
                          </div>
                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                              file.category === "design"
                                ? "text-blue-400 bg-blue-500/10 border-blue-500/20"
                                : file.category === "video"
                                ? "text-purple-400 bg-purple-500/10 border-purple-500/20"
                                : file.category === "courses"
                                ? "text-red-400 bg-red-500/10 border-red-500/20"
                                : file.category === "code"
                                ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                                : "text-amber-400 bg-amber-500/10 border-amber-500/20"
                            }`}
                          >
                            {file.category}
                          </span>
                        </div>

                        {/* Title & info */}
                        <h3 className="text-sm font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
                          {file.title}
                        </h3>
                        <p className="text-xs text-white/50 mt-1.5 line-clamp-2 h-8">
                          {file.description}
                        </p>

                        {/* File metrics */}
                        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-white/40">
                          <span className="flex items-center gap-1">
                            <span className="font-semibold text-white/60">Type:</span>{" "}
                            {file.fileType.toUpperCase()}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="font-semibold text-white/60">Size:</span>{" "}
                            {file.fileSize}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="font-semibold text-white/60">Downloads:</span>{" "}
                            {file.downloads}
                          </span>
                        </div>
                      </div>

                      {/* Action trigger row */}
                      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[9px] text-white/30 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {file.createdAt}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleCopyLink(file.fileName)}
                            className="p-2 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-white rounded-lg transition-all"
                            title="Copy share link"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                          {isAdmin && (
                            <button
                              type="button"
                              onClick={() => handleDelete(file.id, file.title)}
                              className="p-2 bg-white/5 border border-white/5 hover:bg-red-500/10 hover:border-red-500/20 text-white/60 hover:text-red-400 rounded-lg transition-all"
                              title="Delete file"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => handleDownload(file.id, file.title, file.fileName)}
                            className="p-2 bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 text-white rounded-lg hover:shadow-lg transition-all"
                            title="Download resource"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              /* Render List layout */
              <motion.div layout className="space-y-3">
                <AnimatePresence mode="popLayout">
                  {sortedFiles.map((file) => (
                    <motion.div
                      key={file.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="group glass-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex-shrink-0">
                          {getFileIcon(file.fileType)}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-bold text-white">{file.title}</h3>
                            <span
                              className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                                file.category === "design"
                                  ? "text-blue-400 bg-blue-500/10 border-blue-500/20"
                                  : file.category === "video"
                                  ? "text-purple-400 bg-purple-500/10 border-purple-500/20"
                                  : file.category === "courses"
                                  ? "text-red-400 bg-red-500/10 border-red-500/20"
                                  : file.category === "code"
                                  ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                                  : "text-amber-400 bg-amber-500/10 border-amber-500/20"
                              }`}
                            >
                              {file.category}
                            </span>
                          </div>
                          <p className="text-xs text-white/40 mt-1 line-clamp-1">
                            {file.description}
                          </p>

                          <div className="mt-2 flex gap-4 text-[10px] text-white/30">
                            <span>Size: {file.fileSize}</span>
                            <span>Downloads: {file.downloads}</span>
                            <span>Uploaded: {file.createdAt}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right button alignments */}
                      <div className="flex items-center gap-2 justify-end">
                        <button
                          type="button"
                          onClick={() => handleCopyLink(file.fileName)}
                          className="p-2 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-white rounded-lg transition-all"
                          title="Copy share link"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        {isAdmin && (
                          <button
                            type="button"
                            onClick={() => handleDelete(file.id, file.title)}
                            className="p-2 bg-white/5 border border-white/5 hover:bg-red-500/10 hover:border-red-500/20 text-white/60 hover:text-red-400 rounded-lg transition-all"
                            title="Delete file"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => handleDownload(file.id, file.title, file.fileName)}
                          className="p-2 bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 text-white rounded-lg hover:shadow-lg transition-all"
                          title="Download resource"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Admin Passcode Login Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 backdrop-blur-md px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`w-full max-w-md glass-card p-8 space-y-6 relative overflow-hidden border border-white/10 ${
                authError ? "animate-pulse-glow" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  setShowAuthModal(false);
                  setPasscode("");
                  setAuthError(false);
                }}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-2">
                <Lock className="w-10 h-10 text-blue-500 mx-auto" />
                <h3 className="text-lg font-bold font-podium uppercase tracking-wider text-white">
                  Owner Authentication
                </h3>
                <p className="text-xs text-white/40 max-w-xs mx-auto">
                  Please enter your passcode to unlock upload, editing, and delete actions.
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-wider text-white/40 block font-semibold">
                    Admin Passcode
                  </label>
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter owner passcode"
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-xs text-center tracking-widest text-white focus:outline-none focus:border-blue-500 transition-all"
                    required
                    autoFocus
                  />
                  {authError && (
                    <p className="text-[10px] text-red-400 font-semibold uppercase text-center mt-1 animate-pulse">
                      Passcode incorrect. Hint: tamashhh2026
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn-gradient flex items-center justify-center gap-2 p-3.5 rounded-full text-xs font-semibold tracking-wider uppercase"
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
