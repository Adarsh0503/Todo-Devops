import React, { useState } from 'react';

const AuthForm = ({ type, handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Added for registration

  const submitForm = (e) => {
    e.preventDefault();
    if (type === 'signup') {
      handleSubmit({ name, email, password }); // Include name for signup
    } else {
      handleSubmit({ email, password }); // Login doesn't need name
    }
  };

  return (
    <form onSubmit={submitForm} className="mt-8 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">{type === 'login' ? 'Login' : 'Sign Up'}</h2>
      
      {type === 'signup' && ( // Show name field only for signup
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
      
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </button>
    </form>
  );
};

export default AuthForm;
