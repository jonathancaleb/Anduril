import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FocusView() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Focus Sessions</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Deep work sessions and productivity tracking
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Focus View</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is a placeholder for the Focus view. It will help you manage
            deep work sessions and track focus time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
