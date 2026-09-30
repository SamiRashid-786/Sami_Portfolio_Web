import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Terminal from "@/components/Terminal";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-orange-500/30 selection:text-orange-500 relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Process />
      <Services />
      <Terminal />
      <Projects />
      <Footer />
    </main>
  );
}
