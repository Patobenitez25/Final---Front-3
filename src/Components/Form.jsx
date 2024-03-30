import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre.length <= 5 || !validarEmail(formData.email)) {
      setError('Por favor verifique su información nuevamente');
    } else {
      console.log('Datos enviados:', formData);
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        {submitted ? (
          <p>Gracias {formData.nombre}, te contactaremos cuanto antes vía mail.</p>
        ) : (
          <>
            {error && <p>{error}</p>}
            <button type="submit">Enviar</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
