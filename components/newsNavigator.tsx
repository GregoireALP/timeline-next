import type { NextPage } from "next"

interface IProps {
    year: string;
}

const NewsNavigator: NextPage<IProps> = (props) => {
    return(
        <div className="news-navigator">
            <p>Articles de la saison {props.year}</p>
        </div>
    )
}

export default NewsNavigator