import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../../../components/Layout'
import PageHeader from '../../../components/PageHeader'
import baseURL from '../../../utils/baseURL'
import Head from 'next/head'
import { useRouter } from "next/router"
import Link from "next/link"

const PruebasDelMaestro = ({ pruebas }) => {

  const router = useRouter()

  const [maestros, setMaestros] = useState([])

  const pruebasDelMaestro = pruebas.filter(u => u.creadaPor._id === router.query.id)

  const maestro = maestros.filter(m => m._id === router.query.id)

  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await axios.get(`${baseURL}/api/users`)
      setMaestros(data)
    }
    getAllUsers()
  }, [])


  return (
    <>
      <Head>

      </Head>
      <Layout pageTitle={`Pruebas publicadas por ${maestro[0] && maestro[0].name}`}>
        <PageHeader title={`Pruebas disponibles`} />
        {maestro[0] ? (<>
          <div className="cta-three">
            <div className="container">
              <div className="row">
                <div className="">
                  <div className="cta-three__content">
                    <div className="mt-5 block-title text-left">
                      <p>Pruebas publicadas por</p>
                      <h3 className="text-dark">{maestro[0].name}</h3>
                      <div className="d-flex align-items-center my-3">
                        <i className="fas fa-envelope mr-2 thm-lms-color"></i><p className="text-secondary m-0 font-weight-bold">Contacto: </p> <span className="ml-2">{maestro[0].email}</span>
                      </div>
                      <div className="d-flex align-items-center my-3">
                        <i className="fas fa-user-lock mr-2 thm-lms-color"></i>
                        <p className="text-secondary font-weight-bold">Privilegios:</p> <span className="text-light badge thm-lms-bg ml-2">{maestro[0].role}</span>
                      </div>
                      <div className="d-flex align-items-center my-3">
                        <i className="fas fa-users mr-2 thm-lms-color"></i>
                        <p className="text-secondary font-weight-bold">Ministerio:</p> <span className="ml-2">{maestro[0].ministry}</span>
                      </div>
                    </div>
                    <div className="mb-4 text-left">
                      <p><strong>Instrucciones:</strong></p>
                      <ol>
                        <li>Elije una prueba</li>
                        <li>Serás redirigido a una página donde verás tu nombre</li>
                        <li>Escoge tu nombre</li>
                        <li>Te preguntarán tu fecha de naciemiento</li>
                        <li>Luego irás a la prueba</li>
                      </ol>
                    </div>
                    <div>

                      <p><strong>Pruebas disponibles:</strong></p>

                      <ul>
                        {pruebasDelMaestro.length != 0 ?
                          pruebasDelMaestro.map(p => {
                            return (<li key={p._id}><Link href={`/pruebas/estudiantes/${p._id}`} >{p.topic}</Link></li>)
                          }) : (<p>Este maestro no ha publicado pruebas.</p>)
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>)
          : null
        }
      </Layout>
    </>
  )
}

PruebasDelMaestro.getInitialProps = async () => {
  const { data } = await axios.get(`${baseURL}/api/prueba`)
  return { pruebas: data }
}

export default PruebasDelMaestro
