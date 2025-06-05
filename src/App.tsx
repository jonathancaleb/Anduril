import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center items-center space-x-8 mb-8">
              <a
                href="https://vite.dev"
                target="_blank"
                className="transition-transform hover:scale-110"
              >
                <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
              </a>
              <a
                href="https://react.dev"
                target="_blank"
                className="transition-transform hover:scale-110"
              >
                <img
                  src={reactLogo}
                  className="h-16 w-16 animate-spin-slow"
                  alt="React logo"
                />
              </a>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Vite + React + <span className="text-blue-600">Tailwind</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A modern development stack with Vite, React, TypeScript, and
              Tailwind CSS. Fast, reliable, and beautiful by default.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Interactive Counter
              </h2>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 mb-4"
              >
                Count is {count}
              </button>
              <p className="text-gray-600 text-sm">
                Edit{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                  src/App.tsx
                </code>{" "}
                and save to test HMR
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Built with Modern Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  React 19
                </h3>
                <p className="text-gray-600">
                  Latest React with enhanced performance and new features
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Vite
                </h3>
                <p className="text-gray-600">
                  Lightning fast build tool with instant hot module replacement
                </p>
              </div>

              <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tailwind CSS
                </h3>
                <p className="text-gray-600">
                  Utility-first CSS framework for rapid UI development
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Click on the Vite and React logos to learn more about these
              powerful tools.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://vite.dev"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Learn Vite
              </a>
              <a
                href="https://react.dev"
                target="_blank"
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Learn React
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;
