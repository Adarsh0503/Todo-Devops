import React, { useState } from 'react';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import AuthForm from './components/AuthForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Assuming you'll use some auth logic here
  
  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleAuth = (credentials) => {
    // Handle login/signup logic with your backend
    setIsAuthenticated(true); // Temporary; update based on authentication status
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main className="p-8">
        {!isAuthenticated ? (
          <AuthForm type="login" handleSubmit={handleAuth} />
        
        ) : (
          <>
            <ToDoForm addTask={addTask} />
            <ToDoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
