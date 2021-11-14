import type { NextPage } from "next"
import { useRouter } from "next/router"
import Layout from "../../../components/layout"
import getConfig from "next/config"
import { useEffect, useState } from "react"
import News from "../../../components/news"
import Loading from "../../../components/loading"

const { publicRuntimeConfig } = getConfig()

const Article: NextPage = () => {

    const router = useRouter()
    const [data, setdata] = useState({
        dat: "NULL",
        ico: "NULL",
        sum: "NULL",
        tit: "NULL",
        txt: "NULL"
    })
    const [loading, setloading] = useState(false)
    const { id } = router.query

    useEffect(() => {
        async function asyncFectching() {
            setloading(true)
            const res = await fetch('http://' + publicRuntimeConfig.host + '/api/public/newsContentById?id=' + id)
            const json = await res.json()
            console.log(json)
            const news = json.result[0]
            setdata({
                dat: news.dat,
                ico: news.ico,
                sum: news.sum,
                tit: news.tit,
                txt: news.txt
            })
            setloading(false)
        }

        asyncFectching()
    }, [])

    if(loading) {
        return(
            <Layout title={"Chargement..."}>
                <Loading></Loading>
            </Layout>
        )
    } else {
        return (
            <Layout title={"Timeline | " + id}>
                <News data={data}/>
            </Layout>
        )
    }
}

export default Article