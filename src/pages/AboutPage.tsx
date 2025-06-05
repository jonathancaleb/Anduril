import React from "react";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-neutral via-brand-primary/5 to-brand-accent/10">
      {/* Project Status Banner */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white text-center py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm md:text-base font-medium">
            🚧 Personal Side Project in Progress - Building and Learning in
            Public 🚧
          </p>
        </div>
      </div>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-brand-accent/10 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-brand-accent/20 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8">
              <Link to="/" className="inline-block">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl shadow-lg mb-6 hover:scale-105 transition-transform duration-200 cursor-pointer">
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
              </Link>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-brand-primary mb-6">
              <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                About Andúril
              </span>
            </h1>
            <p className="text-2xl text-brand-neutral-foreground/70 max-w-4xl mx-auto leading-relaxed">
              A personal experiment in developer productivity, forged in the
              fires of necessity and inspired by legend.
            </p>
          </div>
        </div>
      </section>{" "}
      {/* Purpose Section */}
      <section className="py-20 relative">
        {/* Glass card background */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm border-y border-brand-primary/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 bg-brand-accent/10 text-brand-accent text-sm font-medium rounded-full border border-brand-accent/20">
                🧪 The Experiment
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-brand-primary">
                Building in Public
              </h2>

              <div className="space-y-4 text-brand-neutral-foreground/70">
                <p className="text-xl leading-relaxed">
                  Andúril isn't a company or a polished product—it's my personal
                  side project to solve my own productivity struggles as a
                  developer. I'm building this in public to see what actually
                  works, drawing inspiration from tools like ZenHub, Linear, and
                  Zerocracy.
                </p>
                <p className="text-lg leading-relaxed">
                  Rather than competing with these amazing tools, I'm on a
                  learning journey to understand how GitHub-integrated
                  productivity apps work under the hood. The goal is simple:
                  bring productivity tooling directly into GitHub, so I never
                  have to leave my development environment.
                </p>
                <p className="text-lg leading-relaxed">
                  This is my lab for experimenting with integrations, tracking
                  dev work, and figuring out what actually helps developers stay
                  focused and productive. Every feature is a learning
                  opportunity.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    ⚡
                  </span>
                  Core Principles
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start group">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="block text-lg">GitHub-First</strong>
                      <span className="text-white/80 text-sm">
                        Build tools that live where developers already work
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="block text-lg">
                        Learning in Public
                      </strong>
                      <span className="text-white/80 text-sm">
                        Share the journey, mistakes and all
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start group">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:bg-white/30 transition-colors">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="block text-lg">LOTR-Inspired</strong>
                      <span className="text-white/80 text-sm">
                        Because even productivity tools can have a bit of magic
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Origin Story Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-brand-primary/5"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(45, 55, 72, 0.05) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(49, 151, 149, 0.05) 0%, transparent 50%)`,
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 text-brand-primary text-sm font-medium rounded-full border border-brand-primary/20 mb-6">
              📖 The Story Behind the Code
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              The Origin Story
            </h2>
            <p className="text-xl text-brand-neutral-foreground/60">
              Every great tool has a story. Here's mine.
            </p>
          </div>

          <div className="space-y-8">
            {/* Story cards */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-brand-primary/10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">😤</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">
                    The Breaking Point
                  </h3>
                  <p className="text-brand-neutral-foreground/70 leading-relaxed">
                    Like many developers, I found myself constantly battling
                    distractions. Social media notifications, endless Slack
                    messages, the temptation to check "just one more thing" on
                    Reddit. Despite having all the productivity apps in the
                    world, I still struggled to maintain focus on what truly
                    mattered.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-brand-primary/10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">💡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">
                    The Realization
                  </h3>
                  <p className="text-brand-neutral-foreground/70 leading-relaxed">
                    The breaking point came during a particularly challenging
                    project deadline. I realized I was spending more time
                    managing my productivity tools than actually being
                    productive. I needed something different—something that
                    would work <em>with</em> my developer workflow, not against
                    it.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-brand-primary/10 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">
                    The Discovery
                  </h3>
                  <p className="text-brand-neutral-foreground/70 leading-relaxed">
                    That's when I started studying GitHub-integrated tools like
                    ZenHub, Linear, and Zerocracy. These apps fascinated me—they
                    brought project management directly into the developer's
                    workspace. But I wanted to understand: how do they actually
                    work? What makes them effective? Could I build something
                    simpler for my own needs?
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-3xl p-8 border border-brand-accent/20 relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-4 left-4 text-6xl text-brand-accent/20 font-serif">
                "
              </div>

              <div className="relative">
                <blockquote className="text-xl text-brand-primary font-medium italic mb-4 pl-8">
                  "The Blade that was Broken shall return to Minas Tirith."
                </blockquote>
                <footer className="text-brand-neutral-foreground/60 pl-8">
                  — J.R.R. Tolkien
                </footer>
                <p className="text-brand-neutral-foreground/70 leading-relaxed mt-6 pl-8">
                  Just as Andúril was reforged to be stronger than before, this
                  tool is built from the lessons learned from every failed
                  attempt at staying focused. I'm building it in public, sharing
                  what works and what doesn't, hoping it might help other
                  developers who face the same struggles while learning how
                  these magical productivity integrations actually work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Built by Caleb Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-brand-accent/10 text-brand-accent text-sm font-medium rounded-full border border-brand-accent/20 mb-6">
              👨‍💻 Meet the Builder
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
              Built by Caleb
            </h2>
            <p className="text-xl text-brand-neutral-foreground/60">
              Crafted with passion by a developer who understands the struggle.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-brand-primary/10 shadow-xl relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-accent/10 to-brand-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center shadow-lg relative">
                  <span className="text-4xl font-bold text-white">C</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-2 flex items-center justify-center md:justify-start">
                    Hey there!
                    <span className="ml-2 text-3xl">👋</span>
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full mx-auto md:mx-0"></div>
                </div>

                <div className="space-y-4 text-brand-neutral-foreground/70">
                  <p className="text-lg leading-relaxed">
                    I'm Caleb, a developer who got tired of productivity tools
                    that promised everything but delivered complexity. Andúril
                    is my attempt to build something different—a tool that lives
                    where I already work and helps me understand the magic
                    behind GitHub-integrated productivity apps.
                  </p>
                  <p className="text-lg leading-relaxed">
                    This isn't a startup or a company—it's just me,
                    experimenting with what actually helps developers stay
                    focused. Follow along as I build this in public, learn from
                    tools like ZenHub and Linear, and share what I discover
                    along the way.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                  <a
                    href="https://github.com/caleb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    <svg
                      className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform"
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
                    className="inline-flex items-center bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
                  >
                    <svg
                      className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform"
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
          </div>

          <div className="mt-12 text-center">
            <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-6 inline-block">
              <p className="text-brand-neutral-foreground/60 italic text-lg">
                "Not all those who wander are lost, but some of us are just
                building better productivity tools along the way."
                <span className="text-2xl ml-2">🧙‍♂️</span>
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-primary/90 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-accent/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-brand-accent/20 rounded-full blur-lg"></div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Want to follow the experiment?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              This is still very much a work in progress. Follow along as I
              build this in public and figure out what actually works for
              developer productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/"
                className="bg-white hover:bg-white/90 text-brand-primary font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block group"
              >
                <span className="flex items-center justify-center">
                  Join the Journey
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                to="/docs"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 font-semibold py-4 px-8 rounded-xl transition-all duration-200 inline-block backdrop-blur-sm"
              >
                Read the Docs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
