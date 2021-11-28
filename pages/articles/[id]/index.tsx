import type { NextPage } from "next"
import { useRouter } from "next/router"
import Layout from "../../../components/layout"
import getConfig from "next/config"
import { useEffect, useState } from "react"
import News from "../../../components/news"
import Loading from "../../../components/loading"
import { NewsType } from "../../../core/Types"

const { publicRuntimeConfig } = getConfig()

const Article: NextPage = () => {

    const router = useRouter()

    const defaultState: NewsType = {
        dat: "NULL",
        ico: "NULL",
        sum: "NULL",
        tit: "NULL",
        txt: "NULL",
        id: "NULL",
        is_une: "NULL",
    }
    const [data, setdata] = useState(defaultState)
    const { id } = router.query

    useEffect(() => {
        async function asyncFectching() {
            try {
                const res = await fetch('http://' + publicRuntimeConfig.host + '/api/public/newsContentById?id=' + id)
                const json = await res.json()
                const news = json.result[0]
                setdata({
                    dat: news.dat,
                    ico: news.ico,
                    sum: news.sum,
                    tit: news.tit,
                    txt: news.txt,
                    id: news.id,
                    is_une: news.id_une
                })
            } catch(err) {
                console.log(err)
            }
        }

        asyncFectching()
    }, [])

    return (
        <Layout title={"Timeline | " + id}>
            <News data={data}/>
        </Layout>
    )
}

export default Article