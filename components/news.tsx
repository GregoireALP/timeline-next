import type { NextPage } from "next"
import { NewsType } from "../core/Types"

interface IProps {
    data: NewsType;
}

const News: NextPage<IProps> = (props) => {

    return (
        <div className="news-container">
            <p className="title" style={{ textAlign: "start" }}>Notre derniere article</p>
            <br />

            <p className="news-title">{props.data.tit} - {props.data.dat.substring(0, 10)}</p>
            <br /><br />
            <p dangerouslySetInnerHTML={{ __html: props.data.sum }} className="news-sum"></p>
            <br />

            <div dangerouslySetInnerHTML={{ __html: props.data.txt }} className="news-txt"></div>
        </div>
    )
}

export default News