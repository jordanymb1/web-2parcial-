import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [carritoCount, setCarritoCount] = useState(0); // Estado para contar las reservaciones en el carrito
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si el usuario está logueado
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      setLoggedInUser(user);
    }

    // Leer el carrito desde localStorage al cargar el componente
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarritoCount(carrito.length); // Actualizar el número de elementos en el carrito
  }, []); // Este useEffect solo se ejecuta cuando el componente se carga

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    // Obtener el carrito desde localStorage o inicializarlo como un array vacío
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agregar el producto al carrito
    carrito.push(producto);

    // Actualizar el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador de elementos en el carrito
    setCarritoCount(carrito.length);
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (productoId) => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Filtrar el carrito para eliminar el producto con el id correspondiente
    carrito = carrito.filter((producto) => producto.id !== productoId);

    // Actualizar el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar el contador de elementos en el carrito
    setCarritoCount(carrito.length);
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');  // Eliminar al usuario del localStorage
    setLoggedInUser(null); // Limpiar el estado
    navigate('/login');  // Redirigir a la página de login
  };

  return (
    <header className="header-container">
      <div className="header-logo">
        <h2>Residencia ULEAM</h2>
      </div>
      <nav className="header-nav">
        <Link to="/" className="header-link">Inicio</Link>

        {/* Mostrar el enlace de registro solo si no está logueado */}
        {!loggedInUser && (
          <Link to="/registro" className="header-link">Registro</Link>
        )}

        {/* Mostrar el enlace de login solo si no está logueado */}
        {!loggedInUser && (
          <Link to="/login" className="header-link">Iniciar Sesión</Link>
        )}

        {/* Si el usuario está logueado, mostrar su nombre y un botón para cerrar sesión */}
        {loggedInUser && (
  <>
    <span className="header-link">Hola, {loggedInUser.nombreCompleto}</span>
    <button className="header-link" onClick={handleLogout}>Cerrar Sesión</button>
    <Link to="/student-panel" className="header-link">Panel Estudiantil</Link>
    <Link to="/residencias" className="header-link">Residencias Disponibles</Link>
    <Link to="/mis-reservas" className="header-link">Mis Reservas</Link> {/* Enlace a Mis Reservas */}
    <Link to="/carrito" className="header-link">carrito</Link>
  </>
)}

        {/* Enlace a la política de residencia */}
        <Link to="/politica" className="header-link">Política de Residencia</Link>

        {/* Enlace al carrito de reservaciones, solo si el carrito tiene elementos */}
        {carritoCount > 0 && (
          <Link to="/carrito" className="header-link">
            <button>Carrito ({carritoCount})</button> {/* Muestra la cantidad de elementos */}
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
