import type { NextPage, NextPageContext } from "next"
import { NewsDataType, NewsType } from "../core/Types"
import getConfig from "next/config"
import Router from "next/router"

interface IProps {
    data: NewsType[]
}

const NewsList: NextPage<IProps> = ({ data }) => {

    return (
        <div className="newslist">
            <div className="result-frame-body">
                <table className="steelBlueCols" style={{ width: "90%" }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Titre</th>
                            <th>Resumé</th>
                            <th>Date</th>
                            <th>Une</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map(function (news) {
                            var isUne = news.is_une ? "True" : "False"
                            return (
                                <tr key={news.id} onClick={() => { Router.push("/private/news-editor/" + news.id) }}>
                                    <td>{news.id}</td>
                                    <td dangerouslySetInnerHTML={{__html: news.tit}}></td>
                                    <td dangerouslySetInnerHTML={{__html: news.sum}}></td>
                                    <td>{news.dat.substring(0, 10)}</td>
                                    <td>{isUne}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NewsList