import React from 'react'
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import PageHeader from "../components/PageHeader"
import NosotrosIntro from "../components/NosotrosIntro"
import Footer from "../components/Footer"
import Head from "next/head"

const nosotros = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Bienvenidos a Ciudad de Refugio -  Capacitando hoy, líderes cristianos del mañana.  Cultura de oración y estudio bíblico. ¡Déjanos Amarte!" />
        <meta name="keywords" content="Ciudad de Refugio Maryland, Iglesia Cristiana, Iglesia de Dios, Dejanos Amarte" />
      </Head>
      <Layout pageTitle="Somos Ciudad de Refugio - Déjanos Amarte">
        <PageHeader title="Nosotros" />
        <NosotrosIntro />
      </Layout>
    </>
  )
}

export default nosotros