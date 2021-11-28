import React from 'react'
import Oracion from "../components/Oracion"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import OracionPage from '../components/OracionPage'

const oracion = () => {
  return (
    <Layout pageTitle="Cultura de Oración en Ciudad de Refugio - Déjanos Amarte">
      <PageHeader title="Cultura de Oración" />
      <OracionPage />
      <Oracion />
    </Layout>
  )
}

export default oracion
