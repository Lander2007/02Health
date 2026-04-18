import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O2Health - Smart Air Quality & Fire Safety System",
  description: "Advanced IoT system for air quality monitoring and fire safety designed for vulnerable populations in nursing homes, hospitals, and residential buildings.",
  keywords: ["air quality", "fire safety", "IoT", "health tech", "elderly care", "smart building"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
