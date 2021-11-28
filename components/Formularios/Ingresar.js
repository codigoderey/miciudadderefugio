import React, { useState, useEffect } from 'react'
import Message from "../Message"
import axios from "axios"
import { handleLogin } from '../../utils/handleAuth'
import Spinner from '../Spinner'
import Router from "next/router"
import baseURL from '../../utils/baseURL'
import Link from "next/link"

const Ingresar = ({ user }) => {

  useEffect(() => {
    if (user) {
      Router.push("/admin")
    }
  }, [user])

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
    action: "ingresar"
  })

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = async (e) => {

    e.preventDefault()

    try {
      setLoading(true)
      setError(false)
      if (credenciales.email === "" || credenciales.password === "") {
        setLoading(false)
        return setError("Todos los blancos son requeridos.")
      }
      const { data } = await axios.post(`${baseURL}/api/auth`, credenciales)
      setSuccess(true)
      setTimeout(() => handleLogin(data), 2500)
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
      <input
        className="border border-primary my-3"
        onChange={handleInputChange}
        type="correo-electronico"
        name="email"
        placeholder="Correo electrónico"
        value={credenciales.email}

      />
      <input
        className="border border-primary my-3"
        onChange={handleInputChange}
        type="contrasena"
        name="password"
        placeholder="Contraseña"
        value={credenciales.password}

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
          textMessage="Registro exitoso, serás redirigido al panel administrativo."
        />)
        : (null)
      }
      {
        loading
          ? (<button className="disabled thm-btn cta-three__btn text-align-center" type="submit"><Spinner /></button>)
          : (<button className="thm-btn cta-three__btn text-align-center" type="submit">Ingresar</button>)
      }
      <div className="mt-3">
        <p>¿No tienes cuenta? <Link href="/admin/registrar">Oprime este enlace para crear una cuenta.</Link></p>
        <p>¿Olvidaste tu contraseña? <Link href="/admin/recupera-contrasena">Oprime este enlace para recuperar tu contraseña.</Link></p>
      </div>
    </form>
  )
}

export default Ingresar
