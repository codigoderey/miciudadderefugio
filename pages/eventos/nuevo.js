import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import AnadirEvento from '../../components/Formularios/AnadirEvento'

const CreaNuevoEvento = ({ user }) => {

  return (
    <Layout pageTitle="Ingresa con tus credenciales | Ciudad de Refugio - Déjanos Amarte">
      <PageHeader title="Nuevo evento o actividad" />
      <div className="container">
        <div className="row mx-auto">
          <div className="col col-sm-12 col-md-8">
            <div className="alert-warning p-3 rounded mt-5"><strong>Aviso:</strong> Todos los blancos son requeridos.</div>
            <AnadirEvento user={user} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreaNuevoEvento
