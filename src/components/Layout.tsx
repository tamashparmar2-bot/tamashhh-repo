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
    <div className="min-h-screen bg-dark text-white font-inter">
      <Navbar />
      <main className="pt-[60px] lg:pt-[68px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
