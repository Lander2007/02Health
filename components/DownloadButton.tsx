"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  variant?: "primary" | "secondary" | "glass";
  size?: "sm" | "md" | "lg";
  downloadUrl?: string;
  fileName?: string;
  className?: string;
}

export default function DownloadButton({
  variant = "primary",
  size = "md",
  downloadUrl = "https://drive.usercontent.google.com/download?id=1YiFLxIKg_-yxqh7nkAya_y609HYWMyX_&export=download&authuser=0",
  fileName = "O2Health-Setup.exe",
  className = "",
}: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 md:px-8 py-3 md:py-4 text-sm md:text-base",
    lg: "px-8 md:px-10 py-4 md:py-5 text-base md:text-lg",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-medical-blue to-medical-teal text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white text-medical-blue shadow-lg hover:shadow-xl",
    glass: "glass text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 128, 128, 0.4)" }}
      whileTap={{ scale: 0.95 }}
      onClick={handleDownload}
      className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-lg font-semibold flex items-center justify-center gap-2 transition-all relative overflow-hidden group ${className}`}
    >
      <Download size={18} className="relative z-10 group-hover:translate-y-1 transition-transform md:w-5 md:h-5" />
      <span className="relative z-10">Download Application</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-medical-teal to-medical-blue"
          initial={{ x: "-100%" }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}
