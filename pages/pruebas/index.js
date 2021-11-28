import React from 'react'
import Layout from '../../components/Layout'
import Head from "next/head"
import PageHeader from '../../components/PageHeader'
import Footer from '../../components/Footer'
import PruebasPage from '../../components/PruebasPage'
import baseURL from '../../utils/baseURL'
import axios from 'axios'

const PruebasIndex = ({ users }) => {
  return (
    <>
      <Head>

      </Head>
      <Layout pageTitle="Ministerios de la Iglesia Ciudad de Refugio - Déjanos Amarte">
        <PageHeader title="Pruebas" />
        <PruebasPage users={users} />
      </Layout>
    </>
  )
}

PruebasIndex.getInitialProps = async () => {
  const { data } = await axios.get(`${baseURL}/api/users`)
  return { users: data }
}

export default PruebasIndex
