import { createContext, useContext, useState } from 'react';

const ToDoContext = createContext();

export const useToDo = () => useContext(ToDoContext);

export const ToDoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const timestamp = new Date().toLocaleString(); // Generate timestamp
    setTasks([
      ...tasks,
      { id: Date.now(), text: task, completed: false, timestamp },
    ]);
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const updateTask = (id, newText) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  const toggleComplete = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  return (
    <ToDoContext.Provider
      value={{ tasks, addTask, deleteTask, updateTask, toggleComplete }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
