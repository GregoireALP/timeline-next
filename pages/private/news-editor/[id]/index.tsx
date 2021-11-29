import type { NextPage, NextPageContext } from "next"
import { useRouter } from "next/router"
import getConfig from "next/config"
import { Editor } from '@tinymce/tinymce-react';
import PrivateLayout from "../../../../components/privateLayout"
import { useEffect, useState } from "react";
import { NewsType } from "../../../../core/Types";

const { publicRuntimeConfig } = getConfig()

interface IProps {
    data?: NewsType
}

const Article: NextPage<IProps> = ({ data }) => {

    return (
        <div className="private-form-page">
            <p className="title">Modifier un article</p>
            <br /><br />
            <form style={{ textAlign: "center", width: "85%", padding: 0, margin: 0 }}>

                <br />
                <p className="title">Titre</p>
                <br />
                <input type="text" placeholder="titre" defaultValue={data?.tit} />
                <br />
                <br />

                <p className="title">Icone</p>
                <br />
                <select>
                    <option>---Choisir une icone---</option>
                </select>
                <br />
                <br />

                <p className="title">Resumé</p>
                <br />
                <textarea cols={100} rows={15} defaultValue={data?.sum} />
                <br />
                <br />

                <p className="title">Article</p>
                <br />
                <Editor
                    initialValue={data?.txt}
                    init={{
                        height: 1000,
                        width: "90%",
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <br />
                <br />

                <input type="button" value="Modifier" />

            </form>
        </div>
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