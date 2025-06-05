import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsView() {
  return (
    <div className="flex-1 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">
            Organize your work into projects
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5" />
            Your Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12">
            <FolderOpen className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              No Projects Yet
            </h3>
            <p className="text-muted-foreground text-center max-w-md mb-4">
              Projects help you organize your tasks and collaborate with your
              team. Create your first project to get started.
            </p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Project
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
