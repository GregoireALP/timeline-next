import type { NextPage } from 'next'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import VideoCard from '../components/videoCard'
import Videos from "../json/BoatVideos.json"

const Medias: NextPage = () => {
  return (
    <div>
      <Navbar />
      <p className="title">Médias</p>
      {Videos.map(function(data) {
          return (
            <VideoCard
              description={data.description}
              title={data.title}
              videoURL={data.url}
            />
          )
      })}
      <Footer/>
    </div>
  )
}

export default Medias
