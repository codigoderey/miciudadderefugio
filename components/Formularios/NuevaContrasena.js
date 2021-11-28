import React, { useState, useEffect } from 'react'
import Message from "../Message"
import axios from "axios"
import Spinner from '../Spinner'
import baseURL from '../../utils/baseURL'
import Link from "next/link"
import router from 'next/router'

const Ingresar = ({ user }) => {

  const [credenciales, setCredenciales] = useState({
    token: user.token,
    contrasena: "",
    confirmarContrasena: "",
    action: "actualizarcontrasena"
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
      setSuccess(false)
      if (credenciales.contrasena === "" || credenciales.confirmarContrasena === "") {
        setLoading(false)
        return setError("Todos los blancos son requeridos.")
      } else if (credenciales.contrasena !== credenciales.confirmarContrasena) {
        setLoading(false)
        return setError("Las contraseñas no son iguales.")
      }
      await axios.put(`${baseURL}/api/auth`, credenciales)
      setSuccess(true)
      setTimeout(() => {
        router.push("/admin/ingresar")
      }, 3000)
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
        type="contrasena"
        name="contrasena"
        placeholder="Contraseña"
        value={credenciales.contrasena}

      />
      <input
        className="border border-primary my-3"
        onChange={handleInputChange}
        type="confirmar-contrasena"
        name="confirmarContrasena"
        placeholder="Confirmar Contraseña"
        value={credenciales.confirmarContrasena}

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
          textMessage="Contraseña actualizada, serás redirigido para ingresar con la nueva contraseña."
        />)
        : (null)
      }
      {
        loading
          ? (<button className="disabled thm-btn cta-three__btn text-align-center" type="submit"><Spinner /></button>)
          : (<button className="thm-btn cta-three__btn text-align-center" type="submit">Actualizar</button>)
      }
    </form>
  )
}

export default Ingresar
