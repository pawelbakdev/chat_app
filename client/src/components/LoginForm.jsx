import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

function LoginForm() {
  const [username, setUsername] = useState('');
  const auth = useAuth();

  async function handleLogin(event) {
    event.preventDefault();

    if (username.trim() === '') {
      alert('Username is required');
      return;
    }

    try {
      await auth.signin(username);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
