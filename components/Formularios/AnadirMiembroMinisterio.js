import React, { useEffect, useState } from 'react'
import axios from "axios"
import baseURL from "../../utils/baseURL"
import Swal from "sweetalert2"

const AnadirMiembroMinisterio = ({ user, formVisibility, setFormVisibility }) => {

  const [miembro, setMiembro] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    dob: ""
  })

  const handleMiembroOnChange = (e) => {
    setMiembro({
      ...miembro,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitMember = async (e) => {
    e.preventDefault()

    try {

      const { name, age, email, phone, dob } = miembro

      if (name === "" || age === "" || phone === "" || dob === "") {
        return
      }

      const newMember = {
        ministry: user.ministry,
        name,
        age,
        email,
        phone,
        dob
      }

      await axios.post(`${baseURL}/api/miembro`, newMember)
      setFormVisibility(true)
      setMiembro({
        name: "",
        age: "",
        email: "",
        phone: "",
        dob: ""
      })

      Swal.fire({
        icon: "success",
        title: "Miembro añadido",
        text: "Has añadido un miembro a tu ministerio exitosamente.",
        confirmButtonColor: "rgb(64, 6, 144)",
        showConfirmButton: false
      })

      setTimeout(() => {
        window.location.reload()
      }, 1500)

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data,
        confirmButtonColor: "rgb(64, 6, 144)",
      })
    }
  }

  return (
    <form onSubmit={handleSubmitMember} hidden={formVisibility} className='card p-3'>
      <div className="mb-3 d-flex flex-column">
        <label htmlFor="name">Nombre completo</label>
        <input value={miembro.name} className="p-2" onChange={handleMiembroOnChange} type="text" name="name" placeholder="Nombre y apellido" required />
      </div>
      <div className="mb-2 d-flex flex-column">
        <label htmlFor="age">Edad</label>
        <input value={miembro.age} className="p-2" onChange={handleMiembroOnChange} type="number" name="age" placeholder="Edad" required />
      </div>
      <div className="mb-2 d-flex flex-column">
        <label htmlFor="dob">Nacimiento</label>
        <input value={miembro.dob} className="p-2" onChange={handleMiembroOnChange} type="date" name="dob" placeholder="Fecha de nacimiento" required />
      </div>
      <div className="mb-2 d-flex flex-column">
        <label htmlFor="email">Email</label>
        <input value={miembro.email} className="p-2" onChange={handleMiembroOnChange} type="email" name="email" placeholder="Correo electrónico" required />
      </div>
      <div className="mb-2 d-flex flex-column">
        <label htmlFor="phone">Phone</label>
        <input value={miembro.phone} className="p-2" onChange={handleMiembroOnChange} type="phone" name="phone" placeholder="Teléfono" required />
      </div>
      <button className="mt-4 thm-lms-bg btn text-white">Añadir miembro</button>
    </form>
  )
}

export default AnadirMiembroMinisterio
