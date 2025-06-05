import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ThemeToggle } from "./ThemeToggle";
import { LogoutConfirmationDialog } from "./ui/logout-confirmation-dialog";

const Header: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <header className="bg-brand-neutral border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-brand-primary hover:text-brand-accent transition-colors"
            >
              Anduril
            </Link>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-brand-accent"
                  : "text-brand-neutral-foreground/70 hover:text-brand-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/about")
                  ? "text-brand-accent"
                  : "text-brand-neutral-foreground/70 hover:text-brand-primary"
              }`}
            >
              About
            </Link>
            <Link
              to="/docs"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive("/docs")
                  ? "text-brand-accent"
                  : "text-brand-neutral-foreground/70 hover:text-brand-primary"
              }`}
            >
              Docs
            </Link>{" "}
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive("/dashboard")
                      ? "text-brand-accent"
                      : "text-brand-neutral-foreground/70 hover:text-brand-primary"
                  }`}
                >
                  Dashboard
                </Link>
                <ThemeToggle />{" "}
                <button
                  onClick={() => setShowLogoutDialog(true)}
                  className="px-4 py-2 text-sm font-medium text-brand-neutral-foreground/70 hover:text-brand-primary border border-brand-primary/20 rounded-lg transition-all duration-200"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <ThemeToggle />
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-brand-neutral-foreground/70 hover:text-brand-primary transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 text-sm font-medium text-brand-accent-foreground bg-brand-accent hover:bg-brand-accent/90 rounded-lg transition-all duration-200"
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>{" "}
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button className="text-brand-primary hover:text-brand-accent focus:outline-none">
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
          </div>{" "}
        </div>
      </div>

      <LogoutConfirmationDialog
        open={showLogoutDialog}
        onOpenChange={setShowLogoutDialog}
      />
    </header>
  );
};

export default Header;
