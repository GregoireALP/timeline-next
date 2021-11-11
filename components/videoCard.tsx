import type { NextPage } from 'next'

interface IProps {
    title: string;
    videoURL: string;
    description: string;
}

const VideoCard: NextPage<IProps> = (props) => {
    return (
        <nav className="video-card">
            <p className="video-title">{props.title}</p>
            <iframe
                width="700"
                height="500"
                src={props.videoURL}
                allowFullScreen
                title={props.title}
                className="video-player"
            />
            <p className="video-description">{props.description}</p>
        </nav>
    )
}

export default VideoCard
