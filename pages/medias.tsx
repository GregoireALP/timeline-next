import type { NextPage } from 'next'
import Layout from '../components/layout'
import VideoCard from '../components/videoCard'
import Videos from "../json/BoatVideos.json"

const Medias: NextPage = () => {
  return (
    <Layout title="Timeline | Médias">
      <div>
        <p className="title">Médias</p>
        <br /><br />
        {Videos.map(function (data) {
          return (
            <VideoCard
              description={data.description}
              title={data.title}
              videoURL={data.url}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Medias
