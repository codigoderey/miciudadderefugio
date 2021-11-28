import React, { useState } from 'react';
import baseURL from "../../utils/baseURL";
import axios from 'axios';

const MailChimp = () => {

  const [suscriptor, setSuscriptor] = useState({
    nombre: "",
    correo: ""
  })

  const [errorStatus, setErrorStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const [success, setSuccess] = useState(false);

  const handleFormSuscribirme = async (e) => {
    e.preventDefault();


    try {
      setErrorStatus(false)
      setSuccess(false)

      if (suscriptor.nombre === '' || suscriptor.correo === '') {
        setErrorStatus(true)
        return setErrorMessage('Todos los blancos son requeridos.');
      }


      const url = `${baseURL}/api/mailchimp`;
      const payload = suscriptor;

      setSuscriptor({
        nombre: '',
        correo: '',
      });

      await axios.post(url, payload);

      setSuccess(true);

    } catch (error) {
      console.error(error.response.data.response.text);
      setErrorStatus(true)
      setErrorMessage(error.response.data.response.text && "Verifica que ya estés suscrito o intenta con otro correo electrónico.")
    }
  };

  const handleInputChange = (e) => {
    setSuscriptor({
      ...suscriptor,
      [e.target.name]: e.target.value
    })
  }

  const { nombre, correo } = suscriptor

  return (
    <>
      <form onSubmit={handleFormSuscribirme} className="footer-widget__mc-form mc-form">
        <input
          onChange={handleInputChange}
          type="text"
          name="nombre"
          value={nombre}
          placeholder="Tu nombre"

        />
        <input
          className="mt-2"
          onChange={handleInputChange}
          type="email"
          name="correo"
          value={correo}
          placeholder="Correo electrónico"
        />
        <button type="submit"
          className="thm-btn footer-widget__mc-btn">Regístrate</button>

        {errorStatus &&
          <div className="bg-danger p-3 mt-2">
            <p className="text-white">{errorMessage}</p>
          </div>
        }

        {success &&
          <div className="bg-success text-white p-3 mt-2">Te has suscrito exitosamente</div>
        }
      </form>
      <div className="mc-form__response"></div>
    </>
  )
}

export default MailChimp
