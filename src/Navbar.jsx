import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Principal", href: "#principal" },
  { label: "Faculty", href: "#faculty" },
  { label: "Admissions", href: "#admissions" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#800000] shadow-2xl py-2" : "bg-[#800000] py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo + Name */}
            <a href="#home" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border-2 border-[#FFD700] overflow-hidden shadow-lg flex-shrink-0 bg-white">
                <img
                  src="/logo.png"
                  alt="INFO Intermediate College"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-[#FFD700] font-bold text-sm leading-tight tracking-wider uppercase"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  INFO Intermediate
                </p>
                <p className="text-white/60 text-xs tracking-widest uppercase">College</p>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-white/80 hover:text-[#FFD700] text-sm font-medium tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Apply Now + Hamburger */}
            <div className="flex items-center gap-3">
              <motion.a
                href="#admissions"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="hidden sm:inline-flex items-center gap-2 bg-[#FFD700] text-[#800000] font-bold text-sm px-5 py-2.5 tracking-wider uppercase shadow-lg"
              >
                + Apply Now
              </motion.a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-[#FFD700] p-1"
                aria-label="Toggle menu"
              >
                <div className="w-6 flex flex-col gap-1.5">
                  <span className={`block h-0.5 bg-[#FFD700] rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                  <span className={`block h-0.5 bg-[#FFD700] rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5 bg-[#FFD700] rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[56px] left-0 right-0 z-40 bg-[#6b0000] border-t border-[#FFD700]/30 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="py-4 px-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/90 hover:text-[#FFD700] py-2.5 text-sm font-medium border-b border-white/10 last:border-0 tracking-wide transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#admissions"
                onClick={() => setMenuOpen(false)}
                className="mt-3 bg-[#FFD700] text-[#800000] font-bold text-sm px-4 py-3 text-center tracking-wider uppercase"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
