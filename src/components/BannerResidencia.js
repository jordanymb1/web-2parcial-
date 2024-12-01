import React from "react";
import "./BannerResidencia.css"; // Archivo CSS relacionado

const BannerResidencia = () => {
  return (
    <div>
      <section className="banner-section" id="banner">
        <h1 className="banner-title">
          Bienvenidos a la Residencia Universitaria ULEAM
        </h1>
        <p className="banner-text">
          Ofrecemos alojamiento confortable con todas las comodidades necesarias para estudiantes de la Universidad Laica Eloy Alfaro de Manabí.
        </p>
      </section>

      <section className="content-section" id="general-info">
        <h2 className="content-title">Información General</h2>
        <div className="services-container">
          <div className="service-item" id="rooms-info">
            <h3 className="service-title">Habitaciones Disponibles</h3>
            <p className="service-text">
              Contamos con 120 habitaciones disponibles, equipadas con mobiliario moderno y acceso a internet.
            </p>
          </div>
          <div className="service-item" id="services-info">
            <h3 className="service-title">Servicios</h3>
            <p className="service-text">
              Ofrecemos servicios de limpieza, lavandería, y áreas comunes para estudio y recreación.
            </p>
          </div>
          <div className="service-item" id="contact-info">
            <h3 className="service-title">Contacto</h3>
            <p className="service-text">
              Para más información, contacta con la administración: <br />
              <strong>Email:</strong> admin@uleam.edu.ec <br />
              <strong>Teléfono:</strong> 0987654321
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerResidencia;
