import React, { useState, useEffect } from 'react'
import Message from "../Message"
import axios from "axios"
import Spinner from '../Spinner'
import baseURL from '../../utils/baseURL'
import router from 'next/router'

const NuevoEvento = ({ user }) => {

  useEffect(() => {
    if (user && user.role === "lider") {

    } else {
      router.push("/admin")
    }
  }, [user])

  const [fechasYHorasDelEvento, setFechaYHorasDelEvento] = useState([
    {
      fecha: "",
      hora: ""
    }
  ])

  const [evento, setEvento] = useState({
    nombreDelEvento: "",
    organizadoPor: "",
    lugar: "Iglesia Ciudad de Refugio",
    descripcionDelEvento: "",
    direccionCalle: "649 Old Mill Rd",
    direccionCiudad: "Millersville",
    direccionEstado: "MD",
    direccionZipCode: "21108",
    cantidadDisponible: 80,
    imageUrl: ""
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setEvento({
      ...evento,
      [e.target.name]: e.target.value
    })
  }

  const handleFechaHora = (e, i) => {
    const values = [...fechasYHorasDelEvento]
    values[i][e.target.name] = e.target.value
    setFechaYHorasDelEvento(values)
    console.log(values)
  }

  const createNuevoDiaHora = () => {
    setFechaYHorasDelEvento(([
      ...fechasYHorasDelEvento,
      {
        fecha: "",
        hora: ""
      }
    ]))
  }

  const removeRegistrantField = (i) => {
    const values = [...fechasYHorasDelEvento]
    values.splice(i, 1)
    setFechaYHorasDelEvento(values)
  }

  const handleFormSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    const { nombreDelEvento,
      organizadoPor,
      lugar,
      descripcionDelEvento,
      direccionCalle,
      direccionCiudad,
      direccionEstado,
      direccionZipCode,
      cantidadDisponible,
      imageUrl } = evento

    try {
      const nuevoEvento = {
        nombreDelEvento,
        organizadoPor,
        lugar,
        descripcionDelEvento,
        direccionCalle,
        direccionCiudad,
        direccionEstado,
        direccionZipCode,
        cantidadDisponible,
        imageUrl,
        fechasYHorasDelEvento: fechasYHorasDelEvento
      }

      await axios.post(`${baseURL}/api/eventos`, nuevoEvento)
      router.push("/eventos")

    } catch (error) {
      console.error(error.response.data)
      setLoading(false)
      setError(error.response.data)
    }
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="footer-widget__mc-form mc-form"
    >
      <div className="mt-2 mb-3">
        <div >
          <label className="mb-0" htmlFor="organizadoPor">Ministerio que organiza el evento</label>
        </div>
        <select
          className="mt-0 w-100 rounded p-2 text-center"
          onChange={handleInputChange}
          type="select"
          name="organizadoPor"
          value={evento.organizadoPor}
          required
        >
          <option value="" defaultChecked>Elige el ministerio que organiza el evento</option>
          <option value="niños">Niños</option>
          <option value="jóvenes y juveniles">Juveniles & Jóvenes</option>
          <option value="damas">Damas</option>
          <option value="caballeros">Caballeros</option>
          <option value="familia">Familia</option>
          <option value="danza">Danza</option>
          <option value="alabanza y adoración">Alabanza & Adoración</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="mb-0" htmlFor="nombreDelEvento">Nombre del evento:</label>
        <input
          className="border border-primary"
          onChange={handleInputChange}
          type="text"
          name="nombreDelEvento"
          placeholder="Nombre del evento"
          value={evento.nombreDelEvento}
        />
      </div>

      <div className="mb-3">
        <label className="mb-0" htmlFor="lugar">Iglesia o nombre del local:</label>
        <input
          className="border border-primary"
          onChange={handleInputChange}
          type="text"
          name="lugar"
          placeholder="Lugar del evento"
          value={evento.lugar}
        />
      </div>

      <div className="mb-3">
        <label className="mb-0" htmlFor="direccionCalle">Calle:</label>
        <input
          className="border border-primary"
          onChange={handleInputChange}
          type="text"
          name="direccionCalle"
          placeholder="Dirección del evento"
          value={evento.direccionCalle}
        />
      </div>

      <div className="mb-3">
        <label className="mb-0" htmlFor="direccionCiudad">Ciudad:</label>
        <input
          className="border border-primary"
          onChange={handleInputChange}
          type="text"
          name="direccionCiudad"
          placeholder="Ciudad del evento"
          value={evento.direccionCiudad}
        />
      </div>

      <div className="mb-3">
        <label className="mb-0" htmlFor="direccionEstado">Estado:</label>
        <input
          className="border border-primary"
          onChange={handleInputChange}
          type="text"
          name="direccionEstado"
          placeholder="Estado del evento"
          value={evento.direccionEstado}
        />
      </div>

      <div className="mb-3">
        <label className="mb-0" htmlFor="direccionZipCode">Zip Code:</label>
        <input
          className="border border-primary"
          onChange={handleInputChange}
          type="text"
          name="direccionZipCode"
          placeholder="Zip Code"
          value={evento.direccionZipCode}
        />
      </div>

      <div className="border rounded p-3">
        {fechasYHorasDelEvento ? fechasYHorasDelEvento.map((f, i) => (
          <div key={i}>
            <div className="mb-3">
              <label className="mb-0" htmlFor="fecha">Fecha del evento:</label>
              <input
                className="border border-primary"
                onChange={(e) => handleFechaHora(e, i)}
                type="date"
                name="fecha"
                placeholder="Fecha del evento"
                value={f.fecha}
                required
              />
            </div>
            <div className="mb-3">
              <label className="mb-0" htmlFor="hora">Hora del evento:</label>
              <input
                className="border border-primary"
                onChange={(e) => handleFechaHora(e, i)}
                type="time"
                name="hora"
                placeholder="Fecha del evento"
                value={f.hora}
                required
              />
            </div>
            <div onClick={() => createNuevoDiaHora()} className="btn btn-success mt-2 mb-3 mr-3">
              <i className="fas fa-plus"></i>
              Añadir otro día y hora
            </div>

            <div onClick={() => removeRegistrantField(i)} className="btn btn-danger mt-2 mb-3">
              <i className="fas fa-plus"></i>
              Remover un día y hora
            </div>
          </div>
        )) : null}
      </div>

      <div className="mb-3">
        <label className="mb-0" htmlFor="cantidadDisponible">Cantidad disponible:</label>
        <input
          className="border border-primary"
          onChange={handleInputChange}
          type="number"
          name="cantidadDisponible"
          value={evento.cantidadDisponible}
        />
      </div>

      <div className="mb-3">
        <label className="mb-0" htmlFor="imageUrl">Url de la imagen:</label>
        <input
          className="border border-primary"
          onChange={handleInputChange}
          type="text"
          name="imageUrl"
          value={evento.imageUrl}
        />
      </div>

      <div className="mb-3">
        <div>
          <label className="mb-0" htmlFor="descripcionDelEvento">Descripcion del evento:</label>
        </div>
        <textarea
          className="border border-primary w-100"
          rows="5"
          onChange={handleInputChange}
          type="text"
          name="descripcionDelEvento"
          value={evento.descripcionDelEvento}
        />
      </div>

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
      {
        loading
          ? (<button className="disabled thm-btn cta-three__btn text-align-center" type="submit"><Spinner /></button>)
          : (<button className="thm-btn cta-three__btn text-align-center" type="submit">Publicar</button>)
      }
      <div className="alert-warning p-3 rounded mt-2"><strong>Aviso:</strong> Si no recibes el correo electronico de confirmacion, verifica tu carpeta de spam.</div>
    </form >
  )
}

export default NuevoEvento
