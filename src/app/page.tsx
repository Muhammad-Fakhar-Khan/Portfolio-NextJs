import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import WordPressProjects from "@/components/WordPressProjects";
import RecentProjects from "@/components/RecentProjects";
import Certificates from "@/components/Certificates";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <WordPressProjects />
      <RecentProjects />
      <Certificates />
    </main>
  );
}


//git push origin master:main --force
