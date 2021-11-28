import React, { useState, useEffect } from 'react'
import Message from "../Message"
import axios from "axios"
import Spinner from '../Spinner'
import baseURL from '../../utils/baseURL'
import router from 'next/router'

const NuevoEvento = ({ evento }) => {

  const [registrante, setRegistrante] = useState([{
    nombre: "",
    telefono: "",
    correo: "",
    direccionCalle: "",
    direccionCiudad: "",
    direccionEstado: "",
    direccionZipCode: ""
  }])

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e, i) => {
    const values = [...registrante]
    values[i][e.target.name] = e.target.value
    setRegistrante(values)
  }

  const addNewRegistrant = () => {
    setRegistrante(([
      ...registrante,
      {
        nombre: "",
        telefono: "",
        correo: "",
        direccionCalle: "",
        direccionCiudad: "",
        direccionEstado: "",
        direccionZipCode: ""
      }
    ]))
  }

  const removeRegistrantField = (i) => {
    const values = [...registrante]
    values.splice(i, 1)
    setRegistrante(values)
  }

  const handleFormSubmit = async (e) => {

    e.preventDefault()

    try {
      setLoading(true)
      const eventoId = evento._id
      await axios.put(`${baseURL}/api/registro`, { eventoId, registrante })
      router.push("/eventos/registrados/exito")

    } catch (error) {
      console.error(error.response.data)
      setLoading(false)
      setError(error.response.data)
    }
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="footer-widget__mc-form mc-form w-100 m-75"
    >
      {
        registrante.map((r, i) => (
          <div key={i} className="mb-3">
            <div>
              <label className="mb-0" htmlFor="nombre">Nombre del registrante:</label>
              <input
                className="border border-primary"
                onChange={(e) => handleInputChange(e, i)}
                type="text"
                name="nombre"
                placeholder="Nombre del registrante"
                value={r.nombre}
              />
            </div>

            <div className="mb-3">
              <label className="mb-0" htmlFor="telefono">Teléfono:</label>
              <input
                className="border border-primary"
                onChange={(e) => handleInputChange(e, i)}
                type="text"
                name="telefono"
                placeholder="Teléfono del registrante"
                value={r.telefono}
              />
            </div>

            <div className="mb-3">
              <label className="mb-0" htmlFor="telefono">Correo:</label>
              <input
                className="border border-primary"
                onChange={(e) => handleInputChange(e, i)}
                type="correo-electronico"
                name="correo"
                placeholder="Correo electronico del registrante"
                value={r.correo}
              />
            </div>

            <div className="border rounded p-3">
              <div className="mb-3">
                <label className="mb-0" htmlFor="direccionCalle">Calle:</label>
                <input
                  className="border border-primary"
                  onChange={(e) => handleInputChange(e, i)}
                  type="text"
                  name="direccionCalle"
                  placeholder="Dirección donde vive"
                  value={r.direccionCalle}
                />
              </div>

              <div className="mb-3">
                <label className="mb-0" htmlFor="direccionCiudad">Ciudad:</label>
                <input
                  className="border border-primary"
                  onChange={(e) => handleInputChange(e, i)}
                  type="text"
                  name="direccionCiudad"
                  placeholder="Ciudad donde vive"
                  value={r.direccionCiudad}
                />
              </div>

              <div className="mb-3">
                <label className="mb-0" htmlFor="direccionEstado">Estado:</label>
                <input
                  className="border border-primary"
                  onChange={(e) => handleInputChange(e, i)}
                  type="text"
                  name="direccionEstado"
                  placeholder="Estado donde vive"
                  value={r.direccionEstado}
                />
              </div>

              <div className="mb-3">
                <label className="mb-0" htmlFor="direccionZipCode">Zip Code:</label>
                <input
                  className="border border-primary"
                  onChange={(e) => handleInputChange(e, i)}
                  type="text"
                  name="direccionZipCode"
                  placeholder="Zip Code"
                  value={r.direccionZipCode}
                />
              </div>
            </div>
            <div onClick={() => addNewRegistrant()} className="btn btn-success mt-2 mb-3 mr-2">
              <i className="fas fa-plus mr-1"></i>
              Añadir otro participante.
            </div>
            <div onClick={() => removeRegistrantField(i)} className="btn btn-danger mt-2 mb-3">
              <i className="fas fa-minus mr-1"></i>
              Remover
            </div>
          </div>
        ))
      }

      {
        error
          ? (<Message
            styleClass="alert alert-danger"
            textMessage={error}
          />)
          : (null)
      }
      {
        success
          ? (<Message
            styleClass="alert alert-success"
            textMessage="Registro exitoso, serás redirigido al panel administrativo."
          />)
          : (null)
      }
      <div>
        {
          loading
            ? (<button className="disabled thm-btn cta-three__btn text-align-center" type="submit"><Spinner /></button>)
            : (<button className="thm-btn cta-three__btn text-align-center" type="submit">Registrar</button>)
        }
      </div>
      <div className="alert-warning p-3 rounded mt-2"><strong>Aviso:</strong> Si no recibes el correo electronico de confirmacion, verifica tu carpeta de spam.</div>
    </form >
  )
}

export default NuevoEvento
