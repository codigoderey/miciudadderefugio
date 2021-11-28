import React, { useEffect, useState } from 'react'
import axios from "axios"
import baseURL from "../../utils/baseURL"
import Swal from "sweetalert2"

const ActualizarMiembroMinisterio = ({ user, miembroParaEditar, updateFormVisibility, setUpdateFormVisibility }) => {

  const [miembroEditado, setMiembroEditado] = useState({})

  useEffect(() => {
    setMiembroEditado(miembroParaEditar)
  }, [miembroParaEditar])

  const handleMiembroOnChange = (e) => {
    setMiembroEditado({
      ...miembroEditado,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitMember = async (e) => {
    e.preventDefault()

    try {
      const { name, age, email, phone } = miembroEditado
      if (name === "" || age === "" || phone === "") {
        return
      }
      const editedMember = {
        id: miembroEditado._id,
        ministry: user.ministry,
        name,
        age,
        email,
        phone
      }

      await axios.put(`${baseURL}/api/miembro`, editedMember)
      setUpdateFormVisibility(true)
      setMiembroEditado({
        name: "",
        age: "",
        email: "",
        phone: ""
      })

      setUpdateFormVisibility(true)

      Swal.fire({
        icon: "success",
        title: "Miembro actualizado",
        text: "Has actualizado la información del miembro de tu ministerio.",
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
    <form id="actualizar-form" onSubmit={handleSubmitMember} hidden={updateFormVisibility} className='card p-3'>
      {!updateFormVisibility
        && <div className="d-flex justify-content-end">
          <p onClick={() => setUpdateFormVisibility(true)} className="text-danger text-decoration-underline">Cerrar</p>
        </div>
      }
      <div className="mb-3 d-flex flex-column">
        <label htmlFor="name">Nombre completo</label>
        <input value={miembroEditado.name} className="p-2" onChange={handleMiembroOnChange} type="text" name="name" placeholder="Nombre y apellido" required />
      </div>
      <div className="mb-2 d-flex flex-column">
        <label htmlFor="age">Edad</label>
        <input value={miembroEditado.age} className="p-2" onChange={handleMiembroOnChange} type="number" name="age" placeholder="Edad" required />
      </div>
      <div className="mb-2 d-flex flex-column">
        <label htmlFor="email">Email</label>
        <input value={miembroEditado.email} className="p-2" onChange={handleMiembroOnChange} type="email" name="email" placeholder="Correo electrónico" required />
      </div>
      <div className="mb-2 d-flex flex-column">
        <label htmlFor="phone">Phone</label>
        <input value={miembroEditado.phone} className="p-2" onChange={handleMiembroOnChange} type="phone" name="phone" placeholder="Teléfono" required />
      </div>
      <button className="mt-4 thm-lms-bg btn text-white">Actualizar miembro</button>
    </form>
  )
}

export default ActualizarMiembroMinisterio
