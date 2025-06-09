import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function JournalView() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Journal & Reflections</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Daily reflections and personal growth tracking
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Journal View</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is a placeholder for the Journal view. It will contain your
            daily reflections and personal insights.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
