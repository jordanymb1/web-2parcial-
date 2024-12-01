import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentPanel.css'; // Asegúrate de incluir la hoja de estilo CSS

const StudentPanel = () => {
  const navigate = useNavigate();
  const [reserva, setReserva] = useState(null); // Estado para almacenar la reserva de la habitación
  
  // Verifica el usuario logueado en localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    if (!loggedInUser) {
      // Redirige si no hay usuario logueado
      console.log("Usuario no logueado, redirigiendo a login...");
      navigate('/login');
    } else {
      // Obtén la información de la reserva del localStorage
      const reservaHabitacion = JSON.parse(localStorage.getItem('reservaHabitacion'));
      if (reservaHabitacion) {
        setReserva(reservaHabitacion); // Establece la reserva en el estado si existe
      }
    }
  }, [loggedInUser, navigate]);

  // Si no hay usuario logueado, no mostrar el panel
  if (!loggedInUser) {
    return null; // O puedes mostrar un mensaje de carga mientras redirige
  }

  return (
    <div className="student-panel" id="student-panel">
      <h1 id="welcome-message">Bienvenido, {loggedInUser.nombreCompleto}</h1>
      <div className="student-info" id="student-info">
        <p><strong>Correo:</strong> <span id="student-email">{loggedInUser.correoInstitucional}</span></p>
        <p><strong>Fecha de Nacimiento:</strong> <span id="student-birthdate">{loggedInUser.fechaNacimiento}</span></p>
        <p><strong>Carrera:</strong> <span id="student-career">{loggedInUser.carrera}</span></p>
        <p><strong>Teléfono de Contacto:</strong> <span id="student-phone">{loggedInUser.telefonoContacto}</span></p>
        <p><strong>Preferencia de Habitación:</strong> <span id="student-room-preference">{loggedInUser.preferenciaHabitacion || 'No especificado'}</span></p>
        
        {/* Mostrar la reserva si existe */}
        {reserva ? (
          <>
            <p><strong>Residencia:</strong> <span id="student-residence">{reserva.residencia}</span></p>
            <p><strong>Habitación Reservada:</strong> <span id="student-room">{reserva.habitacion}</span></p>
          </>
        ) : (
          <p><strong>No tienes una reserva aún.</strong></p> // Mensaje si no hay reserva
        )}
      </div>
    </div>
  );
};

export default StudentPanel;
