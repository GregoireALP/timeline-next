import type { NextPage } from 'next'
import { NewsType } from '../core/Types'
import News from "../components/news"
import Layout from '../components/layout'
interface IProps {
  data: NewsType;
}

const Home: NextPage<IProps> = ({ data }) => {
  return (
    <Layout title="Le Site de Timeline">
      <div>
        <header></header>
        <News
          data={data}
        />
      </div>
    </Layout>
  )
}


Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/public/lastNews')
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
