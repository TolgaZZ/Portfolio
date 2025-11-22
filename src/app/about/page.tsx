import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutMe from "@/components/AboutMe";
import AboutEdu from "@/components/AboutEdu";
import AboutWork from "@/components/AboutWork";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <AboutHero />
        <AboutMe />
        <AboutEdu />
        <AboutWork />
      <Footer />
    </main>
  );
}
