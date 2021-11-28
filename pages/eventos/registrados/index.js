import React, { useEffect } from 'react'
import Head from "next/head"
import Layout from '../../../components/Layout'
import PageHeader from '../../../components/PageHeader'
import axios from "axios"
import baseURL from '../../../utils/baseURL'
import Link from "next/link"
import Moment from "react-moment"
import router from "next/router"
import 'moment-timezone'
import 'moment/locale/es';

const IndexEventos = ({ eventos, user }) => {

  useEffect(() => {
    if (user && user.role === "lider") {

    } else {
      router.push("/admin")
    }
  }, [user])

  return (
    <>
      <Head>
        <meta name="description" content="Verifique las personas que se han registrado para los eventos programados de la Iglesia Ciudad de Refugio." />
        <meta name="autor" content="Reynaldo Navedo" />
        <meta name="keywords" content="iglesia ciudad de refugio millersville, actividades de la iglesia ciudad de refudio en millersville, eventos y actividades, eventos, actividades, iglesia, ciudad de refugio" />
      </Head>
      <Layout pageTitle="Conozca los próximos eventos y actividades de la Iglesia Ciudad de Refugio.">
        <PageHeader title="Registros por evento" />
        <div className="container">
          <section className="">
            <div className="row">
              {eventos.map(e => (
                <div key={e._id} className="col-12 rounded border my-3 p-0">
                  <div className="evento">
                    <div className="evento__image-container">
                      <img className="evento__image" src={e.imageUrl} alt={e.nombreDelEvento} />
                    </div>
                    <div className="evento__content p-3">
                      <div className="bg-success rounded text-white p-2 mb-2">
                        <p className="mb-0"><strong>Costo:</strong> {e.costoDelEvento === "Gratis" ? `${e.costoDelEvento}` : `$${e.costoDelEvento}`}</p>
                        <p className="mb-0"><strong><span className="mr-2">Cantidad disponible:</span></strong><span className="bg-white rounded p-1 text-success">{e.cantidadDisponible - e.registrados.length}</span></p>
                      </div>
                      <h2 className="m-0">
                        {e.nombreDelEvento}
                      </h2>
                      <div className="evento__info col-12 p-0 mt-2">
                        <div className="audio_autor mr-3 mb-0">Organizado por el ministerio de {e.organizadoPor} de la Iglesia Ciudad de Refugio.</div>
                        <div className="audio_autor mr-3 
                        mb-0"><strong>Lugar:</strong> {e.lugar}</div>
                        <div><strong>Dia(s) y hora(s) del evento:</strong></div>
                        {e.fechasYHorasDelEvento.map(fh => (
                          <div key={fh._id}>
                            <span className="mr-3"><strong>Día: </strong>{<Moment locale="es" date={fh.fecha} format='D MMM YYYY' />}</span>
                            <span><strong>Hora: </strong>{fh.hora}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 mb-0">
                        <p className="mb-0"><strong>Descripción:</strong></p>
                        <p className="mb-0">{e.descripcionDelEvento}</p>
                        <Link href={`/eventos/registrados/${e._id}`}><a className="thm-btn cta-three__btn mt-3">Verificar registrados</a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Layout>
    </>
  )
}

export default IndexEventos

IndexEventos.getInitialProps = async () => {
  const { data } = await axios.get(`${baseURL}/api/eventos`)
  return { eventos: data }
}
