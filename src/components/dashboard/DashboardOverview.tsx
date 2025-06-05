import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckSquare, Clock, TrendingUp, Calendar, Target } from "lucide-react";
import { mockTasks } from "@/lib/data";

export function DashboardOverview() {
  const totalTasks = mockTasks.length;
  const completedTasks = mockTasks.filter(
    (task) => task.status === "done"
  ).length;
  const inProgressTasks = mockTasks.filter(
    (task) => task.status === "in-progress"
  ).length;
  const todoTasks = mockTasks.filter((task) => task.status === "todo").length;

  const completionRate = Math.round((completedTasks / totalTasks) * 100);

  const highPriorityTasks = mockTasks.filter(
    (task) => task.priority === "high"
  ).length;
  const overdueTasks = mockTasks.filter(
    (task) => task.dueDate && new Date(task.dueDate) < new Date()
  ).length;

  const stats = [
    {
      title: "Total Tasks",
      value: totalTasks,
      change: "+12%",
      icon: CheckSquare,
      color: "text-blue-600",
    },
    {
      title: "Completed",
      value: completedTasks,
      change: "+8%",
      icon: Target,
      color: "text-green-600",
    },
    {
      title: "In Progress",
      value: inProgressTasks,
      change: "+5%",
      icon: Clock,
      color: "text-orange-600",
    },
    {
      title: "High Priority",
      value: highPriorityTasks,
      change: "+2%",
      icon: TrendingUp,
      color: "text-red-600",
    },
  ];

  const recentTasks = mockTasks
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
    .slice(0, 5);

  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your projects.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      {stat.change} from last month
                    </p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Progress and Recent Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Project Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Overall Completion</span>
                <span className="text-sm text-muted-foreground">
                  {completionRate}%
                </span>
              </div>
              <Progress value={completionRate} className="h-2" />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {completedTasks}
                </div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {inProgressTasks}
                </div>
                <div className="text-xs text-muted-foreground">In Progress</div>
              </div>{" "}
              <div className="text-center">
                <div className="text-2xl font-bold text-muted-foreground">
                  {todoTasks}
                </div>
                <div className="text-xs text-muted-foreground">To Do</div>
              </div>
            </div>

            {overdueTasks > 0 && (
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-red-900 dark:text-red-100">
                    {overdueTasks} overdue task{overdueTasks > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  {" "}
                  <div
                    className={`w-2 h-2 rounded-full ${
                      task.status === "done"
                        ? "bg-green-500"
                        : task.status === "in-progress"
                        ? "bg-orange-500"
                        : "bg-muted-foreground"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{task.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Updated {new Date(task.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      task.priority === "high"
                        ? "border-red-200 text-red-700"
                        : task.priority === "medium"
                        ? "border-yellow-200 text-yellow-700"
                        : "border-green-200 text-green-700"
                    }`}
                  >
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
