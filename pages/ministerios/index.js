import React from 'react'
import Layout from "../../components/Layout"
import Navbar from "../../components/Navbar"
import PageHeader from "../../components/PageHeader"
import MinisteriosPage from "../../components/MinisteriosPage"
import Footer from "../../components/Footer"
import Head from "next/head"

const ministerios = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Ministerios de la Iglesia Ciudad de Refugio -  Capacitando hoy, líderes cristianos del mañana.  Cultura de oración y estudio bíblico. ¡Déjanos Amarte!" />
        <meta name="keywords" content="Ministerios Ciudad de Refugio Maryland, Ministerios Iglesia, Ministerios Iglesia Cristiana, Ministerios Iglesia de Dios, Ministerios Dejanos Amarte" />
      </Head>
      <Layout pageTitle="Ministerios de la Iglesia Ciudad de Refugio - Déjanos Amarte">
        <PageHeader title="Ministerios" />
        <MinisteriosPage />
      </Layout>
    </>
  )
}

export default ministerios
