// Mock data for productivity dashboard
export interface ProductivityProject {
  id: string;
  name: string;
  description: string;
  progress: number;
  color: string;
  lastAccessed: string;
  category: string;
  icon: string;
}

export interface ProductivityTask {
  id: string;
  title: string;
  description?: string;
  priority: "high" | "medium" | "low";
  status: "todo" | "in-progress" | "done";
  dueDate?: string;
  project?: string;
  estimatedTime?: string;
  tags: string[];
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  unit: string;
  category: string;
  color: string;
  deadline: string;
}

export interface NotebookEntry {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  tags: string[];
  type: "note" | "reflection" | "idea" | "meeting";
  preview: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  type: "meeting" | "focus" | "break" | "personal";
  description?: string;
  participants?: string[];
  isJoinable?: boolean;
}

// Mock data
export const mockProjects: ProductivityProject[] = [
  {
    id: "1",
    name: "Personal Website Redesign",
    description: "Complete overhaul of portfolio website",
    progress: 75,
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    lastAccessed: "2 hours ago",
    category: "Development",
    icon: "🎨",
  },
  {
    id: "2",
    name: "Learning TypeScript",
    description: "Master advanced TypeScript patterns",
    progress: 60,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    lastAccessed: "1 day ago",
    category: "Learning",
    icon: "📚",
  },
  {
    id: "3",
    name: "Health & Fitness Goal",
    description: "Daily exercise and nutrition tracking",
    progress: 45,
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    lastAccessed: "3 hours ago",
    category: "Health",
    icon: "💪",
  },
  {
    id: "4",
    name: "Book Writing Project",
    description: "Draft chapters for productivity guide",
    progress: 30,
    color: "bg-gradient-to-r from-orange-500 to-red-500",
    lastAccessed: "5 days ago",
    category: "Writing",
    icon: "✍️",
  },
];

export const mockProductivityTasks: ProductivityTask[] = [
  {
    id: "1",
    title: "Review design mockups",
    description: "Go through the latest UI designs for the homepage",
    priority: "high",
    status: "todo",
    dueDate: "2025-06-10",
    project: "Personal Website Redesign",
    estimatedTime: "1h 30m",
    tags: ["design", "review"],
  },
  {
    id: "2",
    title: "Complete TypeScript exercises",
    description: "Finish chapters 5-7 of the TypeScript handbook",
    priority: "medium",
    status: "in-progress",
    dueDate: "2025-06-11",
    project: "Learning TypeScript",
    estimatedTime: "2h",
    tags: ["learning", "coding"],
  },
  {
    id: "3",
    title: "Morning workout routine",
    description: "Complete 45-minute strength training session",
    priority: "high",
    status: "todo",
    dueDate: "2025-06-09",
    project: "Health & Fitness Goal",
    estimatedTime: "45m",
    tags: ["fitness", "daily"],
  },
  {
    id: "4",
    title: "Plan book outline",
    description: "Create detailed chapter structure for productivity book",
    priority: "medium",
    status: "todo",
    dueDate: "2025-06-12",
    project: "Book Writing Project",
    estimatedTime: "2h",
    tags: ["writing", "planning"],
  },
  {
    id: "5",
    title: "Code review session",
    description: "Review and provide feedback on team pull requests",
    priority: "high",
    status: "todo",
    dueDate: "2025-06-09",
    estimatedTime: "1h",
    tags: ["work", "review"],
  },
];

export const mockGoals: Goal[] = [
  {
    id: "1",
    title: "Read 24 Books This Year",
    description: "Personal development and technical books",
    progress: 12,
    target: 24,
    unit: "books",
    category: "Learning",
    color: "bg-gradient-to-r from-indigo-500 to-purple-500",
    deadline: "2025-12-31",
  },
  {
    id: "2",
    title: "Workout 150 Days",
    description: "Maintain consistent fitness routine",
    progress: 89,
    target: 150,
    unit: "days",
    category: "Health",
    color: "bg-gradient-to-r from-green-500 to-teal-500",
    deadline: "2025-12-31",
  },
  {
    id: "3",
    title: "Write 50 Blog Posts",
    description: "Share knowledge and insights regularly",
    progress: 23,
    target: 50,
    unit: "posts",
    category: "Writing",
    color: "bg-gradient-to-r from-orange-500 to-pink-500",
    deadline: "2025-12-31",
  },
];

export const mockNotebookEntries: NotebookEntry[] = [
  {
    id: "1",
    title: "Daily Reflection - June 9",
    content:
      "Today was productive. Completed the dashboard redesign and learned about advanced React patterns. Need to focus more on testing strategies tomorrow.",
    timestamp: "2 hours ago",
    tags: ["reflection", "daily"],
    type: "reflection",
    preview:
      "Today was productive. Completed the dashboard redesign and learned about advanced React patterns...",
  },
  {
    id: "2",
    title: "TypeScript Generic Patterns",
    content:
      "Discovered some powerful patterns for creating reusable components with TypeScript generics. Utility types like Pick, Omit, and Record are incredibly useful.",
    timestamp: "1 day ago",
    tags: ["typescript", "learning", "patterns"],
    type: "note",
    preview:
      "Discovered some powerful patterns for creating reusable components with TypeScript generics...",
  },
  {
    id: "3",
    title: "Team Meeting Notes",
    content:
      "Discussed the upcoming product roadmap. Key decisions: Focus on user experience improvements, implement dark mode, and optimize performance.",
    timestamp: "3 days ago",
    tags: ["meeting", "work", "planning"],
    type: "meeting",
    preview:
      "Discussed the upcoming product roadmap. Key decisions: Focus on user experience improvements...",
  },
  {
    id: "4",
    title: "App Idea: Habit Tracker",
    content:
      "Building a habit tracking app with gamification elements. Could integrate with calendar and provide insights on habit formation patterns.",
    timestamp: "1 week ago",
    tags: ["idea", "app", "habits"],
    type: "idea",
    preview:
      "Building a habit tracking app with gamification elements. Could integrate with calendar...",
  },
];

export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Team Standup",
    time: "09:00 AM",
    type: "meeting",
    description: "Daily team sync and progress updates",
    participants: ["Alice", "Bob", "Charlie"],
    isJoinable: true,
  },
  {
    id: "2",
    title: "Deep Work Session",
    time: "10:30 AM",
    type: "focus",
    description: "Focused coding time for dashboard improvements",
  },
  {
    id: "3",
    title: "Lunch Break",
    time: "12:00 PM",
    type: "break",
    description: "Midday break and meal",
  },
  {
    id: "4",
    title: "Client Presentation",
    time: "02:00 PM",
    type: "meeting",
    description: "Present Q2 progress to stakeholders",
    participants: ["Sarah", "Mike", "Jennifer"],
    isJoinable: true,
  },
  {
    id: "5",
    title: "Exercise Time",
    time: "06:00 PM",
    type: "personal",
    description: "Evening gym session",
  },
];

export const motivationalQuotes = [
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Your limitation—it's only your imagination.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
];

export const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
};

export const getRandomQuote = () => {
  return motivationalQuotes[
    Math.floor(Math.random() * motivationalQuotes.length)
  ];
};
