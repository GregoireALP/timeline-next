import type { NextPage } from 'next'
import Router from 'next/router'
import { useState } from 'react'
import { LoginBodyType } from '../core/Types'
import getConfig from 'next/config'

const PrivateLoginForm: NextPage = () => {

    const { publicRuntimeConfig } = getConfig()

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

        if (json.result) {
            Router.push("private/home")
        }
    }
    return (
        <div className="private-form-page">
            <p className="title">Se Connecter</p>
            <form>
                <label htmlFor="ema">Email</label>
                <input type="text" placeholder="Email" name="ema" onChange={(e) => {
                    setcreditential({
                        ema: e.target.value,
                        pwd: creditential.pwd
                    })
                }} />
                <label htmlFor="pwd">Mot de Passe</label>
                <input type="text" placeholder="Mot de Passe" name="pwd" onChange={(e) => {
                    setcreditential({
                        ema: creditential.ema,
                        pwd: e.target.value
                    })
                }} />
                <input
                    type='button'
                    value="Envoyer"
                    onClick={(e) => {
                        e.preventDefault()
                        submitForm()
                    }} />
            </form>
        </div>
    )
}

export default PrivateLoginForm