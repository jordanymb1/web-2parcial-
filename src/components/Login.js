import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Lógica de autenticación
    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('loggedInUser', JSON.stringify({ email, role: 'admin' }));
      navigate('/admin');
    } else {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        navigate('/');
      } else {
        alert('Credenciales incorrectas');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Correo:</label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
