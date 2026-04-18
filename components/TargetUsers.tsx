"use client";

import { motion } from "framer-motion";
import { Heart, Building2, Users } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import AnimatedCard from "./AnimatedCard";

const users = [
  {
    icon: Heart,
    title: "Nursing Homes",
    description: "Protect elderly residents with respiratory conditions",
    benefits: [
      "Real-time air quality monitoring for COPD patients",
      "Wearable location tracking for dementia care",
      "Automated emergency response protocols",
      "Family notification system",
    ],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Building2,
    title: "Hospitals",
    description: "Medical-grade monitoring for critical care units",
    benefits: [
      "ICU air quality compliance monitoring",
      "Integration with existing BMS systems",
      "Patient room fire safety",
      "Staff alert coordination",
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Building Admins",
    description: "Smart building management made simple",
    benefits: [
      "Centralized dashboard for all units",
      "Predictive maintenance alerts",
      "Compliance reporting automation",
      "Energy optimization insights",
    ],
    gradient: "from-teal-500 to-cyan-600",
  },
];

export default function TargetUsers() {
  return (
    <section id="users" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-medical-blue dark:text-white">
            Built For Those Who Care
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Tailored solutions for healthcare and facility management
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.15}
              className="glass rounded-3xl p-8 hover:shadow-2xl transition-all group"
            >
              <motion.div 
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${user.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <user.icon className="text-white" size={32} />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-2 text-medical-blue dark:text-white">
                {user.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {user.description}
              </p>
              
              <div className="space-y-3">
                {user.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-medical-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-medical-teal rounded-full" />
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
