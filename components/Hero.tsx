"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-radial from-medical-teal/20 via-transparent to-transparent" style={{ zIndex: 2 }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
              className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1.5 md:py-2 glass rounded-full text-xs md:text-sm font-medium text-medical-teal"
            >
              Trusted by Healthcare Facilities Worldwide
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {["The", "Air", "That", "Cares."].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="inline-block mr-2 md:mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Advanced IoT system combining real-time air quality monitoring with intelligent fire safety for vulnerable populations.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 128, 128, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-medical-blue to-medical-teal text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group text-sm md:text-base"
              >
                <span className="relative z-10">Request Live Demo</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform md:w-5 md:h-5" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-medical-teal to-medical-blue"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 glass rounded-lg font-semibold flex items-center justify-center gap-2 text-white group text-sm md:text-base"
              >
                <Play size={18} className="group-hover:scale-110 transition-transform md:w-5 md:h-5" />
                Watch Video
              </motion.button>
            </motion.div>

            <motion.div 
              className="mt-8 md:mt-12 grid grid-cols-3 gap-3 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {[
                { value: "<2s", label: "Response Time" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Monitoring" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-medical-teal">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotateZ: [0, 1, 0, -1, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full h-[350px] md:h-[500px] glass rounded-3xl overflow-hidden flex items-center justify-center"
            >
              <div className="relative flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-500 via-cyan-500 to-medical-teal rounded-full blur-3xl"
                  />
                  <div className="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                    <motion.span
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-white font-bold text-6xl md:text-8xl"
                    >
                      O₂
                    </motion.span>
                  </div>
                </div>
              </div>
              <motion.div 
                className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs rounded-full z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Live
              </motion.div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 glass rounded-xl p-3 md:p-4 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 128, 128, 0.3)" }}
            >
              <div className="text-xs md:text-sm font-semibold text-white">Air Quality</div>
              <motion.div 
                className="text-xl md:text-2xl font-bold text-green-500"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Excellent
              </motion.div>
            </motion.div>

            {/* Floating particles around the logo */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-medical-teal rounded-full"
                style={{
                  top: `${20 + i * 30}%`,
                  right: `${-5 + i * 2}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
