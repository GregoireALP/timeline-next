// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { writeJsonFile } from 'write-json-file'
import { loadJsonFile } from "load-json-file"
import path from 'path'
import { RegataType, ResultFramePropsType } from '../../../core/Types'

type Data = {
  result: any
  error?: any
}

interface ExtendedNextApiRequest extends NextApiRequest {
    body: {
        year: string,
        regata: RegataType
    }
}

export default async function handler(req: ExtendedNextApiRequest, res: NextApiResponse<Data>) {
    try {
        const jsonFile: ResultFramePropsType[] = await loadJsonFile(path.resolve(__dirname, "../../../../../json/") + "/BoatResults.json")
        for(let i = 0; i < jsonFile.length; i++) {
            if(jsonFile[i].year == req.body.year) {
                let regatas: RegataType[] = jsonFile[i].regatas
                regatas.push({
                    name: req.body.regata.name,
                    file: req.body.regata.file
                })
            }
        }
        writeJsonFile(path.resolve(__dirname, "../../../../../json/") + "/BoatResults.json", jsonFile)
        res.status(200).json({ result: jsonFile })
    } catch(err) {
        res.status(400).json({ result: {}, error: err })
    }
}
