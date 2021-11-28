import Cookie from "cookies"
import { IncomingMessage, ServerResponse } from "http"
import jwt from "jsonwebtoken"
import getConfig from "next/config"

const { serverRuntimeConfig } = getConfig()

const maxAge = 3600 // 1 hour

export const createToken = (ema: string) => {
    return jwt.sign({ ema }, serverRuntimeConfig.cookie.secret, {
        expiresIn: maxAge
    })
}

export const checkUser = (req: IncomingMessage, res: ServerResponse): boolean => {
    let cookie = Cookie(req, res)
    let token = cookie.get("jwt-timeline")

    if(token) {
        jwt.verify(token, serverRuntimeConfig.cookie.secret, function(err: any, decodedToken: any) {
            if(err) {
                return false
            }
        })
        return true

    } else {
        return false
    }
}