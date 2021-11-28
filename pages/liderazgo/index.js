import React from 'react'
import Head from "next/head"
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import Link from "next/link"
import liderazgoCristiano from "../../components/Database/liderazgo.json"

const LiderazgoIndex = () => {

  return (
    <>
      <Head>
        <meta name="description" content="Aprende sobre liderazgo cristiano con este curso gratuito ofrecido por el instructor Reynaldo Navedo" />
        <meta name="autor" content="Autor" />
        <meta name="keywords" content="blog cristiano, lecturas cristianas, liderazgo cristiano" />
      </Head>
      <Layout pageTitle="Curso gratuito de liderazgo cristiano por el hermano Reynaldo Navedo.">
        <PageHeader title="Liderazgo Cristiano" />
      </Layout>
      <section className="blog-one blog-one__home blog-one__grid">
        <div className="container">
          <div>
            <h2>Instrucciones del curso</h2>
            <iframe className="mt-3 mb-5" src="https://www.youtube-nocookie.com/embed/OUTEW86crfs" width="400" height="225" title="Introducción al liderazgo cristiano en la Iglesia Ciudad de Refugio." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="mb-5">
              <h2>Clases disponibles</h2>
              {liderazgoCristiano.map(l => (
                <div key={l.id} className="col-12 border-bottom py-2">
                  <div className="audio">
                    <div className="audio__content">
                      <div><strong>Clase # {l.id}</strong></div>
                      <div className="audio__info col-12 p-0">
                        <div className="audio_autor mr-3 mb-0">Módulo: {l.module}</div>
                      </div>
                      <h3 className="m-0">
                        <Link href={`/liderazgo/clase?id=${l.id}`}>
                          <a>Sección: {l.part}</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2>Información de contacto</h2>
              <p className="mb-0 mt-3"><strong>Instructor:</strong> Reynaldo Navedo</p>
              <p className="mb-0"><strong>Teléfono:</strong> <a href="tel:4439162409">443-916-2409</a></p>
              <p className="mb-0"><strong>Teléfono:</strong> <a href="mailto:rnavedojr@outlook.com">rnavedojr@outlook.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LiderazgoIndex
