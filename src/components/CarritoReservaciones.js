// En CarritoReservaciones.js
import React, { useState } from 'react';
import { useReservaciones } from '../context/ReservacionesContext'; // Asegúrate de tener este contexto
import { useNavigate } from 'react-router-dom';

const CarritoReservaciones = () => {
  const { carrito, cancelarReserva, procederPago } = useReservaciones();
  const [datosPago, setDatosPago] = useState({
    nombre: '',
    tarjeta: '',
    fechaVencimiento: '',
    cvv: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatosPago((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePago = (e) => {
    e.preventDefault();
  
    if (carrito.length === 0) {
      alert('No tienes ninguna habitación en el carrito.');
      return;
    }
  
    procederPago(datosPago);
  
    const reserva = {
      residencia: carrito[0].nombreResidencia,
      habitacion: carrito[0].nombreHabitacion,
      precio: carrito[0].precio,
      usuario: JSON.parse(localStorage.getItem('loggedInUser')),
    };
  
    // Obtener las reservas actuales desde el localStorage
    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas')) || [];
    
    // Agregar la nueva reserva al array de reservas
    reservasGuardadas.push(reserva);
    
    // Guardar el array actualizado de reservas en el localStorage
    localStorage.setItem('reservas', JSON.stringify(reservasGuardadas));
  
    navigate('/');
  };
  

  return (
    <div>
      <h2>Carrito de Reservación</h2>
      {carrito.length > 0 ? (
        <div>
          <h3>Detalles de la reservación:</h3>
          <p>Residencia: {carrito[0].nombreResidencia}</p>
          <p>Habitación: {carrito[0].nombreHabitacion}</p>
          <p>Precio: {carrito[0].precio}</p>

          <button onClick={cancelarReserva}>Cancelar Reservación</button>

          <h3>Formulario de Pago</h3>
          <form onSubmit={handlePago}>
            <div>
              <label>Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={datosPago.nombre}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Número de tarjeta</label>
              <input
                type="text"
                name="tarjeta"
                value={datosPago.tarjeta}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Fecha de vencimiento</label>
              <input
                type="month"
                name="fechaVencimiento"
                value={datosPago.fechaVencimiento}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={datosPago.cvv}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Proceder al Pago</button>
          </form>
        </div>
      ) : (
        <p>No tienes ninguna reservación en tu carrito.</p>
      )}
    </div>
  );
};

export default CarritoReservaciones;  // Asegúrate de que el componente se exporte correctamente.
