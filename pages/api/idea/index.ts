import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../../helpers/connectToDatabase"

// todo add try catch
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const { db, client } = await connectToDatabase()
            await client.connect()

            const collection = db.collection('test-shabeera')
            const data = await collection.insertOne({
                text: req.body.name
            })
            await client.close()
            res.json("interested")
        } catch (error) {
            console.error("error", error)
            res.json({ error })
        }
    }
}


// import { connectToDatabase } from '../utils/connectToDatabase'