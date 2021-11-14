import type { NextPage } from 'next'
import { NewsType } from '../core/Types'
import News from "../components/news"
import Layout from '../components/layout'
import getConfig from "next/config"
interface IProps {
  data: NewsType;
}

const { publicRuntimeConfig } = getConfig()

const Home: NextPage<IProps> = ({ data }) => {
  return (
    <Layout title="Le Site de Timeline">
      <div>
        <header></header>
        <p className="title" style={{ textAlign: "start", marginLeft: "2rem" }}>Notre derniere article</p>
        <br />
        <News
          data={data}
        />
      </div>
    </Layout>
  )
}


Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://' + publicRuntimeConfig.host + '/api/public/lastNews')
  const json = await res.json()
  const news = json.result[0]
  return {
    data: {
      dat: news.dat,
      ico: news.ico,
      sum: news.sum,
      tit: news.tit,
      txt: news.txt
    }
  }
}

export default Home
