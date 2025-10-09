import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-24 bg-white dark:bg-gray-900 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
        <p className="max-w-2xl text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          I'm a passionate web developer who loves creating fast, modern, and interactive web apps.
          I specialize in Next.js, Tailwind CSS, and building full-stack projects that make life easier.
        </p>
      </section>
      <Footer />
    </main>
  );
}
