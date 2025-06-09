import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function NotesView() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Notes & Reflections</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Capture your thoughts, ideas, and learnings
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Notes View</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This is a placeholder for the Notes view. It will contain your
            personal notes, reflections, and ideas.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
