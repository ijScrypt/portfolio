
const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8 transition-colors duration-300 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Mon Portfolio. Créé avec React, Tailwind & Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;