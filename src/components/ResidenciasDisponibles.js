// src/components/ResidenciasDisponibles.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ResidenciasDisponibles.css';
import { useReservaciones } from '../context/ReservacionesContext';

const ResidenciasDisponibles = () => {
  const { residencias } = useReservaciones();

  return (
    <div className="residencias-container">
      <h1>Residencias Disponibles</h1>
      <div className="residencias-grid">
        {residencias.map((residencia) => (
          <div key={residencia.id} className="residencia-card">
            <img
              src={residencia.imagen}
              alt={residencia.nombre}
              className="residencia-imagen"
            />
            <h2>{residencia.nombre}</h2>
            <p>Cuartos: {residencia.cuartos}</p>
            <p>Baños: {residencia.banos}</p>
            <p>Precio: {residencia.precio}</p>
            <Link to={`/residencias/${residencia.id}`}>
              <button>Ver más detalles</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidenciasDisponibles;
