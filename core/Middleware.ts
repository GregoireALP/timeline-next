import jwt from "jsonwebtoken"
import getConfig from "next/config"

const { serverRuntimeConfig } = getConfig()

const maxAge = 3600 // 1 hour

export const createToken = (ema: string) => {
    return jwt.sign({ ema }, serverRuntimeConfig.cookie.secret, {
        expiresIn: maxAge
    })
}