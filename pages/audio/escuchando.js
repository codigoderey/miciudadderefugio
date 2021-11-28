import React from 'react'
import axios from "axios"
import baseURL from '../../utils/baseURL'
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Head from "next/head";

const escuchando = ({ audio }) => {
  const { titulo, autor, duracion, almacen } = audio[0]

  return (
    <>
      <Head>
        <title>{`Audio Ciudad de Refugio | ${titulo}`}</title>
        <meta name="description" content={`${titulo} | Escucha palabra de Dios a través de diversos temas`} />
        <meta name="autor" content="Reynaldo" />
        <meta name="keywords" content="audio, podcast cristiano, lecturas cristianas" />
      </Head>
      <Layout pageTitle={`${titulo} por ${autor} | Audio Ciudad de Refugio`}>
        <PageHeader title={titulo} />
        <section className="container mt-5">
          <p className="mb-1">En el mensaje: {autor}</p>
          <p>Duración: {duracion}</p>
          <audio controls autoPlay={true}>
            <source src={almacen} type="audio/mp3" />
            Tu navegador no soporta el elemento de audio
          </audio>
          <br />
        </section>
      </Layout>
    </>
  )
}

escuchando.getInitialProps = async ({ query: { id } }) => {
  const url = `${baseURL}/api/audio`
  const payload = { params: { id } }
  const { data } = await axios.get(url, payload)
  return { audio: data }
}

export default escuchando
