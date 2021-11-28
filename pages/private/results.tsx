import { NextPage } from "next";
import { useState } from "react";
import PrivateLayout from "../../components/privateLayout";
import JsonResult from "../../json/BoatResults.json"
import getConfig from "next/config"
import Router from "next/router";

const Results: NextPage = () => {

    const { publicRuntimeConfig } = getConfig()

    let defaultAddResult = { year: "", regata: { file: "", name: "" } }
    const [addResult, setaddResult] = useState(defaultAddResult)

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

    return (
        <PrivateLayout title={"Timeline | Results"}>
            <div className="private-result">
                <div className="container">
                    <p>Ajouter un resultat</p>
                    <form>
                        <select name="season" onChange={(e) => { addResult.year = e.target.value }}>
                            <option value="">--Selectionner une saison--</option>
                            {JsonResult.map(function (data) {
                                return (
                                    <option>{data.year}</option>
                                )
                            })}
                        </select>

                        <input type="text" onChange={(e) => { addResult.regata.name = e.target.value }} placeholder="Nom de la regate" />
                        <input type="text" onChange={(e) => { addResult.regata.file = e.target.value }} placeholder="Nom du pdf" />
                        <button onClick={(e) => {
                            e.preventDefault()
                            handleResult()
                        }}>Ajouter</button>
                    </form>
                </div>
                <div className="container">
                    <p>Ajouter une saison</p>
                    <form>

                    </form>
                </div>
                <div className="container">
                    <p>Modifier une saison</p>
                    <form>

                    </form>
                </div>
            </div>
        </PrivateLayout>
    )
}

export default Results