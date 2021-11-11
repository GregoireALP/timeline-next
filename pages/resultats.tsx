import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import ResultFrame from '../components/resultFrame'
import { ResultFramePropsType } from '../core/Types'
import BoatResult from "../json/BoatResults.json"

const Resultats: NextPage = () => {

    // Blank state
    const initialValue: ResultFramePropsType[] = [];

    // Tmp array for the state
    const allowedState: ResultFramePropsType[] = []

    // State
    const [stateOptions, setStateValues] = useState(initialValue)

    // ComponentDidMount
    useEffect(() => {
        // Fetch all data from json and push it in tmp array
        for (let i = 0; i < BoatResult.length; i++) {
            allowedState.push({
                boat: BoatResult[i].boat,
                description: BoatResult[i].description,
                img: BoatResult[i].image,
                imgDescription: BoatResult[i]['image-description'],
                regatas: BoatResult[i].regatas,
                year: BoatResult[i].year
            })
        }
        // change state
        setStateValues(allowedState)
    }, [])

    return (
        <div>
            <Navbar />
            <p className="title">Les Résultats</p>
            {stateOptions.map(function (data, index) {
                return (
                    <ResultFrame
                        boat={data.boat}
                        description={data.description}
                        img={data.img}
                        imgDescription={data.imgDescription}
                        regatas={data.regatas}
                        year={data.year}
                    />
                )
            })}
            <Footer/>
        </div>
    )
}

export default Resultats
