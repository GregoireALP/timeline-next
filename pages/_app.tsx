import type { AppProps } from 'next/app'

/* Import CSS */
import "../styles/index.css"
import '../styles/globals.css'
import '../styles/news.css'
import '../styles/bateau.css'
import '../styles/footer.css'
import '../styles/blog.css'

import "../styles/components/navbar.css"
import "../styles/components/result-frame.css"
import "../styles/components/boat-card.css"
import "../styles/components/video-card.css"
import "../styles/components/news.css"
import "../styles/components/error.css"
import "../styles/components/private-login.css"
import "../styles/components/private-result.css"
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import PrivateLayout from '../components/privateLayout'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  if (router.asPath.includes("/private/")) {
    return (
      <PrivateLayout title={"Timeline Admin"}>
        <Component {...pageProps} />
      </PrivateLayout>
    )
  } else {
    return (
      <Layout title={"Le Site de Timeline"}>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
