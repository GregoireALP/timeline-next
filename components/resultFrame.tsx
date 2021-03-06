import type { NextPage } from 'next'
import Image from 'next/image'
import { IMAGE_GALLERY_PATH } from '../core/Paths'
import { RegataType } from '../core/Types'
import Router from 'next/router'

interface IProps {
    year: string;
    description: string;
    img: string;
    imgDescription: string;
    boat: string;
    regatas: RegataType[];
}

const ResultFrame: NextPage<IProps> = (props) => {
    return (
        <div className="result-frame">

            <p className="result-frame-subtitle">Saison {props.year}</p>

            <div className="result-frame-container">

                <div className="result-frame-image-container">
                    <img src={"images/gallery/mythiques/" + props.img + ".jpg"} className="result-frame-image" />
                    <p className="result-frame-image-description">{props.imgDescription}</p>
                </div>

                <div className="result-frame-body">

                    <p className="result-description">{props.description}</p>
                    <table className="steelBlueCols">
                        <thead>
                            <tr>
                                <th>Regate</th>
                                <th>PDF</th>
                            </tr>
                        </thead>

                        <tbody>
                            {props.regatas.map(function (data) {
                                return (
                                    <tr key={data.name} onClick={() => { Router.push("/classements/" + data.file + ".pdf") }}>
                                        <td>{data.name}</td>
                                        <td>{data.file + ".pdf"}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default ResultFrame
