"use client";

import { motion } from "framer-motion";
import { Wifi, Bluetooth, Cpu, Database, Shield, Zap } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import AnimatedCard from "./AnimatedCard";

const specs = [
  {
    icon: Wifi,
    title: "MQTT Protocol",
    description: "Lightweight pub/sub messaging for real-time data streaming",
    badge: "IoT Standard",
  },
  {
    icon: Bluetooth,
    title: "BLE 5.0",
    description: "Low-energy wearable connectivity with 100m range",
    badge: "Long Range",
  },
  {
    icon: Cpu,
    title: "YOLOv8",
    description: "State-of-the-art object detection for fire and smoke recognition",
    badge: "Edge AI",
  },
  {
    icon: Database,
    title: "Time-Series DB",
    description: "Optimized storage for sensor data and analytics",
    badge: "Scalable",
  },
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "AES-256 encryption for all data transmission",
    badge: "HIPAA Ready",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Sub-second latency from detection to action",
    badge: "&lt;2s Response",
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-medical-blue dark:text-white">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Enterprise-grade protocols and cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.08}
              className="glass rounded-2xl p-6 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-medical-blue to-medical-teal flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <spec.icon className="text-white" size={24} />
                </motion.div>
                <span className="px-3 py-1 bg-medical-teal/20 text-medical-teal text-xs font-semibold rounded-full">
                  {spec.badge}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-medical-blue dark:text-white">
                {spec.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {spec.description}
              </p>
            </AnimatedCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-medical-blue dark:text-white">
            Want the Full Technical Documentation?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Access our comprehensive API docs, integration guides, and system architecture
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-medical-blue to-medical-teal text-white rounded-lg font-semibold shadow-lg"
          >
            View Developer Docs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
