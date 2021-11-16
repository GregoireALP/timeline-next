import type { NextPage } from "next"
import { useState } from "react"
import getConfig from "next/config"
import { LoginBodyType } from "../../core/Types"

const { publicRuntimeConfig } = getConfig()

const PrivateLogin: NextPage = () => {
    const [creditential, setcreditential] = useState({
        ema: "",
        pwd: ""
    })

    const submitForm = async () => {
        const body: LoginBodyType = { ema: creditential.ema, pwd: creditential.pwd }
        const res = await fetch("http://" + publicRuntimeConfig.host + "/api/private/login", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
        const json = await res.json()
        console.log(json)
    }

    return (
        <div className="private-login">
            <form>
                <input type="text" placeholder="emai" name="ema" onChange={(e) => {
                    setcreditential({
                        ema: e.target.value,
                        pwd: creditential.pwd
                    })
                }} />
                <input type="text" placeholder="password" name="pwd" onChange={(e) => {
                    setcreditential({
                        ema: creditential.ema,
                        pwd: e.target.value
                    })
                }} />
                <button onClick={(e) => {
                    e.preventDefault()
                    submitForm()
                }}>Envoyer</button>
            </form>
        </div>
    )
}

export default PrivateLogin