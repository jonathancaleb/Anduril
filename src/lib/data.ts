// Mock data for tasks and dashboard
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  assignee?: string;
  dueDate?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Column {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
  color: string;
}

export const columns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    status: "todo",
    color: "bg-brand-neutral border border-brand-primary/10",
  },
  {
    id: "in-progress",
    title: "In Progress",
    status: "in-progress",
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    id: "done",
    title: "Done",
    status: "done",
    color: "bg-green-50 dark:bg-green-900/20",
  },
];

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Implement user authentication",
    description: "Set up Supabase auth with email/password and OAuth",
    status: "done",
    priority: "high",
    assignee: "john@example.com",
    dueDate: "2024-01-15",
    tags: ["auth", "supabase", "security"],
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-10T15:30:00Z",
  },
  {
    id: "2",
    title: "Design dashboard layout",
    description:
      "Create responsive dashboard with sidebar and main content area",
    status: "done",
    priority: "medium",
    assignee: "jane@example.com",
    dueDate: "2024-01-20",
    tags: ["ui", "design", "dashboard"],
    createdAt: "2024-01-02T09:00:00Z",
    updatedAt: "2024-01-12T11:20:00Z",
  },
  {
    id: "3",
    title: "Build Kanban board component",
    description: "Implement drag-and-drop Kanban board with task management",
    status: "in-progress",
    priority: "high",
    assignee: "bob@example.com",
    dueDate: "2024-01-25",
    tags: ["kanban", "dnd", "tasks"],
    createdAt: "2024-01-03T14:00:00Z",
    updatedAt: "2024-01-15T16:45:00Z",
  },
  {
    id: "4",
    title: "Add task filtering and search",
    description: "Implement filters for priority, assignee, and tags",
    status: "todo",
    priority: "medium",
    assignee: "alice@example.com",
    dueDate: "2024-02-01",
    tags: ["search", "filters", "tasks"],
    createdAt: "2024-01-04T11:00:00Z",
    updatedAt: "2024-01-04T11:00:00Z",
  },
  {
    id: "5",
    title: "Implement real-time updates",
    description: "Add real-time task updates using Supabase subscriptions",
    status: "todo",
    priority: "low",
    assignee: "charlie@example.com",
    dueDate: "2024-02-10",
    tags: ["realtime", "supabase", "websockets"],
    createdAt: "2024-01-05T13:00:00Z",
    updatedAt: "2024-01-05T13:00:00Z",
  },
  {
    id: "6",
    title: "Add task comments and attachments",
    description: "Allow users to add comments and file attachments to tasks",
    status: "todo",
    priority: "medium",
    assignee: "david@example.com",
    dueDate: "2024-02-15",
    tags: ["comments", "attachments", "collaboration"],
    createdAt: "2024-01-06T10:30:00Z",
    updatedAt: "2024-01-06T10:30:00Z",
  },
  {
    id: "7",
    title: "Setup CI/CD pipeline",
    description:
      "Configure GitHub Actions for automated testing and deployment",
    status: "in-progress",
    priority: "high",
    assignee: "eve@example.com",
    dueDate: "2024-01-30",
    tags: ["ci/cd", "github-actions", "deployment"],
    createdAt: "2024-01-07T09:15:00Z",
    updatedAt: "2024-01-14T14:20:00Z",
  },
  {
    id: "8",
    title: "Write API documentation",
    description: "Document all API endpoints and authentication methods",
    status: "todo",
    priority: "low",
    assignee: "frank@example.com",
    dueDate: "2024-02-20",
    tags: ["documentation", "api", "guides"],
    createdAt: "2024-01-08T16:00:00Z",
    updatedAt: "2024-01-08T16:00:00Z",
  },
];

export const getTasksByStatus = (status: Task["status"]): Task[] => {
  return mockTasks.filter((task) => task.status === status);
};

export const getTaskById = (id: string): Task | undefined => {
  return mockTasks.find((task) => task.id === id);
};

export const updateTaskStatus = (
  taskId: string,
  newStatus: Task["status"]
): Task[] => {
  return mockTasks.map((task) =>
    task.id === taskId
      ? { ...task, status: newStatus, updatedAt: new Date().toISOString() }
      : task
  );
};
