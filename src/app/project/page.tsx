import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard ";
import { projects } from "@/data/projectsData";

export default function Projects() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen pt-24 px-4 bg-white dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          My Projects
        </h1>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
