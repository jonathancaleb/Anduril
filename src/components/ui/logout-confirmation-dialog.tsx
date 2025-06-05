import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LogOut, AlertTriangle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/contexts/ToastContext";
import { getAuthErrorMessage } from "@/lib/auth-errors";

interface LogoutConfirmationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LogoutConfirmationDialog({
  open,
  onOpenChange,
}: LogoutConfirmationDialogProps) {
  const { signOut } = useAuth();
  const { showError, showSuccess } = useToast();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      const { error } = await signOut();

      if (error) {
        const { title, description } = getAuthErrorMessage(error.message);
        showError(title, description);
      } else {
        showSuccess("You have been successfully signed out");
        onOpenChange(false);
      }
    } catch {
      showError(
        "Sign Out Failed",
        "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleCancel = () => {
    if (!isLoggingOut) {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Confirm Sign Out
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to sign out? You'll need to sign in again to
            access your account.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            variant="outline"
            onClick={handleCancel}
            disabled={isLoggingOut}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="gap-2"
          >
            {isLoggingOut ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                Signing Out...
              </>
            ) : (
              <>
                <LogOut className="h-4 w-4" />
                Sign Out
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
