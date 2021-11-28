import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import PageHeader from '../../../components/PageHeader'
import baseURL from '../../../utils/baseURL'
import Head from 'next/head'
import { useRouter } from "next/router"
import axios from "axios"
import Swal from 'sweetalert2'

const EstudiantesAutorizados = ({ pruebas }) => {

  const router = useRouter()

  const [dob, setDob] = useState("")
  const [selectMember, setSelectMember] = useState("")
  const [miembros, setMiembros] = useState([])

  // redirigir a la prueba usando el siguiente id
  const pruebaParaTomar = pruebas.find(p => p._id === router.query.id)

  const miembrosAsignados = miembros.filter(m => m.ministry === pruebaParaTomar.creadaPor.ministry)


  useEffect(() => {
    const getAllPruebas = async () => {
      const { data } = await axios.get(`${baseURL}/api/miembro`)
      setMiembros(data)
    }
    getAllPruebas()
  }, [])

  const handleSelectDob = (e) => {
    setDob(e.target.value)
  }

  const handleSelectMember = (e) => {
    setSelectMember(e.target.value)
  }

  const submitVerifyDob = (e) => {
    e.preventDefault()
    if (selectMember === dob) {
      Swal.fire({
        icon: "success",
        title: "Miembro verificado",
        text: "Ahora serás redirigido a la prueba.",
        showConfirmButton: false
      })
      setTimeout(() => {
        router.push(`/pruebas/${pruebaParaTomar._id}`)
      }, 1500)
    } else {
      Swal.fire({
        icon: "error",
        title: "Información incorrecta",
        text: "Verifica que la fecha de nacimiento sea correcta, si es correcta, verifica que el maestro haya puesto la información correcta. Lamentamos el inconveniente.",
        showConfirmButton: false,
        showCloseButton: true,
      })
    }
  }

  return (
    <>
      <Layout>
        <PageHeader title="Estudiantes" />
        <>
          <div className="cta-three">
            <div className="container">
              <div className="row">
                <div className="">
                  <div className="cta-three__content">
                    <div className="mb-4 text-left">
                      <p>Elije tu nombre y pon tu fecha de nacimiento para comenzar la prueba {pruebaParaTomar.topic} publicada por el maestro de {pruebaParaTomar.creadaPor.ministry} {pruebaParaTomar.creadaPor.name}:</p>
                      <form
                        onSubmit={submitVerifyDob}
                      >
                        <input type="date" value={dob} name="dob" onChange={handleSelectDob} />
                        <button type="submit">Verificar</button>
                      </form>
                      {miembrosAsignados.map(m => (
                        <div className="mt-3" key={m._id}>
                          <input
                            type="radio"
                            name="dob"
                            value={m.dob}
                            onChange={handleSelectMember}
                          />
                          <span className="ml-2 seleccionar-estudiantes" >{m.name}</span>
                        </div>

                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Layout>
    </>
  )
}

EstudiantesAutorizados.getInitialProps = async () => {
  const { data } = await axios.get(`${baseURL}/api/prueba`)
  return { pruebas: data }
}

export default EstudiantesAutorizados
