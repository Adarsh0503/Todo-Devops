import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex justify-center">
      <input
        type="text"
        className="p-2 w-1/2 rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter your task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;
