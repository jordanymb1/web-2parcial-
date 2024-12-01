import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MisReservas = () => {
  const [reservas, setReservas] = useState([]);
  const navigate = useNavigate();

  // Cargar las reservas del localStorage cuando se monta el componente
  useEffect(() => {
    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas')) || [];
    setReservas(reservasGuardadas);
  }, []);

  // Función para eliminar una reserva
  const eliminarReserva = (index) => {
    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas')) || [];
    reservasGuardadas.splice(index, 1); // Elimina la reserva seleccionada
    localStorage.setItem('reservas', JSON.stringify(reservasGuardadas));
    setReservas(reservasGuardadas); // Actualiza el estado
  };

  return (
    <div>
      <h2>Mis Reservas</h2>
      {reservas.length > 0 ? (
        <div>
          {reservas.map((reserva, index) => (
            <div key={index} className="reserva">
              <p><strong>Residencia:</strong> {reserva.residencia}</p>
              <p><strong>Habitación:</strong> {reserva.habitacion}</p>
              <p><strong>Precio:</strong> {reserva.precio}</p>
              <button onClick={() => eliminarReserva(index)}>Eliminar Reserva</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No tienes ninguna reserva.</p>
      )}
    </div>
  );
};

export default MisReservas;
