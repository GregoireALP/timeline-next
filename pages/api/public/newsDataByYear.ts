// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from "../../../core/Db"

type Data = {
  result: any
}
interface ExtendedReqBodyReqs extends NextApiRequest {
  body: {
      year: string;
  }
}


export default async function handler(req: ExtendedReqBodyReqs, res: NextApiResponse<Data>) {

  const result = await query({
    query: "SELECT tit, ico, dat FROM news WHERE YEAR(dat)=?",
    values: [ req.body.year ]
  })

  res.status(200).json({ result: result })
}
