import { NextPage } from "next";
import { useEffect, useState } from "react";
import PrivateLayout from "../../components/privateLayout";
import JsonResult from "../../json/BoatResults.json"
import JsonBoat from "../../json/BoatData.json"
import getConfig from "next/config"
import Router from "next/router";
import { ResultFramePropsType } from "../../core/Types";

const Results: NextPage = () => {

    const { publicRuntimeConfig } = getConfig()

    let defaultAddResult = { year: "", regata: { file: "", name: "" } }
    const [addResult, setaddResult] = useState(defaultAddResult)

    let defaultAddSeason: ResultFramePropsType = { boat: "", description: "", img: "", imgDescription: "", regatas: [], year: "" }
    const [addSeason, setaddSeason] = useState(defaultAddSeason)

    let defaultUpdateSeason: ResultFramePropsType = { boat: "", description: "", img: "", imgDescription: "", regatas: [], year: "" }
    const [updateSeason, setupdateSeason] = useState(defaultUpdateSeason)

    const [year, setyear] = useState(2020)

    const handleResult = async () => {
        const body = {
            year: addResult.year,
            regata: {
                name: addResult.regata.name,
                file: addResult.regata.file
            }
        }
        const res = await fetch("http://" + publicRuntimeConfig.host + "/api/private/addResult", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await res.json()

        if (json.result) {
            Router.push("/private/results")
        }
    }

    const handleSeason = async () => {
        const body: ResultFramePropsType = {
            boat: addSeason.boat,
            description: addSeason.description,
            img: addSeason.img,
            imgDescription: addSeason.imgDescription,
            regatas: [],
            year: addSeason.year
        }

        const res = await fetch("http://" + publicRuntimeConfig.host + "/api/private/addSeason", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await res.json()

        if (json.result) {
            Router.push("/private/results")
        }

    }

    const handleSeasonUpdate = async () => {
        const body: ResultFramePropsType = {
            boat: addSeason.boat,
            description: addSeason.description,
            img: addSeason.img,
            imgDescription: addSeason.imgDescription,
            regatas: [],
            year: addSeason.year
        }

        const res = await fetch("http://" + publicRuntimeConfig.host + "/api/private/addSeason", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await res.json()

        if (json.result) {
            Router.push("/private/results")
        }
    }

    const handleSeasonSelector = () => {
        for (let i = 0; i < JsonResult.length; i++) {
            if (parseInt(JsonResult[i].year) == year) {
                const res = JsonResult[i]
                updateSeason.boat = res.boat
                updateSeason.description = res.description
                updateSeason.img = res.image
                updateSeason.imgDescription = res["image-description"]
                updateSeason.year = res.year
                updateSeason.regatas = res.regatas
            }
        }
    }

    useEffect(() => {
        handleSeasonSelector()
        console.log(updateSeason)
    }, [year])

    return (
        <PrivateLayout title={"Timeline | Results"}>
            <div className="private-result">
                <div className="form-private-container">
                    <p className="title">Ajouter un resultat</p>
                    <form>
                        <p className="private-form-label">Saison</p>
                        <select name="season" onChange={(e) => { addResult.year = e.target.value }}>
                            <option value="">--Selectionner une saison--</option>
                            {JsonResult.map(function (data) {
                                return (
                                    <option>{data.year}</option>
                                )
                            })}
                        </select>

                        <br />

                        <p className="private-form-label">Nom de la regate</p>
                        <input type="text" onChange={(e) => { addResult.regata.name = e.target.value }} placeholder="Nom de la regate" />

                        <p className="private-form-label">Resulats PDF (ne pas ajouter .pdf)</p>
                        <input type="text" onChange={(e) => { addResult.regata.file = e.target.value }} placeholder="Nom du pdf" />
                        <button onClick={(e) => {
                            e.preventDefault()
                            handleResult()
                        }}>Ajouter</button>
                    </form>
                </div>

                <br />

                <div className="form-private-container">
                    <p className="title">Ajouter une saison</p>

                    <form>
                        <p className="private-form-label">Bateau</p>
                        <select name="season" onChange={(e) => { addSeason.boat = e.target.value }}>
                            <option value="">--Selectionner un bateau--</option>
                            {JsonBoat.map(function (data) {
                                return (
                                    <option>{data[0]}</option>
                                )
                            })}
                        </select>

                        <br />

                        <p className="private-form-label">Annee</p>
                        <input type="number" onChange={(e) => { addSeason.year = e.target.value }} placeholder="Annee" />
                        <p className="private-form-label">Resumer</p>
                        <input type="text" onChange={(e) => { addSeason.description = e.target.value }} placeholder="Resumer de la saison" />
                        <p className="private-form-label">Photo (Sans extension photo en jpg uniquement)</p>
                        <input type="text" onChange={(e) => { addSeason.img = e.target.value }} placeholder="Nom de la photo" />
                        <p className="private-form-label">Description Photo</p>
                        <input type="text" onChange={(e) => { addSeason.imgDescription = e.target.value }} placeholder="DescriptionPhoto" />
                        <button onClick={(e) => {
                            e.preventDefault()
                            handleSeason()
                        }}>Ajouter</button>
                    </form>
                </div>

                <br />

                <div className="form-private-container">
                    <p className="title">Modifier une saison</p>
                    <form>
                        <p className="private-form-label">Saison</p>
                        <select name="season" onChange={(e) => { setyear(parseInt(e.target.value)) }}>
                            <option>---Selectionner une saison---</option>
                            {JsonResult.map(function (data) {
                                return (
                                    <option>{data.year}</option>
                                )
                            })}
                        </select>

                        <br />

                        <p className="private-form-label">Annee</p>
                        <input type="number" value={updateSeason.year} onChange={(e) => { addSeason.year = e.target.value }} placeholder="Annee" />
                        <p className="private-form-label">Resumer</p>
                        <input type="text" value={updateSeason.description} onChange={(e) => { addSeason.description = e.target.value }} placeholder="Resumer de la saison" />
                        <p className="private-form-label">Photo (Sans extension photo en jpg uniquement)</p>
                        <input type="text" value={updateSeason.img} onChange={(e) => { addSeason.img = e.target.value }} placeholder="Nom de la photo" />
                        <p className="private-form-label">Description Photo</p>
                        <input type="text" value={updateSeason.imgDescription} onChange={(e) => { addSeason.imgDescription = e.target.value }} placeholder="DescriptionPhoto" />

                        <button onClick={(e) => {
                            e.preventDefault()
                            handleSeason()
                        }}>Mettre a jour</button>
                    </form>
                </div>
            </div>
        </PrivateLayout>
    )
}

export default Results