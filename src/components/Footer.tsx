const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center">
      <p className="text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Fakhar Khan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
