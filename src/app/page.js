import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Sevices";
import WhyUs from "@/components/sections/WhyUs";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      <Footer />
    </>
  );
}
