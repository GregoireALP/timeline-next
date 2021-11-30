import type { NextPage } from 'next'
import Layout from '../components/layout'
import VideoCard from '../components/videoCard'
import Videos from "../json/BoatVideos.json"

const Medias: NextPage = () => {
  return (
    <div>
      <p className="title">Médias</p>
      <br /><br />
      {Videos.map(function (data) {
        return (
          <VideoCard
            key={data.title}
            description={data.description}
            title={data.title}
            videoURL={data.url}
          />
        )
      })}
    </div>
  )
}

export default Medias
