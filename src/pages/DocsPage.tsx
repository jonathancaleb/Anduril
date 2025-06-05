import React, { useState } from "react";
import { Link } from "react-router-dom";

const DocsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("what-is-anduril");

  const sections = [
    { id: "what-is-anduril", title: "What is Andúril?", icon: "🗡️" },
    { id: "track-projects", title: "How to Track Projects", icon: "📊" },
    { id: "github-integration", title: "GitHub Integration", icon: "🔗" },
    { id: "getting-started", title: "Getting Started", icon: "🚀" },
    { id: "features", title: "Features", icon: "⚡" },
    { id: "troubleshooting", title: "Troubleshooting", icon: "🔧" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 dark:from-gray-900 dark:via-amber-900/20 dark:to-orange-900/20">
      {/* Work in Progress Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-700 dark:to-orange-700 text-white text-center py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm md:text-base font-medium">
            🔥 Still being forged in the fires of Mt. Doom - Docs will evolve as
            features are built 🔥
          </p>
        </div>
      </div>
      {/* Hero Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 dark:from-amber-500 dark:to-orange-600 rounded-2xl shadow-lg mb-6">
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
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn how I'm building Andúril and what I've figured out so far
            about GitHub-integrated productivity tools. This documentation grows
            as the project evolves.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#what-is-anduril"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Reading
            </a>
            <Link
              to="/about"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Learn My Story
            </Link>
          </div>
        </div>
      </section>
      {/* Main Documentation Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-2">📚</span>
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                      activeSection === section.id
                        ? "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-l-2 border-amber-500"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/30"
                    }`}
                  >
                    <span className="mr-3 text-sm">{section.icon}</span>
                    <span className="text-sm font-medium">{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-8 space-y-12">
                {/* What is Andúril? */}
                <section id="what-is-anduril" className="scroll-mt-8">
                  <div className="flex items-center mb-6">
                    <span className="text-2xl mr-3">🗡️</span>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      What is Andúril?
                    </h2>
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {" "}
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      Andúril is my personal experiment in developer
                      productivity tooling, inspired by the magic of apps like
                      ZenHub, Linear, and Zerocracy. Named after the legendary
                      sword from <em>The Lord of the Rings</em>, it's my journey
                      to understand how GitHub-integrated productivity tools
                      work under the hood.
                    </p>
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
                      <h4 className="text-lg font-semibold text-amber-900 dark:text-amber-300 mb-3">
                        Learning Journey, Not a Product
                      </h4>
                      <p className="text-amber-800 dark:text-amber-200">
                        This isn't a startup or finished product—it's my
                        personal quest to understand what makes GitHub
                        productivity integrations so powerful. I'm building it
                        in public, evolving features as I learn, and sharing
                        discoveries along the way.
                      </p>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Core Philosophy:
                    </h4>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                      {" "}
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2 mt-1">✓</span>
                        <span>
                          <strong>Study Existing Tools:</strong> Learn from
                          ZenHub, Linear, and Zerocracy to understand what works
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2 mt-1">✓</span>
                        <span>
                          <strong>GitHub-First:</strong> Bring productivity
                          tooling directly into your dev workflow
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2 mt-1">✓</span>
                        <span>
                          <strong>No Context Switching:</strong> Stay in the
                          environment where you already work
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2 mt-1">✓</span>
                        <span>
                          <strong>Learning in Public:</strong> Built openly with
                          shared lessons, experiments, and failures
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2 mt-1">✓</span>
                        <span>
                          <strong>LOTR-Inspired:</strong> Because even
                          productivity tools can have a bit of magic ⚔️
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* How to Track Projects */}
                <section id="track-projects" className="scroll-mt-8">
                  <div className="flex items-center mb-6">
                    <span className="text-2xl mr-3">📊</span>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      How to Track Projects
                    </h2>
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {" "}
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      My ultimate quest is to forge productivity features
                      directly into GitHub's realm, so you never have to journey
                      outside your development environment to track progress or
                      manage productivity. This is an ongoing experiment,
                      evolving with each discovery about what actually helps
                      developers.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          📈 GitHub-Native Tracking
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Instead of external tools, I'm experimenting with
                          GitHub Apps and integrations that surface productivity
                          insights right where you already work.
                        </p>
                      </div>

                      <div className="bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          🎯 Workflow Integration
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Building features that integrate with existing
                          developer workflows - no additional context switching
                          or separate apps to maintain.
                        </p>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Current Experiments:
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                          1
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white">
                            GitHub App Development
                          </h5>
                          <p className="text-gray-600 dark:text-gray-300">
                            Building a GitHub App that can analyze commit
                            patterns and productivity metrics
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                          2
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white">
                            Repository Insights
                          </h5>
                          <p className="text-gray-600 dark:text-gray-300">
                            Experimenting with meaningful metrics that actually
                            correlate with productivity
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                          3
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white">
                            Learning in Public
                          </h5>
                          <p className="text-gray-600 dark:text-gray-300">
                            Documenting what works, what doesn't, and sharing
                            lessons learned
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* GitHub Integration */}
                <section id="github-integration" className="scroll-mt-8">
                  <div className="flex items-center mb-6">
                    <span className="text-2xl mr-3">🔗</span>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      How GitHub Integration Works
                    </h2>
                  </div>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {" "}
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      The GitHub integration is the heart of this
                      experiment—figuring out how to build meaningful
                      productivity insights directly into the developer
                      workflow, inspired by how tools like ZenHub seamlessly
                      blend project management with GitHub's interface.
                    </p>
                    <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        🔐 Privacy &amp; Approach
                      </h4>
                      <div className="text-gray-300 space-y-2">
                        <p className="flex items-start">
                          <span className="text-amber-400 mr-2 mt-1">•</span>
                          <span>
                            Read-only access to public repositories (for now)
                          </span>
                        </p>
                        <p className="flex items-start">
                          <span className="text-amber-400 mr-2 mt-1">•</span>
                          <span>
                            Focus on metadata and patterns, not code content
                          </span>
                        </p>
                        <p className="flex items-start">
                          <span className="text-amber-400 mr-2 mt-1">•</span>
                          <span>
                            Building as a learning experiment, not a commercial
                            product
                          </span>
                        </p>
                        <p className="flex items-start">
                          <span className="text-amber-400 mr-2 mt-1">•</span>
                          <span>
                            All data processing happens client-side when
                            possible
                          </span>
                        </p>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      What I'm Tracking:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
                        <h5 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                          📝 Commit Patterns
                        </h5>
                        <ul className="text-amber-700 dark:text-amber-400 text-sm space-y-1">
                          <li>• Commit frequency & timing</li>
                          <li>• Message quality patterns</li>
                          <li>• File change patterns</li>
                          <li>• Work session insights</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-rose-50 dark:from-orange-900/20 dark:to-rose-900/20 border border-orange-200 dark:border-orange-700 rounded-lg p-4">
                        <h5 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                          🔄 Workflow Health
                        </h5>
                        <ul className="text-orange-700 dark:text-orange-400 text-sm space-y-1">
                          <li>• PR lifecycle timing</li>
                          <li>• Review participation</li>
                          <li>• Branch management</li>
                          <li>• Collaboration patterns</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border border-rose-200 dark:border-rose-700 rounded-lg p-4">
                        <h5 className="font-semibold text-rose-800 dark:text-rose-300 mb-2">
                          🎯 Progress Indicators
                        </h5>
                        <ul className="text-rose-700 dark:text-rose-400 text-sm space-y-1">
                          <li>• Feature completion</li>
                          <li>• Issue resolution</li>
                          <li>• Project momentum</li>
                          <li>• Goal tracking</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-6 rounded-r-lg">
                      <h4 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">
                        🧪 Experimental Status
                      </h4>
                      <p className="text-amber-700 dark:text-amber-400">
                        This is all very experimental! I'm figuring out what
                        metrics actually matter for developer productivity vs.
                        what's just noise. Follow along as I document what works
                        and what doesn't.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>{" "}
      {/* Call to Action */}
      <section className="py-20 bg-gray-900 dark:bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Want to follow the journey? 🌋
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            This is still being forged in the fires of Mt. Doom. Follow along as
            I build and learn in public!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
            >
              Explore the Project
            </Link>
            <Link
              to="/about"
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-gray-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200 inline-block"
            >
              About This Experiment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
