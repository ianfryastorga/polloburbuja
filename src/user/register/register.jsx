import Layout from '../../layout.jsx'
import './register.css'
import React, { useState } from 'react';
import axios from 'axios';


function Register() {
  
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    acceptTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },

      });

      if (response.status === 200) {
        console.log('Respuesta del servidor:', response.data);
        // Handle success here
      } else {
        console.error('Error al registrar el usuario:', response.status);
        // Handle errors here
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <Layout>
      
      <div className='register_container'>
        <form onSubmit={handleSubmit}>

        <h3>Ingrese su nombre:</h3>
          <input
            type='text'
            name='name'
            placeholder='Nombre'
            className='input_register_nombre'
            value={formData.name}
            onChange={handleChange}
          />

          <h3>Ingrese su apellido:</h3>
          <input
            type='text'
            name='lastname'
            placeholder='Apellido'
            className='input_register_apellido'
            value={formData.lastname}
            onChange={handleChange}
          />
          
          <h3>Ingrese su correo electrónico:</h3>
          <input
            type='text'
            name='email'
            placeholder='Correo Electrónico'
            className='input_register_correo'
            value={formData.email}
            onChange={handleChange}
          />

          <h3>Ingrese su contraseña:</h3>
          <input
            type='password'
            name='password'
            placeholder='Contraseña'
            className='input_register_contraseña'
            value={formData.password}
            onChange={handleChange}
          />
          
          <label for="miCheckpoint">Acepto los términos y condiciones:</label>
          <input
            type='checkbox'
            id='acceptTerms'
            name='acceptTerms'
            value='check'
            checked={formData.acceptTerms}
            onChange={handleChange}
          />
          
          <button type = "submit" className='boton_register'>
            Registrarse
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Register;