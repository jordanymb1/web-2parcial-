import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [correoInstitucional, setCorreoInstitucional] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Lógica de autenticación
    if (correoInstitucional === 'admin@gmail.com' && contrasena === 'admin123') {
      localStorage.setItem('loggedInUser', JSON.stringify({ correoInstitucional, role: 'admin' }));
      navigate('/admin');
    } else {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      // Buscar usuario con el correo y contraseña registrados
      const user = users.find(
        (user) => user.correoInstitucional === correoInstitucional && user.contrasena === contrasena
      );
      
      if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        navigate('/'); // Redirigir a la página principal o a donde desees
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
            <label htmlFor="correoInstitucional">Correo:</label>
            <input
              type="email"
              id="correoInstitucional"
              className="input-field"
              value={correoInstitucional}
              onChange={(e) => setCorreoInstitucional(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              className="input-field"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
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
