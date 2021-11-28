import React, { useEffect } from 'react'
import Layout from '../../../components/Layout'
import PageHeader from '../../../components/PageHeader'
import router from "next/router"


const Exito = () => {

  useEffect(() => {
    setTimeout(() => {
      router.push("/eventos")
    }, 5000)
  })

  return (
    <Layout>
      <PageHeader title="Registro exitoso" />
      <section className="container mt-3 bg-success text-white rounded">
        <p>Se ha registrado exitosamente para el evento.</p>
      </section>
    </Layout>
  )
}


export default Exito
