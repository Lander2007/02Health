"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Bell, Phone, Zap } from "lucide-react";
import { useState } from "react";
import ParticleBackground from "./ParticleBackground";

const levels = [
  {
    level: 1,
    title: "Early Warning",
    color: "yellow",
    icon: Bell,
    actions: ["Sound local alarm", "Send mobile notification", "Log event data"],
    threshold: "Smoke detected",
  },
  {
    level: 2,
    title: "Active Response",
    color: "orange",
    icon: AlertTriangle,
    actions: ["Activate all alarms", "Alert building admin", "Trigger evacuation protocol", "Display exit routes"],
    threshold: "Fire confirmed",
  },
  {
    level: 3,
    title: "Emergency Protocol",
    color: "red",
    icon: Zap,
    actions: ["Cut electricity supply", "Call fire brigade", "Unlock emergency exits", "Broadcast location data"],
    threshold: "Critical fire",
  },
];

export default function FireResponse() {
  const [activeLevel, setActiveLevel] = useState(1);

  return (
    <section className="py-20 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-medical-red/5 to-transparent" style={{ zIndex: 2 }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-medical-blue dark:text-white">
            3-Level Fire Response System
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Intelligent escalation in under 2 seconds
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {levels.map((level) => (
            <motion.button
              key={level.level}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveLevel(level.level)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeLevel === level.level
                  ? `bg-${level.color}-500 text-white shadow-lg`
                  : "glass"
              }`}
            >
              Level {level.level}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <div className="flex items-start gap-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${
                activeLevel === 1 ? "from-yellow-400 to-yellow-600" :
                activeLevel === 2 ? "from-orange-400 to-orange-600" :
                "from-red-500 to-red-700"
              } flex items-center justify-center shadow-xl`}>
                {(() => {
                  const Icon = levels[activeLevel - 1].icon;
                  return <Icon className="text-white" size={40} />;
                })()}
              </div>
              
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-2 text-medical-blue dark:text-white">
                  {levels[activeLevel - 1].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Threshold: {levels[activeLevel - 1].threshold}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {levels[activeLevel - 1].actions.map((action, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-medical-teal rounded-full" />
                      <span className="text-gray-700 dark:text-gray-200">{action}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
            <Phone className="text-medical-red" size={20} />
            <span className="font-semibold text-white">Emergency Response Time: &lt;2 seconds</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
