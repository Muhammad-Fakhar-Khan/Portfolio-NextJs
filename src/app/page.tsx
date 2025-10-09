import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
