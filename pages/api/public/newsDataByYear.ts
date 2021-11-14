// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from "../../../core/Db"

type Data = {
  result: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const result = await query({
    query: "SELECT tit, ico, dat, id FROM news WHERE YEAR(dat)=?",
    values: [ req.query.year ]
  })

  res.status(200).json({ result: result })
}
