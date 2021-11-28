import React from 'react'
import baseURL from "../../utils/baseURL"
import axios from "axios"
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import Head from "next/head"
import Link from "next/link"
import clases from "../../components/Database/liderazgo.json"

const ClaseLiderazgo = ({ clase }) => {

  const { id, module, part, videoLink, ppt, docxManual, docxLecture } = clase[0]

  return (
    <>
      <Head>
        <meta name="description" content="Aprende sobre liderazgo cristiano con este curso gratuito ofrecido por el instructor Reynaldo Navedo" />
        <meta name="autor" content="Reynaldo Navedo" />
        <meta name="keywords" content="blog cristiano, lecturas cristianas, liderazgo cristiano" />
      </Head>
      <Layout pageTitle={`Taller de liderazgo cristiano - Módulo ${module} - Parte ${part}`}>
        <PageHeader title={`${part}`} />
        <section className="blog-one blog-one__home blog-one__grid">
          <div className="container">
            <div className="mb-3">
              <Link href="/liderazgo">Volver a la tabla de contenido</Link>
            </div>
            <div className="d-flex flex-column mb-3">
              <iframe src={videoLink} width="400" height="225" title={part} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div>
              <h2>Materiales para descrgar:</h2>
            </div>
            <div className="mb-2">
              <i className="mr-2 fas fa-file-word fa-2x"></i>
              <a href={docxLecture} download>Descarga la lectura</a>
            </div>
            <div className="mb-2">
              <i className="mr-2 fas fa-file-word fa-2x"></i>
              <a href={docxManual} download>Descarga el manual del estudiante</a>
            </div>
            <div className="mb-2">
              <i className="mr-2 fas fa-file-powerpoint fa-2x"></i>
              <a href={ppt} download>Slideshow</a>
            </div>
          </div>
        </section>
        <section className="container d-flex align-items-center justify-content-between p-3">
          {id > 1
            ? <Link href={`${baseURL}/liderazgo/clase?id=${id - 1}`}>&larr; Anterior</Link>
            : null
          }
          {id <= clases.length - 1
            ? <Link className="ml-auto" href={`${baseURL}/liderazgo/clase?id=${id + 1}`}>Próximo &rarr;</Link>
            : null
          }
        </section>
      </Layout>
    </>
  )
}

export default ClaseLiderazgo

ClaseLiderazgo.getInitialProps = async ({ query: { id } }) => {
  const url = `${baseURL}/api/liderazgo`
  const payload = { params: { id } }
  const { data } = await axios.get(url, payload)
  return { clase: data }
}
