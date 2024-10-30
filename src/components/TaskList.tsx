import React from 'react';
import { useTaskStore } from '../store/useTaskStore';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const TaskList: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const removeTask = useTaskStore((state) => state.removeTask);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta':
        return 'text-red-600';
      case 'média':
        return 'text-yellow-600';
      case 'baixa':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white p-4 rounded-lg shadow flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <div>
              <h3 className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>
                {task.title}
              </h3>
              <p className="text-sm text-gray-500">{task.description}</p>
              <div className="text-sm text-gray-500">
                {format(task.date, "d 'de' MMMM 'às' HH:mm", { locale: ptBR })}
              </div>
              <span className={`text-sm font-medium ${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>
            </div>
          </div>
          <button
            onClick={() => removeTask(task.id)}
            className="text-red-500 hover:text-red-700"
          >
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
};