import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors"
            >
              Anduril
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-amber-600 bg-amber-50"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-amber-600 bg-amber-50"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              About
            </Link>
            <Link
              to="/docs"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/docs")
                  ? "text-amber-600 bg-amber-50"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Docs
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
