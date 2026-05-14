import LoadingScreen from "@/components/ui/LoadingScreen";
import TechBackground from "@/components/ui/TechBackground";
import GridBackground from "@/components/ui/GridBackground";
import Cursor from "@/components/ui/Cursor";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Certificates from "@/components/sections/Certificates";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      {/* Loading screen — shown once per session */}
      <LoadingScreen />

      {/* Client-side utilities */}
      <Cursor />
      <ScrollReveal />

      {/* Backgrounds — grid underneath, tech icons on top */}
      <GridBackground />
      <TechBackground />

      {/* Layout */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
