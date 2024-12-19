// src/App.jsx
import React from 'react';
import { ToDoProvider } from './contexts/ToDoContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => (
  <ToDoProvider>
    <div
      className="min-h-screen bg-gradient-to-br from-black via-white-400 to-black flex items-center justify-center px-4"
    >
      <div className="max-w-3xl w-full p-10 bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl shadow-2xl text-gray-900">
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </div>
  </ToDoProvider>
);

export default App;
