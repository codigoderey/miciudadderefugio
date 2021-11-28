import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import FormularioIngresar from '../../components/Formularios/Ingresar'

const Ingresar = ({ user }) => {

  return (
    <Layout pageTitle="Ingresa con tus credenciales | Ciudad de Refugio - Déjanos Amarte">
      <PageHeader title="Ingresar" />
      <div className="container">
        <div className="row mx-auto">
          <div className="col col-sm-12 col-md-8">
            <FormularioIngresar user={user} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Ingresar
