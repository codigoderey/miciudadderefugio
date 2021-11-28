import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
import Footer from "../../components/Footer"
import PageHeader from '../../components/PageHeader'
import FormularioRegistrar from '../../components/Formularios/Registrar'

const Ingresar = ({ user }) => {

  return (
    <Layout pageTitle="Ingresa con tus credenciales | Ciudad de Refugio - Déjanos Amarte">
      <PageHeader title="Registrar" />
      <div className="container">
        <div className="row mx-auto">
          <div className="col col-sm-12 col-md-8">
            <FormularioRegistrar user={user} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Ingresar
