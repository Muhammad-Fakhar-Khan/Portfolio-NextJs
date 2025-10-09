"use client";

import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (You can connect a backend later.)");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
      <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange}
        className="w-full mb-4 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-800 dark:text-gray-200" required />
      <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange}
        className="w-full mb-4 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-800 dark:text-gray-200" required />
      <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange}
        className="w-full mb-4 p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-800 dark:text-gray-200" rows={4} required />
      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
