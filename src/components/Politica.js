import React, { useRef } from 'react';
import './Politica.css';

const Politica = () => {
  // Creamos referencias para las secciones
  const introduccionRef = useRef(null);
  const reglasRef = useRef(null);
  const horariosRef = useRef(null);
  const responsabilidadesRef = useRef(null);
  const sancionesRef = useRef(null);

  // Función para desplazar a la sección deseada
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="politica-container">
      <div className="politica-sidebar">
        <h2>Política de Residencia</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <button className="nav-link" onClick={() => scrollToSection(introduccionRef)}>Introducción</button>
          </li>
          <li className="list-group-item">
            <button className="nav-link" onClick={() => scrollToSection(reglasRef)}>Reglas y Normas</button>
          </li>
          <li className="list-group-item">
            <button className="nav-link" onClick={() => scrollToSection(horariosRef)}>Horarios y Accesos</button>
          </li>
          <li className="list-group-item">
            <button className="nav-link" onClick={() => scrollToSection(responsabilidadesRef)}>Responsabilidades del Estudiante</button>
          </li>
          <li className="list-group-item">
            <button className="nav-link" onClick={() => scrollToSection(sancionesRef)}>Sanciones</button>
          </li>
        </ul>
      </div>

      <div className="politica-content">
        <section ref={introduccionRef} id="introduccion" className="content-section">
          <h3>Introducción</h3>
          <p>
            La residencia universitaria tiene como objetivo proporcionar un ambiente seguro, ordenado y propicio para el aprendizaje y desarrollo integral de los estudiantes. A través de esta política, se buscan establecer las reglas y responsabilidades que todos los residentes deben seguir.
          </p>
        </section>

        <section ref={reglasRef} id="reglas" className="content-section">
          <h3>Reglas y Normas</h3>
          <p>
            <strong>1.</strong> El respeto mutuo entre los residentes es fundamental. Cualquier comportamiento que altere la convivencia será sancionado.
            <br />
            <strong>2.</strong> No está permitido el consumo de alcohol o drogas dentro de las instalaciones.
            <br />
            <strong>3.</strong> Se deben mantener las áreas comunes limpias y ordenadas en todo momento.
            <br />
            <strong>4.</strong> El uso de los servicios de la residencia está limitado al horario establecido.
          </p>
        </section>

        <section ref={horariosRef} id="horarios" className="content-section">
          <h3>Horarios y Accesos</h3>
          <p>
            La residencia tiene un horario de entrada y salida de lunes a viernes de 6:00 AM a 10:00 PM. Fuera de este horario, los residentes deben solicitar una excepción con al menos 24 horas de anticipación.
          </p>
        </section>

        <section ref={responsabilidadesRef} id="responsabilidades" className="content-section">
          <h3>Responsabilidades del Estudiante</h3>
          <p>
            Los residentes deben mantener sus habitaciones en buen estado, colaborar con las actividades organizadas por la residencia, y respetar las normativas establecidas. Además, cada estudiante es responsable de la seguridad de sus pertenencias.
          </p>
        </section>

        <section ref={sancionesRef} id="sanctions" className="content-section">
          <h3>Sanciones</h3>
          <p>
            El incumplimiento de las reglas podrá conllevar sanciones que van desde amonestaciones hasta la expulsión de la residencia. Las sanciones serán evaluadas dependiendo de la gravedad de la infracción.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Politica;
