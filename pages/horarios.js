import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import CalendarioPage from "../components/CalendarioPage";
import Head from "next/head"

const calendario = () => (

  <>
    <Head>
      <meta name="description" content="Horario de reuniones de la Iglesia Ciudad de Refugio - ¡Déjanos Amarte!" />
      <meta name="keywords" content="Horario de Reuniones, Horario Ciudad de Refugio Maryland, Horario Iglesia Cristiana, Horario Iglesia de Dios, Dejanos Amarte" />
    </Head>
    <Layout pageTitle="Horario y actividades de Iglesia Ciudad de Refugio | ¡Déjanos amarte!">
      <PageHeader title="Horarios y actividades" />
      <CalendarioPage />
    </Layout>
  </>
)

export default calendario;