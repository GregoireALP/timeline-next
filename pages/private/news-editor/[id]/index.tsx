import type { NextPage } from "next"
import { useRouter } from "next/router"
import getConfig from "next/config"
import { Editor } from '@tinymce/tinymce-react';
import PrivateLayout from "../../../../components/privateLayout"
import { useEffect, useState } from "react";
import { NewsType } from "../../../../core/Types";

const { publicRuntimeConfig } = getConfig()

const Article: NextPage = () => {

    const router = useRouter()
    const { id } = router.query

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
            } catch (err) {
                console.log(err)
            }
        }

        asyncFectching()
    }, [])

    return (
        <PrivateLayout title="Editer un article">
            <textarea cols={30} rows={10} defaultValue={data.sum} />
            <Editor
                initialValue={data.txt}
                init={{
                    height: 1000,
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
        </PrivateLayout>
    )
}

export default Article