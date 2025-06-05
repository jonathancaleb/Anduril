import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const HomePage: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="bg-brand-neutral min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Small badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-sm font-medium mb-8">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
            AI-Powered Task Planning
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-neutral-foreground mb-6 leading-tight">
            Tasks that plan themselves.
          </h1>
          <p className="text-xl md:text-2xl text-brand-neutral-foreground/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            Write what's on your mind — Andúril will break it down into tasks,
            plan your day, and help you focus on what really matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            {user ? (
              <Link
                to="/dashboard"
                className="bg-brand-accent hover:bg-brand-accent/90 text-brand-accent-foreground font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Go to Dashboard
              </Link>
            ) : (
              <Link
                to="/register"
                className="bg-brand-accent hover:bg-brand-accent/90 text-brand-accent-foreground font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started
              </Link>
            )}
            <Link
              to="/docs"
              className="bg-brand-neutral text-brand-neutral-foreground border border-brand-primary/20 hover:border-brand-primary/30 hover:bg-brand-primary/5 font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More
            </Link>
          </div>{" "}
          {/* Mock UI Preview */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-brand-neutral border border-brand-primary/10 dark:border-brand-primary/20 rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-brand-accent-foreground"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-brand-neutral-foreground">
                    Today's Plan
                  </span>
                </div>
                <div className="text-sm text-brand-accent font-medium">
                  4 tasks
                </div>
              </div>{" "}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-brand-accent/5 rounded-lg border border-brand-accent/10">
                  <div className="w-4 h-4 bg-brand-accent rounded border-2 border-brand-accent"></div>
                  <span className="text-sm text-brand-neutral-foreground">
                    Review project requirements
                  </span>
                  <span className="ml-auto text-xs text-brand-accent bg-brand-accent/10 px-2 py-1 rounded">
                    30m
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-primary/5 rounded-lg border border-brand-primary/10">
                  <div className="w-4 h-4 rounded border-2 border-brand-primary/30"></div>
                  <span className="text-sm text-brand-neutral-foreground/70">
                    Write documentation
                  </span>
                  <span className="ml-auto text-xs text-brand-primary/70 bg-brand-primary/10 px-2 py-1 rounded">
                    45m
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-brand-primary/5 rounded-lg border border-brand-primary/10">
                  <div className="w-4 h-4 rounded border-2 border-brand-primary/30"></div>
                  <span className="text-sm text-brand-neutral-foreground/70">
                    Team standup meeting
                  </span>
                  <span className="ml-auto text-xs text-brand-primary/70 bg-brand-primary/10 px-2 py-1 rounded">
                    15m
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Features Section */}
      <section className="py-20 bg-brand-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-neutral-foreground mb-4">
              Why I'm Building This
            </h2>
            <p className="text-xl text-brand-neutral-foreground/60 max-w-3xl mx-auto">
              Experimenting with integrations and learning in public, one commit
              at a time. Inspired by the brilliance of tools like ZenHub and
              Linear.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            {/* GitHub Integration */}
            <div className="group bg-brand-neutral p-8 rounded-2xl border border-brand-primary/10 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-brand-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-brand-primary-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-neutral-foreground mb-4 text-center">
                Never Leave GitHub
              </h3>
              <p className="text-brand-neutral-foreground/60 text-center leading-relaxed">
                Bring productivity tooling directly into your GitHub workflow.
                Track commits, PRs, and progress without context switching to
                another app—learning from the approaches that make ZenHub and
                Linear so effective.
              </p>
            </div>{" "}
            {/* Learning in Public */}
            <div className="group bg-brand-neutral p-8 rounded-2xl border border-brand-primary/10 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-brand-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-brand-accent-foreground"
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
              <h3 className="text-2xl font-bold text-brand-neutral-foreground mb-4 text-center">
                Learning in Public
              </h3>
              <p className="text-brand-neutral-foreground/60 text-center leading-relaxed">
                This is my experiment in building better dev tools by studying
                what works. Follow along as I figure out what actually improves
                developer productivity, one integration at a time.
              </p>
            </div>{" "}
            {/* LOTR Inspired */}
            <div className="group bg-brand-neutral p-8 rounded-2xl border border-brand-primary/10 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-brand-accent to-brand-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-brand-accent-foreground"
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
              <h3 className="text-2xl font-bold text-brand-neutral-foreground mb-4 text-center">
                Forged with Purpose
              </h3>
              <p className="text-brand-neutral-foreground/60 text-center leading-relaxed">
                Named after the legendary sword, with UI inspired by
                Middle-earth. Because even productivity tools can have a bit of
                magic. ⚔️
              </p>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Current Journey Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-brand-neutral via-brand-primary/5 to-brand-accent/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-brand-accent/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-brand-primary/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-brand-accent/10 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-medium mb-6">
              ⚡ Live Progress
            </div>{" "}
            <h2 className="text-4xl md:text-5xl font-bold text-brand-neutral-foreground mb-4 leading-tight">
              The Journey So Far
            </h2>
            <p className="text-xl text-brand-neutral-foreground/70 max-w-2xl mx-auto">
              Building something useful, one feature at a time—here's what's
              happening behind the scenes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            {/* Solo Developer Card */}
            <div className="group relative">
              <div className="bg-brand-neutral/80 backdrop-blur-sm p-8 rounded-3xl border border-brand-primary/10 hover:border-brand-accent/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
                  <span className="text-brand-accent-foreground text-sm font-bold">
                    1
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-brand-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-neutral-foreground mb-2">
                    Solo Developer
                  </h3>
                  <p className="text-brand-neutral-foreground/60 mb-4">
                    Building in public, learning as I go
                  </p>
                  <div className="bg-brand-accent/10 rounded-full px-3 py-1 text-sm text-brand-accent font-medium">
                    #BuildingInPublic
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Coffee Counter Card */}
            <div className="group relative">
              <div className="bg-brand-neutral/80 backdrop-blur-sm p-8 rounded-3xl border border-brand-primary/10 hover:border-brand-accent/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                  <span className="text-brand-primary-foreground text-xs">
                    ∞
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-brand-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-neutral-foreground mb-2">
                    ∞ Coffee Cups
                  </h3>
                  <p className="text-brand-neutral-foreground/60 mb-4">
                    Fuel for late-night coding sessions
                  </p>
                  <div className="bg-brand-primary/10 rounded-full px-3 py-1 text-sm text-brand-primary font-medium">
                    #CaffeineKeptMe
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* Active Development Card */}
            <div className="group relative">
              <div className="bg-brand-neutral/80 backdrop-blur-sm p-8 rounded-3xl border border-brand-primary/10 hover:border-brand-accent/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-brand-accent-foreground text-xs">
                    🔥
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary via-brand-accent to-brand-primary rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-brand-primary-foreground"
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
                  <h3 className="text-2xl font-bold text-brand-neutral-foreground mb-2">
                    Always Active
                  </h3>
                  <p className="text-brand-neutral-foreground/60 mb-4">
                    Constantly evolving and improving
                  </p>
                  <div className="bg-gradient-to-r from-brand-accent/20 to-brand-primary/20 rounded-full px-3 py-1 text-sm text-brand-neutral-foreground font-medium">
                    #WorkInProgress
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Progress Indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-brand-neutral/50 backdrop-blur-sm rounded-full px-6 py-3 border border-brand-primary/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse"></div>
                <span className="text-sm text-brand-neutral-foreground/60">
                  Currently coding
                </span>
              </div>
              <div className="w-px h-4 bg-brand-primary/20"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-brand-primary rounded-full"></div>
                <span className="text-sm text-brand-neutral-foreground/60">
                  Next: Dashboard v2
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* CTA Section - Redesigned for Dark Mode Compatibility */}
      <section className="py-20 bg-gradient-to-br from-brand-accent/20 via-brand-primary/10 to-brand-accent/20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute top-3/4 left-3/4 w-32 h-32 border border-brand-accent/20 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          {/* Main CTA Content */}
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-accent/10 backdrop-blur-sm border border-brand-accent/20 text-brand-accent text-sm font-medium mb-8">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              Join the Journey
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-brand-neutral-foreground mb-6 leading-tight">
              Want to follow the
              <span className="block bg-gradient-to-r from-brand-accent to-brand-primary bg-clip-text text-transparent">
                journey?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-brand-neutral-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              This is still very much a work in progress, but I'm building it in
              public. Follow along as I figure out what actually makes
              developers more productive.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            {user ? (
              <Link
                to="/dashboard"
                className="group relative bg-brand-accent hover:bg-brand-accent/90 text-brand-accent-foreground font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-brand-accent/20 inline-flex items-center justify-center"
              >
                <span className="mr-2">Go to Dashboard</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            ) : (
              <Link
                to="/register"
                className="group relative bg-brand-accent hover:bg-brand-accent/90 text-brand-accent-foreground font-semibold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-brand-accent/20 inline-flex items-center justify-center"
              >
                <span className="mr-2">Follow the Journey</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            )}

            <Link
              to="/about"
              className="group bg-brand-neutral border border-brand-primary/20 hover:border-brand-accent/30 hover:bg-brand-accent/5 text-brand-neutral-foreground font-semibold py-4 px-10 rounded-2xl transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200"
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
              Read My Story
            </Link>
          </div>

          {/* Social Proof / Community */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-brand-neutral/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-primary/10 hover:border-brand-accent/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-neutral-foreground mb-1">
                  Open Source
                </div>
                <div className="text-brand-neutral-foreground/60 text-sm">
                  Built transparently on GitHub
                </div>
              </div>
            </div>

            <div className="bg-brand-neutral/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-primary/10 hover:border-brand-accent/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-neutral-foreground mb-1">
                  Real-time Updates
                </div>
                <div className="text-brand-neutral-foreground/60 text-sm">
                  See progress as it happens
                </div>
              </div>
            </div>

            <div className="bg-brand-neutral/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-primary/10 hover:border-brand-accent/20 transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-neutral-foreground mb-1">
                  Developer First
                </div>
                <div className="text-brand-neutral-foreground/60 text-sm">
                  Made by devs, for devs
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
