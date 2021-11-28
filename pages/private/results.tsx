import { NextPage } from "next";
import { useState } from "react";
import PrivateLayout from "../../components/privateLayout";
import { writeJson } from "../../core/JsonUtils";
import JsonResult from "../../json/BoatResults.json"

const Results: NextPage = () => {

    let defaultAddResult = { file: "null", name: "null", year: "null" }
    const [addResult, setaddResult] = useState(defaultAddResult)

    const handleAddResult = (): void => {
        writeJson("BoatResults", JSON.stringify(addResult))
    }

    return (
        <PrivateLayout title={"Timeline | Results"}>
            <div className="private-result">
                <div className="container">
                    <p>Ajouter un resultat</p>
                    <form>
                        <select name="season" onChange={(e) => {addResult.year = e.target.value}}>
                            <option value="">--Selectionner une saison--</option>
                            {JsonResult.map(function (data) {
                                return (
                                    <option>{data.year}</option>
                                )
                            })}
                        </select>

                        <input type="text" onChange={(e) => { addResult.name = e.target.value }} placeholder="Nom de la regate" />
                        <input type="text" onChange={(e) => { addResult.file = e.target.value }} placeholder="Nom du pdf" />
                        <button onClick={(e) => {
                            e.preventDefault()
                            handleAddResult()}}>Ajouter</button>
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