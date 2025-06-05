import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const { signUp, signInWithGitHub, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    const { error } = await signUp(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  };

  const handleGitHubSignup = async () => {
    setLoading(true);
    setError(null);

    const { error } = await signInWithGitHub();

    if (error) {
      setError(error.message);
      setLoading(false);
    }
    // OAuth will handle the redirect automatically
  };
  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-neutral via-brand-primary/5 to-brand-accent/10 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link to="/" className="inline-block">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-lg mb-6 hover:scale-105 transition-transform duration-200 cursor-pointer">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </Link>
            <h2 className="text-3xl font-bold text-brand-primary">
              Check your email
            </h2>
            <p className="mt-2 text-sm text-brand-neutral-foreground/60">
              We've sent you a confirmation link to complete your registration.
            </p>
          </div>

          <div className="bg-white border border-brand-primary/10 py-8 px-6 shadow-xl rounded-2xl backdrop-blur-sm">
            <div className="text-center">
              <p className="text-brand-neutral-foreground/60 mb-6">
                Please check your email and click the confirmation link to
                activate your account.
              </p>
              <Link
                to="/login"
                className="w-full inline-flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-brand-accent-foreground bg-brand-accent hover:bg-brand-accent/90 transition-all duration-200"
              >
                Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-neutral via-brand-primary/5 to-brand-accent/10 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {" "}
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl shadow-lg mb-6 hover:scale-105 transition-transform duration-200 cursor-pointer">
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
          </Link>
          <h2 className="text-3xl font-bold text-brand-primary">
            Join the <span className="text-brand-accent">Andúril</span> journey
          </h2>
          <p className="mt-2 text-sm text-brand-neutral-foreground/60">
            Create your account to start building better productivity
          </p>
        </div>

        <div className="bg-white border border-brand-primary/10 py-8 px-6 shadow-xl rounded-2xl backdrop-blur-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {" "}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-brand-primary"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-brand-primary/20 rounded-lg placeholder-brand-neutral-foreground/40 focus:outline-none focus:ring-brand-accent focus:border-brand-accent bg-brand-neutral text-brand-neutral-foreground sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-brand-primary"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-brand-primary/20 rounded-lg placeholder-brand-neutral-foreground/40 focus:outline-none focus:ring-brand-accent focus:border-brand-accent bg-brand-neutral text-brand-neutral-foreground sm:text-sm"
                  placeholder="Create a password"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-brand-primary"
              >
                Confirm password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-brand-primary/20 rounded-lg placeholder-brand-neutral-foreground/40 focus:outline-none focus:ring-brand-accent focus:border-brand-accent bg-brand-neutral text-brand-neutral-foreground sm:text-sm"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-brand-accent-foreground bg-brand-accent hover:bg-brand-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating account...
                  </div>
                ) : (
                  "Create account"
                )}
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-brand-primary/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-brand-neutral-foreground/60">
                  Or sign up with
                </span>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleGitHubSignup}
                disabled={loading}
                className="w-full inline-flex justify-center py-3 px-4 border border-brand-primary/20 rounded-lg shadow-sm bg-brand-neutral text-sm font-medium text-brand-neutral-foreground hover:bg-brand-primary/5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Sign up with GitHub
              </button>
            </div>
          </form>{" "}
          <div className="mt-6 text-center">
            <p className="text-sm text-brand-neutral-foreground/60">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-brand-accent hover:text-brand-accent/80 transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
