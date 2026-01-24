import Navbar from "@/src/app/components/Navbar";
import Hero from "@/src/app/components/Hero";
import About from "@/src/app/components/About";
import FeaturedProjects from "@/src/app/components/FeaturedProjects";
import Timeline from "@/src/app/components/Timeline";
import Certifications from "@/src/app/components/Certifications";
import Footer from "@/src/app/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <Timeline />
      <Certifications />
      <Footer />
    </div>
  );
}
