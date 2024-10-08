import React from 'react';

const ToDoList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <div className="mt-8 flex justify-center">
      <ul className="w-1/2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-4 mb-4 bg-gray-100 rounded-lg transition-all duration-300 ease-in-out ${task.completed ? 'line-through text-green-500' : ''}`}
          >
            {task.text}
            <div>
              <button
                onClick={() => completeTask(index)}
                className="px-4 py-2 mr-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Complete
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
