import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Edit, Save, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/contexts/ToastContext";
import { getAuthErrorMessage } from "@/lib/auth-errors";

export function ProfileView() {
  const { user, updateProfile } = useAuth();
  const { showSuccess, showError } = useToast();

  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [displayName, setDisplayName] = useState(
    user?.user_metadata?.display_name ||
      user?.user_metadata?.name ||
      user?.user_metadata?.full_name ||
      ""
  );
  const [bio, setBio] = useState(user?.user_metadata?.bio || "");

  const userName =
    user?.user_metadata?.display_name ||
    user?.user_metadata?.name ||
    user?.user_metadata?.full_name;
  const userAvatar = user?.user_metadata?.avatar_url;
  const provider = user?.app_metadata?.provider;

  const userInitials = userName
    ? userName
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
    : user?.email?.charAt(0).toUpperCase() || "U";
  const handleSaveProfile = async () => {
    setIsUpdating(true);

    try {
      const { error } = await updateProfile({
        data: {
          display_name: displayName,
          bio: bio,
        },
      });

      if (error) {
        const { title, description } = getAuthErrorMessage(error.message);
        showError(title, description);
      } else {
        showSuccess("Profile updated successfully");
        setIsEditing(false);
      }
    } catch {
      showError(
        "Update Failed",
        "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancelEdit = () => {
    setDisplayName(
      user?.user_metadata?.display_name ||
        user?.user_metadata?.name ||
        user?.user_metadata?.full_name ||
        ""
    );
    setBio(user?.user_metadata?.bio || "");
    setIsEditing(false);
  };
  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Profile</h1>
        <p className="text-muted-foreground">
          Manage your profile information and activity
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </div>
              {!isEditing && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src={userAvatar}
                  alt={userName || user?.email || "User"}
                />
                <AvatarFallback className="text-2xl">
                  {userInitials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-4">
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="displayName">Display Name</Label>
                      <Input
                        id="displayName"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="Enter your display name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Tell us about yourself..."
                        rows={3}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={handleSaveProfile}
                        disabled={isUpdating}
                        size="sm"
                      >
                        {isUpdating ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Saving...
                          </div>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleCancelEdit}
                        disabled={isUpdating}
                        size="sm"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {userName || "User"}
                    </h3>
                    {bio && (
                      <p className="text-muted-foreground text-sm">{bio}</p>
                    )}
                    {provider && (
                      <Badge variant="outline" className="mt-2 capitalize">
                        {provider === "github" && (
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        )}
                        {provider}
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity & Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Activity Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-foreground">8</div>
              <div className="text-sm text-muted-foreground">Total Tasks</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-green-600">2</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-orange-600">2</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-blue-600">1</div>
              <div className="text-sm text-muted-foreground">
                Active Session
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
