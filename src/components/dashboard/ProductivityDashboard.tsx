import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowRight,
  Play,
  BookOpen,
  Target,
  CheckSquare2,
  Sun,
  Cloud,
  CloudRain,
} from "lucide-react";
import {
  mockProjects,
  mockProductivityTasks,
  mockGoals,
  mockNotebookEntries,
  mockCalendarEvents,
  getGreeting,
  getRandomQuote,
  type ProductivityProject,
  type ProductivityTask,
  type Goal,
  type NotebookEntry,
  type CalendarEvent,
} from "@/lib/productivity-data";
import { useAuth } from "@/hooks/useAuth";

export function ProductivityDashboard() {
  const { user } = useAuth();
  const userName =
    user?.user_metadata?.name || user?.user_metadata?.full_name || "there";
  const greeting = getGreeting();
  const todayQuote = getRandomQuote();

  // Today's tasks (due today or high priority)
  const todaysTasks = mockProductivityTasks
    .filter((task) => task.dueDate === "2025-06-09" || task.priority === "high")
    .slice(0, 5);

  // Active goals with progress
  const activeGoals = mockGoals.slice(0, 3);

  // Recent notebook entries
  const recentNotes = mockNotebookEntries.slice(0, 6);

  // Today's events
  const todaysEvents = mockCalendarEvents.slice(0, 4);

  const getWeatherIcon = () => {
    const icons = [Sun, Cloud, CloudRain];
    return icons[Math.floor(Math.random() * icons.length)];
  };
  const WeatherIcon = getWeatherIcon();
  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {" "}
          {/* Greeting Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-foreground">
              {greeting}, {userName.split(" ")[0]}! 👋
            </h1>
            <p className="text-muted-foreground text-lg italic">
              "{todayQuote}"
            </p>
          </div>{" "}
          {/* Recently Active Projects */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">
                Recently Active
              </h2>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockProjects.map((project: ProductivityProject) => (
                <Card
                  key={project.id}
                  className="hover:border-border/50 transition-all cursor-pointer group"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">{project.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm text-foreground">
                          {project.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {project.category}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          Progress
                        </span>
                        <span className="text-xs font-medium text-foreground">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full ${project.color}`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {project.lastAccessed}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>{" "}
          {/* Notebook Entries Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">
                Recent Notes & Reflections
              </h2>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
              >
                <BookOpen className="mr-1 h-4 w-4" />
                View all
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentNotes.map((note: NotebookEntry) => (
                <Card
                  key={note.id}
                  className="hover:border-border/50 transition-all cursor-pointer h-32"
                >
                  <CardContent className="p-4 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-sm truncate flex-1 text-foreground">
                        {note.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs ml-2">
                        {note.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground flex-1 line-clamp-3">
                      {note.preview}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex gap-1">
                        {note.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs px-1 py-0"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {note.timestamp}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>{" "}
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
          {/* Date & Weather */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date().getFullYear()}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <WeatherIcon className="h-6 w-6 text-blue-500 mb-1" />
                  <span className="text-xs text-muted-foreground">22°C</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Partly cloudy with a chance of productivity ☀️
              </p>
            </CardContent>
          </Card>{" "}
          {/* Tasks for Today */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold flex items-center">
                <CheckSquare2 className="mr-2 h-4 w-4" />
                Tasks for Today
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {todaysTasks.map((task: ProductivityTask) => (
                <div
                  key={task.id}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium truncate text-foreground">
                      {task.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      {task.project && (
                        <Badge variant="outline" className="text-xs px-1 py-0">
                          {task.project}
                        </Badge>
                      )}
                      {task.estimatedTime && (
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {task.estimatedTime}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <Button
                size="sm"
                variant="ghost"
                className="w-full text-muted-foreground hover:text-foreground"
              >
                View all tasks
              </Button>
            </CardContent>
          </Card>{" "}
          {/* Goals in Progress */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold flex items-center">
                <Target className="mr-2 h-4 w-4" />
                Goals in Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeGoals.map((goal: Goal) => (
                <div key={goal.id} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-medium text-foreground">
                      {goal.title}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {goal.progress}/{goal.target} {goal.unit}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${goal.color}`}
                      style={{
                        width: `${(goal.progress / goal.target) * 100}%`,
                      }}
                    />
                  </div>
                  <Badge variant="outline" className="text-xs px-1 py-0">
                    {goal.category}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>{" "}
          {/* Today's Schedule */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {todaysEvents.map((event: CalendarEvent) => (
                <div
                  key={event.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="text-xs font-mono text-muted-foreground w-16">
                    {event.time}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium truncate text-foreground">
                      {event.title}
                    </h4>
                    <Badge
                      variant="outline"
                      className={`text-xs px-1 py-0 ${
                        event.type === "meeting"
                          ? "text-blue-600 dark:text-blue-400"
                          : event.type === "focus"
                          ? "text-purple-600 dark:text-purple-400"
                          : event.type === "break"
                          ? "text-green-600 dark:text-green-400"
                          : "text-muted-foreground"
                      }`}
                    >
                      {event.type}
                    </Badge>
                  </div>
                  {event.isJoinable && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs px-2 py-1 h-6"
                    >
                      <Play className="mr-1 h-3 w-3" />
                      Join
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
