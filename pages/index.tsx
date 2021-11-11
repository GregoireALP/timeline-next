import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import { NewsType } from '../core/Types'

interface IProps {
  data: NewsType;
}

const Home: NextPage<IProps> = ({ data }) => {
  return (
    <div>
      <Navbar />
      <header></header>

      <main>
        <h1>Notre derniere article</h1>

        <h2>{data.tit} - {data.dat}</h2>
        <h3>{data.sum}</h3>

        <p>{data.txt}</p>
      </main>
    </div>
  )
}


Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/public/lastNews')
  const json = await res.json()
  return { data: json }
}

export default Home
