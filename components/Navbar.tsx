"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [10, 20]);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ["how-it-works", "hardware", "users", "tech"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#how-it-works", label: "How It Works", id: "how-it-works" },
    { href: "#hardware", label: "Hardware", id: "hardware" },
    { href: "#users", label: "For You", id: "users" },
    { href: "#tech", label: "Tech Specs", id: "tech" },
  ];

  return (
    <>
      <motion.nav 
        className="fixed top-4 left-0 right-0 z-50"
        style={{ 
          opacity: navOpacity,
          scale: navScale,
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <motion.div 
            className={`glass rounded-full px-4 md:px-6 shadow-lg transition-all duration-500 relative overflow-hidden ${
              scrolled ? 'shadow-2xl' : ''
            }`}
            style={{
              backdropFilter: `blur(${navBlur}px)`,
            }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-medical-blue/10 via-medical-teal/10 to-purple-600/10"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="flex justify-between items-center h-14 md:h-16 relative z-10">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center space-x-2 md:space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 via-cyan-500 to-medical-teal rounded-full opacity-80 blur-sm"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.9, 0.6],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div 
                  className="relative w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                  <span className="text-white font-bold text-xs md:text-sm">O₂</span>
                </motion.div>
              </div>
              <motion.span 
                className="text-lg md:text-xl font-bold tracking-wide text-white"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                O2<span className="text-medical-teal">Health</span>
              </motion.span>
            </motion.a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-full group transition-all duration-300 ${
                    activeSection === item.id ? 'text-medical-teal' : 'text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="relative">
                      {item.label}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-0.5 bg-medical-teal"
                        initial={{ width: 0 }}
                        animate={{ width: activeSection === item.id ? '100%' : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-medical-teal/20 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-medical-teal transition-colors relative"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
        </div>

        {/* Mobile Menu */}
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="md:hidden mt-2 glass rounded-2xl overflow-hidden shadow-2xl"
              >
              <div className="flex flex-col p-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    onClick={() => setMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className={`py-3 px-4 rounded-xl hover:bg-white/10 flex items-center gap-3 group transition-all duration-300 ${
                      activeSection === item.id ? 'bg-medical-teal/20 text-medical-teal' : 'text-white'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeMobileSection"
                        className="ml-auto w-2 h-2 bg-medical-teal rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
