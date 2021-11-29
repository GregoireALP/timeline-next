import type { NextPage, NextPageContext } from "next"
import NewsList from "../../components/newsList"
import PrivateLayout from "../../components/privateLayout"
import getConfig from "next/config"
import { NewsType } from "../../core/Types"

const { publicRuntimeConfig } = getConfig()

interface IProps {
    data: NewsType[]
}

const News: NextPage<IProps> = ({ data }) => {
    return (
        <div>
            <p className="title">Modifier un article</p>
            <NewsList data={data} />
        </div>
    )
}

News.getInitialProps = async (ctx: NextPageContext) => {
    const res = await fetch("http://" + publicRuntimeConfig.host + "/api/public/newsData")
    const json = await res.json()
    const news: NewsType[] = json.result

    return { data: news }
}


export default News