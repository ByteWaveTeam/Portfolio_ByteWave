import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import About from "../components/sections/About";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      <Projects />
      <About />
      <CTA />
    </div>
  );
}
