// src/components/DetalleResidencia.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useReservaciones } from '../context/ReservacionesContext';
import './DetalleResidencia.css'; // Estilos específicos para este componente

const DetalleResidencia = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { residencias, reservarHabitacion, carrito } = useReservaciones();

  const residencia = residencias.find((residencia) => residencia.id === parseInt(id));

  if (!residencia) {
    return <p className="detalle-error">Residencia no encontrada.</p>;
  }

  const handleReservar = (habitacionId) => {
    if (carrito.length > 0) {
      alert('Solo puedes reservar una habitación.');
      return;
    }
    reservarHabitacion(residencia.id, habitacionId);
    alert('Habitación reservada exitosamente.');
    navigate('/carrito');
  };

  return (
    <div id={`detalle-residencia-${residencia.id}`} className="detalle-residencia-container">
      <div className="detalle-residencia-header">
        <h1 className="detalle-residencia-nombre">{residencia.nombre}</h1>
        <img
          src={residencia.imagen}
          alt={`Imagen de ${residencia.nombre}`}
          className="detalle-residencia-imagen"
        />
      </div>
      <div className="detalle-residencia-info">
        <p>{residencia.descripcion}</p>
        <p><strong>Cuartos:</strong> {residencia.cuartos}</p>
        <p><strong>Baños:</strong> {residencia.banos}</p>
        <p><strong>Precio:</strong> {residencia.precio}</p>
      </div>
      <div className="detalle-residencia-habitaciones">
        <h2>Habitaciones Disponibles</h2>
        <ul className="detalle-habitaciones-lista">
          {residencia.habitaciones.map((habitacion) => (
            <li
              key={`habitacion-${habitacion.id}`}
              id={`habitacion-${residencia.id}-${habitacion.id}`}
              className="detalle-habitacion-item"
            >
              Habitación {habitacion.id} -{' '}
              <span className={habitacion.disponible ? 'disponible' : 'reservada'}>
                {habitacion.disponible ? 'Disponible' : 'Reservada'}
              </span>
              {habitacion.disponible && (
                <button
                  className="detalle-habitacion-boton"
                  onClick={() => handleReservar(habitacion.id)}
                >
                  Reservar
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetalleResidencia;
