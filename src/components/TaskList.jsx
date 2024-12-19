import React, { useState } from 'react';
import { useToDo } from '../contexts/ToDoContext';
import { FiEdit, FiTrash2, FiCheckCircle } from 'react-icons/fi';

const TaskList = () => {
  const { tasks, deleteTask, toggleComplete, updateTask } = useToDo();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleUpdate = (id) => {
    updateTask(id, editText);
    setEditId(null);
    setEditText('');
  };

  return (
    <div className="mt-10 bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-gray-200">
      <table className="table-auto w-full rounded-lg overflow-hidden">
        <thead className="bg-white bg-opacity-40 text-gray-700">
          <tr>
            <th className="text-left px-6 py-4 font-semibold text-lg">Task</th>
            <th className="text-left px-6 py-4 font-semibold text-lg">Status</th>
            <th className="text-left px-6 py-4 font-semibold text-lg">Actions</th>
            <th className="text-left px-6 py-4 font-semibold text-lg">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(({ id, text, completed, timestamp }) => (
            <tr
              key={id}
              className="border-b border-gray-300 hover:bg-white hover:bg-opacity-40 transition-colors"
            >
              <td className="px-6 py-4 text-gray-800 text-base break-words">
                {editId === id ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 text-base"
                  />
                ) : (
                  <span
                    className={`font-medium ${
                      completed ? 'line-through text-gray-400' : 'text-gray-800'
                    }`}
                  >
                    {text}
                  </span>
                )}
              </td>
              <td className="px-6 py-4 text-base">
                <button
                  onClick={() => toggleComplete(id)}
                  className={`h-8 w-8 flex justify-center items-center rounded-full transition-transform hover:scale-110 ${
                    completed
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  <FiCheckCircle size={18} />
                </button>
              </td>
              <td className="px-6 py-4 flex gap-3 text-base">
                {editId === id ? (
                  <button
                    onClick={() => handleUpdate(id)}
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    <FiCheckCircle size={18} className="mr-2" /> Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(id, text)}
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    <FiEdit size={18} className="mr-2" />
                  </button>
                )}
                <button
                  onClick={() => deleteTask(id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FiTrash2 size={18} className="mr-2" />
                </button>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
