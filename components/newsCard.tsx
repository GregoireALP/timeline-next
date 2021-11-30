import type { NextPage } from "next"
import Image from "next/image"
import Router from "next/router"
import { IMAGE_ICO_PATH } from "../core/Paths"

interface IProps {
    title: string;
    ico: string;
    dat: string;
    id: string;
}

const NewsCard: NextPage<IProps> = (props) => {
    return (
        <div className="news-card" onClick={() => { Router.push("articles/" + props.id) }}>
            <p className="news-card-tit">{props.title}</p>
            <br />
            <p className="news-card-dat">{props.dat.substring(0, 10)}</p>
            <br />
            <Image src={"/.." + IMAGE_ICO_PATH + props.ico} width="150" height="150" className="news-card-ico" alt={props.title}/>
            <br />
        </div>
    )
}

export default NewsCard