"use client";

import { motion } from "framer-motion";
import { Cpu, Camera, Watch } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import AnimatedCard from "./AnimatedCard";

const hardware = [
  {
    icon: Cpu,
    name: "Central Unit",
    subtitle: "Raspberry Pi 4",
    specs: ["Quad-core ARM Cortex-A72", "4GB RAM", "MQTT Broker", "Real-time Processing"],
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: Camera,
    name: "Vision Unit",
    subtitle: "Edge AI Camera",
    specs: ["YOLOv8 Detection", "1080p @ 30fps", "Local Processing", "Privacy-First Design"],
    color: "from-teal-600 to-green-600",
  },
  {
    icon: Watch,
    name: "Wearable Strap",
    subtitle: "BLE 5.0 Tracker",
    specs: ["Real-time Location", "Fall Detection", "Emergency Button", "7-day Battery"],
    color: "from-green-600 to-emerald-600",
  },
];

export default function HardwareShowcase() {
  return (
    <section id="hardware" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-medical-blue dark:text-white">
            Enterprise-Grade Hardware
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Medical-certified components designed for 24/7 operation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {hardware.map((item, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.15}
              className="glass rounded-2xl p-8 hover:shadow-2xl transition-all group"
            >
              <motion.div 
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <item.icon className="text-white" size={32} />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-1 text-medical-blue dark:text-white">
                {item.name}
              </h3>
              <p className="text-medical-teal font-medium mb-4">{item.subtitle}</p>
              
              <ul className="space-y-2">
                {item.specs.map((spec, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-medical-teal rounded-full mr-2" />
                    {spec}
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
