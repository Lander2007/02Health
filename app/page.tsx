import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HardwareShowcase from "@/components/HardwareShowcase";
import FireResponse from "@/components/FireResponse";
import TargetUsers from "@/components/TargetUsers";
import Stats from "@/components/Stats";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <Navbar />
        <Hero />
        <Stats />
        <HowItWorks />
        <HardwareShowcase />
        <FireResponse />
        <TargetUsers />
        <TechStack />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
