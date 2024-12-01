import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // Verificar si el usuario está logueado
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <div>
      {loggedInUser ? (
        <div>
          <h1>Bienvenido, {loggedInUser.nombreCompleto}</h1>
          <p>Tu correo: {loggedInUser.correoInstitucional}</p>
          <button onClick={() => navigate('/student-panel')}>Ir a mi panel</button>
        </div>
      ) : (
        <div>
          <h1>Por favor, inicia sesión</h1>
          <button onClick={() => navigate('/login')}>Ir a Iniciar sesión</button>
        </div>
      )}
    </div>
  );
}

export default Home;
