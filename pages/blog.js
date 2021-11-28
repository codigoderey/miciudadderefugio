import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import axios from "axios";
import Head from "next/head"


const BlogPage = ({ lecturas }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Blog cristiano obtenido de la página Fruto del Espíritu" />
        <meta name="autor" content="Reynaldo Navedo" />
        <meta name="keywords" content="blog cristiano, lecturas cristianas" />
      </Head>
      <Layout pageTitle="Palabra que levanta, restaura, edifica y permanece. Ciudad de Refugio | Blog">
        <PageHeader title="Blog" />
        <Blog lecturas={lecturas} />
      </Layout>
    </>
  )
}

BlogPage.getInitialProps = async () => {
  const url = "https://frutodelespiritu.com/api/lecturas"
  const { data } = await axios.get(url)
  return { lecturas: data }
}

export default BlogPage;