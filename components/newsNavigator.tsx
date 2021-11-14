import type { NextPage } from "next"
import { useEffect, useState } from "react"
import Loading from "./loading";
import getConfig from "next/config"
import NewsCard from "./newsCard";
import { NewsDataType } from "../core/Types";

const { publicRuntimeConfig } = getConfig()

interface IProps {
    year: string;
}

const NewsNavigator: NextPage<IProps> = (props) => {

    const [newsCards, setnewsCards] = useState([{
        dat: "NULL",
        ico: "NULL",
        tit: "NULL",
        id: "NULL"
    }])

    const handleYear: any = async () => {
        const res = await fetch("http://" + publicRuntimeConfig.host + "/api/public/newsDataByYear?year=" + parseInt(props.year))
        const json = await res.json()
        const news: NewsDataType[] = json.result
        setnewsCards(news)
    }

    useEffect(() => {
        handleYear()
    }, [props.year])

    return (
        <div className="news-navigator">
            <p className="navigator-title">Articles de la saison {props.year}</p>
            <br />
            <div className="card-navigator">
                {newsCards.map(function (data) {
                    return (
                        <NewsCard dat={data.dat} ico={data.ico} title={data.tit} id={data.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default NewsNavigator