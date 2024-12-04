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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validar el campo en tiempo real
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';

    // Validaciones específicas por campo
    switch (name) {
      case 'nombreCompleto':
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'El nombre solo debe contener letras y espacios.';
        }
        break;
      case 'numeroIdentificacion':
        if (!/^\d+$/.test(value)) {
          error = 'El número de identificación solo debe contener números.';
        } else if (value.length < 10 || value.length > 13) {
          error = 'El número de identificación debe tener entre 10 y 13 dígitos.';
        }
        break;
      case 'correoInstitucional':
        if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        ) {
          error = 'El correo electrónico no tiene un formato válido.';
        }
        break;
      case 'telefonoContacto':
        if (!/^\d{10}$/.test(value)) {
          error = 'El número de teléfono debe tener 10 dígitos.';
        }
        break;
      case 'fechaNacimiento':
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          error = 'La fecha debe estar en formato AAAA-MM-DD.';
        }
        break;
      case 'contrasena':
        if (value.length < 6) {
          error = 'La contraseña debe tener al menos 6 caracteres.';
        }
        break;
      case 'preferenciaHabitacion':
        if (!value) {
          error = 'Debe seleccionar una preferencia de habitación.';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    formFields.forEach((field) => {
      const value = formData[field.name];
      validateField(field.name, value);
      if (!value.trim()) {
        newErrors[field.name] = 'Este campo es obligatorio.';
      }
    });
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Por favor corrige los errores en el formulario.');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = storedUsers.find(
      (user) => user.numeroIdentificacion.trim() === formData.numeroIdentificacion.trim()
    );

    if (existingUser) {
      alert('Este número de identificación ya está registrado.');
      return;
    }

    const newUser = { ...formData };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    alert('Usuario registrado exitosamente.');

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
            <div key={field.id} className="form-group">
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
              {errors[field.name] && (
                <span className="error-message">{errors[field.name]}</span>
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
