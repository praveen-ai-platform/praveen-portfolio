import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import Skills from "./components/Skills";
import Impact from "./components/Impact";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Impact />
      <CaseStudies />
      <Footer />
    </div>
  );
}
