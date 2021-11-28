import Head from "next/head"
import axios from "axios"
import { parseCookies } from "nookies"
import { redirectUser } from "../utils/handleAuth"
import baseURL from "../utils/baseURL"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="ISO-8859–1" />
      </Head>
      <Layout {...pageProps}>
        <Navbar {...pageProps} />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>)
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // get token from authenticated user
  const { token } = parseCookies(ctx);

  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!token) {
    const isProtectedRoute = ctx.pathname === '/admin'
    if (isProtectedRoute) {
      redirectUser(ctx, '/admin/ingresar');
    }
  } else {

    try {
      const payload = { headers: { Authorization: token } }

      const { data } = await axios.get(`${baseURL}/api/auth`, payload)
      const user = data
      pageProps.user = user

    } catch (error) {
      console.error(error)
    }
  }

  return { pageProps: pageProps }
}