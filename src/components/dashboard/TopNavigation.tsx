import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Menu, Bell, Search, User, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LogoutConfirmationDialog } from "@/components/ui/logout-confirmation-dialog";

interface TopNavigationProps {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
  onOpenMobileSidebar?: () => void;
}

export function TopNavigation({
  onToggleSidebar,
  sidebarCollapsed,
  onOpenMobileSidebar,
}: TopNavigationProps) {
  const { user } = useAuth();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const userName = user?.user_metadata?.name || user?.user_metadata?.full_name;
  const userAvatar = user?.user_metadata?.avatar_url;
  const userInitials = userName
    ? userName
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
    : user?.email?.charAt(0).toUpperCase() || "U";
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onOpenMobileSidebar || onToggleSidebar}
          className="lg:hidden"
        >
          <Menu className="h-4 w-4" />
        </Button>
        {/* App Logo/Title */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
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
          </div>{" "}
          <span className="font-bold text-lg text-foreground">
            Productivity Hub
          </span>
        </div>{" "}
        {/* Desktop Sidebar Toggle - next to search */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleSidebar}
          className="hidden lg:flex ml-2"
          title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {sidebarCollapsed ? (
            <Menu className="h-4 w-4" />
          ) : (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          )}
        </Button>
        {/* Search - Desktop only */}
        <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-2 min-w-[200px] ml-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="bg-transparent border-none outline-none text-sm flex-1 text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>
      {/* Right section */}
      <div className="flex items-center gap-2">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
          >
            3
          </Badge>
        </Button>{" "}
        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="relative h-8 w-8 rounded-full"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={userAvatar}
                  alt={userName || user?.email || "User"}
                />
                <AvatarFallback className="text-sm bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  {userInitials}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="p-2">
              <p className="text-sm font-medium">{userName || user?.email}</p>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>{" "}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => setShowLogoutDialog(true)}
              className="text-red-600 focus:text-red-600"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <LogoutConfirmationDialog
          open={showLogoutDialog}
          onOpenChange={setShowLogoutDialog}
        />
      </div>
    </header>
  );
}
