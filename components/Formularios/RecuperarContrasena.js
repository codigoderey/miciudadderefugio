import React, { useState, useEffect } from 'react'
import Message from "../Message"
import axios from "axios"
import { handleLogin } from '../../utils/handleAuth'
import Spinner from '../Spinner'
import Router from "next/router"
import baseURL from '../../utils/baseURL'
import Link from "next/link"

const RecuperarContrasena = () => {


  const [correo, setCorreo] = useState({
    action: "contrasena",
    correo: "",
  })

  const handleInputChange = (e) => {
    setCorreo({
      ...correo,
      [e.target.name]: e.target.value
    })
  }

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleFormSubmit = async (e) => {

    e.preventDefault()

    try {
      setLoading(true)
      setError(false)
      setSuccess(false)
      if (correo.correo === "") {
        setLoading(false)
        return setError("Todos los blancos son requeridos.")
      }
      console.log(correo)
      await axios.post(`${baseURL}/api/auth`, correo)
      setSuccess(true)
      setCorreo({
        correo: "",
        action: "contrasena"
      })

    } catch (error) {
      console.error(error.response.data)
      setLoading(false)
      setError(error.response.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="footer-widget__mc-form mc-form"
    >
      <input
        className="border border-primary my-3"
        onChange={handleInputChange}
        type="correo-electronico"
        name="correo"
        placeholder="Correo electrónico"
        value={correo.correo}

      />
      {error
        ? (<Message
          styleClass="alert alert-danger"
          textMessage={error}
        />)
        : (null)
      }
      {success
        ? (<Message
          styleClass="alert alert-success"
          textMessage="Correo electrónico aceptado. Se ha enviado un correo electrónico con instrucciones para recuperar tu contraseña."
        />)
        : (null)
      }
      {
        loading
          ? (<button className="disabled thm-btn cta-three__btn text-align-center" type="submit"><Spinner /></button>)
          : (<button className="thm-btn cta-three__btn text-align-center" type="submit">Recuperar Contrasena</button>)
      }
      <div className="mt-3">
        <p>¿Recordaste tu contraseña? <Link href="/admin/ingresar">Oprime este enlace para ingresar con tus credenciales.</Link></p>
      </div>
    </form>
  )
}

export default RecuperarContrasena
