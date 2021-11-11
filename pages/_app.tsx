import type { AppProps } from 'next/app'

/* Import CSS */
import "../styles/index.css"
import '../styles/globals.css'
import '../styles/news.css'
import '../styles/bateau.css'
import '../styles/footer.css'

import "../styles/components/navbar.css"
import "../styles/components/result-frame.css"
import "../styles/components/boat-card.css"
import "../styles/components/video-card.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
