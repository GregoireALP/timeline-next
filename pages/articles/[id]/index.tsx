import type { NextPage, NextPageContext } from "next"
import Layout from "../../../components/layout"
import getConfig from "next/config"
import News from "../../../components/news"
import { NewsType } from "../../../core/Types"

const { publicRuntimeConfig } = getConfig()

interface IPros {
    data: NewsType
}

const Article: NextPage<IPros> = ({ data }) => {

    return (
        <Layout title={"Timeline | " + data.tit}>
            <News data={data}/>
        </Layout>
    )
}

Article.getInitialProps = async (ctx: NextPageContext) => {
    const res = await fetch('http://' + publicRuntimeConfig.host + '/api/public/newsContentById?id=' + ctx.query.id)
    const json = await res.json()
    const news = json.result[0]
    return {
        data: {
            dat: news.dat,
            ico: news.ico,
            sum: news.sum,
            tit: news.tit,
            txt: news.txt,
            id: news.id,
            is_une: news.id_une
        }
    }
}

export default Article