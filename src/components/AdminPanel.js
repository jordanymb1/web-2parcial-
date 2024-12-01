import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [reservas, setReservas] = useState([]);
  const navigate = useNavigate();

  // Verificar si el usuario logueado es admin
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!user || user.role !== 'admin') {
      navigate('/login'); // Si no es admin, redirigir a login
    }

    // Cargar usuarios y reservas
    const usuariosGuardados = JSON.parse(localStorage.getItem('users')) || [];
    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas')) || [];

    setUsuarios(usuariosGuardados);
    setReservas(reservasGuardadas);
  }, [navigate]);

  // Función para eliminar un usuario
  const eliminarUsuario = (index) => {
    const usuariosGuardados = JSON.parse(localStorage.getItem('users')) || [];
    usuariosGuardados.splice(index, 1); // Eliminar usuario
    localStorage.setItem('users', JSON.stringify(usuariosGuardados));
    setUsuarios(usuariosGuardados); // Actualizar la lista
  };

  // Función para eliminar una reserva
  const eliminarReserva = (index) => {
    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas')) || [];
    reservasGuardadas.splice(index, 1); // Eliminar reserva
    localStorage.setItem('reservas', JSON.stringify(reservasGuardadas));
    setReservas(reservasGuardadas); // Actualizar la lista
  };

  return (
    <div id="admin-panel-container">
      <h2 className="admin-panel-title">Panel de Administración</h2>
      
      <section id="usuarios-section">
        <h3 className="admin-section-title">Usuarios Registrados</h3>
        {usuarios.length > 0 ? (
          <ul className="admin-list usuarios-list">
            {usuarios.map((usuario, index) => (
              <li key={index} className="admin-list-item usuario-item">
                {usuario.nombreCompleto} ({usuario.email})
                <button
                  className="admin-action-button eliminar-usuario-btn"
                  onClick={() => eliminarUsuario(index)}
                >
                  Eliminar Usuario
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="admin-empty-message">No hay usuarios registrados.</p>
        )}
      </section>

      <section id="reservas-section">
        <h3 className="admin-section-title">Reservas de los Estudiantes</h3>
        {reservas.length > 0 ? (
          <ul className="admin-list reservas-list">
            {reservas.map((reserva, index) => (
              <li key={index} className="admin-list-item reserva-item">
                <strong>Residencia:</strong> {reserva.residencia} - <strong>Habitación:</strong> {reserva.habitacion}
                <button
                  className="admin-action-button eliminar-reserva-btn"
                  onClick={() => eliminarReserva(index)}
                >
                  Eliminar Reserva
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="admin-empty-message">No hay reservas registradas.</p>
        )}
      </section>
    </div>
  );
};

export default AdminPanel;