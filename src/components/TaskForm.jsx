import React, { useState } from 'react';
import { useToDo } from '../contexts/ToDoContext';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const { addTask } = useToDo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-gray-200"
      >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task"
          className="flex-1 p-4 rounded-lg bg-white bg-opacity-60 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:from-blue-600 hover:to-blue-800 transform transition-transform hover:scale-105"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
