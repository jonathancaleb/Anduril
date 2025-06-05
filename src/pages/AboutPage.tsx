import React from "react";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 dark:from-gray-900 dark:via-amber-900/20 dark:to-orange-900/20">
      {/* Project Status Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white text-center py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm md:text-base font-medium">
            🚧 Personal Side Project in Progress - Building and Learning in
            Public 🚧
          </p>
        </div>
      </div>
      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
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
            </div>{" "}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                About Andúril
              </span>
            </h1>
            <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A personal experiment in developer productivity, forged in the
              fires of necessity and inspired by legend.
            </p>
          </div>
        </div>
      </section>{" "}
      {/* Purpose Section */}
      <section className="py-20 bg-white dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                The Experiment
              </h2>{" "}
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Andúril isn't a company or a polished product—it's my personal
                side project to solve my own productivity struggles as a
                developer. I'm building this in public to see what actually
                works, drawing inspiration from tools like ZenHub, Linear, and
                Zerocracy.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Rather than competing with these amazing tools, I'm on a
                learning journey to understand how GitHub-integrated
                productivity apps work under the hood. The goal is simple: bring
                productivity tooling directly into GitHub, so I never have to
                leave my development environment.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                This is my lab for experimenting with integrations, tracking dev
                work, and figuring out what actually helps developers stay
                focused and productive. Every feature is a learning opportunity.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-600 to-orange-700 dark:from-amber-700 dark:to-orange-800 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Core Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-amber-200 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <strong className="block">GitHub-First</strong>
                    <span className="text-amber-100">
                      Build tools that live where developers already work
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-amber-200 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <strong className="block">Learning in Public</strong>
                    <span className="text-amber-100">
                      Share the journey, mistakes and all
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-amber-200 mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <strong className="block">LOTR-Inspired</strong>
                    <span className="text-amber-100">
                      Because even productivity tools can have a bit of magic
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Origin Story Section */}
      <section className="py-20 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The Origin Story
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Every great tool has a story. Here's mine.
            </p>
          </div>

          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              {" "}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Like many developers, I found myself constantly battling
                distractions. Social media notifications, endless Slack
                messages, the temptation to check "just one more thing" on
                Reddit. Despite having all the productivity apps in the world, I
                still struggled to maintain focus on what truly mattered.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The breaking point came during a particularly challenging
                project deadline. I realized I was spending more time managing
                my productivity tools than actually being productive. I needed
                something different— something that would work <em>with</em> my
                developer workflow, not against it.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                That's when I started studying GitHub-integrated tools like
                ZenHub, Linear, and Zerocracy. These apps fascinated me—they
                brought project management directly into the developer's
                workspace. But I wanted to understand: how do they actually
                work? What makes them effective? Could I build something simpler
                for my own needs?
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                That curiosity led to Andúril. Named after the legendary sword
                from <em>The Lord of the Rings</em>, this isn't meant to be a
                startup or the next big thing. It's my personal experiment to
                understand productivity tooling from the ground up, one GitHub
                integration at a time.
              </p>
              <blockquote className="border-l-4 border-amber-500 pl-6 italic text-xl text-gray-600 dark:text-gray-400 my-8">
                "The Blade that was Broken shall return to Minas Tirith."
                <footer className="text-base text-gray-500 dark:text-gray-500 mt-2">
                  — J.R.R. Tolkien
                </footer>
              </blockquote>{" "}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Just as Andúril was reforged to be stronger than before, this
                tool is built from the lessons learned from every failed attempt
                at staying focused. I'm building it in public, sharing what
                works and what doesn't, hoping it might help other developers
                who face the same struggles while learning how these magical
                productivity integrations actually work.
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Built by Caleb Section */}
      <section className="py-20 bg-white dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Built by Caleb
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Crafted with passion by a developer who understands the struggle.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-600 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-500 dark:to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-white">C</span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                {" "}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Hey there! 👋
                </h3>{" "}
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  I'm Caleb, a developer who got tired of productivity tools
                  that promised everything but delivered complexity. Andúril is
                  my attempt to build something different— a tool that lives
                  where I already work and helps me understand the magic behind
                  GitHub-integrated productivity apps.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  This isn't a startup or a company—it's just me, experimenting
                  with what actually helps developers stay focused. Follow along
                  as I build this in public, learn from tools like ZenHub and
                  Linear, and share what I discover along the way.
                </p>{" "}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="https://github.com/caleb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Follow My Journey
                  </a>

                  <a
                    href="https://github.com/caleb/anduril"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 italic">
              "Not all those who wander are lost, but some of us are just
              building better productivity tools along the way." 🧙‍♂️
            </p>
          </div>
        </div>
      </section>{" "}
      {/* Call to Action */}
      <section className="py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Want to follow the experiment?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            This is still very much a work in progress. Follow along as I build
            this in public and figure out what actually works for developer
            productivity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              Join the Journey
            </Link>
            <Link
              to="/docs"
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200 inline-block"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
