// src/context/ReservacionesContext.js
import React, { createContext, useContext, useState } from 'react';

const ReservacionesContext = createContext();

export const useReservaciones = () => useContext(ReservacionesContext);

export const ReservacionesProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [residencias, setResidencias] = useState([
    {
      id: 1,
      nombre: 'Residencia A',
      cuartos: 3,
      banos: 2,
      precio: '$300 / mes',
      imagen: '/media/residencia1.png', 
      habitaciones: [
        { id: 1, nombre: 'Habitación 101', disponible: true },
        { id: 2, nombre: 'Habitación 102', disponible: true },
        { id: 3, nombre: 'Habitación 103', disponible: true },
      ],
      descripcion: 'Residencia moderna con espacios amplios y vistas al mar.',
    },
    {
      id: 2,
      nombre: 'Residencia B',
      cuartos: 2,
      banos: 1,
      precio: '$250 / mes',
      imagen: '/media/residencia2.jpg',
      habitaciones: [
        { id: 1, nombre: 'Habitación 201', disponible: true },
        { id: 2, nombre: 'Habitación 202', disponible: true },
      ],
      descripcion: 'Residencia económica cerca de la universidad.',
    },
    {
      id: 3,
      nombre: 'Residencia C',
      cuartos: 4,
      banos: 3,
      precio: '$400 / mes',
      imagen: '/media/residencia3.jpg',
      habitaciones: [
        { id: 1, nombre: 'Habitación 301', disponible: true },
        { id: 2, nombre: 'Habitación 302', disponible: true },
        { id: 3, nombre: 'Habitación 303', disponible: true },
        { id: 4, nombre: 'Habitación 304', disponible: true },
      ],
      descripcion: 'Residencia premium con todos los servicios incluidos.',
    },
    {
      id: 4,
      nombre: 'Residencia D',
      cuartos: 5,
      banos: 4,
      precio: '$500 / mes',
      imagen: '/media/residencia4.jpeg',
      habitaciones: [
        { id: 1, nombre: 'Habitación 401', disponible: true },
        { id: 2, nombre: 'Habitación 402', disponible: true },
        { id: 3, nombre: 'Habitación 403', disponible: true },
        { id: 4, nombre: 'Habitación 404', disponible: true },
        { id: 5, nombre: 'Habitación 405', disponible: true },
      ],
      descripcion: 'Residencia de lujo con amplias instalaciones y zonas comunes.',
    },
  ]);

  return (
    <ReservacionesContext.Provider value={{ residencias, carrito }}>
      {children}
    </ReservacionesContext.Provider>
  );
};
