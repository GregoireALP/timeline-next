import type { NextPage } from "next"
import Layout from "../components/layout"

interface IProps {
    dateSpan: number[];
}

const Blog: NextPage<IProps> = ({ dateSpan }) => {

    return (
        <Layout title="Timeline | Blog">
            <div className="blog">
                <p className="title">Blog</p>
                <ul className="blog-date-list">
                    {dateSpan.map(function (item) {
                        return (<li key={item}>{item}</li>)
                    })}
                </ul>
            </div>
        </Layout>
    )
}

Blog.getInitialProps = async (ctx) => {

    const res = await fetch('http://localhost:3000/api/public/dateSpan')
    const json = await res.json()
    const dates: any[] = json.result
    return { dateSpan: Array.from(new Set(dates)).sort() }
}

export default Blog