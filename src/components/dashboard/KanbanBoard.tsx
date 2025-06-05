import { useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type {
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { KanbanColumn } from "./KanbanColumn";
import { TaskCard } from "./TaskCard";
import type { Task } from "@/lib/data";
import { mockTasks, columns } from "@/lib/data";

interface KanbanBoardProps {
  onAddTask?: (columnId: string) => void;
  onEditTask?: (task: Task) => void;
  onDeleteTask?: (taskId: string) => void;
}

export function KanbanBoard({
  onAddTask,
  onEditTask,
  onDeleteTask,
}: KanbanBoardProps) {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = tasks.find((t) => t.id === active.id);
    setActiveTask(task || null);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const activeTask = tasks.find((t) => t.id === activeId);
    const overTask = tasks.find((t) => t.id === overId);

    if (!activeTask) return;

    // Dropping on a column
    if (columns.find((col) => col.id === overId)) {
      const newStatus = overId as Task["status"];
      if (activeTask.status !== newStatus) {
        setTasks((tasks) =>
          tasks.map((task) =>
            task.id === activeId
              ? {
                  ...task,
                  status: newStatus,
                  updatedAt: new Date().toISOString(),
                }
              : task
          )
        );
      }
      return;
    }

    // Dropping on another task
    if (overTask && activeTask.status !== overTask.status) {
      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === activeId
            ? {
                ...task,
                status: overTask.status,
                updatedAt: new Date().toISOString(),
              }
            : task
        )
      );
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const activeTask = tasks.find((t) => t.id === activeId);
    if (!activeTask) return;

    // Handle dropping on columns
    if (columns.find((col) => col.id === overId)) {
      const newStatus = overId as Task["status"];
      if (activeTask.status !== newStatus) {
        setTasks((tasks) =>
          tasks.map((task) =>
            task.id === activeId
              ? {
                  ...task,
                  status: newStatus,
                  updatedAt: new Date().toISOString(),
                }
              : task
          )
        );
      }
    }
  };

  const getTasksByStatus = (status: Task["status"]) => {
    return tasks.filter((task) => task.status === status);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
    onDeleteTask?.(taskId);
  };

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Task Board</h1>
        <p className="text-muted-foreground">
          Manage your tasks with drag and drop
        </p>
      </div>

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-6 overflow-x-auto pb-6">
          <SortableContext
            items={columns.map((col) => col.id)}
            strategy={horizontalListSortingStrategy}
          >
            {columns.map((column) => (
              <KanbanColumn
                key={column.id}
                column={column}
                tasks={getTasksByStatus(column.status)}
                onAddTask={() => onAddTask?.(column.id)}
                onEditTask={onEditTask}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </SortableContext>
        </div>

        <DragOverlay>
          {activeTask ? (
            <div className="rotate-2">
              <TaskCard task={activeTask} />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
