import React from "react";
import { useAuth } from "../hooks/useAuth";

const DashboardPage: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    }
  };

  // Get user metadata for display
  const userEmail = user?.email;
  const userName = user?.user_metadata?.full_name || user?.user_metadata?.name;
  const userAvatar = user?.user_metadata?.avatar_url;
  const provider = user?.app_metadata?.provider;
  const createdAt = user?.created_at
    ? new Date(user.created_at).toLocaleDateString()
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 dark:from-gray-900 dark:via-amber-900/20 dark:to-orange-900/20">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800/50 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-700 dark:from-amber-500 dark:to-orange-600 rounded-lg shadow-sm mr-3">
                <svg
                  className="w-4 h-4 text-white"
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
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Dashboard
              </h1>
            </div>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
            >
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="bg-white dark:bg-gray-800/50 overflow-hidden shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 mb-8">
            <div className="px-6 py-8">
              <div className="flex items-center">
                {userAvatar ? (
                  <img
                    className="h-16 w-16 rounded-full border-4 border-amber-100 dark:border-amber-900"
                    src={userAvatar}
                    alt="Profile"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 dark:from-amber-500 dark:to-orange-500 flex items-center justify-center border-4 border-amber-100 dark:border-amber-900">
                    <span className="text-2xl font-bold text-white">
                      {userEmail?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="ml-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Welcome back{userName ? `, ${userName}` : ""}! 🗡️
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Ready to forge some productivity magic?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800/50 overflow-hidden shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="px-6 py-5">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center mb-4">
                  <svg
                    className="w-5 h-5 mr-2 text-amber-600"
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
                  Profile Information
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Email
                    </dt>
                    <dd className="text-sm text-gray-900 dark:text-white">
                      {userEmail}
                    </dd>
                  </div>
                  {userName && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Name
                      </dt>
                      <dd className="text-sm text-gray-900 dark:text-white">
                        {userName}
                      </dd>
                    </div>
                  )}
                  {provider && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Login Provider
                      </dt>
                      <dd className="text-sm text-gray-900 dark:text-white capitalize flex items-center">
                        {provider === "github" && (
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        )}
                        {provider}
                      </dd>
                    </div>
                  )}
                  {createdAt && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Member since
                      </dt>
                      <dd className="text-sm text-gray-900 dark:text-white">
                        {createdAt}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800/50 overflow-hidden shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="px-6 py-5">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center mb-4">
                  <svg
                    className="w-5 h-5 mr-2 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                      1
                    </div>
                    <div className="text-xs text-amber-700 dark:text-amber-300">
                      Active Session
                    </div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-700">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      100%
                    </div>
                    <div className="text-xs text-green-700 dark:text-green-300">
                      Auth Status
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Coming Soon */}
          <div className="bg-white dark:bg-gray-800/50 overflow-hidden shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-5">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center mb-6">
                <svg
                  className="w-5 h-5 mr-2 text-amber-600"
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
                Features Being Forged
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                  <svg
                    className="w-8 h-8 text-gray-400 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    GitHub Integration
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Connect your repositories and track productivity
                  </p>
                </div>
                <div className="text-center p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                  <svg
                    className="w-8 h-8 text-gray-400 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Analytics Dashboard
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Visualize your coding patterns and progress
                  </p>
                </div>
                <div className="text-center p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
                  <svg
                    className="w-8 h-8 text-gray-400 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Focus Tools
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Distraction blocking and productivity enhancement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
