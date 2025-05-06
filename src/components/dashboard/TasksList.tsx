
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type TaskPriority = 'high' | 'medium' | 'low';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  dueDate: string;
  priority: TaskPriority;
};

const TasksList = () => {
  // Datos simulados de tareas
  const tasks: Task[] = [
    {
      id: '1',
      title: 'Llamada de seguimiento a cliente Juan Pérez',
      completed: false,
      dueDate: 'Hoy, 14:00',
      priority: 'high',
    },
    {
      id: '2',
      title: 'Renovación de póliza #12345',
      completed: false,
      dueDate: 'Mañana, 10:00',
      priority: 'high',
    },
    {
      id: '3',
      title: 'Revisión de documentación siniestro',
      completed: false,
      dueDate: 'En 2 días',
      priority: 'medium',
    },
    {
      id: '4',
      title: 'Preparar informe mensual',
      completed: true,
      dueDate: 'Completada',
      priority: 'low',
    },
  ];

  // Función para obtener el color de la insignia de prioridad
  const getPriorityBadge = (priority: TaskPriority) => {
    switch (priority) {
      case 'high':
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-300">Alta</Badge>;
      case 'medium':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-300">Media</Badge>;
      case 'low':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">Baja</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className={cn(
          "p-3 border rounded-lg",
          task.completed ? "bg-gray-50" : "bg-white"
        )}>
          <div className="flex items-start gap-3">
            <Checkbox id={`task-${task.id}`} checked={task.completed} />
            <div className="flex-1 min-w-0">
              <label 
                htmlFor={`task-${task.id}`}
                className={cn(
                  "text-sm font-medium cursor-pointer",
                  task.completed && "line-through text-gray-500"
                )}
              >
                {task.title}
              </label>
              <div className="flex items-center text-xs text-gray-500 mt-1 gap-3">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {task.dueDate}
                </div>
                {getPriorityBadge(task.priority)}
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button variant="outline" size="sm" className="w-full mt-2">
        Ver todas las tareas
      </Button>
    </div>
  );
};

export default TasksList;
