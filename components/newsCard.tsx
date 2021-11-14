import type { NextPage } from "next"

interface IProps {
    title: string;
    ico: string;
    dat: string;
}

const NewsCard: NextPage<IProps> = (props) => {
    return (
        <div className="news-card">
            <p>{props.title}</p>
        </div>
    )
}

export default NewsCard