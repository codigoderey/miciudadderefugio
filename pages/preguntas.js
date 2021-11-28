import React from 'react'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

const preguntas = () => {
  return (
    <Layout pageTitle="Preguntas Frecuentes - Ciudad de Refugio">
      <Navbar />
      <PageHeader title="Preguntas Frecuentes" />
      <Faq />
      <Footer />
    </Layout>
  )
}

export default preguntas
