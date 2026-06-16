import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-dark text-white font-inter relative">
      <Navbar />
      <main className="pt-[92px] lg:pt-[100px]">
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919773135547?text=Hello%20Tamashhh!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/10 hover:bg-[#20ba5a] hover:scale-110 hover:shadow-green-500/20 active:scale-95 transition-all duration-300 group border border-white/5"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-7 h-7 text-white fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 2C6.479 2 2 6.477 2 12.03c0 2.215.719 4.316 2.062 6.035L2.56 22.583a.524.524 0 0 0 .618.618l4.517-1.503A10.016 10.016 0 0 0 12.03 22c5.552 0 10.03-4.478 10.03-10.03S17.583 2 12.031 2zm0 18.06c-1.922 0-3.729-.623-5.226-1.782a.524.524 0 0 0-.44-.069l-3.329 1.11.956-2.871a.523.523 0 0 0-.083-.49C2.68 14.484 2.052 12.8 2.052 11.03c0-4.954 4.026-8.98 8.98-8.98 4.954 0 8.98 4.026 8.98 8.98s-4.026 8.98-8.981 8.98zM16.14 13.568c-.282-.142-1.673-.825-1.932-.919-.26-.094-.448-.142-.636.142-.188.283-.729.919-.894 1.107-.165.189-.33.212-.612.071a7.71 7.71 0 0 1-2.274-1.402 8.498 8.498 0 0 1-1.573-1.959c-.165-.283-.018-.435.124-.575.127-.126.282-.33.424-.495.141-.165.188-.283.282-.472.094-.188.047-.353-.023-.495-.071-.141-.636-1.532-.871-2.097-.23-.553-.464-.477-.636-.486-.165-.008-.353-.009-.542-.009-.188 0-.494.07-.753.353-.259.283-.988.966-.988 2.355 0 1.389 1.012 2.73 1.153 2.919.141.189 1.993 3.044 4.827 4.266.674.29 1.2.464 1.61.595.68.217 1.3.187 1.79.113.546-.081 1.673-.683 1.908-1.343.235-.66.235-1.226.165-1.343-.07-.117-.259-.188-.54-.33z"/>
        </svg>
      </a>
    </div>
  );
}
