import React from 'react'
import axios from "axios"
import baseURL from '../../../utils/baseURL'
import Layout from '../../../components/Layout'
import PageHeader from '../../../components/PageHeader'
import RegistroEventos from "../../../components/Formularios/RegistroEventos"
import Head from "next/head"
const RegistrarmeIndex = ({ evento }) => {
  console.log(evento)
  return (
    <>
      <Head>
        <meta name="description" content={`Llene el formulario para registrarse en el evento ${evento.nombreDelEvento} en ${evento.lugar} y reserve su espacio. Ven a recibir lo que Dios tiene para ti en este dia.  Bendiciones.`} />
        <meta name="autor" content="Autor" />
        <meta name="keywords" content="iglesia ciudad de refugio millersville, actividades de la iglesia ciudad de refudio en millersville, eventos y actividades, eventos, actividades, iglesia, ciudad de refugio" />
        <title>{`Registración para el evento {evento.nombreDelEvento}`}</title>
      </Head>
      <Layout pageTitle={`Registración para el evento ${evento.nombreDelEvento} | Quedan ${evento.cantidadDisponible - evento.registrados.length} espacio(s) disponibles.`}>
        <PageHeader title="Registro" />
        <div className="container">
          <div className="mt-5">
            <h2>Registración para el evento <strong>{evento.nombreDelEvento}</strong></h2>
            {
              evento.registrados.length >= evento.cantidadDisponible
                ? (<div className="alert alert-danger">Lo sentimos, este evento está lleno.</div>)
                : (<RegistroEventos evento={evento} />)
            }
          </div>
        </div>
      </Layout>
    </>
  )
}

export default RegistrarmeIndex

RegistrarmeIndex.getInitialProps = async ({ query: { id } }) => {
  const { data } = await axios.get(`${baseURL}/api/evento`, { params: { id } })
  return { evento: data }
}
