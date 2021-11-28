// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from "../../../core/Db"
import { createToken } from '../../../core/Middleware'
import { LoginBodyType } from '../../../core/Types'
import getConfig from "next/config"
import Cookie from "cookies"

const { serverRuntimeConfig } = getConfig()

type Data = {
    result: any;
    error?: any;
}

interface ExtendedApiBody extends NextApiRequest {
    body: LoginBodyType
}

export default async function handler(req: ExtendedApiBody, res: NextApiResponse<Data>) {
    if (req.method != 'POST') {
        res.status(400).send({ error: 'Only POST requests allowed', result: {} })
    } else {

        try {
            const result: any = await query({
                query: "SELECT count(*) as theCount from administrators WHERE ema=? AND psw=?",
                values: [req.body.ema, req.body.pwd]
            })
            if (result[0].theCount == 1) {
                const token = createToken(req.body.ema)
                let cookie = new Cookie(req, res)

                try {
                    cookie.set("jwt-timeline", token, {
                        maxAge: 86400000,
                        httpOnly: true,
                        secure: false
                    })
                } catch(err) {
                    res.status(400).send({ error: err, result: {} })
                }

                res.status(200).send({ result: "ok" })
            } else {
                res.status(400).send({ error: "Incorrect creditentials", result: {} })
            }
        } catch (err) {
            res.status(400).send({ error: "Error", result: {} })
        }
    }
}
