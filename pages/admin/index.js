import React, { useState } from "react"
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import { handleLogout } from "../../utils/handleAuth"
import axios from "axios"
import baseURL from "../../utils/baseURL"
import AnadirMiembroMinisterio from "../../components/Formularios/AnadirMiembroMinisterio"
import ActualizarMiembroMinisterio from "../../components/Formularios/ActualizarMiembroMinisterio"
import Swal from "sweetalert2"
import Link from "next/link"

const Admin = ({ user, miembros }) => {

  const miembrosDelLider = miembros.filter(m => { return user.ministry === m.ministry })

  const { name, email, role, ministry } = user
  const [formVisibility, setFormVisibility] = useState(true)
  const [updateFormVisibility, setUpdateFormVisibility] = useState(true)

  const [miembroParaEditar, setMiembroParaEditar] = useState({})

  const toggleFormVisibility = () => {
    setFormVisibility(!formVisibility)
  }

  const editLeaderMember = async (id) => {
    setUpdateFormVisibility(false)
    const elementToView = document.getElementById("actualizar-form")
    elementToView.scrollIntoView()
    const solicitud = {
      action: "editar",
      id
    }
    const { data } = await axios.get(`${baseURL}/api/miembro`, { params: solicitud })
    setMiembroParaEditar(data)
  }

  const callDeleteDialogue = (id) => {
    Swal.fire({
      icon: "question",
      title: "¿Confirma eliminar miembro?",
      showConfirmButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "rgb(64, 6, 144)",
      cancelButtonText: "Cancelar",
      showCloseButton: true
    }).then(result => {
      if (result.isConfirmed) {
        deleteLeaderMember(id)
        Swal.fire({
          icon: "success",
          title: "Miembro eliminado exitosamente.",
          showCloseButton: false,
          showConfirmButton: false
        })
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      } else if (result.isDenied || result.isDismissed) {
        Swal.fire({
          icon: "info",
          title: "El miembro no ha sido eliminado.",
          showCloseButton: true,
          showConfirmButton: false
        })
      }

    })
  }

  const deleteLeaderMember = async (id) => {
    await axios.delete(`${baseURL}/api/miembro`, { params: { id: id } })
  }

  return (
    <Layout pageTitle="Panel de administración | Ciudad de Refugio - Déjanos Amarte">
      <PageHeader title="Panel de administración" />
      <div className="cta-three">
        <div className="container">
          <div className="row">
            <div className="">
              <div className="cta-three__content">
                <div className="mt-5 block-title text-left">
                  <p>Bienvenido</p>
                  <h3 className="text-dark">{name}</h3>
                  <div className="d-flex align-items-center my-3">
                    <i className="fas fa-envelope mr-2 thm-lms-color"></i><p className="text-secondary m-0 font-weight-bold">Correo electrónico: </p> <span className="ml-2">{email}</span>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <i className="fas fa-user-lock mr-2 thm-lms-color"></i>
                    <p className="text-secondary font-weight-bold">Privilegios:</p> <span className="text-light badge thm-lms-bg ml-2">{role}</span>
                  </div>
                  {user.role === "lider" ? (
                    <div>
                      <div className="d-flex align-items-center my-3">
                        <i className="fas fa-users mr-2 thm-lms-color"></i>
                        <p className="text-secondary font-weight-bold">Ministerio:</p> <span className="text-light badge thm-lms-bg ml-2">{ministry}</span>
                      </div>
                      {/* <div className="d-flex align-items-center my-3">
                        <i className="fas fa-book mr-2 thm-lms-color"></i>
                        <p className="text-secondary font-weight-bold">Pruebas:</p> <Link href={`/pruebas/maestro/${user._id}`}><a className="ml-2">Ver pruebas publicadas</a></Link>
                      </div> */}
                      <div className="d-flex align-items-center my-3">
                        <i className="fas fa-book mr-2 thm-lms-color"></i>
                        <p className="text-secondary font-weight-bold">Eventos:</p> <Link href="/eventos/registrados"><a className="ml-2">Ver registros de eventos</a></Link>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  acciones */}
      <div className="cta-three">
        <div className="container">
          <div className="row">
            <div className="cta-three__content">
              <h3>Acciones</h3>
              <div className="d-flex align-items-center hoverable my-3" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt mr-2 thm-color"></i><p className="thm-color m-0 font-weight-bold">Terminar sesión</p>
              </div>
              {
                user.role === "lider"
                  ? (
                    <>
                      {/* <div className="d-flex align-items-center hoverable my-3" onClick={toggleFormVisibility}>
                        <i className="fas fa-user-plus mr-2 thm-lms-color"></i><p className="text-secondary font-weight-bold m-0">Añadir miembro</p>
                      </div>
                      <div className="d-flex align-items-center hoverable my-3">
                        <i className="fas fa-book mr-2 thm-lms-color"></i><Link
                          href="/pruebas/nueva"><a className="m-0">Publicar una prueba</a></Link>
                      </div> */}
                      <div className="d-flex align-items-center hoverable my-3">
                        <i className="fas fa-calendar-week mr-2 thm-lms-color"></i><Link href="/eventos/nuevo"><a className="m-0">Publicar un evento</a></Link>
                      </div>
                    </>
                  )
                  : null
              }
            </div>
          </div>
        </div>
      </div>
      <div className="cta-three">
        <div className="container">
          <div className="row">
            <div className="col-10 cta-three__content">
              <AnadirMiembroMinisterio user={user} formVisibility={formVisibility} setFormVisibility={setFormVisibility} />
              <ActualizarMiembroMinisterio user={user} miembroParaEditar={miembroParaEditar} updateFormVisibility={updateFormVisibility}
                setUpdateFormVisibility={setUpdateFormVisibility}
              />
            </div>
          </div>
        </div>
      </div>

      {/* buscar la funcion de miembros guardada en OneNote */}
    </Layout>
  )
}

Admin.getInitialProps = async () => {
  const { data } = await axios.get(`${baseURL}/api/miembro`)
  return { miembros: data }
}

export default Admin
