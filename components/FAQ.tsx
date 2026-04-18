"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ParticleBackground from "./ParticleBackground";

const faqs = [
  {
    question: "How long does installation take?",
    answer: "Typical installation takes 2-3 days for a standard facility. Our certified technicians handle everything from hardware setup to system configuration and staff training.",
  },
  {
    question: "Is O2Health compatible with existing building management systems?",
    answer: "Yes! O2Health integrates seamlessly with most BMS platforms via standard protocols like MQTT and REST APIs. Our team provides full integration support.",
  },
  {
    question: "What happens during a power outage?",
    answer: "The system includes battery backup that provides up to 8 hours of continuous operation. Critical alerts are sent via cellular backup to ensure uninterrupted monitoring.",
  },
  {
    question: "How accurate is the fire detection system?",
    answer: "Our YOLOv8-powered vision system achieves 99.9% accuracy with virtually zero false positives. It's been tested in over 200 facilities worldwide.",
  },
  {
    question: "What kind of maintenance is required?",
    answer: "Minimal maintenance is needed. Sensors are calibrated automatically, and we provide quarterly health checks. Software updates are deployed remotely with zero downtime.",
  },
  {
    question: "Can the system scale as our facility grows?",
    answer: "Absolutely. O2Health is designed for scalability. You can add sensors, cameras, and wearables as needed without replacing the core infrastructure.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-medical-blue dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about O2Health
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <span className="font-semibold text-lg text-medical-blue dark:text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-medical-teal flex-shrink-0" size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-700 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
