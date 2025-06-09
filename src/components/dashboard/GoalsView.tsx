import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GoalsView() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Goals & Objectives</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track your progress toward personal and professional goals
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Goals View</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is a placeholder for the Goals view. It will help you set,
            track, and achieve your objectives.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
