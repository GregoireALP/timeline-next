import type { NextPage } from 'next'
import { NewsType } from '../core/Types'
import News from "../components/news"
import getConfig from "next/config"
interface IProps {
  data: NewsType;
}

const { publicRuntimeConfig } = getConfig()

const Home: NextPage<IProps> = (props) => {
  return (
    <div>
      <header></header>
      <p className="title" style={{ textAlign: "start", marginLeft: "2rem" }}>Notre derniere article</p>
      <br />
      <News
        data={props.data}
      />
    </div>
  )
}


Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://' + publicRuntimeConfig.host + '/api/public/lastNews')
  const json = await res.json()
  const news: NewsType = json.result[0]
  await news.txt.replace(/imagesNews/g, "articles/imagesNews")
  console.log(news.txt);
  
  return { data: news }
}

export default Home
