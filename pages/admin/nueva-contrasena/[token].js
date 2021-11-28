import Layout from '../../../components/Layout'
import PageHeader from '../../../components/PageHeader'
import NuevaContrasena from '../../../components/Formularios/NuevaContrasena'
import axios from "axios"
import baseURL from '../../../utils/baseURL'

const NuevaContrasenaPage = ({ user }) => {

  return (
    <Layout pageTitle="Ingresa con tus credenciales | Ciudad de Refugio - Déjanos Amarte">
      <PageHeader title="Actualizar Contraseña" />
      <div className="container">
        <div className="row mx-auto">
          <div className="col col-sm-12 col-md-8">
            <NuevaContrasena user={user} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NuevaContrasenaPage

NuevaContrasenaPage.getInitialProps = async ({ query: { token } }) => {
  const { data } = await axios.get(`${baseURL}/api/auth`, { params: { token } })
  return { user: data }
}