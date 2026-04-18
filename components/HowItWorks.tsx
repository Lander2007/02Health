"use client";

import { motion } from "framer-motion";
import { Cpu, Radio, Eye, Smartphone, Waves } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

const layers = [
  {
    icon: Waves,
    title: "Sensing Layer",
    description: "MQ-2, MQ-135, DHT22 sensors detect smoke, CO2, temperature, and humidity in real-time",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "Processing Layer",
    description: "Raspberry Pi 4 processes sensor data and coordinates system responses via MQTT protocol",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Radio,
    title: "Control Layer",
    description: "ESP32 microcontrollers manage actuators, alarms, and emergency protocols",
    color: "from-teal-500 to-green-500",
  },
  {
    icon: Eye,
    title: "Vision Layer",
    description: "YOLOv8-powered edge AI camera for real-time fire detection and location tracking",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "User Layer",
    description: "Mobile app with real-time alerts, wearable integration, and emergency location system",
    color: "from-emerald-500 to-medical-teal",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <ParticleBackground />
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0, 71, 171, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(0, 128, 128, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0, 71, 171, 0.3) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The 5-Layer Architecture
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            From sensing to action in under 2 seconds
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Animated connecting line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-medical-blue via-medical-teal to-green-500 hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
          
          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {layers.map((layer, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col gap-8`}
              >
                <motion.div 
                  className="flex-1 glass rounded-2xl p-6 hover:shadow-xl transition-all"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 20px 40px rgba(0, 128, 128, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <layer.icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {layer.title}
                  </h3>
                  <p className="text-gray-300">
                    {layer.description}
                  </p>
                </motion.div>
                
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-medical-blue to-medical-teal flex items-center justify-center text-white font-bold shadow-lg z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                >
                  {index + 1}
                </motion.div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
