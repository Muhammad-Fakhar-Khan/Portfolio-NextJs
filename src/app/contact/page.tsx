import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen pt-24 px-4 bg-white dark:bg-gray-900 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Have a project in mind or want to connect? Send me a message below!
        </p>
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
