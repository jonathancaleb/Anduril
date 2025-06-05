import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            {" "}
            <h3 className="text-2xl font-bold mb-4">Andúril</h3>
            <p className="text-gray-300 mb-4">
              A personal side project exploring GitHub-native productivity
              tools. Still forging in the fires of Mt. Doom 🌋
            </p>
            <div className="flex space-x-4">
              {" "}
              <a
                href="https://github.com"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>{" "}
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>{" "}
              <a
                href="https://linkedin.com"
                className="text-gray-300 hover:text-amber-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>{" "}
          {/* Project Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">The Journey</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  About the Project
                </a>
              </li>
              <li>
                <a
                  href="/docs"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Built by Caleb 👨‍💻</li>
              <li>Forged with ☕ & 🔥</li>
              <li>
                Follow the journey on{" "}
                <a
                  href="https://github.com"
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Andúril. A personal side project - not a company 🌋
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com"
              className="text-gray-300 hover:text-amber-400 text-sm transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-amber-400 text-sm transition-colors"
            >
              About the Project
            </a>
            <a
              href="/docs"
              className="text-gray-300 hover:text-amber-400 text-sm transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
