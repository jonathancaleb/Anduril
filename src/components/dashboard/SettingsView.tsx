import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Settings,
  User,
  Lock,
  Trash2,
  Mail,
  Save,
  Eye,
  EyeOff,
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/contexts/ToastContext";
import { getAuthErrorMessage } from "@/lib/auth-errors";

export function SettingsView() {
  const { user, updateProfile, updatePassword, updateEmail, deleteAccount } =
    useAuth();
  const { showSuccess, showError } = useToast();

  // Profile state
  const [displayName, setDisplayName] = useState(
    user?.user_metadata?.display_name || ""
  );
  const [newEmail, setNewEmail] = useState(user?.email || "");
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  // Password state
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  // Delete account state
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleUpdateProfile = async () => {
    setIsUpdatingProfile(true);

    try {
      const { error } = await updateProfile({
        data: { display_name: displayName },
      });

      if (error) {
        const { title, description } = getAuthErrorMessage(error);
        showError(title, description);
      } else {
        showSuccess(
          "Profile Updated",
          "Your profile has been updated successfully."
        );
      }
    } catch {
      showError(
        "Update Failed",
        "An unexpected error occurred while updating your profile."
      );
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleUpdateEmail = async () => {
    if (newEmail === user?.email) {
      showError(
        "No Changes",
        "Your email address is already set to this value."
      );
      return;
    }

    setIsUpdatingProfile(true);

    try {
      const { error } = await updateEmail(newEmail);

      if (error) {
        const { title, description } = getAuthErrorMessage(error);
        showError(title, description);
      } else {
        showSuccess(
          "Email Update Requested",
          "Check both your old and new email addresses for confirmation links."
        );
      }
    } catch {
      showError(
        "Update Failed",
        "An unexpected error occurred while updating your email."
      );
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      showError(
        "Passwords Don't Match",
        "Please make sure both password fields match."
      );
      return;
    }

    if (newPassword.length < 6) {
      showError(
        "Password Too Short",
        "Password must be at least 6 characters long."
      );
      return;
    }

    setIsUpdatingPassword(true);

    try {
      const { error } = await updatePassword(newPassword);

      if (error) {
        const { title, description } = getAuthErrorMessage(error);
        showError(title, description);
      } else {
        showSuccess(
          "Password Updated",
          "Your password has been updated successfully."
        );
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch {
      showError(
        "Update Failed",
        "An unexpected error occurred while updating your password."
      );
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmation !== "DELETE") {
      showError(
        "Confirmation Required",
        "Please type 'DELETE' to confirm account deletion."
      );
      return;
    }

    setIsDeleting(true);

    try {
      const { error } = await deleteAccount();

      if (error) {
        const { title, description } = getAuthErrorMessage(error);
        showError(title, description);
      } else {
        showSuccess(
          "Account Deletion Requested",
          "Your account deletion request has been processed. You have been signed out."
        );
        setShowDeleteDialog(false);
      }
    } catch {
      showError(
        "Deletion Failed",
        "An unexpected error occurred while deleting your account."
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Enter your display name"
              />
            </div>

            <Button
              onClick={handleUpdateProfile}
              disabled={isUpdatingProfile}
              className="w-full"
            >
              {isUpdatingProfile ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Updating...
                </div>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Update Profile
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Email Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentEmail">Current Email</Label>
              <Input
                id="currentEmail"
                value={user?.email || ""}
                disabled
                className="bg-muted"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newEmail">New Email</Label>
              <Input
                id="newEmail"
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Enter new email address"
              />
            </div>

            <Button
              onClick={handleUpdateEmail}
              disabled={isUpdatingProfile || newEmail === user?.email}
              className="w-full"
            >
              {isUpdatingProfile ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Updating...
                </div>
              ) : (
                <>
                  <Mail className="h-4 w-4 mr-2" />
                  Update Email
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Password Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Password Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showPasswords ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPasswords(!showPasswords)}
                >
                  {showPasswords ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type={showPasswords ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
              />
            </div>

            <Button
              onClick={handleUpdatePassword}
              disabled={isUpdatingPassword || !newPassword || !confirmPassword}
              className="w-full"
            >
              {isUpdatingPassword ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Updating...
                </div>
              ) : (
                <>
                  <Lock className="h-4 w-4 mr-2" />
                  Update Password
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Account Information</Label>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  <strong>User ID:</strong> {user?.id}
                </p>
                <p>
                  <strong>Account Created:</strong>{" "}
                  {user?.created_at
                    ? new Date(user.created_at).toLocaleDateString()
                    : "Unknown"}
                </p>
                <p>
                  <strong>Last Sign In:</strong>{" "}
                  {user?.last_sign_in_at
                    ? new Date(user.last_sign_in_at).toLocaleDateString()
                    : "Unknown"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <Trash2 className="h-5 w-5" />
              Danger Zone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-destructive">Delete Account</h3>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all associated data. This
                  action cannot be undone.
                </p>
              </div>

              <Dialog
                open={showDeleteDialog}
                onOpenChange={setShowDeleteDialog}
              >
                <DialogTrigger asChild>
                  <Button variant="destructive" className="w-full">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Delete Account</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove all your data from our servers.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="deleteConfirmation">
                        Type <strong>DELETE</strong> to confirm
                      </Label>
                      <Input
                        id="deleteConfirmation"
                        value={deleteConfirmation}
                        onChange={(e) => setDeleteConfirmation(e.target.value)}
                        placeholder="Type DELETE to confirm"
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowDeleteDialog(false);
                        setDeleteConfirmation("");
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={handleDeleteAccount}
                      disabled={isDeleting || deleteConfirmation !== "DELETE"}
                    >
                      {isDeleting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Deleting...
                        </div>
                      ) : (
                        <>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Account
                        </>
                      )}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
