import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import { NewsType } from '../core/Types'
import News from "../components/news"
import Footer from '../components/footer'
interface IProps {
  data: NewsType;
}

const Home: NextPage<IProps> = ({ data }) => {
  return (
    <div>
      <Navbar />
      <header></header>
      <News 
        data={data}
      />
      <Footer/>
    </div>
  )
}


Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/public/lastNews')
  const json = await res.json()
  const news =  json.result[0]
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
