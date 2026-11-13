import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import VideoEditorAnand from "./pages/VideoEditorAnand";
import DigitalGrowth from "./pages/DigitalGrowth";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import ClientPortal from "./pages/ClientPortal";
import Preloader from "./components/Preloader";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ThemeProvider>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/video-editor-anand" element={<VideoEditorAnand />} />
            <Route path="/digital-growth" element={<DigitalGrowth />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/portal" element={<ClientPortal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
