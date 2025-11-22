import ProjectCards from "@/components/ProjectCards";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/services";
import Resume from "@/components/Resume";
import Footer from "@/components/footer";
export default function IndexPage() {
  return (
    <>
      <Navbar />  
      <Hero />
      <Services />
      <ProjectCards />
      <Resume />
      <Footer />
    </>
  );
}