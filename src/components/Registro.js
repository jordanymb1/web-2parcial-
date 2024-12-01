import React, { useState } from 'react';
import formFields from './formfield.json';
import './Registro.css';

function Registro() {
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener usuarios guardados previamente desde localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Asegurarse de que los campos no sean undefined antes de aplicar trim()
    const nombreCompleto = formData.nombreCompleto ? formData.nombreCompleto.trim() : '';
    const numeroIdentificacion = formData.numeroIdentificacion ? formData.numeroIdentificacion.trim() : '';
    const correoInstitucional = formData.correoInstitucional ? formData.correoInstitucional.trim() : '';
    const telefonoContacto = formData.telefonoContacto ? formData.telefonoContacto.trim() : '';
    const fechaNacimiento = formData.fechaNacimiento ? formData.fechaNacimiento.trim() : '';
    const carrera = formData.carrera ? formData.carrera.trim() : '';
    const contrasena = formData.contrasena ? formData.contrasena.trim() : '';
    const preferenciaHabitacion = formData.preferenciaHabitacion ? formData.preferenciaHabitacion.trim() : '';

    // Verificar si el número de identificación ya está registrado
    const existingUser = storedUsers.find(
      (user) => user.numeroIdentificacion.trim() === numeroIdentificacion
    );

    if (existingUser) {
      alert('Este número de identificación ya está registrado.');
      return;
    }

    // Guardar el nuevo usuario
    const newUser = {
      nombreCompleto,
      numeroIdentificacion,
      correoInstitucional,
      telefonoContacto,
      fechaNacimiento,
      carrera,
      contrasena,
      preferenciaHabitacion,
    };

    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    alert('Usuario registrado exitosamente.');

    // Reiniciar formulario
    setFormData(
      formFields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
      }, {})
    );
  };

  return (
    <div className="registro-container">
      <div className="registro-card">
        <h1>Formulario de Registro</h1>
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div key={field.id}>
              <label>{field.label}</label>
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                />
              )}
            </div>
          ))}
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
