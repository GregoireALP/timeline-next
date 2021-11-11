import mysql from "serverless-mysql"
import getConfig from "next/config"

const { serverRuntimeConfig } = getConfig();

const db = mysql({
    config: {
        host: serverRuntimeConfig.host,
        port: serverRuntimeConfig.port,
        database: serverRuntimeConfig.database,
        user: serverRuntimeConfig.user,
        password: serverRuntimeConfig.password
    }
});

export default async function executeQuery({ query, values }: any) {
    try {
        const result = await db.query(query, values);
        await db.end();
        return result;
    } catch(error) {
        return { error }
    }
}