import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { TopNavigation } from "./TopNavigation";
import { DashboardOverview } from "./DashboardOverview";
import { KanbanBoard } from "./KanbanBoard";
import { CalendarView } from "./CalendarView";
import { ProjectsView } from "./ProjectsView";
import { ProfileView } from "./ProfileView";
import { SettingsView } from "./SettingsView";
import type { Task } from "@/lib/data";

type DashboardPage =
  | "overview"
  | "tasks"
  | "calendar"
  | "projects"
  | "profile"
  | "settings";

export function DashboardLayout() {
  const [currentPage, setCurrentPage] = useState<DashboardPage>("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as DashboardPage);
    setMobileSidebarOpen(false); // Close mobile sidebar when navigating
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleAddTask = (columnId: string) => {
    console.log("Add task to column:", columnId);
    // TODO: Implement task creation modal
  };

  const handleEditTask = (task: Task) => {
    console.log("Edit task:", task);
    // TODO: Implement task editing modal
  };

  const handleDeleteTask = (taskId: string) => {
    console.log("Delete task:", taskId);
    // TODO: Implement task deletion with confirmation
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "overview":
        return <DashboardOverview />;
      case "tasks":
        return (
          <KanbanBoard
            onAddTask={handleAddTask}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
          />
        );
      case "calendar":
        return <CalendarView />;
      case "projects":
        return <ProjectsView />;
      case "profile":
        return <ProfileView />;
      case "settings":
        return <SettingsView />;
      default:
        return <DashboardOverview />;
    }
  };
  return (
    <div className="h-screen flex bg-brand-neutral">
      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:flex ${
          sidebarCollapsed ? "w-16" : "w-64"
        } transition-all duration-300`}
      >
        <Sidebar
          collapsed={sidebarCollapsed}
          onNavigate={handleNavigate}
          currentPage={currentPage}
        />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar
            collapsed={false}
            onNavigate={handleNavigate}
            currentPage={currentPage}
          />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <TopNavigation
          onToggleSidebar={() => {
            // On mobile, open sheet; on desktop, toggle collapsed state
            if (window.innerWidth < 1024) {
              setMobileSidebarOpen(true);
            } else {
              toggleSidebar();
            }
          }}
          sidebarCollapsed={sidebarCollapsed}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-auto">{renderCurrentPage()}</main>
      </div>
    </div>
  );
}
