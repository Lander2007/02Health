"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import AnimatedCard from "./AnimatedCard";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer, Sunrise Care Home",
    content: "O2Health has transformed how we monitor air quality for our elderly residents. The real-time alerts have prevented several potential emergencies.",
    rating: 5,
    image: "👩‍⚕️",
  },
  {
    name: "James Chen",
    role: "Facility Manager, Metro Hospital",
    content: "The integration was seamless, and the 24/7 monitoring gives us peace of mind. The fire response system is incredibly fast and reliable.",
    rating: 5,
    image: "👨‍💼",
  },
  {
    name: "Maria Rodriguez",
    role: "Director of Operations, HealthFirst",
    content: "Best investment we've made in patient safety. The wearable tracking system has been a game-changer for our dementia care unit.",
    rating: 5,
    image: "👩‍💻",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-medical-blue dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Real feedback from healthcare professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={index}
              delay={index * 0.15}
              className="glass rounded-2xl p-8 hover:shadow-2xl transition-all relative"
            >
              <Quote className="absolute top-4 right-4 text-medical-teal/20" size={48} />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-medical-blue to-medical-teal flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-medical-blue dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
