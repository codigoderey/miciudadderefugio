import React from 'react'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import RecuperarContrasena from "../../components/Formularios/RecuperarContrasena"

const RecuperaContrasena = () => {
  return (
    <Layout pageTitle="Recupera tu contrasena">
      <PageHeader title="Recupera tu contrasena" />
      <div className="container">
        <div className="row mx-auto">
          <div className="col col-sm-12 col-md-8">
            <RecuperarContrasena />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RecuperaContrasena
