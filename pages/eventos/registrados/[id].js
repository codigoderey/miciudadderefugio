import React, { useEffect } from 'react'
import axios from "axios"
import baseURL from '../../../utils/baseURL'
import Layout from '../../../components/Layout'
import PageHeader from '../../../components/PageHeader'
import router from "next/router"

const RegistrarmeIndex = ({ evento, user }) => {

  useEffect(() => {
    if (user && user.role === "lider") {

    } else {
      router.push("/admin")
    }
  }, [user])

  return (
    <Layout>
      <PageHeader title="Registro" />
      <div className="container">
        <div className="mt-5">
          <h2>Registración para el evento <strong>{evento.nombreDelEvento}</strong></h2>
          <div><strong>Total de registrados: </strong> {evento ? evento.registrados.length : <p>No tiene permisos para ver esta página.</p>}</div>
          <section>
            {evento.registrados.map(r => (
              <>
                <div className="card my-3 p-3">
                  <p><strong>Nombre: </strong>{r.nombre}</p>
                  <p><strong>Telefono: </strong><a href={`tel:${r.telefono}`}>{r.telefono}</a></p>
                  <p><strong>Correo: </strong><a href={`tel:${r.correo}`}>{r.correo}</a></p>
                  <div>
                    <p><strong>Direccion: </strong>{`${r.direccionCalle} ${r.direccionCiudad} ${r.direccionEstado} ${r.direccionZipCode}`}</p>
                  </div>
                </div>
              </>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default RegistrarmeIndex

RegistrarmeIndex.getInitialProps = async ({ query: { id } }) => {
  const { data } = await axios.get(`${baseURL}/api/evento`, { params: { id } })
  return { evento: data }
}
