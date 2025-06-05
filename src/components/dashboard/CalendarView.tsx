import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export function CalendarView() {
  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Calendar</h1>
        <p className="text-muted-foreground">View and manage your schedule</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Calendar View
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12">
            <Calendar className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Calendar Coming Soon
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              The calendar view is being developed. Soon you'll be able to view
              your tasks and deadlines in a beautiful calendar interface.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
