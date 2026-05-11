import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Sevices";
import WhyUs from "@/components/sections/WhyUs";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
    </>
  );
}
