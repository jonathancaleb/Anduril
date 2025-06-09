import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";
import { TopNavigation } from "./TopNavigation";
import { ProductivityDashboard } from "./ProductivityDashboard";
import { KanbanBoard } from "./KanbanBoard";
import { CalendarView } from "./CalendarView";
import { ProjectsView } from "./ProjectsView";
import { NotesView } from "./NotesView";
import { GoalsView } from "./GoalsView";
import { FocusView } from "./FocusView";
import { JournalView } from "./JournalView";
import { ProfileView } from "./ProfileView";
import { SettingsView } from "./SettingsView";
import type { Task } from "@/lib/data";

type DashboardPage =
  | "overview"
  | "projects"
  | "tasks"
  | "notes"
  | "goals"
  | "focus"
  | "calendar"
  | "journal"
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
        return <ProductivityDashboard />;
      case "projects":
        return <ProjectsView />;
      case "tasks":
        return (
          <KanbanBoard
            onAddTask={handleAddTask}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
          />
        );
      case "notes":
        return <NotesView />;
      case "goals":
        return <GoalsView />;
      case "focus":
        return <FocusView />;
      case "calendar":
        return <CalendarView />;
      case "journal":
        return <JournalView />;
      case "profile":
        return <ProfileView />;
      case "settings":
        return <SettingsView />;
      default:
        return <ProductivityDashboard />;
    }
  };
  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Navigation */}
      <TopNavigation
        onToggleSidebar={toggleSidebar}
        onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
        sidebarCollapsed={sidebarCollapsed}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <div
          className={`hidden lg:flex ${
            sidebarCollapsed ? "w-16" : "w-64"
          } transition-all duration-300`}
        >
          {" "}
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
        <div className="flex-1 overflow-hidden">
          <main className="h-full overflow-auto">{renderCurrentPage()}</main>
        </div>
      </div>
    </div>
  );
}
