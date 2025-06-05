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
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

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
    name: "Tasks",
    icon: CheckSquare,
    page: "tasks",
  },
  {
    name: "Calendar",
    icon: Calendar,
    page: "calendar",
  },
  {
    name: "Projects",
    icon: FolderOpen,
    page: "projects",
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
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    }
  };
  return (
    <div
      className={cn(
        "flex flex-col h-full bg-brand-neutral border-r border-brand-primary/20",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo/Brand */}
      <div className="flex items-center gap-2 p-4 border-b border-brand-primary/20">
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg">
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
        {!collapsed && (
          <span className="font-bold text-lg text-brand-neutral-foreground">
            Anduril
          </span>
        )}
      </div>
      {/* Navigation */}
      <ScrollArea className="flex-1 p-4">
        {" "}
        <div className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.page;

            return (
              <Button
                key={item.name}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start text-brand-neutral-foreground hover:bg-brand-accent/20",
                  collapsed ? "px-2" : "px-3",
                  isActive && "bg-brand-accent/30 text-brand-primary"
                )}
                onClick={() => onNavigate(item.page)}
              >
                <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
                {!collapsed && <span>{item.name}</span>}
              </Button>
            );
          })}
        </div>
        <Separator className="my-4" />
        <div className="space-y-2">
          {bottomNavigation.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.page;
            return (
              <Button
                key={item.name}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start text-brand-neutral-foreground hover:bg-brand-accent/20",
                  collapsed ? "px-2" : "px-3",
                  isActive && "bg-brand-accent/30 text-brand-primary"
                )}
                onClick={() => onNavigate(item.page)}
              >
                <Icon className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
                {!collapsed && <span>{item.name}</span>}
              </Button>
            );
          })}
        </div>
      </ScrollArea>{" "}
      {/* User Section */}
      <div className="p-4 border-t border-brand-primary/20">
        {!collapsed && user && (
          <div className="mb-3">
            <p className="text-sm font-medium text-brand-neutral-foreground truncate">
              {user.user_metadata?.name || user.email}
            </p>
            <p className="text-xs text-brand-neutral-foreground/60 truncate">
              {user.email}
            </p>
          </div>
        )}

        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start text-brand-neutral-foreground/60 hover:text-brand-neutral-foreground hover:bg-brand-accent/20",
            collapsed ? "px-2" : "px-3"
          )}
          onClick={handleSignOut}
        >
          <LogOut className={cn("h-4 w-4", collapsed ? "mr-0" : "mr-2")} />
          {!collapsed && <span>Sign Out</span>}
        </Button>
      </div>
    </div>
  );
}
