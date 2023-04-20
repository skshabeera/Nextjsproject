import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../../helpers/connectToDatabase"

// todo add try catch
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        try {
            const { db, client } = await connectToDatabase()
            await client.connect()
            const { description = undefined } = req.body;

            if (!description) { // data is not sent to us
                throw new Error("Description is not provided")
            }

            // using open ai first come up with a company name? 


            // example description: standing desk for programmers 

            // name - desker

            // GPT should provide a good marketing descriptions which can be used in the website

            // send the above data back to frontend
            // todo change the collection name later
            const collection = db.collection('test-shabeera')
            const data = await collection.insertOne({
                text: req.body.name
            })
            await client.close()
            res.status(200).json({
                name: "test shabeera", 
                description: "this desciprtion should be shown in the FE , the FE shoudl show step 2. This shoudl be editable   "
            })
        } catch (error) {
            console.error("error", error)
            res.json({ message : error instanceof Error ? error.message : "Something went wrong" })
        }
    }
}


// import { connectToDatabase } from '../utils/connectToDatabase'