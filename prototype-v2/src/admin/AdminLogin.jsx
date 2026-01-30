/**
 * AdminLogin Component
 * Simple password authentication for admin panel
 */

import { useState } from 'react';
import './AdminLogin.css';

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }
    onLogin(password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Admin Panel</h1>
        <p className="login-subtitle">2027 Award Application - Content Management</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="password">Admin Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Enter admin password"
              autoFocus
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="btn-login">
            Sign In
          </button>
        </form>

        <p className="login-help">
          Contact the administrator if you don't have the password.
        </p>
      </div>
    </div>
  );
}
