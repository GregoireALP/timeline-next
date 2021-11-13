// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from "../../../core/Db"

type Data = {
  result: number[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const result: any = await query({
    query: "SELECT year(dat) FROM news ",
    values: ""
  })

  // Format date
  var fomatedDates: number[] = []
  for(let i = 0; i < result.length; i++) {
    fomatedDates.push(result[i]["year(dat)"])
  }

  res.status(200).json({ result: fomatedDates })
}
