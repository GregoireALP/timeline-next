// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from "../../core/Db"

type Data = {
  result: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const result = await query({
    query: "SELECT * FROM administrators",
    values: ""
  })

  res.status(200).json({ result: result })
}
