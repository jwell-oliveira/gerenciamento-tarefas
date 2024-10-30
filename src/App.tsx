import React from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Gerenciador de Tarefas
        </h1>
        <div className="space-y-8">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;