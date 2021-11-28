import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Servicios from "../components/Servicios";
import CalendarioIndex from "../components/CalendarioIndex";
import Video from "../components/Video";
import Screenshots from "../components/Screenshots";
import BlogHome from "../components/BlogHome";
import Contact from "../components/Contact";
import MinisteriosIndex from "../components/MinisteriosIndex";
import MinisteriosIndexDinamic from "../components/MinisteriosIndexDinamic";
import Head from "next/head"


const Home = () => {

  return (
    <>
      <Head>
        <meta name="description" content="Bienvenidos a Ciudad de Refugio -  Capacitando hoy, líderes cristianos del mañana.  Cultura de oración y estudio bíblico. ¡Déjanos Amarte!" />
        <meta name="keywords" content="Ciudad de Refugio Millersville Maryland, Pastores Norma y Omar Quiñones, Iglesia Cristiana, Iglesia de Dios, Déjanos Amarte" />
      </Head>
      <Layout pageTitle="Ciudad de Refugio - Déjanos Amarte">
        <Banner />
        <Servicios />
        <MinisteriosIndex />
        <CalendarioIndex />
        <MinisteriosIndexDinamic
          topText="La gloria es de Dios"
          headerText="Descubre nuestros eventos"
          descriptionText="Visita nuestra sección de eventos, regístrate o marca tu calendario para continuar recibiendo lo que Dios tiene para ti."
          btnLink="/eventos"
          btnText="Eventos y actividades"
        />
        <BlogHome />
        <Video />
        <Screenshots />
        <Contact />
      </Layout>
    </>
  )
}

export default Home;