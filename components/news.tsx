import type { NextPage } from "next"
import { NewsType } from "../core/Types"

interface IProps {
    data: NewsType;
}

const News: NextPage<IProps> = (props) => {

    return (
        <div className="news-container">
            <p className="news-title">{props.data.tit} - {props.data.dat.substring(0, 10)}</p>
            <br /><br />
            <p dangerouslySetInnerHTML={{ __html: props.data.sum }} className="news-sum"></p>
            <br />

            <div dangerouslySetInnerHTML={{ __html: props.data.txt }} className="news-txt"></div>

            <br /><br />

            <div className="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="" data-numposts="5"></div>
        </div>
    )
}

export default News