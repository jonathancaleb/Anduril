import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 dark:from-gray-900 dark:via-amber-900/20 dark:to-orange-900/20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* App Icon/Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-700 dark:from-amber-500 dark:to-orange-600 rounded-2xl shadow-lg mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Andúril
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
            Building better focus, right inside GitHub 🔥
          </p>{" "}
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            This is a journey to build better focus, right inside GitHub, by
            learning from tools like ZenHub, Linear, and Zerocracy. Andúril
            helps me understand how productivity integrations work while
            tracking my projects and sharpening my workflow—without ever leaving
            the developer environment I live in.
          </p>{" "}
          <div className="bg-amber-100/50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-lg mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-amber-800 dark:text-amber-200 italic">
              "A personal side project to understand how GitHub productivity
              magic works. Still forging this in the fires of Mt. Doom, learning
              from the best tools out there, one experiment at a time 🌋"
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join the Journey
            </button>
            <Link
              to="/docs"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>{" "}
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why I'm Building This
            </h2>{" "}
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experimenting with integrations and learning in public, one commit
              at a time. Inspired by the brilliance of tools like ZenHub and
              Linear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GitHub Integration */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Never Leave GitHub
              </h3>{" "}
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                Bring productivity tooling directly into your GitHub workflow.
                Track commits, PRs, and progress without context switching to
                another app—learning from the approaches that make ZenHub and
                Linear so effective.
              </p>
            </div>

            {/* Learning in Public */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-amber-600 to-orange-600 dark:from-amber-500 dark:to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Learning in Public
              </h3>{" "}
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                This is my experiment in building better dev tools by studying
                what works. Follow along as I figure out what actually improves
                developer productivity, one integration at a time.
              </p>
            </div>

            {/* LOTR Inspired */}
            <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-rose-600 to-pink-600 dark:from-rose-500 dark:to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Forged with Purpose
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                Named after the legendary sword, with UI inspired by
                Middle-earth. Because even productivity tools can have a bit of
                magic. ⚔️
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Current Journey Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700 dark:from-amber-700 dark:to-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The Journey So Far
            </h2>
            <p className="text-amber-100 text-lg">
              Building something useful, one feature at a time
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                1 Developer
              </div>
              <div className="text-amber-100">Building in Public</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                ∞ Coffee
              </div>
              <div className="text-amber-100">Consumed While Coding</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                🔥 Active
              </div>
              <div className="text-amber-100">Work in Progress</div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* CTA Section */}
      <section className="py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Want to follow the journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            This is still very much a work in progress, but I'm building it in
            public. Follow along as I figure out what actually makes developers
            more productive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Follow the Journey
            </button>
            <Link
              to="/about"
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200 inline-block"
            >
              Read My Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
