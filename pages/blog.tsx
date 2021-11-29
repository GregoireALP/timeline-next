import type { NextPage } from "next"
import { useState } from "react"
import Layout from "../components/layout"
import NewsNavigator from "../components/newsNavigator"
import getConfig from "next/config"

interface IProps {
    dateSpan: number[];
}

const { publicRuntimeConfig } = getConfig();

const Blog: NextPage<IProps> = ({ dateSpan }) => {

    const [year, setyear] = useState("2021")

    return (
        <div>
            <div className="blog">
                <p className="title">Blog</p>
                <ul className="blog-date-list">
                    {dateSpan.map(function (item) {
                        return (<li key={item} onClick={() => { setyear(item.toString()) }}>{item}</li>)
                    })}
                </ul>
            </div>
            <NewsNavigator year={year} />
        </div>
    )
}

Blog.getInitialProps = async (ctx) => {

    const res = await fetch('http://' + publicRuntimeConfig.host + '/api/public/dateSpan')
    const json = await res.json()
    const dates: any[] = json.result
    return { dateSpan: Array.from(new Set(dates)).sort() }
}

export default Blog