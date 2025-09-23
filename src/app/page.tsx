import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import About from "@/sections/About";
import Advantages from "@/sections/Advantages";
import Workflow from "@/sections/Workflow";
import ProjectsSlider from "@/sections/ProjectsSlider";
import Faq from "@/sections/Faq";
import Contacts from "@/sections/Contacts";
import Footer from "@/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Advantages />
      <Workflow />
      <ProjectsSlider />
      <Faq />
      <Contacts />
      <Footer />
    </>
  );
}
