import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import BlogDetails from "../components/BlogDetails";
import Footer from "../components/Footer";
import axios from "axios";
import Head from "next/head";

const BlogDetailPage = ({ lectura }) => {
  return (
    <>
      <Head>
        <title>{`${lectura.titulo} | Blog de Ciudad de Refugio`}</title>
        <meta name="description" content={`${lectura.resumen}`} />
        <meta name="autor" content={lectura.publicadoPor.nombre} />
        <meta name="keywords" content="blog cristiano, lecturas cristianas" />
      </Head>
      <Layout pageTitle={`${lectura.titulo} | Ciudad de Refugio`}>
        <PageHeader title="Lectura" />
        <BlogDetails lectura={lectura} />
      </Layout>
    </>
  )
}

BlogDetailPage.getInitialProps = async ({ query: { slug } }) => {
  const url = "https://frutodelespiritu.com/api/lecturas"
  const payload = { params: { slug } }
  const { data } = await axios.get(url, payload)
  return { lectura: data }
}



export default BlogDetailPage;