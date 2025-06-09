import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  FolderOpen,
  Settings,
  User,
  LogOut,
  BookOpen,
  Target,
  Brain,
  Coffee,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { LogoutConfirmationDialog } from "@/components/ui/logout-confirmation-dialog";

interface SidebarProps {
  collapsed?: boolean;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const navigation = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    page: "overview",
  },
  {
    name: "Projects",
    icon: FolderOpen,
    page: "projects",
  },
  {
    name: "Tasks",
    icon: CheckSquare,
    page: "tasks",
  },
  {
    name: "Notes",
    icon: BookOpen,
    page: "notes",
  },
  {
    name: "Goals",
    icon: Target,
    page: "goals",
  },
  {
    name: "Focus",
    icon: Brain,
    page: "focus",
  },
  {
    name: "Calendar",
    icon: Calendar,
    page: "calendar",
  },
  {
    name: "Journal",
    icon: Coffee,
    page: "journal",
  },
];

const bottomNavigation = [
  {
    name: "Profile",
    icon: User,
    page: "profile",
  },
  {
    name: "Settings",
    icon: Settings,
    page: "settings",
  },
];

export function Sidebar({
  collapsed = false,
  onNavigate,
  currentPage,
}: SidebarProps) {
  const { user } = useAuth();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col h-full bg-background border-r border-border",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Navigation */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.page;

            return (
              <Button
                key={item.name}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start transition-colors",
                  collapsed ? "px-2" : "px-3",
                  isActive &&
                    "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-l-2 border-purple-500"
                )}
                onClick={() => onNavigate(item.page)}
              >
                <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
                {!collapsed && <span>{item.name}</span>}
              </Button>
            );
          })}
        </div>{" "}
        {/* Module Shortcuts Section */}
        {!collapsed && (
          <>
            <Separator className="my-6" />
            <div className="mb-3">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
                Quick Access
              </h3>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Active Projects</span>
                <span className="ml-auto text-xs">4</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span>Due Today</span>
                <span className="ml-auto text-xs">7</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Focus Sessions</span>
                <span className="ml-auto text-xs">2</span>
              </div>
            </div>
          </>
        )}
        <Separator className="my-6" />{" "}
        <div className="space-y-2">
          {bottomNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.page;
            return (
              <Button
                key={item.name}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start transition-colors",
                  collapsed ? "px-2" : "px-3",
                  isActive &&
                    "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-l-2 border-purple-500"
                )}
                onClick={() => onNavigate(item.page)}
              >
                <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
                {!collapsed && <span>{item.name}</span>}
              </Button>
            );
          })}
        </div>{" "}
      </ScrollArea>
      {/* User Section */}
      <div className="p-4 border-t border-border">
        {!collapsed && user && (
          <div className="mb-3">
            <p className="text-sm font-medium text-foreground truncate">
              {user.user_metadata?.name || user.email}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {user.email}
            </p>
          </div>
        )}

        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start transition-colors",
            collapsed ? "px-2" : "px-3"
          )}
          onClick={() => setShowLogoutDialog(true)}
        >
          <LogOut className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
          {!collapsed && <span>Sign Out</span>}
        </Button>
        <LogoutConfirmationDialog
          open={showLogoutDialog}
          onOpenChange={setShowLogoutDialog}
        />
      </div>
    </div>
  );
}
