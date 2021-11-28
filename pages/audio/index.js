import React, { useState } from 'react'
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
import Head from "next/head";
import audio from "../../components/Database/audio.json"
import Link from "next/link"

const AudioIndex = () => {

  const [audios, setListaDeAudios] = useState(audio)

  const handleInputChange = (e) => {
    const query = e.target.value
    const listaDeAudios = audio.filter(a => {
      const { titulo, autor } = a
      return (
        titulo.toLowerCase().includes(query.toLowerCase()) ||
        autor.toLowerCase().includes(query.toLowerCase()
        ))
    })
    setListaDeAudios(listaDeAudios)
  }

  return (
    <>
      <Head>
        <meta name="description" content="Escucha palabra de Dios a través de diversos temas" />
        <meta name="autor" content="Autor" />
        <meta name="keywords" content="blog cristiano, lecturas cristianas" />
      </Head>
      <Layout pageTitle="Audios sobre la palabra de Dios en Ciudad de Refugio | Ciudad de Refugio">
        <PageHeader title="Audio" />
        <form className="footer-widget__mc-form mc-form">
          <input
            className="border border-primary mx-auto w-75 my-3"
            onChange={handleInputChange}
            type="text"
            name="query"
            placeholder="Buscar audio por tema o autor"

          />
        </form>
        <section className="blog-one blog-one__home blog-one__grid">
          <div className="container">
            <div className="row">
              {audios.map(l => (
                <div key={l.id} className="col-12 p-3 border-bottom">
                  <div className="audio">
                    <div className="audio__icon fas fa-volume-up fa-3x" />
                    <div className="audio__content">
                      <h3 className="m-0">
                        <Link href={`/audio/escuchando?id=${l.id}`}>
                          <a>{l.titulo}</a>
                        </Link>
                      </h3>
                      <div className="audio__info col-12 p-0 mt-2">
                        <div className="audio_autor mr-3 mb-0">Autor: {l.autor}</div>
                        <div className="audio_duracion">Duración: {l.duracion}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )).reverse()}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default AudioIndex
