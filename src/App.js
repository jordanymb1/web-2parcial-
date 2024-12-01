// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ReservacionesProvider } from './context/ReservacionesContext';

import Header from './components/Header';
import Registro from './components/Registro';
import Login from './components/Login';
import BannerResidencia from './components/BannerResidencia';
import Carousel from './components/Carousel';
import StudentPanel from './components/StudentPanel';
import Politica from './components/Politica';
import Footer from './components/Footer';
import ResidenciasDisponibles from './components/ResidenciasDisponibles';
import DetalleResidencia from './components/DetalleResidencia';
import CarritoReservaciones from './components/CarritoReservaciones';
import NotFound from './components/NotFound';
import MisReservas from './components/MisReservas';
import AdminPanel from './components/AdminPanel';

const App = () => {
  return (
    <ReservacionesProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <BannerResidencia />
                <Carousel />
                <StudentPanel />
              </>
            } />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/student-panel" element={<StudentPanel />} />
            <Route path="/politica" element={<Politica />} />
            <Route path="/residencias" element={<ResidenciasDisponibles />} />
            <Route path="/residencias/:id" element={<DetalleResidencia />} />
            <Route path="/carrito" element={<CarritoReservaciones />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/mis-reservas" element={<MisReservas />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ReservacionesProvider>
  );
};

export default App;
