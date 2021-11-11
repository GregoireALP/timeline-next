import type { NextPage } from 'next'

interface IProps {
    tit: string;
    img: string;
    sum: string;
    dat: string;
    txt: string;
}

const NewsFrame: NextPage<IProps> = (props) => {
    return (
        <div className="news-container">
            <p>{props.tit}</p>
            <p>{props.sum}</p>
            <p>{props.dat}</p>
            <p>{props.img}</p>
            <p>{props.txt}</p>
        </div>
    )
}

export default NewsFrame
